import { GrafanaTheme2, ThresholdsConfig } from '@grafana/data';
import { GraphThresholdsStyleConfig } from '@grafana/schema';
export interface UPlotThresholdOptions {
    scaleKey: string;
    thresholds: ThresholdsConfig;
    config: GraphThresholdsStyleConfig;
    theme: GrafanaTheme2;
    hardMin?: number | null;
    hardMax?: number | null;
    softMin?: number | null;
    softMax?: number | null;
}
export declare function getThresholdsDrawHook(options: UPlotThresholdOptions): (u: uPlot) => void;
