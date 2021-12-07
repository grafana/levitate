import uPlot, { Cursor, Band, Hooks, Select, AlignedData, Padding } from 'uplot';
import { DataFrame, EventBus, Field, GrafanaTheme2, TimeRange, TimeZone } from '@grafana/data';
import { FacetedData, PlotConfig, PlotTooltipInterpolator } from '../types';
import { ScaleProps } from './UPlotScaleBuilder';
import { SeriesProps, UPlotSeriesBuilder } from './UPlotSeriesBuilder';
import { AxisProps } from './UPlotAxisBuilder';
import { AxisPlacement } from '@grafana/schema';
import { UPlotThresholdOptions } from './UPlotThresholds';
declare type PrepData = (frames: DataFrame[]) => AlignedData | FacetedData;
export declare class UPlotConfigBuilder {
    private series;
    private axes;
    private scales;
    private bands;
    private cursor;
    private isStacking;
    private select;
    private hasLeftAxis;
    private hooks;
    private tz;
    private sync;
    private mode;
    private frames;
    private thresholds;
    private tooltipInterpolator;
    private padding?;
    prepData: PrepData | undefined;
    constructor(timeZone?: TimeZone);
    scaleKeys: [string, string];
    addHook<T extends keyof Hooks.Defs>(type: T, hook: Hooks.Defs[T]): void;
    addThresholds(options: UPlotThresholdOptions): void;
    addAxis(props: AxisProps): void;
    getAxisPlacement(scaleKey: string): AxisPlacement;
    setCursor(cursor?: Cursor): void;
    setMode(mode: uPlot.Mode): void;
    setSelect(select: Select): void;
    setStacking(enabled?: boolean): void;
    addSeries(props: SeriesProps): void;
    getSeries(): UPlotSeriesBuilder[];
    /** Add or update the scale with the scale key */
    addScale(props: ScaleProps): void;
    addBand(band: Band): void;
    setTooltipInterpolator(interpolator: PlotTooltipInterpolator): void;
    getTooltipInterpolator(): PlotTooltipInterpolator | undefined;
    setPrepData(prepData: PrepData): void;
    setSync(): void;
    hasSync(): boolean;
    setPadding(padding: Padding): void;
    getConfig(): PlotConfig;
    private tzDate;
    private ensureNonOverlappingAxes;
}
export declare type Renderers = Array<{
    fieldMap: Record<string, string>;
    indicesOnly: string[];
    init: (config: UPlotConfigBuilder, fieldIndices: Record<string, number>) => void;
}>;
/** @alpha */
declare type UPlotConfigPrepOpts<T extends Record<string, any> = {}> = {
    frame: DataFrame;
    theme: GrafanaTheme2;
    timeZone: TimeZone;
    getTimeRange: () => TimeRange;
    eventBus: EventBus;
    allFrames: DataFrame[];
    renderers?: Renderers;
    tweakScale?: (opts: ScaleProps, forField: Field) => ScaleProps;
    tweakAxis?: (opts: AxisProps, forField: Field) => AxisProps;
} & T;
/** @alpha */
export declare type UPlotConfigPrepFn<T extends {} = {}> = (opts: UPlotConfigPrepOpts<T>) => UPlotConfigBuilder;
export {};
