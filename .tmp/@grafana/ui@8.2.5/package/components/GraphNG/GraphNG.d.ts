import React from 'react';
import { AlignedData } from 'uplot';
import { Themeable2 } from '../../types';
import { DataFrame, TimeRange, TimeZone } from '@grafana/data';
import { VizLegendOptions } from '@grafana/schema';
import { PanelContext } from '../PanelChrome/PanelContext';
import { GraphNGLegendEvent, XYFieldMatchers } from './types';
import { UPlotConfigBuilder } from '../uPlot/config/UPlotConfigBuilder';
/**
 * @internal -- not a public API
 */
export declare const FIXED_UNIT = "__fixed";
/**
 * @internal -- not a public API
 */
export declare type PropDiffFn<T extends any = any> = (prev: T, next: T) => boolean;
export interface GraphNGProps extends Themeable2 {
    frames: DataFrame[];
    structureRev?: number;
    width: number;
    height: number;
    timeRange: TimeRange;
    timeZone: TimeZone;
    legend: VizLegendOptions;
    fields?: XYFieldMatchers;
    onLegendClick?: (event: GraphNGLegendEvent) => void;
    children?: (builder: UPlotConfigBuilder, alignedFrame: DataFrame) => React.ReactNode;
    prepConfig: (alignedFrame: DataFrame, allFrames: DataFrame[], getTimeRange: () => TimeRange) => UPlotConfigBuilder;
    propsToDiff?: Array<string | PropDiffFn>;
    preparePlotFrame?: (frames: DataFrame[], dimFields: XYFieldMatchers) => DataFrame;
    renderLegend: (config: UPlotConfigBuilder) => React.ReactElement | null;
}
/**
 * @internal -- not a public API
 */
export interface GraphNGState {
    alignedFrame: DataFrame;
    alignedData: AlignedData;
    config?: UPlotConfigBuilder;
}
/**
 * "Time as X" core component, expects ascending x
 */
export declare class GraphNG extends React.Component<GraphNGProps, GraphNGState> {
    static contextType: React.Context<PanelContext>;
    panelContext: PanelContext;
    private plotInstance;
    private subscription;
    constructor(props: GraphNGProps);
    getTimeRange: () => TimeRange;
    prepState(props: GraphNGProps, withConfig?: boolean): GraphNGState;
    componentDidMount(): void;
    componentDidUpdate(prevProps: GraphNGProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}
