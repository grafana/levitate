import { DateTimeInput } from './moment_wrapper';
import { DateTimeOptions } from './common';
/**
 * The type describing the options that can be passed to the {@link dateTimeFormat}
 * helper function to control how the date and time value passed to the function is
 * formatted.
 *
 * @public
 */
export interface DateTimeOptionsWithFormat extends DateTimeOptions {
    /**
     * Set this value to `true` if you want to include milliseconds when formatting date and time
     */
    defaultWithMS?: boolean;
}
declare type DateTimeFormatter<T extends DateTimeOptions = DateTimeOptions> = (dateInUtc: DateTimeInput, options?: T) => string;
/**
 * Helper function to format date and time according to the specified options. If no options
 * are supplied, then default values are used. For more details, see {@link DateTimeOptionsWithFormat}.
 *
 * @param dateInUtc - date in UTC format, e.g. string formatted with UTC offset, UNIX epoch in seconds etc.
 * @param options
 *
 * @public
 */
export declare const dateTimeFormat: DateTimeFormatter<DateTimeOptionsWithFormat>;
/**
 * Helper function to format date and time according to the standard ISO format e.g. 2013-02-04T22:44:30.652Z.
 * If no options are supplied, then default values are used. For more details, see {@link DateTimeOptionsWithFormat}.
 *
 * @param dateInUtc - date in UTC format, e.g. string formatted with UTC offset, UNIX epoch in seconds etc.
 * @param options
 *
 * @public
 */
export declare const dateTimeFormatISO: DateTimeFormatter;
/**
 * Helper function to return elapsed time since passed date. The returned value will be formatted
 * in a human readable format e.g. 4 years ago. If no options are supplied, then default values are used.
 * For more details, see {@link DateTimeOptions}.
 *
 * @param dateInUtc - date in UTC format, e.g. string formatted with UTC offset, UNIX epoch in seconds etc.
 * @param options
 *
 * @public
 */
export declare const dateTimeFormatTimeAgo: DateTimeFormatter;
/**
 * Helper function to format date and time according to the Grafana default formatting, but it
 * also appends the time zone abbreviation at the end e.g. 2020-05-20 13:37:00 CET. If no options
 * are supplied, then default values are used. For more details please see {@link DateTimeOptions}.
 *
 * @param dateInUtc - date in UTC format, e.g. string formatted with UTC offset, UNIX epoch in seconds etc.
 * @param options
 *
 * @public
 */
export declare const dateTimeFormatWithAbbrevation: DateTimeFormatter;
/**
 * Helper function to return only the time zone abbreviation for a given date and time value. If no options
 * are supplied, then default values are used. For more details please see {@link DateTimeOptions}.
 *
 * @param dateInUtc - date in UTC format, e.g. string formatted with UTC offset, UNIX epoch in seconds etc.
 * @param options
 *
 * @public
 */
export declare const timeZoneAbbrevation: DateTimeFormatter;
export {};
