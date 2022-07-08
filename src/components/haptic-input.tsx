import { mergeProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { createHapticSelectionSignal } from "../signals/haptic";

export type HapticInputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  children?: JSX.Element;
};

export function HapticInput(props: HapticInputProps) {
  const hapticSelectionSignal = createHapticSelectionSignal();
  const merged = mergeProps(props, {
    onselectionchange: (e) => {
      hapticSelectionSignal();
    },
  });

  return <input {...merged}>{props.children}</input>;
}
