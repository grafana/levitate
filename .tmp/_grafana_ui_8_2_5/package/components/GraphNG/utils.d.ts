import { XYFieldMatchers } from './types';
import { DataFrame } from '@grafana/data';
export declare function preparePlotFrame(frames: DataFrame[], dimFields: XYFieldMatchers): DataFrame | undefined;
