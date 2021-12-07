import { GrafanaTheme2, TimeZone } from '@grafana/data';
import { Axis } from 'uplot';
import { PlotConfigBuilder } from '../types';
import { AxisPlacement } from '@grafana/schema';
export interface AxisProps {
    scaleKey: string;
    theme: GrafanaTheme2;
    label?: string;
    show?: boolean;
    size?: number | null;
    gap?: number;
    placement?: AxisPlacement;
    grid?: Axis.Grid;
    ticks?: boolean;
    formatValue?: (v: any) => string;
    incrs?: Axis.Incrs;
    splits?: Axis.Splits;
    values?: Axis.Values;
    isTime?: boolean;
    timeZone?: TimeZone;
}
export declare class UPlotAxisBuilder extends PlotConfigBuilder<AxisProps, Axis> {
    merge(props: AxisProps): void;
    getConfig(): Axis;
}
export declare function getUPlotSideFromAxis(axis: AxisPlacement): 0 | 1 | 3 | 2;
