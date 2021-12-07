import React from 'react';
import { ColorPickerProps, ColorPickerChangeHandler } from './ColorPickerPopover';
/**
 * If you need custom trigger for the color picker you can do that with a render prop pattern and supply a function
 * as a child. You will get show/hide function which you can map to desired interaction (like onClick or onMouseLeave)
 * and a ref which needs to be passed to an HTMLElement for correct positioning. If you want to use class or functional
 * component as a custom trigger you will need to forward the reference to first HTMLElement child.
 */
declare type ColorPickerTriggerRenderer = (props: {
    ref: React.RefObject<any>;
    showColorPicker: () => void;
    hideColorPicker: () => void;
}) => React.ReactNode;
export declare const colorPickerFactory: <T extends ColorPickerProps>(popover: React.ComponentType<T>, displayName?: string) => {
    new (props: Readonly<T & {
        children?: ColorPickerTriggerRenderer | undefined;
    }>): {
        pickerTriggerRef: React.RefObject<any>;
        onColorChange: (color: string) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }>, nextState: Readonly<any>, nextContext: any): void;
    };
    new (props: T & {
        children?: ColorPickerTriggerRenderer | undefined;
    }, context?: any): {
        pickerTriggerRef: React.RefObject<any>;
        onColorChange: (color: string) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<T & {
            children?: ColorPickerTriggerRenderer | undefined;
        }>, nextState: Readonly<any>, nextContext: any): void;
    };
    displayName: string;
    contextType?: React.Context<any> | undefined;
};
export declare const ColorPicker: React.FunctionComponent<{
    color: string;
    onChange: ColorPickerChangeHandler;
    children?: ColorPickerTriggerRenderer | undefined;
    onColorChange?: ColorPickerChangeHandler | undefined;
    enableNamedColors?: boolean | undefined;
}>;
export declare const SeriesColorPicker: React.FunctionComponent<{
    color: string;
    onChange: ColorPickerChangeHandler;
    children?: ColorPickerTriggerRenderer | undefined;
    onColorChange?: ColorPickerChangeHandler | undefined;
    enableNamedColors?: boolean | undefined;
    updatePopperPosition?: (() => void) | undefined;
    yaxis?: number | undefined;
    onToggleAxis?: (() => void) | undefined;
}>;
export {};
