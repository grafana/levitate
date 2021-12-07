import React from 'react';
import { SelectableValue } from '@grafana/data';
export interface CascaderProps {
    /** The separator between levels in the search */
    separator?: string;
    placeholder?: string;
    options: CascaderOption[];
    /** Changes the value for every selection, including branch nodes. Defaults to true. */
    changeOnSelect?: boolean;
    onSelect(val: string): void;
    /** Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.*/
    width?: number;
    initialValue?: string;
    allowCustomValue?: boolean;
    /** A function for formatting the message for custom value creation. Only applies when allowCustomValue is set to true*/
    formatCreateLabel?: (val: string) => string;
    displayAllSelectedLevels?: boolean;
}
interface CascaderState {
    isSearching: boolean;
    focusCascade: boolean;
    rcValue: SelectableValue<string[]>;
    activeLabel: string;
}
export interface CascaderOption {
    /**
     *  The value used under the hood
     */
    value: any;
    /**
     *  The label to display in the UI
     */
    label: string;
    /** Items will be just flattened into the main list of items recursively. */
    items?: CascaderOption[];
    disabled?: boolean;
    /** Avoid using */
    title?: string;
    /**  Children will be shown in a submenu. Use 'items' instead, as 'children' exist to ensure backwards compatibility.*/
    children?: CascaderOption[];
}
export declare class Cascader extends React.PureComponent<CascaderProps, CascaderState> {
    constructor(props: CascaderProps);
    static defaultProps: {
        changeOnSelect: boolean;
    };
    flattenOptions: (options: CascaderOption[], optionPath?: CascaderOption[]) => SelectableValue<string[]>[];
    getSearchableOptions: import("memoize-one").MemoizedFn<(options: CascaderOption[]) => SelectableValue<string[]>[]>;
    setInitialValue(searchableOptions: Array<SelectableValue<string[]>>, initValue?: string): {
        rcValue: string[];
        activeLabel: any;
    };
    onChange: (value: string[], selectedOptions: CascaderOption[]) => void;
    onSelect: (obj: SelectableValue<string[]>) => void;
    onCreateOption: (value: string) => void;
    onBlur: () => void;
    onBlurCascade: () => void;
    onInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
