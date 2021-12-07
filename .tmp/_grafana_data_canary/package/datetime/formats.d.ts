export interface SystemDateFormatSettings {
    fullDate: string;
    interval: {
        second: string;
        minute: string;
        hour: string;
        day: string;
        month: string;
        year: string;
    };
    useBrowserLocale: boolean;
}
export declare class SystemDateFormatsState {
    fullDate: string;
    interval: {
        second: string;
        minute: string;
        hour: string;
        day: string;
        month: string;
        year: string;
    };
    update(settings: SystemDateFormatSettings): void;
    get fullDateMS(): string;
    useBrowserLocale(): void;
    getTimeFieldUnit(useMsResolution?: boolean): string;
}
/**
 * localTimeFormat helps to generate date formats for momentjs based on browser's locale
 *
 * @param locale browser locale, or default
 * @param options DateTimeFormatOptions to format date
 * @param fallback default format if Intl API is not present
 */
export declare function localTimeFormat(options: Intl.DateTimeFormatOptions, locale?: string | string[] | null, fallback?: string): string;
export declare const systemDateFormats: SystemDateFormatsState;
