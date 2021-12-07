import { DataFrameFieldIndex, FieldColorMode, GrafanaTheme2, ThresholdsConfig } from '@grafana/data';
import uPlot, { Series } from 'uplot';
import { BarConfig, GraphDrawStyle, FillConfig, GraphGradientMode, LineConfig, PointsConfig } from '@grafana/schema';
import { PlotConfigBuilder } from '../types';
export interface SeriesProps extends LineConfig, BarConfig, FillConfig, PointsConfig {
    scaleKey: string;
    pxAlign?: boolean;
    gradientMode?: GraphGradientMode;
    facets?: uPlot.Series.Facet[];
    /** Used when gradientMode is set to Scheme */
    thresholds?: ThresholdsConfig;
    colorMode?: FieldColorMode;
    hardMin?: number | null;
    hardMax?: number | null;
    softMin?: number | null;
    softMax?: number | null;
    drawStyle?: GraphDrawStyle;
    pathBuilder?: Series.PathBuilder | null;
    pointsFilter?: Series.Points.Filter | null;
    pointsBuilder?: Series.Points.Show | null;
    show?: boolean;
    dataFrameFieldIndex?: DataFrameFieldIndex;
    theme: GrafanaTheme2;
    value?: uPlot.Series.Value;
}
export declare class UPlotSeriesBuilder extends PlotConfigBuilder<SeriesProps, Series> {
    getConfig(): {
        show: boolean;
        class?: string | undefined;
        scale: string;
        auto?: boolean | undefined;
        sorted?: Series.Sorted | undefined;
        spanGaps: boolean | undefined;
        gaps?: Series.GapsRefiner | undefined;
        pxAlign: number | boolean | undefined;
        label?: string | undefined;
        value: Series.Value | (() => string);
        values?: Series.Values | undefined;
        paths?: Series.PathBuilder | undefined;
        points?: Series.Points | undefined;
        facets: Series.Facet[] | undefined;
        width?: number | undefined;
        stroke?: Series.Stroke | undefined;
        fill: Series.Fill | undefined;
        fillTo?: Series.FillTo | undefined;
        dash?: number[] | undefined;
        cap?: CanvasLineCap | undefined;
        alpha?: number | undefined;
        idxs?: Series.MinMaxIdxs | undefined;
        min?: number | undefined;
        max?: number | undefined;
    };
    private getLineColor;
    private getFill;
}
