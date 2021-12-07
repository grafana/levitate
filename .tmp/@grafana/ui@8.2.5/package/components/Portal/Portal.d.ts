import React, { PropsWithChildren } from 'react';
interface Props {
    className?: string;
    root?: HTMLElement;
    forwardedRef?: any;
}
export declare function Portal(props: PropsWithChildren<Props>): React.ReactPortal;
export declare const RefForwardingPortal: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
