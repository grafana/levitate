import { DataFrame, DataFrameFieldIndex, Field } from '@grafana/data';
import { XYFieldMatchers } from './types';
import React from 'react';
/** @alpha */
interface GraphNGContextType {
    mapSeriesIndexToDataFrameFieldIndex: (index: number) => DataFrameFieldIndex;
    dimFields: XYFieldMatchers;
    data: DataFrame;
}
/** @alpha */
export declare const GraphNGContext: React.Context<GraphNGContextType>;
/**
 * @alpha
 * Exposes API for data frame inspection in Plot plugins
 */
export declare const useGraphNGContext: () => {
    dimFields: XYFieldMatchers;
    mapSeriesIndexToDataFrameFieldIndex: (index: number) => DataFrameFieldIndex;
    getXAxisField: () => Field<any, import("@grafana/data").Vector<any>> | null;
    alignedData: DataFrame;
};
export {};
