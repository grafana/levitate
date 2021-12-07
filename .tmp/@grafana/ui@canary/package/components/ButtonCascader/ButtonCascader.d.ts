import React from 'react';
import { IconName } from '../../types/icon';
import { CascaderOption } from '../Cascader/Cascader';
export interface ButtonCascaderProps {
    options: CascaderOption[];
    children: string;
    icon?: IconName;
    disabled?: boolean;
    value?: string[];
    fieldNames?: {
        label: string;
        value: string;
        children: string;
    };
    loadData?: (selectedOptions: CascaderOption[]) => void;
    onChange?: (value: string[], selectedOptions: CascaderOption[]) => void;
    onPopupVisibleChange?: (visible: boolean) => void;
    className?: string;
}
export declare const ButtonCascader: React.FC<ButtonCascaderProps>;
