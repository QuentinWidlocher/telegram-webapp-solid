import { createHapticImpactSignal } from '../signals/haptic';
export declare type MainButtonProps = {
    onClick?: () => void;
    text?: string | null;
    show?: boolean;
    hapticForce?: Parameters<typeof createHapticImpactSignal>[0];
};
export declare function createMainButtonSignal(props: MainButtonProps): {
    visible: import("solid-js").Accessor<boolean>;
    setVisible: import("solid-js").Setter<boolean>;
    text: import("solid-js").Accessor<string>;
    setText: import("solid-js").Setter<string>;
};
