import { createEffect, mergeProps } from "solid-js";

export type MainButtonProps = {
  onClick?: () => void;
  text?: string;
  visible?: boolean;
};

export function MainButton(props: MainButtonProps) {
  const merged = mergeProps({ visible: true }, props);

  createEffect(function updateVisibility() {
    if (merged.visible) {
      window.Telegram.WebApp.MainButton.show();
    } else {
      window.Telegram.WebApp.MainButton.hide();
    }
  });

  createEffect(function updateText() {
    if (merged.text) {
      window.Telegram.WebApp.MainButton.setText(merged.text);
    } else {
      window.Telegram.WebApp.MainButton.setText(undefined);
    }
  });

  createEffect(function updateOnClick() {
    if (merged.onClick) {
      window.Telegram.WebApp.MainButton.onClick(merged.onClick);
    } else {
      window.Telegram.WebApp.MainButton.onClick(undefined);
    }
  });

  return null;
}
