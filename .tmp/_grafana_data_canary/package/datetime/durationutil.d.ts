import { Duration, Interval } from 'date-fns';
/**
 * intervalToAbbreviatedDurationString converts interval to readable duration string
 *
 * @param interval - interval to convert
 * @param includeSeconds - optional, default true. If false, will not include seconds unless interval is less than 1 minute
 *
 * @public
 */
export declare function intervalToAbbreviatedDurationString(interval: Interval, includeSeconds?: boolean): string;
/**
 * parseDuration parses duration string into datefns Duration object
 *
 * @param duration - string to convert. For example '2m', '5h 20s'
 *
 * @public
 */
export declare function parseDuration(duration: string): Duration;
/**
 * addDurationToDate adds given duration to given date and returns a new Date object
 *
 * @param date - date to add to. Can be either Date object or a number (milliseconds since epoch)
 * @param duration - duration to add. For example '2m', '5h 20s'
 *
 * @public
 */
export declare function addDurationToDate(date: Date | number, duration: Duration): Date;
/**
 * durationToMilliseconds convert a duration object to milliseconds
 *
 * @param duration - datefns Duration object
 *
 * @public
 */
export declare function durationToMilliseconds(duration: Duration): number;
/**
 * isValidDate returns true if given string can be parsed into valid Date object, false otherwise
 *
 * @param dateString - string representation of a date
 *
 * @public
 */
export declare function isValidDate(dateString: string): boolean;
/**
 * isValidDuration returns true if the given string can be parsed into a valid Duration object, false otherwise
 *
 * @param durationString - string representation of a duration
 *
 * @public
 */
export declare function isValidDuration(durationString: string): boolean;
/**
 * isValidGoDuration returns true if the given string can be parsed into a valid Duration object based on
 * Go's time.parseDuration, false otherwise.
 *
 * Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".
 *
 * Go docs: https://pkg.go.dev/time#ParseDuration
 *
 * @param durationString - string representation of a duration
 *
 * @internal
 */
export declare function isValidGoDuration(durationString: string): boolean;
