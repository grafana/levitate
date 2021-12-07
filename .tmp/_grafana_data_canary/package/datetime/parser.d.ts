import { DateTimeInput, DateTime } from './moment_wrapper';
import { DateTimeOptions } from './common';
/**
 * The type that describes options that can be passed when parsing a date and time value.
 * @public
 */
export interface DateTimeOptionsWhenParsing extends DateTimeOptions {
    /**
     * If the input is a Grafana quick date, e.g. now-6h, then you can specify this to control
     * whether the last part of the date and time value is included or excluded.
     *
     * Example: now-6h and the current time is 12:20:00 if roundUp is set to true
     * the returned DateTime value will be 06:00:00.
     */
    roundUp?: boolean;
    fiscalYearStartMonth?: number;
}
declare type DateTimeParser<T extends DateTimeOptions = DateTimeOptions> = (value: DateTimeInput, options?: T) => DateTime;
/**
 * Helper function to parse a number, text or Date to a DateTime value. If a timeZone is supplied the incoming value
 * is parsed with that timeZone as a base. The only exception to this is if the passed value is in a UTC-based
 * format. Then it will use UTC as the base. If no format is specified the current system format will be assumed.
 *
 * It can also parse the Grafana quick date and time format, e.g. now-6h will be parsed as Date.now() - 6 hours and
 * returned as a valid DateTime value.
 *
 * If no options are supplied, then default values are used. For more details please see {@link DateTimeOptions}.
 *
 * @param value - should be a parsable date and time value
 * @param options
 *
 * @public
 */
export declare const dateTimeParse: DateTimeParser<DateTimeOptionsWhenParsing>;
export {};
