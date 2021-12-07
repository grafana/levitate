import { FormattedValue, ValueFormatter } from './valueFormats';
import { DecimalCount } from '../types/displayValue';
import { TimeZone } from '../types';
export declare enum Interval {
    Year = "year",
    Month = "month",
    Week = "week",
    Day = "day",
    Hour = "hour",
    Minute = "minute",
    Second = "second",
    Millisecond = "millisecond"
}
export declare function toNanoSeconds(size: number, decimals?: DecimalCount): FormattedValue;
export declare function toMicroSeconds(size: number, decimals?: DecimalCount): FormattedValue;
export declare function toMilliSeconds(size: number, decimals?: DecimalCount, scaledDecimals?: DecimalCount): FormattedValue;
export declare function trySubstract(value1: DecimalCount, value2: DecimalCount): DecimalCount;
export declare function toSeconds(size: number, decimals?: DecimalCount): FormattedValue;
export declare function toMinutes(size: number, decimals?: DecimalCount): FormattedValue;
export declare function toHours(size: number, decimals?: DecimalCount): FormattedValue;
export declare function toDays(size: number, decimals?: DecimalCount): FormattedValue;
export declare function toDuration(size: number, decimals: DecimalCount, timeScale: Interval): FormattedValue;
export declare function toClock(size: number, decimals?: DecimalCount): FormattedValue;
export declare function toDurationInMilliseconds(size: number, decimals: DecimalCount): FormattedValue;
export declare function toDurationInSeconds(size: number, decimals: DecimalCount): FormattedValue;
export declare function toDurationInHoursMinutesSeconds(size: number): FormattedValue;
export declare function toDurationInDaysHoursMinutesSeconds(size: number): FormattedValue;
export declare function toTimeTicks(size: number, decimals: DecimalCount): FormattedValue;
export declare function toClockMilliseconds(size: number, decimals: DecimalCount): FormattedValue;
export declare function toClockSeconds(size: number, decimals: DecimalCount): FormattedValue;
export declare function toDateTimeValueFormatter(pattern: string, todayPattern?: string): ValueFormatter;
export declare const dateTimeAsIso: ValueFormatter;
export declare const dateTimeAsIsoNoDateIfToday: ValueFormatter;
export declare const dateTimeAsUS: ValueFormatter;
export declare const dateTimeAsUSNoDateIfToday: ValueFormatter;
export declare function getDateTimeAsLocalFormat(): ValueFormatter;
export declare function getDateTimeAsLocalFormatNoDateIfToday(): ValueFormatter;
export declare function dateTimeSystemFormatter(value: number, decimals: DecimalCount, scaledDecimals: DecimalCount, timeZone?: TimeZone, showMs?: boolean): FormattedValue;
export declare function dateTimeFromNow(value: number, decimals: DecimalCount, scaledDecimals: DecimalCount, timeZone?: TimeZone): FormattedValue;
