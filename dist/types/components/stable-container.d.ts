import { JSX } from 'solid-js';
export declare type StableContainerProps = JSX.HTMLAttributes<HTMLElement> & {
    children: JSX.Element;
};
export declare function StableContainer(props: StableContainerProps): JSX.Element;
