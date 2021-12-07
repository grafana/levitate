import { DashboardCursorSync, DataFrame } from '@grafana/data';
import { UPlotConfigPrepFn } from '../uPlot/config/UPlotConfigBuilder';
export declare const preparePlotConfigBuilder: UPlotConfigPrepFn<{
    sync: DashboardCursorSync;
}>;
export declare function getNamesToFieldIndex(frame: DataFrame, allFrames: DataFrame[]): Map<string, number>;
