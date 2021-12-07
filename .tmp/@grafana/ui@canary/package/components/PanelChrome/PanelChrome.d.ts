import React from 'react';
/**
 * @internal
 */
export interface PanelChromeProps {
    width: number;
    height: number;
    title?: string;
    padding?: PanelPadding;
    leftItems?: React.ReactNode[];
    children: (innerWidth: number, innerHeight: number) => React.ReactNode;
}
/**
 * @internal
 */
export declare type PanelPadding = 'none' | 'md';
/**
 * @internal
 */
export declare const PanelChrome: React.FC<PanelChromeProps>;
