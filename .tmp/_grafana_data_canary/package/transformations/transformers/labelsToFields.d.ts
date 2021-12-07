import { SynchronousDataTransformerInfo } from '../../types';
export declare enum LabelsToFieldsMode {
    Columns = "columns",
    Rows = "rows"
}
export interface LabelsToFieldsOptions {
    mode?: LabelsToFieldsMode;
    /** When empty, this will keep all labels, otherise it will keep only labels matching the value */
    keepLabels?: string[];
    /**
     * When in column mode and if set this will use this label's value as the value field name.
     */
    valueLabel?: string;
}
export declare const labelsToFieldsTransformer: SynchronousDataTransformerInfo<LabelsToFieldsOptions>;
