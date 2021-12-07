import { ValueFormatter } from './valueFormats';
export declare function currency(symbol: string, asSuffix?: boolean): ValueFormatter;
export declare function getOffsetFromSIPrefix(c: string): number;
export declare function binaryPrefix(unit: string, offset?: number): ValueFormatter;
export declare function SIPrefix(unit: string, offset?: number): ValueFormatter;
