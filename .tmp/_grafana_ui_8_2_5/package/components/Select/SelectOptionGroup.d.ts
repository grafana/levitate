import React from 'react';
export declare const SelectOptionGroup: React.FunctionComponent<{
    data: {
        label: string;
        expanded: boolean;
        options: any[];
    };
    options: import("react-select").OptionsType<any>;
    children: React.ReactNode;
    label: React.ReactNode;
    className?: string | undefined;
    cx: (state: import("react-select").ClassNamesState, className: string | undefined) => string;
    setValue: (newValue: any, action: import("react-select").SetValueAction, option?: any) => void;
    isMulti: boolean;
    selectProps: import("react-select").Props<any, any, import("react-select").GroupTypeBase<any>>;
    clearValue: () => void;
    getStyles: (name: string, props: any) => {};
    getValue: () => import("react-select").OptionsType<any>;
    hasValue: boolean;
    isRtl: boolean;
    selectOption: (option: any) => void;
    Heading: React.ComponentType<any>;
    headingProps: any;
}>;
