import { DataFrame } from '../types/dataFrame';
/**
 * Returns true if both frames have the same name, fields, labels and configs.
 *
 * @example
 * To compare multiple frames use:
 * ```
 * compareArrayValues(a, b, framesHaveSameStructure);
 * ```
 * NOTE: this does a shallow check on the FieldConfig properties, when using the query
 * editor, this should be sufficient, however if applications are mutating properties
 * deep in the FieldConfig this will not recognize a change
 *
 * @beta
 */
export declare function compareDataFrameStructures(a: DataFrame, b: DataFrame, skipConfig?: boolean): boolean;
/**
 * Check if all values in two arrays match the compare funciton
 *
 * @beta
 */
export declare function compareArrayValues<T>(a: T[], b: T[], cmp: (a: T, b: T) => boolean): boolean;
declare type Cmp = (valA: any, valB: any) => boolean;
/**
 * Checks if two objects are equal shallowly
 *
 * @beta
 */
export declare function shallowCompare<T extends {}>(a: T, b: T, cmp?: Cmp): boolean;
export {};
