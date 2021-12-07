import moment from 'moment';
export interface DateTimeBuiltinFormat {
    __momentBuiltinFormatBrand: any;
}
export declare const ISO_8601: DateTimeBuiltinFormat;
export declare type DateTimeInput = Date | string | number | Array<string | number> | DateTime | null;
export declare type FormatInput = string | DateTimeBuiltinFormat | undefined;
export declare type DurationInput = string | number | DateTimeDuration;
export declare type DurationUnit = 'year' | 'years' | 'y' | 'month' | 'months' | 'M' | 'week' | 'weeks' | 'isoWeek' | 'w' | 'day' | 'days' | 'd' | 'hour' | 'hours' | 'h' | 'minute' | 'minutes' | 'm' | 'second' | 'seconds' | 's' | 'millisecond' | 'milliseconds' | 'ms' | 'quarter' | 'quarters' | 'Q';
export interface DateTimeLocale {
    firstDayOfWeek: () => number;
}
export interface DateTimeDuration {
    asHours: () => number;
    hours: () => number;
    minutes: () => number;
    seconds: () => number;
    asSeconds: () => number;
}
export interface DateTime extends Object {
    add: (amount?: DateTimeInput, unit?: DurationUnit) => DateTime;
    set: (unit: DurationUnit, amount: DateTimeInput) => void;
    diff: (amount: DateTimeInput, unit?: DurationUnit, truncate?: boolean) => number;
    endOf: (unitOfTime: DurationUnit) => DateTime;
    format: (formatInput?: FormatInput) => string;
    fromNow: (withoutSuffix?: boolean) => string;
    from: (formaInput: DateTimeInput) => string;
    isSame: (input?: DateTimeInput, granularity?: DurationUnit) => boolean;
    isBefore: (input?: DateTimeInput) => boolean;
    isValid: () => boolean;
    local: () => DateTime;
    locale: (locale: string) => DateTime;
    startOf: (unitOfTime: DurationUnit) => DateTime;
    subtract: (amount?: DateTimeInput, unit?: DurationUnit) => DateTime;
    toDate: () => Date;
    toISOString: () => string;
    isoWeekday: (day?: number | string) => number | string;
    valueOf: () => number;
    unix: () => number;
    utc: () => DateTime;
    utcOffset: () => number;
    hour?: () => number;
    minute?: () => number;
}
export declare const setLocale: (language: string) => void;
export declare const getLocale: () => string;
export declare const getLocaleData: () => DateTimeLocale;
export declare const isDateTime: (value: any) => value is DateTime;
export declare const toUtc: (input?: DateTimeInput | undefined, formatInput?: FormatInput) => DateTime;
export declare const toDuration: (input?: DurationInput | undefined, unit?: DurationUnit | undefined) => DateTimeDuration;
export declare const dateTime: (input?: DateTimeInput | undefined, formatInput?: FormatInput) => DateTime;
export declare const dateTimeAsMoment: (input?: DateTimeInput | undefined) => moment.Moment;
export declare const dateTimeForTimeZone: (timezone?: string | undefined, input?: DateTimeInput | undefined, formatInput?: FormatInput) => DateTime;
export declare const getWeekdayIndex: (day: string) => number;
export declare const setWeekStart: (weekStart?: string | undefined) => void;
