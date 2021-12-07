import { SelectableValue } from '@grafana/data';
import { AxisPlacement, BarAlignment, GraphDrawStyle, GraphGradientMode, GraphTresholdsStyleMode, LineInterpolation, VisibilityMode, StackingMode } from '@grafana/schema';
/**
 * @alpha
 */
export declare const graphFieldOptions: {
    drawStyle: SelectableValue<GraphDrawStyle>[];
    lineInterpolation: SelectableValue<LineInterpolation>[];
    barAlignment: SelectableValue<BarAlignment>[];
    showPoints: SelectableValue<VisibilityMode>[];
    axisPlacement: SelectableValue<AxisPlacement>[];
    fillGradient: SelectableValue<GraphGradientMode>[];
    stacking: SelectableValue<StackingMode>[];
    thresholdsDisplayModes: SelectableValue<GraphTresholdsStyleMode>[];
};
