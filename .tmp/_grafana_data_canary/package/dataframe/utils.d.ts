import { DataFrame } from '../types/dataFrame';
export declare function isTimeSerie(frame: DataFrame): boolean;
export declare function isTimeSeries(data: DataFrame[]): boolean;
/**
 * Indicates if there is any time field in the array of data frames
 * @param data
 */
export declare function anySeriesWithTimeField(data: DataFrame[]): boolean;
