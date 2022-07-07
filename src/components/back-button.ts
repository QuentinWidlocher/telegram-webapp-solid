import { createEffect, onCleanup, onMount } from "solid-js";

export type BackButtonProps = {
  onClick?: () => void;
};

export function BackButton(props: BackButtonProps) {
  onMount(() => {
    window.Telegram.WebApp.BackButton.show();
  });

  onCleanup(() => {
    window.Telegram.WebApp.BackButton.hide();
  });

  createEffect(function updateOnClick() {
    if (props.onClick) {
      window.Telegram.WebApp.BackButton.onClick(props.onClick);
    } else {
      window.Telegram.WebApp.BackButton.onClick(undefined);
    }
  });

  return null;
}
