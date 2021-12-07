import { TimeOption, TimeRange } from '@grafana/data';
export declare const mapOptionToTimeRange: (option: TimeOption, timeZone?: string | undefined) => TimeRange;
export declare const mapRangeToTimeOption: (range: TimeRange, timeZone?: string | undefined) => TimeOption;
