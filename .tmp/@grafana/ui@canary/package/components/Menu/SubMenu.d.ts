import React, { ReactElement } from 'react';
import { MenuItemProps } from './MenuItem';
/** @internal */
export interface SubMenuProps {
    /** List of menu items of the subMenu */
    items?: Array<ReactElement<MenuItemProps>>;
    /** Open */
    isOpen: boolean;
    /** Marks whether subMenu was opened with arrow */
    openedWithArrow: boolean;
    /** Changes value of openedWithArrow */
    setOpenedWithArrow: (openedWithArrow: boolean) => void;
    /** Closes the subMenu */
    close: () => void;
}
/** @internal */
export declare const SubMenu: React.FC<SubMenuProps>;
