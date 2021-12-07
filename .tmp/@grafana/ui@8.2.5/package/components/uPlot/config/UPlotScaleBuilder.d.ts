import { Scale } from 'uplot';
import { PlotConfigBuilder } from '../types';
import { ScaleOrientation, ScaleDirection, ScaleDistribution } from '@grafana/schema';
export interface ScaleProps {
    scaleKey: string;
    isTime?: boolean;
    min?: number | null;
    max?: number | null;
    softMin?: number | null;
    softMax?: number | null;
    range?: Scale.Range;
    distribution?: ScaleDistribution;
    orientation: ScaleOrientation;
    direction: ScaleDirection;
    log?: number;
}
export declare class UPlotScaleBuilder extends PlotConfigBuilder<ScaleProps, Scale> {
    merge(props: ScaleProps): void;
    getConfig(): Scale;
}
export declare function optMinMax(minmax: 'min' | 'max', a?: number | null, b?: number | null): undefined | number | null;
