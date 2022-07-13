import { createEffect, createSignal } from "solid-js";
import { createHapticImpactSignal } from "./haptic";

export type BackButtonProps = {
  onClick?: () => void;
  show?: boolean;
  hapticForce?: Parameters<typeof createHapticImpactSignal>[0];
};

export function createBackButtonSignal(props: BackButtonProps) {
  const [visible, setVisible] = createSignal(window.Telegram.WebApp.BackButton.isVisible);
  const hapticSignal = createHapticImpactSignal(props.hapticForce);

  setVisible(props.show ?? visible());

  createEffect(function updateVisibility() {
    if (visible()) {
      console.log('BackButtonSignal show')
      window.Telegram.WebApp.BackButton.show();
    } else {
      console.log('BackButtonSignal hide');
      window.Telegram.WebApp.BackButton.hide();
    }
  })

  createEffect(function updateOnClick() {
    if (props.onClick) {
      window.Telegram.WebApp.BackButton.onClick(() => {
        if (props.hapticForce && hapticSignal) {
          hapticSignal();
        }
        props.onClick();
      });
    } else {
      window.Telegram.WebApp.BackButton.onClick(undefined);
    }
  });

  return {
    visible,
    setVisible,
  }
}
