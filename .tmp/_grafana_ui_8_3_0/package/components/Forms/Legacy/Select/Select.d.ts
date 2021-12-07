import React, { PureComponent } from 'react';
import { SelectCommonProps, SelectAsyncProps } from '../../../Select/types';
import { PopoverContent } from '../../../Tooltip/Tooltip';
import { SelectableValue } from '@grafana/data';
/**
 * Changes in new selects:
 * - noOptionsMessage & loadingMessage is of string type
 * - isDisabled is renamed to disabled
 */
declare type LegacyCommonProps<T> = Omit<SelectCommonProps<T>, 'noOptionsMessage' | 'disabled' | 'value'>;
interface AsyncProps<T> extends LegacyCommonProps<T>, Omit<SelectAsyncProps<T>, 'loadingMessage'> {
    loadingMessage?: () => string;
    noOptionsMessage?: () => string;
    tooltipContent?: PopoverContent;
    isDisabled?: boolean;
    value?: SelectableValue<T>;
}
export interface LegacySelectProps<T> extends LegacyCommonProps<T> {
    tooltipContent?: PopoverContent;
    noOptionsMessage?: () => string;
    isDisabled?: boolean;
    value?: SelectableValue<T>;
}
export declare const MenuList: (props: any) => JSX.Element;
export declare class Select<T> extends PureComponent<LegacySelectProps<T>> {
    static defaultProps: Partial<LegacySelectProps<any>>;
    render(): JSX.Element;
}
export declare class AsyncSelect<T> extends PureComponent<AsyncProps<T>> {
    static defaultProps: Partial<AsyncProps<any>>;
    render(): JSX.Element;
}
export interface TooltipWrapperProps {
    children: (onOpenMenu: () => void, onCloseMenu: () => void) => React.ReactNode;
    onOpenMenu?: () => void;
    onCloseMenu?: () => void;
    isOpen?: boolean;
    tooltipContent?: PopoverContent;
}
export interface TooltipWrapperState {
    isOpenInternal: boolean;
}
export declare class WrapInTooltip extends PureComponent<TooltipWrapperProps, TooltipWrapperState> {
    state: TooltipWrapperState;
    onOpenMenu: () => void;
    onCloseMenu: () => void;
    render(): JSX.Element;
}
export default Select;
