import React, { ButtonHTMLAttributes } from 'react';
import { IconName } from '../../types/icon';
export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Icon name */
    icon?: IconName | React.ReactNode;
    /** Tooltip */
    tooltip?: string;
    /** For image icons */
    imgSrc?: string;
    /** if true or false will show angle-down/up */
    isOpen?: boolean;
    /** Controls flex-grow: 1 */
    fullWidth?: boolean;
    /** reduces padding to xs */
    narrow?: boolean;
    /** variant */
    variant?: ToolbarButtonVariant;
    /** Hide any children and only show icon */
    iconOnly?: boolean;
}
export declare type ToolbarButtonVariant = 'default' | 'primary' | 'destructive' | 'active';
export declare const ToolbarButton: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
