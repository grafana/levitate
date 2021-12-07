import { FC, ReactNode } from 'react';
export interface Props {
    label: string;
    isOpen: boolean;
    children: ReactNode;
}
export declare const CollapsableSection: FC<Props>;
