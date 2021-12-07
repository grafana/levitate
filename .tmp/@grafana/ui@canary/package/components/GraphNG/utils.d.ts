import { XYFieldMatchers } from './types';
import { DataFrame, FieldConfig } from '@grafana/data';
import { GraphFieldConfig } from '@grafana/schema';
export declare function preparePlotFrame(frames: DataFrame[], dimFields: XYFieldMatchers): DataFrame | undefined;
export declare function buildScaleKey(config: FieldConfig<GraphFieldConfig>): string;
