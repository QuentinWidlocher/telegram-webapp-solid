import { mergeProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { createHapticImpactSignal } from "../signals/haptic";

export type HapticButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: JSX.Element;
  hapticForce?: Parameters<typeof createHapticImpactSignal>[0];
};

export function HapticButton(props: HapticButtonProps) {
  const hapticSignal = createHapticImpactSignal(props.hapticForce ?? "medium");
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
