import React, { HTMLAttributes, ReactNode } from 'react';
export declare type AlertVariant = 'success' | 'warning' | 'error' | 'info';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string;
    /** On click handler for alert button, mostly used for dismissing the alert */
    onRemove?: (event: React.MouseEvent) => void;
    severity?: AlertVariant;
    children?: ReactNode;
    elevated?: boolean;
    buttonContent?: React.ReactNode | string;
    bottomSpacing?: number;
}
export declare const Alert: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
