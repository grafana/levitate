import React from 'react';
/** @internal */
export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
    /** React element rendered at the top of the menu */
    header?: React.ReactNode;
    children: React.ReactNode;
    ariaLabel?: string;
    onOpen?: (focusOnItem: (itemId: number) => void) => void;
    onClose?: () => void;
    onKeyDown?: React.KeyboardEventHandler;
}
/** @internal */
export declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement>>;
