import { DataTransformerInfo } from '../../types/transformations';
import { DataFrame } from '../../types/dataFrame';
export declare enum ConcatenateFrameNameMode {
    /**
     * Ignore the source frame name when moving to the destination
     */
    Drop = "drop",
    /**
     * Copy the source frame name to the destination field.  The final field will contain
     * both the frame and field name
     */
    FieldName = "field",
    /**
     * Copy the source frame name to a label on the field.  The label key is controlled
     * by frameNameLabel
     */
    Label = "label"
}
export interface ConcatenateTransformerOptions {
    frameNameMode?: ConcatenateFrameNameMode;
    frameNameLabel?: string;
}
export declare const concatenateTransformer: DataTransformerInfo<ConcatenateTransformerOptions>;
/**
 * @internal only exported for tests
 */
export declare function concatenateFields(data: DataFrame[], opts: ConcatenateTransformerOptions): DataFrame;
