import { DataFrame, DisplayValue, TimeZone } from '../types';
/**
 * Creates a proxy object that allows accessing fields on dataFrame through various means and then returns it's
 * display value. This is mainly useful for example in data links interpolation where you can easily create a scoped
 * variable that will allow you to access dataFrame data with ${__data.fields.fieldName}.
 * Allows accessing fields by name, index, displayName or 'name' label
 *
 * @param options
 * @internal
 */
export declare function getFieldDisplayValuesProxy(options: {
    frame: DataFrame;
    rowIndex: number;
    timeZone?: TimeZone;
}): Record<string, DisplayValue>;
