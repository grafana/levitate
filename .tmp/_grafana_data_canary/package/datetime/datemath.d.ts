import { DateTime } from './moment_wrapper';
import { TimeZone } from '../types/index';
/**
 * Determine if a string contains a relative date time.
 * @param text
 */
export declare function isMathString(text: string | DateTime | Date): boolean;
/**
 * Parses different types input to a moment instance. There is a specific formatting language that can be used
 * if text arg is string. See unit tests for examples.
 * @param text
 * @param roundUp See parseDateMath function.
 * @param timezone Only string 'utc' is acceptable here, for anything else, local timezone is used.
 */
export declare function parse(text?: string | DateTime | Date | null, roundUp?: boolean, timezone?: TimeZone, fiscalYearStartMonth?: number): DateTime | undefined;
/**
 * Checks if text is a valid date which in this context means that it is either a Moment instance or it can be parsed
 * by parse function. See parse function to see what is considered acceptable.
 * @param text
 */
export declare function isValid(text: string | DateTime): boolean;
/**
 * Parses math part of the time string and shifts supplied time according to that math. See unit tests for examples.
 * @param mathString
 * @param time
 * @param roundUp If true it will round the time to endOf time unit, otherwise to startOf time unit.
 */
export declare function parseDateMath(mathString: string, time: any, roundUp?: boolean, fiscalYearStartMonth?: number): DateTime | undefined;
export declare function roundToFiscal(fyStartMonth: number, dateTime: any, unit: string, roundUp: boolean | undefined): any;
