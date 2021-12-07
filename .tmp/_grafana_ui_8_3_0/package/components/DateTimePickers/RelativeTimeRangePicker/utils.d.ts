import { RelativeTimeRange, TimeOption } from '@grafana/data';
export declare const mapOptionToRelativeTimeRange: (option: TimeOption) => RelativeTimeRange | undefined;
export declare const mapRelativeTimeRangeToOption: (range: RelativeTimeRange) => TimeOption;
export declare type RangeValidation = {
    isValid: boolean;
    errorMessage?: string;
};
export declare const isRangeValid: (relative: string, now?: number) => RangeValidation;
export declare const isRelativeFormat: (format: string) => boolean;
