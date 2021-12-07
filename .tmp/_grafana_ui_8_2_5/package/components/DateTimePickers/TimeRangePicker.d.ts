import React, { PureComponent, FormEvent } from 'react';
import { TimeRange, TimeZone } from '@grafana/data';
import { Themeable } from '../../types';
/** @public */
export interface TimeRangePickerProps extends Themeable {
    hideText?: boolean;
    value: TimeRange;
    timeZone?: TimeZone;
    fiscalYearStartMonth?: number;
    timeSyncButton?: JSX.Element;
    isSynced?: boolean;
    onChange: (timeRange: TimeRange) => void;
    onChangeTimeZone: (timeZone: TimeZone) => void;
    onChangeFiscalYearStartMonth?: (month: number) => void;
    onMoveBackward: () => void;
    onMoveForward: () => void;
    onZoom: () => void;
    history?: TimeRange[];
    hideQuickRanges?: boolean;
}
export interface State {
    isOpen: boolean;
}
export declare class UnthemedTimeRangePicker extends PureComponent<TimeRangePickerProps, State> {
    state: State;
    onChange: (timeRange: TimeRange) => void;
    onOpen: (event: FormEvent<HTMLButtonElement>) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onKeyUp: (event: KeyboardEvent) => void;
    onClose: () => void;
    render(): JSX.Element;
}
declare type LabelProps = Pick<TimeRangePickerProps, 'hideText' | 'value' | 'timeZone'>;
export declare const TimePickerButtonLabel: React.NamedExoticComponent<LabelProps>;
/** @public */
export declare const TimeRangePicker: React.FunctionComponent<{
    value: TimeRange;
    onChange: (timeRange: TimeRange) => void;
    history?: TimeRange[] | undefined;
    timeZone?: string | undefined;
    fiscalYearStartMonth?: number | undefined;
    onChangeTimeZone: (timeZone: TimeZone) => void;
    onChangeFiscalYearStartMonth?: ((month: number) => void) | undefined;
    hideQuickRanges?: boolean | undefined;
    hideText?: boolean | undefined;
    timeSyncButton?: JSX.Element | undefined;
    isSynced?: boolean | undefined;
    onMoveBackward: () => void;
    onMoveForward: () => void;
    onZoom: () => void;
}>;
export {};
