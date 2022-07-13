import { createHapticImpactSignal } from "./haptic";
export declare type BackButtonProps = {
    onClick?: () => void;
    show?: boolean;
    hapticForce?: Parameters<typeof createHapticImpactSignal>[0];
};
export declare function createBackButtonSignal(props: BackButtonProps): {
    visible: import("solid-js").Accessor<boolean>;
    setVisible: import("solid-js").Setter<boolean>;
};
