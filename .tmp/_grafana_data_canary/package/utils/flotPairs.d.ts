import { Field } from '../types/dataFrame';
import { NullValueMode } from '../types/data';
import { GraphSeriesValue } from '../types/graph';
import { TimeRange } from '../types/time';
export interface FlotPairsOptions {
    xField: Field;
    yField: Field;
    nullValueMode?: NullValueMode;
}
export declare function getFlotPairs({ xField, yField, nullValueMode }: FlotPairsOptions): GraphSeriesValue[][];
/**
 * Returns a constant series based on the first value from the provide series.
 * @param seriesData Series
 * @param range Start and end time for the constant series
 */
export declare function getFlotPairsConstant(seriesData: GraphSeriesValue[][], range: TimeRange): GraphSeriesValue[][];
