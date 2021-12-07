import React, { ReactElement } from 'react';
import { LinkTarget } from '@grafana/data';
import { IconName } from '../../types';
/** @internal */
export declare type MenuItemElement = HTMLAnchorElement & HTMLButtonElement & HTMLDivElement;
/** @internal */
export interface MenuItemProps<T = any> {
    /** Label of the menu item */
    label: string;
    /** Aria label for accessibility support */
    ariaLabel?: string;
    /** Aria checked for accessibility support */
    ariaChecked?: boolean;
    /** Target of the menu item (i.e. new window)  */
    target?: LinkTarget;
    /** Icon of the menu item */
    icon?: IconName;
    /** Role of the menu item */
    role?: string;
    /** Url of the menu item */
    url?: string;
    /** Handler for the click behaviour */
    onClick?: (event?: React.SyntheticEvent<HTMLElement>, payload?: T) => void;
    /** Custom MenuItem styles*/
    className?: string;
    /** Active */
    active?: boolean;
    tabIndex?: number;
    /** List of menu items for the subMenu */
    childItems?: Array<ReactElement<MenuItemProps>>;
}
/** @internal */
export declare const MenuItem: React.MemoExoticComponent<React.ForwardRefExoticComponent<MenuItemProps<any> & React.RefAttributes<MenuItemElement>>>;
