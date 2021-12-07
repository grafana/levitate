import React from 'react';
import { LinkTarget } from '@grafana/data';
import { IconName } from '../../types';
/** @internal */
export interface MenuItemProps<T = any> {
    /** Label of the menu item */
    label: string;
    /** Aria label for accessibility support */
    ariaLabel?: string;
    /** Target of the menu item (i.e. new window)  */
    target?: LinkTarget;
    /** Icon of the menu item */
    icon?: IconName;
    /** Url of the menu item */
    url?: string;
    /** Handler for the click behaviour */
    onClick?: (event?: React.SyntheticEvent<HTMLElement>, payload?: T) => void;
    /** Custom MenuItem styles*/
    className?: string;
    /** Active */
    active?: boolean;
    tabIndex?: number;
}
/** @internal */
export declare const MenuItem: React.MemoExoticComponent<React.ForwardRefExoticComponent<MenuItemProps<any> & React.RefAttributes<HTMLAnchorElement & HTMLButtonElement>>>;
