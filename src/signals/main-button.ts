import { createEffect, createSignal, onCleanup, onMount } from 'solid-js'
import { createHapticImpactSignal } from '../signals/haptic'

export type MainButtonProps = {
  onClick?: () => void
  text?: string | null
  show?: boolean
  hapticForce?: Parameters<typeof createHapticImpactSignal>[0]
}

export function createMainButtonSignal(props: MainButtonProps) {
  const originalText = window.Telegram.WebApp.MainButton.text;
  const hapticSignal = createHapticImpactSignal(props.hapticForce);

  const [visible, setVisible] = createSignal(window.Telegram.WebApp.MainButton.isVisible);
  const [text, setText] = createSignal<string | null>(props.text ?? originalText);

  setVisible(props.show ?? visible());

  createEffect(function updateVisibility() {
    if (visible()) {
      console.log('MainButtonSignal show')
      window.Telegram.WebApp.MainButton.show();
    } else {
      console.log('MainButtonSignal hide');
      window.Telegram.WebApp.MainButton.hide();
    }
  })

  createEffect(function updateText() {
    if (text()) {
      window.Telegram.WebApp.MainButton.setText(text());
    } else {
      window.Telegram.WebApp.MainButton.setText(originalText);
    }
  });

  createEffect(function updateOnClick() {
    if (props.onClick) {
      window.Telegram.WebApp.MainButton.onClick(() => {
        if (props.hapticForce && hapticSignal) {
          hapticSignal();
        }
        props.onClick();
      });
    } else {
      window.Telegram.WebApp.MainButton.onClick(undefined);
    }
  });

  return {
    visible,
    setVisible,
    text,
    setText,
  }
}
