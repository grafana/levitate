import React from 'react';
export declare const SelectOptionGroup: React.FunctionComponent<{
    data: {
        label: string;
        expanded: boolean;
        options: any[];
    };
    options: import("react-select").Options<any>;
    label: React.ReactNode;
    children: React.ReactNode;
    className?: string | undefined;
    cx: import("react-select").CX;
    setValue: (newValue: any, action: import("react-select").SetValueAction, option: any) => void;
    isMulti: boolean;
    innerProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    selectProps: import("react-select/dist/declarations/src/Select").Props<any, any, import("react-select").GroupBase<any>>;
    clearValue: () => void;
    getStyles: import("react-select").GetStyles<any, any, import("react-select").GroupBase<any>>;
    getValue: () => import("react-select").Options<any>;
    hasValue: boolean;
    isRtl: boolean;
    selectOption: (newValue: any) => void;
    Heading: React.ComponentType<import("react-select").GroupHeadingProps<any, any, import("react-select").GroupBase<any>>>;
    headingProps: import("react-select/dist/declarations/src/components/Group").ForwardedHeadingProps<any, import("react-select").GroupBase<any>>;
}>;
