import { DashboardCursorSync, DataFrame, TimeZone } from '@grafana/data';
import { TooltipDisplayMode } from '@grafana/schema';
import React from 'react';
import uPlot from 'uplot';
import { UPlotConfigBuilder } from '../config/UPlotConfigBuilder';
interface TooltipPluginProps {
    timeZone: TimeZone;
    data: DataFrame;
    config: UPlotConfigBuilder;
    mode?: TooltipDisplayMode;
    sync?: DashboardCursorSync;
    renderTooltip?: (alignedFrame: DataFrame, seriesIdx: number | null, datapointIdx: number | null) => React.ReactNode;
}
/**
 * @alpha
 */
export declare const TooltipPlugin: React.FC<TooltipPluginProps>;
/**
 * Given uPlot cursor position, figure out position of the tooltip withing the canvas bbox
 * Tooltip is positioned relatively to a viewport
 * @internal
 **/
export declare function positionTooltip(u: uPlot, bbox: DOMRect): {
    x: number | undefined;
    y: number | undefined;
};
export {};
