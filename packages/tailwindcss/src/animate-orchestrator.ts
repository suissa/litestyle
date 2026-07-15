import { ANIMATE_CSS_ANIMATION_NAMES } from './animate-css'

const ANIMATION_CLASS_PREFIX = 'animate:'
const SEQUENCE_CLASS_PREFIX = 'animate:seq-'
const SEQUENCE_INTERVAL_CLASS_PREFIX = 'animate:seq-interval-'
const BEFORE_CLASS_PREFIX = 'animate:before-'
const AFTER_CLASS_PREFIX = 'animate:after-'

const animationNames = new Set(ANIMATE_CSS_ANIMATION_NAMES)

type SequenceNode = {
  element: HTMLElement
  index: number
  sequence: number
  interval: number
  before: string[]
  after: string[]
}

export type QuarkAnimationOrchestratorOptions = {
  /** Root used to discover and query sequenced animation elements. */
  root?: ParentNode
  /** Start the first animation after this delay when an item does not define its own interval. */
  defaultInterval?: number
  /** Restart animations that have already been orchestrated. */
  replay?: boolean
}

function decodeArbitraryValue(value: string) {
  return value.replace(/_/g, ' ')
}

function readArbitraryValue(className: string, prefix: string) {
  if (!className.startsWith(prefix)) return null

  let value = className.slice(prefix.length)
  if (value.startsWith('[') && value.endsWith(']')) {
    return decodeArbitraryValue(value.slice(1, -1))
  }

  return decodeArbitraryValue(value)
}

function parseTime(value: string | null, fallback: number) {
  if (!value) return fallback

  let normalized = value.trim()
  if (normalized.endsWith('ms')) {
    let parsed = Number.parseFloat(normalized.slice(0, -2))
    return Number.isFinite(parsed) ? parsed : fallback
  }

  if (normalized.endsWith('s')) {
    let parsed = Number.parseFloat(normalized.slice(0, -1))
    return Number.isFinite(parsed) ? parsed * 1000 : fallback
  }

  let parsed = Number.parseFloat(normalized)
  return Number.isFinite(parsed) ? parsed * 1000 : fallback
}

function parseTimeList(value: string) {
  return value
    .split(',')
    .map((part) => parseTime(part, 0))
    .filter((duration) => duration >= 0)
}

function maxAnimationTime(element: HTMLElement) {
  let styles = getComputedStyle(element)
  let durations = parseTimeList(styles.animationDuration)
  let delays = parseTimeList(styles.animationDelay)
  let iterations = styles.animationIterationCount.split(',').map((part) => {
    let normalized = part.trim()
    if (normalized === 'infinite') return 1
    let parsed = Number.parseFloat(normalized)
    return Number.isFinite(parsed) ? parsed : 1
  })

  return Math.max(
    0,
    ...durations.map((duration, index) => {
      return (
        duration * (iterations[index] ?? iterations.at(-1) ?? 1) +
        (delays[index] ?? delays.at(-1) ?? 0)
      )
    }),
  )
}

function nextFrame() {
  return new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  )
}

function wait(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, Math.max(0, ms)))
}

function findAnimationClass(element: HTMLElement) {
  for (let className of Array.from(element.classList)) {
    if (!className.startsWith(ANIMATION_CLASS_PREFIX)) continue

    let animationName = className.slice(ANIMATION_CLASS_PREFIX.length)
    if (animationNames.has(animationName)) return className
  }

  return null
}

function parseSequenceNode(element: HTMLElement, index: number, defaultInterval: number) {
  let sequence: number | null = null
  let interval = defaultInterval
  let before: string[] = []
  let after: string[] = []

  for (let className of Array.from(element.classList)) {
    if (className.startsWith(SEQUENCE_INTERVAL_CLASS_PREFIX)) {
      interval = parseTime(
        readArbitraryValue(className, SEQUENCE_INTERVAL_CLASS_PREFIX),
        defaultInterval,
      )
      continue
    }

    if (className.startsWith(SEQUENCE_CLASS_PREFIX)) {
      let value = className.slice(SEQUENCE_CLASS_PREFIX.length)
      if (value !== 'interval' && !value.startsWith('interval-')) {
        let parsed = Number.parseInt(value, 10)
        if (Number.isFinite(parsed)) sequence = parsed
      }
      continue
    }

    let beforeSelector = readArbitraryValue(className, BEFORE_CLASS_PREFIX)
    if (beforeSelector) {
      before.push(beforeSelector)
      continue
    }

    let afterSelector = readArbitraryValue(className, AFTER_CLASS_PREFIX)
    if (afterSelector) {
      after.push(afterSelector)
    }
  }

  if (sequence === null) return null

  return { element, index, sequence, interval, before, after } satisfies SequenceNode
}

