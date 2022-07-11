import { createHapticImpactSignal } from "../signals/haptic";
export declare type MainButtonProps = {
    onClick?: () => void;
    text?: string;
    hapticForce?: Parameters<typeof createHapticImpactSignal>[0];
};
export declare function MainButton(props: MainButtonProps): any;
