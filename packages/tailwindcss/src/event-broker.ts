import { ANIMATE_CSS_ANIMATION_NAMES } from './animate-css'

const ANIMATE_CSS_PREFIX = 'animate__'
const QUARK_ANIMATE_PREFIX = 'animate:'
const EVENT_ANIMATE_SEPARATOR = ':animate__'
const EVENT_QUARK_SEPARATOR = ':animate:'
const EVENT_DASH_ANIMATE_SEPARATOR = '-animate__'
const DEFAULT_DURATION = 'var(--animate-duration, 1s)'

const animationNames = new Set(ANIMATE_CSS_ANIMATION_NAMES)

type AnyRecord = Record<string, unknown>

type EventBinding = {
  event: string
  animation: string
  element: HTMLElement
}

export type UIbiQPublishDetail<T = unknown> = {
  event: string
  data?: T
  target: HTMLElement
  animation: string
}

export type UIbiQSubscriber<T = unknown> = (data: T | undefined, event: string) => void

export type UIbiQBrokerOptions = {
  root?: ParentNode
  autoScan?: boolean
  observe?: boolean
  animationDuration?: string
}

export type UIbiQBroker = {
  pub<T = unknown>(event: string, data?: T): number
  sub<T = unknown>(event: string, subscriber: UIbiQSubscriber<T>): () => void
  scan(root?: ParentNode): number
  clear(): void
  destroy(): void
  react(): {
    pub<T = unknown>(event: string, data?: T): () => void
    on<T = unknown>(event: string, handler: UIbiQSubscriber<T>): () => void
  }
  elm(ports: AnyRecord): void
}

declare global {
  interface Window {
    UIbiQ?: UIbiQBroker
  }
}

function isElement(node: Node): node is HTMLElement {
  return node.nodeType === 1
}

function normalizeAnimationName(value: string) {
  let normalized = value.startsWith(ANIMATE_CSS_PREFIX)
    ? value.slice(ANIMATE_CSS_PREFIX.length)
    : value
  normalized = normalized.startsWith(QUARK_ANIMATE_PREFIX)
    ? normalized.slice(QUARK_ANIMATE_PREFIX.length)
    : normalized

  return animationNames.has(normalized) ? normalized : null
}

function parseBinding(className: string, element: HTMLElement): EventBinding | null {
  let event = ''
  let animation = ''

  if (className.includes(EVENT_QUARK_SEPARATOR)) {
    let parts = className.split(EVENT_QUARK_SEPARATOR)
    event = parts.slice(0, -1).join(EVENT_QUARK_SEPARATOR)
    animation = parts.at(-1) ?? ''
  } else if (className.includes(EVENT_ANIMATE_SEPARATOR)) {
    let parts = className.split(EVENT_ANIMATE_SEPARATOR)
    event = parts.slice(0, -1).join(EVENT_ANIMATE_SEPARATOR)
    animation = `${ANIMATE_CSS_PREFIX}${parts.at(-1) ?? ''}`
  } else if (className.includes(EVENT_DASH_ANIMATE_SEPARATOR)) {
    let index = className.lastIndexOf(EVENT_DASH_ANIMATE_SEPARATOR)
    event = className.slice(0, index)
    animation = `${ANIMATE_CSS_PREFIX}${className.slice(index + EVENT_DASH_ANIMATE_SEPARATOR.length)}`
  } else {
    return null
  }

  let normalized = normalizeAnimationName(animation)
  if (!event || !normalized) return null

  return { event, animation: normalized, element }
}

function findBindings(element: HTMLElement) {
  let bindings: EventBinding[] = []

  for (let className of Array.from(element.classList)) {
    let binding = parseBinding(className, element)
    if (binding) bindings.push(binding)
  }

  return bindings
}

function dispatch<T>(binding: EventBinding, data: T | undefined, duration: string) {
  let detail: UIbiQPublishDetail<T> = {
    event: binding.event,
    data,
    target: binding.element,
    animation: binding.animation,
  }

  binding.element.dispatchEvent(new CustomEvent('uibiq:before-animate', { bubbles: true, detail }))

  binding.element.style.animation = 'none'
  binding.element.offsetWidth
  binding.element.style.animation = `${binding.animation} ${duration} both`

  binding.element.dispatchEvent(new CustomEvent('uibiq:animate', { bubbles: true, detail }))
}

export function createUIbiQBroker({
  root = typeof document === 'undefined' ? undefined : document,
  autoScan = true,
  observe = true,
  animationDuration = DEFAULT_DURATION,
}: UIbiQBrokerOptions = {}): UIbiQBroker {
  let bindings = new Map<string, EventBinding[]>()
  let subscribers = new Map<string, Set<UIbiQSubscriber>>()
  let observer: MutationObserver | null = null

  function addBinding(binding: EventBinding) {
    let list = bindings.get(binding.event)
    if (!list) {
      list = []
      bindings.set(binding.event, list)
    }

    if (
      !list.some((item) => item.element === binding.element && item.animation === binding.animation)
    ) {
      list.push(binding)
    }
  }

  function scan(scanRoot: ParentNode | undefined = root) {
    if (!scanRoot) return 0

    let count = 0
    let elements: HTMLElement[] = []

    if ('classList' in scanRoot && scanRoot instanceof HTMLElement) {
      elements.push(scanRoot)
    }

    elements.push(
      ...Array.from(
        scanRoot.querySelectorAll<HTMLElement>('[class*="animate__"], [class*="animate:"]'),
      ),
    )

    for (let element of elements) {
      for (let binding of findBindings(element)) {
        addBinding(binding)
        count++
      }
    }

    return count
  }

  function pub<T = unknown>(event: string, data?: T) {
    let current = bindings.get(event) ?? []

    for (let subscriber of subscribers.get(event) ?? []) {
      subscriber(data, event)
    }

    for (let binding of current) {
      if (binding.element.isConnected) {
        dispatch(binding, data, animationDuration)
      }
    }

    return current.length
  }

  function sub<T = unknown>(event: string, subscriber: UIbiQSubscriber<T>) {
    let list = subscribers.get(event)
    if (!list) {
      list = new Set()
      subscribers.set(event, list)
    }

    list.add(subscriber as UIbiQSubscriber)

    return () => {
      list?.delete(subscriber as UIbiQSubscriber)
      if (list?.size === 0) subscribers.delete(event)
    }
  }

  function clear() {
    bindings.clear()
  }

  function destroy() {
    observer?.disconnect()
    observer = null
    clear()
    subscribers.clear()
  }

  function react() {
    return {
      pub:
        <T = unknown>(event: string, data?: T) =>
        () =>
          pub(event, data),
      on: <T = unknown>(event: string, handler: UIbiQSubscriber<T>) => sub(event, handler),
    }
  }

  function elm(ports: AnyRecord) {
    let publishPort = ports.uibiqPublish as
      | { subscribe?: (handler: (message: { event: string; data?: unknown }) => void) => void }
      | undefined

    publishPort?.subscribe?.((message) => pub(message.event, message.data))
  }

  if (root && autoScan) scan(root)

  if (root && observe && typeof MutationObserver !== 'undefined') {
    observer = new MutationObserver((records) => {
      for (let record of records) {
        if (record.type === 'attributes' && isElement(record.target)) scan(record.target)
        for (let node of Array.from(record.addedNodes)) {
          if (isElement(node)) scan(node)
        }
      }
    })

    observer.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
      childList: true,
      subtree: true,
    })
  }

  return { pub, sub, scan, clear, destroy, react, elm }
}

export const UIbiQ = createUIbiQBroker()

if (typeof window !== 'undefined') {
  window.UIbiQ = UIbiQ
}
