import { RawTimeRange, TimeRange, TimeZone, IntervalValues, RelativeTimeRange } from '../types/time';
import { DateTime } from './moment_wrapper';
export declare function describeTextRange(expr: any): any;
/**
 * Use this function to get a properly formatted string representation of a {@link @grafana/data:RawTimeRange | range}.
 *
 * @example
 * ```
 * // Prints "2":
 * console.log(add(1,1));
 * ```
 * @category TimeUtils
 * @param range - a time range (usually specified by the TimePicker)
 * @alpha
 */
export declare function describeTimeRange(range: RawTimeRange, timeZone?: TimeZone): string;
export declare const isValidTimeSpan: (value: string) => boolean;
export declare const describeTimeRangeAbbreviation: (range: TimeRange, timeZone?: string | undefined) => string;
export declare const convertRawToRange: (raw: RawTimeRange, timeZone?: string | undefined, fiscalYearStartMonth?: number | undefined) => TimeRange;
export declare function isFiscal(timeRange: TimeRange): boolean;
export declare function isRelativeTimeRange(raw: RawTimeRange): boolean;
export declare function secondsToHms(seconds: number): string;
export declare function msRangeToTimeString(rangeMs: number): string;
export declare function calculateInterval(range: TimeRange, resolution: number, lowLimitInterval?: string): IntervalValues;
export declare function describeInterval(str: string): {
    sec: number;
    type: string;
    count: number;
};
export declare function intervalToSeconds(str: string): number;
export declare function intervalToMs(str: string): number;
export declare function roundInterval(interval: number): 100 | 10 | 1000 | 20 | 50 | 200 | 500 | 2000 | 5000 | 10000 | 15000 | 20000 | 30000 | 60000 | 120000 | 300000 | 600000 | 900000 | 1200000 | 1800000 | 3600000 | 7200000 | 10800000 | 21600000 | 43200000 | 86400000 | 604800000 | 2592000000 | 31536000000;
/**
 * Converts a TimeRange to a RelativeTimeRange that can be used in
 * e.g. alerting queries/rules.
 *
 * @internal
 */
export declare function timeRangeToRelative(timeRange: TimeRange, now?: DateTime): RelativeTimeRange;
/**
 * Converts a RelativeTimeRange to a TimeRange
 *
 * @internal
 */
export declare function relativeToTimeRange(relativeTimeRange: RelativeTimeRange, now?: DateTime): TimeRange;
