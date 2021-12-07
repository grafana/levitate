import { TimeRange, TimeZone } from '@grafana/data';
import React from 'react';
interface Props {
    isFullscreen: boolean;
    value: TimeRange;
    onApply: (range: TimeRange) => void;
    timeZone?: TimeZone;
    fiscalYearStartMonth?: number;
    roundup?: boolean;
    isReversed?: boolean;
}
export declare const TimeRangeForm: React.FC<Props>;
export {};
