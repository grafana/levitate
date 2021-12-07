import React from 'react';
import { AlignedData } from 'uplot';
import { Themeable2 } from '../../types';
import { DataFrame, DataHoverEvent, Field, LegacyGraphHoverEvent, TimeRange, TimeZone } from '@grafana/data';
import { VizLegendOptions } from '@grafana/schema';
import { PanelContext } from '../PanelChrome/PanelContext';
import { GraphNGLegendEvent, XYFieldMatchers } from './types';
import { Renderers, UPlotConfigBuilder } from '../uPlot/config/UPlotConfigBuilder';
import { ScaleProps } from '../uPlot/config/UPlotScaleBuilder';
import { AxisProps } from '../uPlot/config/UPlotAxisBuilder';
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
    renderers?: Renderers;
    tweakScale?: (opts: ScaleProps, forField: Field) => ScaleProps;
    tweakAxis?: (opts: AxisProps, forField: Field) => AxisProps;
    onLegendClick?: (event: GraphNGLegendEvent) => void;
    children?: (builder: UPlotConfigBuilder, alignedFrame: DataFrame) => React.ReactNode;
    prepConfig: (alignedFrame: DataFrame, allFrames: DataFrame[], getTimeRange: () => TimeRange) => UPlotConfigBuilder;
    propsToDiff?: Array<string | PropDiffFn>;
    preparePlotFrame?: (frames: DataFrame[], dimFields: XYFieldMatchers) => DataFrame;
    renderLegend: (config: UPlotConfigBuilder) => React.ReactElement | null;
    /**
     * needed for propsToDiff to re-init the plot & config
     * this is a generic approach to plot re-init, without having to specify which panel-level options
     * should cause invalidation. we can drop this in favor of something like panelOptionsRev that gets passed in
     * similar to structureRev. then we can drop propsToDiff entirely.
     */
    options?: Record<string, any>;
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
    handleCursorUpdate(evt: DataHoverEvent | LegacyGraphHoverEvent): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: GraphNGProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}
