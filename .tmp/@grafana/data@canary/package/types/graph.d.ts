import { DisplayValue } from './displayValue';
import { Field } from './dataFrame';
export interface YAxis {
    index: number;
    min?: number;
    tickDecimals?: number;
}
export declare type GraphSeriesValue = number | null;
/** View model projection of a series */
export interface GraphSeriesXY {
    color?: string;
    data: GraphSeriesValue[][];
    isVisible: boolean;
    label: string;
    yAxis: YAxis;
    timeField: Field;
    valueField: Field;
    seriesIndex: number;
    timeStep: number;
    info?: DisplayValue[];
}
export interface CreatePlotOverlay {
    (element: JQuery, event: any, plot: {
        getOptions: () => {
            events: {
                manager: any;
            };
        };
    }): any;
}
