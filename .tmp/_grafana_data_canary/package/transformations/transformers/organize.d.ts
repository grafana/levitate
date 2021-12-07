import { DataTransformerInfo } from '../../types/transformations';
import { OrderFieldsTransformerOptions } from './order';
import { RenameFieldsTransformerOptions } from './rename';
export interface OrganizeFieldsTransformerOptions extends OrderFieldsTransformerOptions, RenameFieldsTransformerOptions {
    excludeByName: Record<string, boolean>;
}
export declare const organizeFieldsTransformer: DataTransformerInfo<OrganizeFieldsTransformerOptions>;
