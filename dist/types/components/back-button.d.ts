import { createHapticImpactSignal } from '../signals/haptic';
export declare type BackButtonProps = {
    onClick?: () => void;
    hapticForce?: Parameters<typeof createHapticImpactSignal>[0];
};
export declare function BackButton(props: BackButtonProps): any;
