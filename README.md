# QuarkCSS

QuarkCSS é uma lib CSS focada em **componentes**, não em diagramação de layout. A versão inicial remove o foco em classes estruturais de página e prioriza os casos de estilização que fazem sentido em um único botão: cores, gradientes, texto, medidas, bordas, sombra, filtros, estados de interação e microanimações.

## Objetivo

- Não substituir CSS de layout, grids, containers ou sistemas de página.
- Cobrir o maior número possível de variações úteis para um botão real.
- Incorporar Animate.css dentro da própria lib com uma única classe por animação.

## Animate.css com prefixo `animate:`

Em Animate.css puro normalmente seria necessário usar duas classes, por exemplo `animate__animated animate__rubberBand`. Em QuarkCSS, use apenas:

```html
<button class="animate:rubberBand">WhatsApp passwordless</button>
```

A classe `animate:rubberBand` adiciona transparentemente o comportamento obrigatório de `animate__animated` (`animation-duration` e `animation-fill-mode`) e troca o prefixo externo de `animate__` para `animate:`.

## Example

Abra `examples/index.html` para testar um único botão centralizado com selects de cor, tom, gradiente, largura, altura, filtros, hover e animação.

O exemplo inclui uma seção de lista de animações no formato:

```html
<section class="animation-list animate:fadeInRight">
  <label for="night-light-checkbox" class="night-light-label">...</label>
  <button class="callout-hideList button">Close list</button>
  <section class="attention_seekers" id="attention_seekers">...</section>
</section>
```

## Lista de animações

### Attention seekers

- `bounce` / `animate:bounce` — Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:bounce`. **Sugestão:** Use em CTAs principais, notificações de oportunidade ou botões que precisam de destaque moderado.
- `flash` / `animate:flash` — Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:flash`. **Sugestão:** Use para celebrar uma ação, destacar uma oferta ou indicar sucesso sem navegar de página.
- `pulse` / `animate:pulse` — Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:pulse`. **Sugestão:** Use em CTAs principais, notificações de oportunidade ou botões que precisam de destaque moderado.
- `rubberBand` / `animate:rubberBand` — Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:rubberBand`. **Sugestão:** Use para celebrar uma ação, destacar uma oferta ou indicar sucesso sem navegar de página.
- `shakeX` / `animate:shakeX` — Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:shakeX`. **Sugestão:** Use para erro de validação, tentativa inválida ou feedback de ação bloqueada.
- `shakeY` / `animate:shakeY` — Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:shakeY`. **Sugestão:** Use para erro de validação, tentativa inválida ou feedback de ação bloqueada.
- `headShake` / `animate:headShake` — Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:headShake`. **Sugestão:** Use para erro de validação, tentativa inválida ou feedback de ação bloqueada.
- `swing` / `animate:swing` — Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:swing`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `tada` / `animate:tada` — Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:tada`. **Sugestão:** Use para celebrar uma ação, destacar uma oferta ou indicar sucesso sem navegar de página.
- `wobble` / `animate:wobble` — Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:wobble`. **Sugestão:** Use para erro de validação, tentativa inválida ou feedback de ação bloqueada.
- `jello` / `animate:jello` — Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:jello`. **Sugestão:** Use para erro de validação, tentativa inválida ou feedback de ação bloqueada.
- `heartBeat` / `animate:heartBeat` — Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:heartBeat`. **Sugestão:** Use em CTAs principais, notificações de oportunidade ou botões que precisam de destaque moderado.

### Back entrances

- `backInDown` / `animate:backInDown` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:backInDown`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `backInLeft` / `animate:backInLeft` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:backInLeft`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `backInRight` / `animate:backInRight` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:backInRight`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `backInUp` / `animate:backInUp` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:backInUp`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.

### Back exits

- `backOutDown` / `animate:backOutDown` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:backOutDown`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `backOutLeft` / `animate:backOutLeft` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:backOutLeft`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `backOutRight` / `animate:backOutRight` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:backOutRight`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `backOutUp` / `animate:backOutUp` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:backOutUp`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.

### Bouncing entrances

- `bounceIn` / `animate:bounceIn` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:bounceIn`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `bounceInDown` / `animate:bounceInDown` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:bounceInDown`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `bounceInLeft` / `animate:bounceInLeft` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:bounceInLeft`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `bounceInRight` / `animate:bounceInRight` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:bounceInRight`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `bounceInUp` / `animate:bounceInUp` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:bounceInUp`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.

### Bouncing exits

- `bounceOut` / `animate:bounceOut` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:bounceOut`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `bounceOutDown` / `animate:bounceOutDown` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:bounceOutDown`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `bounceOutLeft` / `animate:bounceOutLeft` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:bounceOutLeft`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `bounceOutRight` / `animate:bounceOutRight` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:bounceOutRight`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `bounceOutUp` / `animate:bounceOutUp` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:bounceOutUp`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.

### Fading entrances

