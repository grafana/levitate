import { DataTransformerInfo } from '../../types/transformations';
export interface NoopTransformerOptions {
    include?: string;
    exclude?: string;
}
export declare const noopTransformer: DataTransformerInfo<NoopTransformerOptions>;
