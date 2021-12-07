import { FC } from 'react';
import { TimeRange, TimeZone } from '@grafana/data';
export interface TimeRangeInputProps {
    value: TimeRange;
    timeZone?: TimeZone;
    onChange: (timeRange: TimeRange) => void;
    onChangeTimeZone?: (timeZone: TimeZone) => void;
    hideTimeZone?: boolean;
    placeholder?: string;
    clearable?: boolean;
    isReversed?: boolean;
    hideQuickRanges?: boolean;
    disabled?: boolean;
}
export declare const TimeRangeInput: FC<TimeRangeInputProps>;
