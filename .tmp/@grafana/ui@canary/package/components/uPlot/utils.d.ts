import { DataFrame, Field } from '@grafana/data';
import { VizLegendOptions } from '@grafana/schema';
import uPlot, { AlignedData, Options } from 'uplot';
export declare function timeFormatToTemplate(f: string): string;
export declare const DEFAULT_PLOT_CONFIG: Partial<Options>;
/** @internal */
interface StackMeta {
    totals: AlignedData;
}
/** @internal */
export declare function preparePlotData(frames: DataFrame[], onStackMeta?: (meta: StackMeta) => void, legend?: VizLegendOptions): AlignedData;
export declare function collectStackingGroups(f: Field, groups: Map<string, number[]>, seriesIdx: number): void;
/**
 * Finds y axis midpoint for point at given idx (css pixels relative to uPlot canvas)
 * @internal
 **/
export declare function findMidPointYPosition(u: uPlot, idx: number): number | undefined;
/** @internal */
export declare const pluginLogger: import("../../utils/logger").Logger;
export declare const pluginLog: (...t: any[]) => void;
declare type OrderIdsByCalcsOptions = {
    legend?: VizLegendOptions;
    ids: number[];
    frame: DataFrame;
};
export declare function orderIdsByCalcs({ legend, ids, frame }: OrderIdsByCalcsOptions): number[];
export {};
