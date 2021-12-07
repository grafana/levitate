import { FC, ReactNode } from 'react';
export interface Props {
    label: ReactNode;
    isOpen: boolean;
    /** Callback for the toggle functionality */
    onToggle?: (isOpen: boolean) => void;
    children: ReactNode;
}
export declare const CollapsableSection: FC<Props>;
