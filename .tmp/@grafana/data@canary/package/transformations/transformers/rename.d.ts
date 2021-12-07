import { DataTransformerInfo } from '../../types/transformations';
export interface RenameFieldsTransformerOptions {
    renameByName: Record<string, string>;
}
export declare const renameFieldsTransformer: DataTransformerInfo<RenameFieldsTransformerOptions>;