function querySelectorAll(root: ParentNode, selector: string) {
  try {
    return Array.from(root.querySelectorAll(selector))
  } catch {
    return []
  }
}

function buildSequencedOrder(nodes: SequenceNode[], root: ParentNode) {
  let byElement = new Map(nodes.map((node) => [node.element, node]))
  let outgoing = new Map(nodes.map((node) => [node, new Set<SequenceNode>()]))
  let indegree = new Map(nodes.map((node) => [node, 0]))

  function addEdge(from: SequenceNode, to: SequenceNode) {
    if (from === to) return
    let edges = outgoing.get(from)!
    if (edges.has(to)) return
    edges.add(to)
    indegree.set(to, indegree.get(to)! + 1)
  }

  for (let node of nodes) {
    for (let selector of node.before) {
      for (let matched of querySelectorAll(root, selector)) {
        let target = byElement.get(matched as HTMLElement)
        if (target) addEdge(node, target)
      }
    }

    for (let selector of node.after) {
      for (let matched of querySelectorAll(root, selector)) {
        let target = byElement.get(matched as HTMLElement)
        if (target) addEdge(target, node)
      }
    }
  }

  let compare = (a: SequenceNode, z: SequenceNode) => a.sequence - z.sequence || a.index - z.index
  let queue = nodes.filter((node) => indegree.get(node) === 0).sort(compare)
  let ordered: SequenceNode[] = []

  while (queue.length > 0) {
    let node = queue.shift()!
    ordered.push(node)

    for (let target of outgoing.get(node)!) {
      indegree.set(target, indegree.get(target)! - 1)
      if (indegree.get(target) === 0) {
        queue.push(target)
        queue.sort(compare)
      }
    }
  }

  return ordered.length === nodes.length ? ordered : [...nodes].sort(compare)
}

async function playSequencedAnimation(node: SequenceNode) {
  let animationClass = findAnimationClass(node.element)
  if (!animationClass) return

  await wait(node.interval)

  node.element.style.animation = 'none'
  // Force the browser to commit the reset before re-enabling the class-driven animation.
  node.element.offsetWidth
  await nextFrame()

  await new Promise<void>((resolve) => {
    let done = false
    let timeout = window.setTimeout(finish, maxAnimationTime(node.element) + 50)

    function finish() {
      if (done) return
      done = true
      window.clearTimeout(timeout)
      node.element.removeEventListener('animationend', finish)
      resolve()
    }

    node.element.addEventListener('animationend', finish, { once: true })
    node.element.style.animation = ''
  })
}

export async function orchestrateQuarkAnimations({
  root,
  defaultInterval = 0,
  replay = false,
}: QuarkAnimationOrchestratorOptions = {}) {
  root ??= typeof document === 'undefined' ? undefined : document
  if (!root) return

  let candidates = Array.from(root.querySelectorAll<HTMLElement>('[class*="animate:seq-"]'))
  let nodes = candidates
    .map((element, index) => parseSequenceNode(element, index, defaultInterval))
    .filter((node): node is SequenceNode => node !== null)

  if (!replay) {
    nodes = nodes.filter((node) => node.element.dataset.quarkAnimationSequenced !== 'true')
  }

  for (let node of nodes) {
    node.element.dataset.quarkAnimationSequenced = 'true'
    if (findAnimationClass(node.element)) {
      node.element.style.animation = 'none'
    }
  }

  for (let node of buildSequencedOrder(nodes, root)) {
    await playSequencedAnimation(node)
  }
}

export function autoOrchestrateQuarkAnimations(options?: QuarkAnimationOrchestratorOptions) {
  if (typeof document === 'undefined') return

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => orchestrateQuarkAnimations(options), {
      once: true,
    })
    return
  }

  void orchestrateQuarkAnimations(options)
}

if (typeof document !== 'undefined') {
  autoOrchestrateQuarkAnimations()
}
