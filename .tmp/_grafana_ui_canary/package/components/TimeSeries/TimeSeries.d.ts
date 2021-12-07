import React from 'react';
import { DataFrame, TimeRange } from '@grafana/data';
import { GraphNGProps } from '../GraphNG/GraphNG';
import { UPlotConfigBuilder } from '../uPlot/config/UPlotConfigBuilder';
import { PanelContext } from '../PanelChrome/PanelContext';
declare type TimeSeriesProps = Omit<GraphNGProps, 'prepConfig' | 'propsToDiff' | 'renderLegend'>;
export declare class UnthemedTimeSeries extends React.Component<TimeSeriesProps> {
    static contextType: React.Context<PanelContext>;
    panelContext: PanelContext;
    prepConfig: (alignedFrame: DataFrame, allFrames: DataFrame[], getTimeRange: () => TimeRange) => UPlotConfigBuilder;
    renderLegend: (config: UPlotConfigBuilder) => JSX.Element | null;
    render(): JSX.Element;
}
export declare const TimeSeries: React.FunctionComponent<{
    timeZone: string;
    options?: Record<string, any> | undefined;
    fields?: import("../GraphNG/types").XYFieldMatchers | undefined;
    children?: ((builder: UPlotConfigBuilder, alignedFrame: DataFrame) => React.ReactNode) | undefined;
    legend: import("@grafana/schema").VizLegendOptions;
    height: number;
    width: number;
    timeRange: TimeRange;
    frames: DataFrame[];
    structureRev?: number | undefined;
    renderers?: import("../uPlot/config/UPlotConfigBuilder").Renderers | undefined;
    tweakScale?: ((opts: import("../uPlot/config/UPlotScaleBuilder").ScaleProps, forField: import("@grafana/data").Field<any, import("@grafana/data").Vector<any>>) => import("../uPlot/config/UPlotScaleBuilder").ScaleProps) | undefined;
    tweakAxis?: ((opts: import("../uPlot/config/UPlotAxisBuilder").AxisProps, forField: import("@grafana/data").Field<any, import("@grafana/data").Vector<any>>) => import("../uPlot/config/UPlotAxisBuilder").AxisProps) | undefined;
    onLegendClick?: ((event: import("..").GraphNGLegendEvent) => void) | undefined;
    preparePlotFrame?: ((frames: DataFrame[], dimFields: import("../GraphNG/types").XYFieldMatchers) => DataFrame) | undefined;
}>;
export {};
