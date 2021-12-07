import React from 'react';
import { IconName, IconSize, IconType } from '../../types/icon';
import { TooltipPlacement } from '../Tooltip/PopoverController';
export declare type IconButtonVariant = 'primary' | 'secondary' | 'destructive';
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Name of the icon **/
    name: IconName;
    /** Icon size */
    size?: IconSize;
    /** @deprecated */
    surface?: SurfaceType;
    /** Type od the icon - mono or default */
    iconType?: IconType;
    /** Tooltip content to display on hover */
    tooltip?: string;
    /** Position of the tooltip */
    tooltipPlacement?: TooltipPlacement;
    /** Variant to change the color of the Icon */
    variant?: IconButtonVariant;
    /** Text avilable ony for screenscreen readers. Will use tooltip text as fallback. */
    ariaLabel?: string;
}
declare type SurfaceType = 'dashboard' | 'panel' | 'header';
export declare const IconButton: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
export {};
