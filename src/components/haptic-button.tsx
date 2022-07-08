import { mergeProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { createHapticSignal } from "../signals/haptic";

export type HapticButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: JSX.Element;
  hapticForce?: Parameters<typeof createHapticSignal>[0];
};

export function HapticButton(props: HapticButtonProps) {
  const hapticSignal = createHapticSignal(props.hapticForce ?? "medium");
  const merged = mergeProps(props, {
    onClick: (e) => {
      hapticSignal();
      if (props.onClick && typeof props.onClick == "function") {
        props.onClick(e);
      }
    },
  });

  return <button {...merged}>{props.children}</button>;
}
