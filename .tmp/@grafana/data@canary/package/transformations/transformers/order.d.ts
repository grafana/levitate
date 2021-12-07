import { DataTransformerInfo } from '../../types/transformations';
export interface OrderFieldsTransformerOptions {
    indexByName: Record<string, number>;
}
export declare const orderFieldsTransformer: DataTransformerInfo<OrderFieldsTransformerOptions>;
export declare const createOrderFieldsComparer: (indexByName: Record<string, number>) => (a: string, b: string) => number;
