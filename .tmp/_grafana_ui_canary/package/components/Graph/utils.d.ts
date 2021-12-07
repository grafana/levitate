import { GraphSeriesValue, Field } from '@grafana/data';
/**
 * Returns index of the closest datapoint BEFORE hover position
 *
 * @param posX
 * @param series
 */
export declare const findHoverIndexFromData: (xAxisDimension: Field, xPos: number) => number;
interface MultiSeriesHoverInfo {
    value: string;
    time: string;
    datapointIndex: number;
    seriesIndex: number;
    label?: string;
    color?: string;
}
/**
 * Returns information about closest datapoints when hovering over a Graph
 *
 * @param seriesList list of series visible on the Graph
 * @param pos mouse cursor position, based on jQuery.flot position
 */
export declare const getMultiSeriesGraphHoverInfo: (yAxisDimensions: Field[], xAxisDimensions: Field[], xAxisPosition: number, timeZone?: string | undefined) => {
    results: MultiSeriesHoverInfo[];
    time?: GraphSeriesValue | undefined;
};
export declare const graphTickFormatter: (epoch: number, axis: any) => string;
export declare const graphTimeFormat: (ticks: number | null, min: number | null, max: number | null) => string;
export {};
