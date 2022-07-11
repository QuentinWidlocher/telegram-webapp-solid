import { JSX } from "solid-js/jsx-runtime";
import { createHapticImpactSignal } from "../signals/haptic";
export declare type HapticButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: JSX.Element;
    hapticForce?: Parameters<typeof createHapticImpactSignal>[0];
};
export declare function HapticButton(props: HapticButtonProps): JSX.Element;
