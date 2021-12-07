import { DataTransformerInfo } from '../../types/transformations';
export interface FilterFramesByRefIdTransformerOptions {
    include?: string;
    exclude?: string;
}
export declare const filterFramesByRefIdTransformer: DataTransformerInfo<FilterFramesByRefIdTransformerOptions>;
