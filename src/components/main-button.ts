import { createEffect, onCleanup, onMount } from "solid-js";
import { createHapticImpactSignal } from "../signals/haptic";

export type MainButtonProps = {
  onClick?: () => void;
  text?: string;
  hapticForce?: Parameters<typeof createHapticImpactSignal>[0];
};

export function MainButton(props: MainButtonProps) {
  const originalText = window.Telegram.WebApp.MainButton.text;
  const hapticSignal = createHapticImpactSignal(props.hapticForce);

  onMount(() => {
    window.Telegram.WebApp.MainButton.show();
  });

  onCleanup(() => {
    window.Telegram.WebApp.MainButton.hide();
  });

  createEffect(function updateText() {
    if (props.text) {
      window.Telegram.WebApp.MainButton.setText(props.text);
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

  return null;
}
