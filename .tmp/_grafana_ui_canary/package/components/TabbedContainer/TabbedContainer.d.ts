import React from 'react';
import { IconName } from '../..';
export interface TabConfig {
    label: string;
    value: string;
    content: React.ReactNode;
    icon: IconName;
}
export interface TabbedContainerProps {
    tabs: TabConfig[];
    defaultTab?: string;
    closeIconTooltip?: string;
    onClose: () => void;
}
export declare function TabbedContainer(props: TabbedContainerProps): JSX.Element;
