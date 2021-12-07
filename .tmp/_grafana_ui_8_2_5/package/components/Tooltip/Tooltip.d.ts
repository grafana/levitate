import React, { FC } from 'react';
import { UsingPopperProps } from './PopoverController';
export interface TooltipProps extends UsingPopperProps {
    theme?: 'info' | 'error' | 'info-alt';
}
export interface PopoverContentProps {
    updatePopperPosition?: () => void;
}
export declare type PopoverContent = string | React.ReactElement<any> | ((props: PopoverContentProps) => JSX.Element);
export declare const Tooltip: FC<TooltipProps>;
