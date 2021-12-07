import { DecimalCount } from '../types/displayValue';
import { TimeZone } from '../types';
export interface FormattedValue {
    text: string;
    prefix?: string;
    suffix?: string;
}
export declare function formattedValueToString(val: FormattedValue): string;
export declare type ValueFormatter = (value: number, decimals?: DecimalCount, scaledDecimals?: DecimalCount, timeZone?: TimeZone, showMs?: boolean) => FormattedValue;
export interface ValueFormat {
    name: string;
    id: string;
    fn: ValueFormatter;
}
export interface ValueFormatCategory {
    name: string;
    formats: ValueFormat[];
}
export interface ValueFormatterIndex {
    [id: string]: ValueFormatter;
}
export declare function toFixed(value: number, decimals?: DecimalCount): string;
export declare function toFixedScaled(value: number, decimals: DecimalCount, ext?: string): FormattedValue;
export declare function toFixedUnit(unit: string, asPrefix?: boolean): ValueFormatter;
export declare function isBooleanUnit(unit?: string): boolean | "" | undefined;
export declare function booleanValueFormatter(t: string, f: string): ValueFormatter;
export declare function scaledUnits(factor: number, extArray: string[]): ValueFormatter;
export declare function locale(value: number, decimals: DecimalCount): FormattedValue;
export declare function simpleCountUnit(symbol: string): ValueFormatter;
export declare function stringFormater(value: number): FormattedValue;
export declare function getValueFormat(id?: string | null): ValueFormatter;
export declare function getValueFormatterIndex(): ValueFormatterIndex;
export declare function getValueFormats(): {
    text: string;
    submenu: {
        text: string;
        value: string;
    }[];
}[];
