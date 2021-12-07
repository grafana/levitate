import { FormattedValue } from './valueFormats';
import { DecimalCount } from '../types/displayValue';
export declare function toPercent(size: number, decimals: DecimalCount): FormattedValue;
export declare function toPercentUnit(size: number, decimals: DecimalCount): FormattedValue;
export declare function toHex0x(value: number, decimals: DecimalCount): FormattedValue;
export declare function toHex(value: number, decimals: DecimalCount): FormattedValue;
export declare function sci(value: number, decimals: DecimalCount): FormattedValue;
