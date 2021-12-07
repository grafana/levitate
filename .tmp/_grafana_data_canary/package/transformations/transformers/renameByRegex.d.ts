import { DataTransformerInfo } from '../../types/transformations';
/**
 * Options for renameByRegexTransformer
 *
 * @public
 */
export interface RenameByRegexTransformerOptions {
    regex: string;
    renamePattern: string;
}
/**
 * Replaces the displayName of a field by applying a regular expression
 * to match the name and a pattern for the replacement.
 *
 * @public
 */
export declare const renameByRegexTransformer: DataTransformerInfo<RenameByRegexTransformerOptions>;
