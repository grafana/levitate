import { FC, RefCallback } from 'react';
import { SelectableValue } from '@grafana/data';
interface SelectMenuProps {
    maxHeight: number;
    innerRef: RefCallback<HTMLDivElement>;
    innerProps: {};
}
export declare const SelectMenu: FC<SelectMenuProps>;
interface SelectMenuOptionProps<T> {
    isDisabled: boolean;
    isFocused: boolean;
    isSelected: boolean;
    innerProps: any;
    innerRef: RefCallback<HTMLDivElement>;
    renderOptionLabel?: (value: SelectableValue<T>) => JSX.Element;
    data: SelectableValue<T>;
}
export declare const SelectMenuOptions: FC<SelectMenuOptionProps<any>>;
export {};
