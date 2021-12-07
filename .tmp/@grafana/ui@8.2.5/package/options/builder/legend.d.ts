import { PanelOptionsEditorBuilder } from '@grafana/data';
import { OptionsWithLegend } from '@grafana/schema';
/**
 * @alpha
 */
export declare function addLegendOptions<T extends OptionsWithLegend>(builder: PanelOptionsEditorBuilder<T>, includeLegendCalcs?: boolean): void;
