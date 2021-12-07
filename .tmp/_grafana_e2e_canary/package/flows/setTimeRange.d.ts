export interface TimeRangeConfig {
    from: string;
    to: string;
    zone?: string;
}
export declare const setTimeRange: ({ from, to, zone }: TimeRangeConfig) => void;
