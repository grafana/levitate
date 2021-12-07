import React from 'react';
import uPlot, { Options, AlignedData } from 'uplot';
import { TimeRange } from '@grafana/data';
import { UPlotConfigBuilder } from './config/UPlotConfigBuilder';
export declare type PlotConfig = Pick<Options, 'mode' | 'series' | 'scales' | 'axes' | 'cursor' | 'bands' | 'hooks' | 'select' | 'tzDate' | 'padding'>;
export interface PlotPluginProps {
    id: string;
}
export declare type FacetValues = any[];
export declare type FacetSeries = FacetValues[];
export declare type FacetedData = [_: null, ...series: FacetSeries];
export interface PlotProps {
    data: AlignedData | FacetedData;
    width: number;
    height: number;
    config: UPlotConfigBuilder;
    timeRange: TimeRange;
    children?: React.ReactNode;
    plotRef?: (u: uPlot) => void;
}
export declare abstract class PlotConfigBuilder<P, T> {
    props: P;
    constructor(props: P);
    abstract getConfig(): T;
}
/**
 * @alpha
 */
export declare type PlotTooltipInterpolator = (updateActiveSeriesIdx: (sIdx: number | null) => void, updateActiveDatapointIdx: (dIdx: number | null) => void, updateTooltipPosition: (clear?: boolean) => void, u: uPlot) => void;
export interface PlotSelection {
    min: number;
    max: number;
    bbox: {
        top: number;
        left: number;
        width: number;
        height: number;
    };
}
