/// <reference types="lodash" />
import { TimeZone } from '../types';
export declare enum InternalTimeZones {
    default = "",
    localBrowserTime = "browser",
    utc = "utc"
}
export declare const timeZoneFormatUserFriendly: (timeZone: TimeZone | undefined) => string | undefined;
export interface TimeZoneCountry {
    code: string;
    name: string;
}
export interface TimeZoneInfo {
    name: string;
    zone: string;
    countries: TimeZoneCountry[];
    abbreviation: string;
    offsetInMins: number;
    ianaName: string;
}
export interface GroupedTimeZones {
    name: string;
    zones: TimeZone[];
}
export declare const getTimeZoneInfo: (zone: string, timestamp: number) => TimeZoneInfo | undefined;
export declare const getTimeZones: ((includeInternal?: boolean | InternalTimeZones[]) => TimeZone[]) & import("lodash").MemoizedFunction;
export declare const getTimeZoneGroups: ((includeInternal?: boolean | InternalTimeZones[]) => GroupedTimeZones[]) & import("lodash").MemoizedFunction;
