import React from 'react';
interface WithContextMenuProps {
    /** Menu item trigger that accepts openMenu prop */
    children: (props: {
        openMenu: React.MouseEventHandler<HTMLElement>;
    }) => JSX.Element;
    /** A function that returns an array of menu items */
    renderMenuItems: () => React.ReactNode;
}
export declare const WithContextMenu: React.FC<WithContextMenuProps>;
export {};
