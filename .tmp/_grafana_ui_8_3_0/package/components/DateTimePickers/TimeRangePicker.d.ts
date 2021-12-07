import React, { ReactElement } from 'react';
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
export declare function UnthemedTimeRangePicker(props: TimeRangePickerProps): ReactElement;
declare type LabelProps = Pick<TimeRangePickerProps, 'hideText' | 'value' | 'timeZone'>;
export declare const TimePickerButtonLabel: React.NamedExoticComponent<LabelProps>;
/** @public */
export declare const TimeRangePicker: React.FunctionComponent<{
    fiscalYearStartMonth?: number | undefined;
    timeZone?: string | undefined;
    value: TimeRange;
    onChange: (timeRange: TimeRange) => void;
    history?: TimeRange[] | undefined;
    onChangeTimeZone: (timeZone: TimeZone) => void;
    onChangeFiscalYearStartMonth?: ((month: number) => void) | undefined;
    hideQuickRanges?: boolean | undefined;
    onMoveBackward: () => void;
    onMoveForward: () => void;
    onZoom: () => void;
    timeSyncButton?: JSX.Element | undefined;
    isSynced?: boolean | undefined;
    hideText?: boolean | undefined;
}>;
export {};
