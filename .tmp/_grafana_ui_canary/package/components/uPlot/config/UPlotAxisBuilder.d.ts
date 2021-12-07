import { GrafanaTheme2, TimeZone } from '@grafana/data';
import uPlot, { Axis } from 'uplot';
import { PlotConfigBuilder } from '../types';
import { AxisPlacement } from '@grafana/schema';
export interface AxisProps {
    scaleKey: string;
    theme: GrafanaTheme2;
    label?: string;
    show?: boolean;
    size?: number | null;
    gap?: number;
    tickLabelRotation?: number;
    placement?: AxisPlacement;
    grid?: Axis.Grid;
    ticks?: Axis.Ticks;
    filter?: Axis.Filter;
    space?: Axis.Space;
    formatValue?: (v: any) => string;
    incrs?: Axis.Incrs;
    splits?: Axis.Splits;
    values?: Axis.Values;
    isTime?: boolean;
    timeZone?: TimeZone;
}
export declare const UPLOT_AXIS_FONT_SIZE = 12;
export declare class UPlotAxisBuilder extends PlotConfigBuilder<AxisProps, Axis> {
    merge(props: AxisProps): void;
    calculateSpace(self: uPlot, axisIdx: number, scaleMin: number, scaleMax: number, plotDim: number): number;
    /** height of x axis or width of y axis in CSS pixels alloted for values, gap & ticks, but excluding axis label */
    calculateAxisSize(self: uPlot, values: string[], axisIdx: number): number;
    getConfig(): Axis;
}
export declare function getUPlotSideFromAxis(axis: AxisPlacement): 0 | 1 | 3 | 2;
