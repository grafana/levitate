import React from 'react';
import { ContainerProps, GroupTypeBase } from 'react-select';
export declare const SelectContainer: <Option, isMulti extends boolean, Group extends GroupTypeBase<Option>>(props: import("react-select").CommonProps<Option, isMulti, Group> & import("react-select/src/components/containers").ContainerState & {
    children: React.ReactNode;
    innerProps: {
        onKeyDown: import("react-select").KeyboardEventHandler;
    };
} & {
    isFocused: boolean;
}) => JSX.Element;
