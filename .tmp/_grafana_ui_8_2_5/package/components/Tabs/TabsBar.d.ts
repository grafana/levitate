import React, { ReactNode } from 'react';
export interface Props {
    /** Children should be a single <Tab /> or an array of <Tab /> */
    children: ReactNode;
    className?: string;
    /** For hiding the bottom border (on PageHeader for example) */
    hideBorder?: boolean;
}
export declare const TabsBar: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
