import { createEffect } from "solid-js";

export type MainButtonProps = {
  onClick?: () => void;
  text?: string;
  visible?: boolean;
};

export function MainButton(props: MainButtonProps) {
  const { onClick, text, visible } = props;

  createEffect(function updateVisibility() {
    if (visible) {
      window.Telegram.WebApp.MainButton.show();
    } else {
      window.Telegram.WebApp.MainButton.hide();
    }
  });

  createEffect(function updateText() {
    if (text) {
      window.Telegram.WebApp.MainButton.setText(text);
    } else {
      window.Telegram.WebApp.MainButton.setText(undefined);
    }
  });

  createEffect(function updateOnClick() {
    if (onClick) {
      window.Telegram.WebApp.MainButton.onClick(onClick);
    } else {
      window.Telegram.WebApp.MainButton.onClick(undefined);
    }
  });

  return null;
}
