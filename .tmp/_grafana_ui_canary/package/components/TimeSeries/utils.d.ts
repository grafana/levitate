import { DashboardCursorSync, DataFrame } from '@grafana/data';
import { UPlotConfigPrepFn } from '../uPlot/config/UPlotConfigBuilder';
import { VizLegendOptions } from '@grafana/schema';
export declare const preparePlotConfigBuilder: UPlotConfigPrepFn<{
    sync: DashboardCursorSync;
    legend?: VizLegendOptions;
}>;
export declare function getNamesToFieldIndex(frame: DataFrame, allFrames: DataFrame[]): Map<string, number>;
