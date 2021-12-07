import React from 'react';
import { SelectableValue } from '@grafana/data';
interface SelectMenuProps {
    maxHeight: number;
    innerRef: React.Ref<any>;
    innerProps: {};
}
export declare const SelectMenu: React.ForwardRefExoticComponent<SelectMenuProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
interface SelectMenuOptionProps<T> {
    isDisabled: boolean;
    isFocused: boolean;
    isSelected: boolean;
    innerProps: any;
    renderOptionLabel?: (value: SelectableValue<T>) => JSX.Element;
    data: SelectableValue<T>;
}
export declare const SelectMenuOptions: React.ForwardRefExoticComponent<SelectMenuOptionProps<any> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export {};
