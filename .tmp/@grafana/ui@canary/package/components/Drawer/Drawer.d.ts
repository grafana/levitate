import { FC, ReactNode } from 'react';
export interface Props {
    children: ReactNode;
    /** Title shown at the top of the drawer */
    title?: ReactNode;
    /** Subtitle shown below the title */
    subtitle?: ReactNode;
    /** Should the Drawer be closable by clicking on the mask, defaults to true */
    closeOnMaskClick?: boolean;
    /** Render the drawer inside a container on the page */
    inline?: boolean;
    /** Either a number in px or a string with unit postfix */
    width?: number | string;
    /** Should the Drawer be expandable to full width */
    expandable?: boolean;
    /** Set to true if the component rendered within in drawer content has its own scroll */
    scrollableContent?: boolean;
    /** Callback for closing the drawer */
    onClose: () => void;
}
export declare const Drawer: FC<Props>;
