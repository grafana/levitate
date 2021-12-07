import { SynchronousDataTransformerInfo } from '../../types';
import { DataFrame, Field } from '../../types/dataFrame';
import { GrafanaTheme2 } from '../../themes';
/**
 * @internal
 */
export declare const histogramBucketSizes: number[];
/**
 * @alpha
 */
export interface HistogramTransformerOptions {
    bucketSize?: number;
    bucketOffset?: number;
    combine?: boolean;
}
/**
 * This is a helper class to use the same text in both a panel and transformer UI
 *
 * @internal
 */
export declare const histogramFieldInfo: {
    bucketSize: {
        name: string;
        description: undefined;
    };
    bucketOffset: {
        name: string;
        description: string;
    };
    combine: {
        name: string;
        description: string;
    };
};
/**
 * @alpha
 */
export declare const histogramTransformer: SynchronousDataTransformerInfo<HistogramTransformerOptions>;
/**
 * @internal
 */
export declare const histogramFrameBucketMinFieldName = "BucketMin";
/**
 * @internal
 */
export declare const histogramFrameBucketMaxFieldName = "BucketMax";
/**
 * @alpha
 */
export interface HistogramFields {
    bucketMin: Field;
    bucketMax: Field;
    counts: Field[];
}
/**
 * Given a frame, find the explicit histogram fields
 *
 * @alpha
 */
export declare function getHistogramFields(frame: DataFrame): HistogramFields | undefined;
/**
 * @alpha
 */
export declare function buildHistogram(frames: DataFrame[], options?: HistogramTransformerOptions): HistogramFields | null;
/**
 * @internal
 */
export declare function histogramFieldsToFrame(info: HistogramFields, theme?: GrafanaTheme2): DataFrame;
