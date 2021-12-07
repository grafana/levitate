import { TimeOption, TimeRange, TimeZone } from '@grafana/data';
import React from 'react';
interface Props {
    value: TimeRange;
    onChange: (timeRange: TimeRange) => void;
    onChangeTimeZone: (timeZone: TimeZone) => void;
    onChangeFiscalYearStartMonth?: (month: number) => void;
    timeZone?: TimeZone;
    fiscalYearStartMonth?: number;
    quickOptions?: TimeOption[];
    history?: TimeRange[];
    showHistory?: boolean;
    className?: string;
    hideTimeZone?: boolean;
    /** Reverse the order of relative and absolute range pickers. Used to left align the picker in forms */
    isReversed?: boolean;
    hideQuickRanges?: boolean;
}
export interface PropsWithScreenSize extends Props {
    isFullscreen: boolean;
}
export declare const TimePickerContentWithScreenSize: React.FC<PropsWithScreenSize>;
export declare const TimePickerContent: React.FC<Props>;
export {};