- `fadeIn` / `animate:fadeIn` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeIn`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `fadeInDown` / `animate:fadeInDown` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInDown`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `fadeInDownBig` / `animate:fadeInDownBig` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInDownBig`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `fadeInLeft` / `animate:fadeInLeft` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInLeft`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `fadeInLeftBig` / `animate:fadeInLeftBig` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInLeftBig`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `fadeInRight` / `animate:fadeInRight` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInRight`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `fadeInRightBig` / `animate:fadeInRightBig` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInRightBig`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `fadeInUp` / `animate:fadeInUp` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInUp`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `fadeInUpBig` / `animate:fadeInUpBig` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInUpBig`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `fadeInTopLeft` / `animate:fadeInTopLeft` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInTopLeft`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `fadeInTopRight` / `animate:fadeInTopRight` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInTopRight`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `fadeInBottomLeft` / `animate:fadeInBottomLeft` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInBottomLeft`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `fadeInBottomRight` / `animate:fadeInBottomRight` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInBottomRight`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.

### Fading exits

- `fadeOut` / `animate:fadeOut` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOut`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `fadeOutDown` / `animate:fadeOutDown` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutDown`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `fadeOutDownBig` / `animate:fadeOutDownBig` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutDownBig`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `fadeOutLeft` / `animate:fadeOutLeft` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutLeft`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `fadeOutLeftBig` / `animate:fadeOutLeftBig` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutLeftBig`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `fadeOutRight` / `animate:fadeOutRight` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutRight`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `fadeOutRightBig` / `animate:fadeOutRightBig` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutRightBig`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `fadeOutUp` / `animate:fadeOutUp` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutUp`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `fadeOutUpBig` / `animate:fadeOutUpBig` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutUpBig`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `fadeOutTopLeft` / `animate:fadeOutTopLeft` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutTopLeft`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `fadeOutTopRight` / `animate:fadeOutTopRight` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutTopRight`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `fadeOutBottomRight` / `animate:fadeOutBottomRight` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutBottomRight`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `fadeOutBottomLeft` / `animate:fadeOutBottomLeft` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutBottomLeft`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.

### Flippers

- `flip` / `animate:flip` — Cria uma virada 3D curta para enfatizar mudança de estado ou confirmação. Classe: `animate:flip`. **Sugestão:** Use para alternância de estado, troca de modo, reveal de ícone ou confirmação visual.
- `flipInX` / `animate:flipInX` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:flipInX`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `flipInY` / `animate:flipInY` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:flipInY`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `flipOutX` / `animate:flipOutX` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:flipOutX`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `flipOutY` / `animate:flipOutY` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:flipOutY`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.

### Lightspeed

- `lightSpeedInRight` / `animate:lightSpeedInRight` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:lightSpeedInRight`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `lightSpeedInLeft` / `animate:lightSpeedInLeft` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:lightSpeedInLeft`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `lightSpeedOutRight` / `animate:lightSpeedOutRight` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:lightSpeedOutRight`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `lightSpeedOutLeft` / `animate:lightSpeedOutLeft` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:lightSpeedOutLeft`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.

### Rotating entrances

- `rotateIn` / `animate:rotateIn` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:rotateIn`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `rotateInDownLeft` / `animate:rotateInDownLeft` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:rotateInDownLeft`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `rotateInDownRight` / `animate:rotateInDownRight` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:rotateInDownRight`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `rotateInUpLeft` / `animate:rotateInUpLeft` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:rotateInUpLeft`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `rotateInUpRight` / `animate:rotateInUpRight` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:rotateInUpRight`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.

### Rotating exits

- `rotateOut` / `animate:rotateOut` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:rotateOut`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `rotateOutDownLeft` / `animate:rotateOutDownLeft` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:rotateOutDownLeft`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `rotateOutDownRight` / `animate:rotateOutDownRight` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:rotateOutDownRight`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `rotateOutUpLeft` / `animate:rotateOutUpLeft` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:rotateOutUpLeft`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `rotateOutUpRight` / `animate:rotateOutUpRight` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:rotateOutUpRight`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.

### Specials

- `hinge` / `animate:hinge` — Cria uma microinteração marcante para eventos especiais em componentes. Classe: `animate:hinge`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `jackInTheBox` / `animate:jackInTheBox` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:jackInTheBox`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `rollIn` / `animate:rollIn` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:rollIn`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `rollOut` / `animate:rollOut` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:rollOut`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.

### Zooming entrances

- `zoomIn` / `animate:zoomIn` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:zoomIn`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `zoomInDown` / `animate:zoomInDown` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:zoomInDown`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `zoomInLeft` / `animate:zoomInLeft` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:zoomInLeft`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `zoomInRight` / `animate:zoomInRight` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:zoomInRight`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `zoomInUp` / `animate:zoomInUp` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:zoomInUp`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.

### Zooming exits

- `zoomOut` / `animate:zoomOut` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:zoomOut`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `zoomOutDown` / `animate:zoomOutDown` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:zoomOutDown`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `zoomOutLeft` / `animate:zoomOutLeft` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:zoomOutLeft`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `zoomOutRight` / `animate:zoomOutRight` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:zoomOutRight`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `zoomOutUp` / `animate:zoomOutUp` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:zoomOutUp`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.

### Sliding entrances

- `slideInDown` / `animate:slideInDown` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:slideInDown`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `slideInLeft` / `animate:slideInLeft` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:slideInLeft`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `slideInRight` / `animate:slideInRight` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:slideInRight`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.
- `slideInUp` / `animate:slideInUp` — Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:slideInUp`. **Sugestão:** Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.

### Sliding exits

- `slideOutDown` / `animate:slideOutDown` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:slideOutDown`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `slideOutLeft` / `animate:slideOutLeft` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:slideOutLeft`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `slideOutRight` / `animate:slideOutRight` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:slideOutRight`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
- `slideOutUp` / `animate:slideOutUp` — Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:slideOutUp`. **Sugestão:** Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.
