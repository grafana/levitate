import React from 'react';
import { IconName } from '../../types';
interface ModalTab {
    value: string;
    label: string;
    icon?: IconName;
}
interface Props {
    icon: IconName;
    title: string;
    tabs: ModalTab[];
    activeTab: string;
    onChangeTab(tab: ModalTab): void;
}
export declare const ModalTabsHeader: React.FC<Props>;
export {};
