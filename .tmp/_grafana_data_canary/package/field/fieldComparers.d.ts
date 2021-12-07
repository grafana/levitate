import { Field } from '../types/dataFrame';
declare type IndexComparer = (a: number, b: number) => number;
/** @public */
export declare const fieldIndexComparer: (field: Field, reverse?: boolean) => IndexComparer;
/** @public */
export declare const timeComparer: (a: any, b: any) => number;
/** @public */
export declare const numericComparer: (a: number, b: number) => number;
/** @public */
export declare const stringComparer: (a: string, b: string) => number;
export declare const booleanComparer: (a: boolean, b: boolean) => number;
export {};
