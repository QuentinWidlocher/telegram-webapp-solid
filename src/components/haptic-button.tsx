import { JSX } from "solid-js/jsx-runtime";
import { createHapticSignal } from "../signals/haptic";

export type HapticButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: JSX.Element;
  hapticForce?: Parameters<typeof createHapticSignal>[0];
};

export function HapticButton(props: HapticButtonProps) {
  const hapticSignal = createHapticSignal(props.hapticForce ?? "medium");

  return (
    <button
      {...props}
      onClick={(e) => {
        hapticSignal();
        if (props.onClick && typeof props.onClick == "function") {
          props.onClick(e);
        }
      }}
    >
      {props.children}
    </button>
  );
}
