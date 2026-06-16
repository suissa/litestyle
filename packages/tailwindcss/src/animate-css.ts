export type AnimateCssAnimation = {
  name: string
  description: string
  suggestion: string
}

export type AnimateCssGroup = {
  title: string
  id: string
  animations: AnimateCssAnimation[]
}

export const ANIMATE_CSS_GROUPS: AnimateCssGroup[] = [
  {
    title: 'Attention seekers',
    id: 'attention_seekers',
    animations: [
      {
        name: 'bounce',
        description:
          'Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:bounce`.',
        suggestion:
          'Use em CTAs principais, notificações de oportunidade ou botões que precisam de destaque moderado.',
      },
      {
        name: 'flash',
        description:
          'Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:flash`.',
        suggestion:
          'Use para celebrar uma ação, destacar uma oferta ou indicar sucesso sem navegar de página.',
      },
      {
        name: 'pulse',
        description:
          'Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:pulse`.',
        suggestion:
          'Use em CTAs principais, notificações de oportunidade ou botões que precisam de destaque moderado.',
      },
      {
        name: 'rubberBand',
        description:
          'Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:rubberBand`.',
        suggestion:
          'Use para celebrar uma ação, destacar uma oferta ou indicar sucesso sem navegar de página.',
      },
      {
        name: 'shakeX',
        description:
          'Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:shakeX`.',
        suggestion: 'Use para erro de validação, tentativa inválida ou feedback de ação bloqueada.',
      },
      {
        name: 'shakeY',
        description:
          'Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:shakeY`.',
        suggestion: 'Use para erro de validação, tentativa inválida ou feedback de ação bloqueada.',
      },
      {
        name: 'headShake',
        description:
          'Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:headShake`.',
        suggestion: 'Use para erro de validação, tentativa inválida ou feedback de ação bloqueada.',
      },
      {
        name: 'swing',
        description:
          'Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:swing`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'tada',
        description:
          'Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:tada`.',
        suggestion:
          'Use para celebrar uma ação, destacar uma oferta ou indicar sucesso sem navegar de página.',
      },
      {
        name: 'wobble',
        description:
          'Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:wobble`.',
        suggestion: 'Use para erro de validação, tentativa inválida ou feedback de ação bloqueada.',
      },
      {
        name: 'jello',
        description:
          'Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:jello`.',
        suggestion: 'Use para erro de validação, tentativa inválida ou feedback de ação bloqueada.',
      },
      {
        name: 'heartBeat',
        description:
          'Chama atenção para uma ação disponível sem mudar o layout ao redor. Classe: `animate:heartBeat`.',
        suggestion:
          'Use em CTAs principais, notificações de oportunidade ou botões que precisam de destaque moderado.',
      },
    ],
  },
  {
    title: 'Back entrances',
    id: 'back_entrances',
    animations: [
      {
        name: 'backInDown',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:backInDown`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'backInLeft',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:backInLeft`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'backInRight',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:backInRight`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'backInUp',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:backInUp`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
    ],
  },
  {
    title: 'Back exits',
    id: 'back_exits',
    animations: [
      {
        name: 'backOutDown',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:backOutDown`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'backOutLeft',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:backOutLeft`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'backOutRight',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:backOutRight`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'backOutUp',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:backOutUp`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
    ],
  },
  {
    title: 'Bouncing entrances',
    id: 'bouncing_entrances',
    animations: [
      {
        name: 'bounceIn',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:bounceIn`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'bounceInDown',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:bounceInDown`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'bounceInLeft',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:bounceInLeft`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'bounceInRight',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:bounceInRight`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'bounceInUp',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:bounceInUp`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
    ],
  },
  {
    title: 'Bouncing exits',
    id: 'bouncing_exits',
    animations: [
      {
        name: 'bounceOut',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:bounceOut`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'bounceOutDown',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:bounceOutDown`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'bounceOutLeft',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:bounceOutLeft`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'bounceOutRight',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:bounceOutRight`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'bounceOutUp',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:bounceOutUp`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
    ],
  },
  {
    title: 'Fading entrances',
    id: 'fading_entrances',
    animations: [
      {
        name: 'fadeIn',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeIn`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'fadeInDown',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInDown`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'fadeInDownBig',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInDownBig`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'fadeInLeft',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInLeft`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'fadeInLeftBig',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInLeftBig`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'fadeInRight',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInRight`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'fadeInRightBig',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInRightBig`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'fadeInUp',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInUp`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'fadeInUpBig',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInUpBig`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'fadeInTopLeft',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInTopLeft`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'fadeInTopRight',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInTopRight`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'fadeInBottomLeft',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInBottomLeft`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'fadeInBottomRight',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:fadeInBottomRight`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
    ],
  },
  {
    title: 'Fading exits',
    id: 'fading_exits',
    animations: [
      {
        name: 'fadeOut',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOut`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'fadeOutDown',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutDown`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'fadeOutDownBig',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutDownBig`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'fadeOutLeft',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutLeft`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'fadeOutLeftBig',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutLeftBig`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'fadeOutRight',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutRight`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'fadeOutRightBig',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutRightBig`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'fadeOutUp',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutUp`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'fadeOutUpBig',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutUpBig`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'fadeOutTopLeft',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutTopLeft`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'fadeOutTopRight',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutTopRight`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'fadeOutBottomRight',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutBottomRight`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'fadeOutBottomLeft',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:fadeOutBottomLeft`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
    ],
  },
  {
    title: 'Flippers',
    id: 'flippers',
    animations: [
      {
        name: 'flip',
        description:
          'Cria uma virada 3D curta para enfatizar mudança de estado ou confirmação. Classe: `animate:flip`.',
        suggestion:
          'Use para alternância de estado, troca de modo, reveal de ícone ou confirmação visual.',
      },
      {
        name: 'flipInX',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:flipInX`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'flipInY',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:flipInY`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'flipOutX',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:flipOutX`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'flipOutY',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:flipOutY`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
    ],
  },
  {
    title: 'Lightspeed',
    id: 'lightspeed',
    animations: [
      {
        name: 'lightSpeedInRight',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:lightSpeedInRight`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'lightSpeedInLeft',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:lightSpeedInLeft`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'lightSpeedOutRight',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:lightSpeedOutRight`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'lightSpeedOutLeft',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:lightSpeedOutLeft`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
    ],
  },
  {
    title: 'Rotating entrances',
    id: 'rotating_entrances',
    animations: [
      {
        name: 'rotateIn',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:rotateIn`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'rotateInDownLeft',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:rotateInDownLeft`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'rotateInDownRight',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:rotateInDownRight`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'rotateInUpLeft',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:rotateInUpLeft`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'rotateInUpRight',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:rotateInUpRight`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
    ],
  },
  {
    title: 'Rotating exits',
    id: 'rotating_exits',
    animations: [
      {
        name: 'rotateOut',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:rotateOut`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'rotateOutDownLeft',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:rotateOutDownLeft`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'rotateOutDownRight',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:rotateOutDownRight`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'rotateOutUpLeft',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:rotateOutUpLeft`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'rotateOutUpRight',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:rotateOutUpRight`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
    ],
  },
  {
    title: 'Specials',
    id: 'specials',
    animations: [
      {
        name: 'hinge',
        description:
          'Cria uma microinteração marcante para eventos especiais em componentes. Classe: `animate:hinge`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'jackInTheBox',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:jackInTheBox`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'rollIn',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:rollIn`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'rollOut',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:rollOut`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
    ],
  },
  {
    title: 'Zooming entrances',
    id: 'zooming_entrances',
    animations: [
      {
        name: 'zoomIn',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:zoomIn`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'zoomInDown',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:zoomInDown`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'zoomInLeft',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:zoomInLeft`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'zoomInRight',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:zoomInRight`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'zoomInUp',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:zoomInUp`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
    ],
  },
  {
    title: 'Zooming exits',
    id: 'zooming_exits',
    animations: [
      {
        name: 'zoomOut',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:zoomOut`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'zoomOutDown',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:zoomOutDown`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'zoomOutLeft',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:zoomOutLeft`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'zoomOutRight',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:zoomOutRight`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'zoomOutUp',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:zoomOutUp`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
    ],
  },
  {
    title: 'Sliding entrances',
    id: 'sliding_entrances',
    animations: [
      {
        name: 'slideInDown',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:slideInDown`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'slideInLeft',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:slideInLeft`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'slideInRight',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:slideInRight`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
      {
        name: 'slideInUp',
        description:
          'Anima a entrada do componente com movimento perceptível e positivo. Classe: `animate:slideInUp`.',
        suggestion: 'Use quando um botão, CTA ou ação contextual aparece após uma etapa do fluxo.',
      },
    ],
  },
  {
    title: 'Sliding exits',
    id: 'sliding_exits',
    animations: [
      {
        name: 'slideOutDown',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:slideOutDown`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'slideOutLeft',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:slideOutLeft`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'slideOutRight',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:slideOutRight`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
      {
        name: 'slideOutUp',
        description:
          'Anima a saída do componente, ajudando o usuário a perceber que a ação foi concluída. Classe: `animate:slideOutUp`.',
        suggestion:
          'Use em botões que desaparecem após cancelamento, fechamento, envio ou remoção.',
      },
    ],
  },
]

export const ANIMATE_CSS_ANIMATION_NAMES = ANIMATE_CSS_GROUPS.flatMap((group) =>
  group.animations.map((animation) => animation.name),
)
