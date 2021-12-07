import React from 'react';
import { DataFrame } from '@grafana/data';
import { UPlotConfigBuilder } from './config/UPlotConfigBuilder';
import { VizLegendOptions } from '@grafana/schema';
import { VizLayoutLegendProps } from '../VizLayout/VizLayout';
interface PlotLegendProps extends VizLegendOptions, Omit<VizLayoutLegendProps, 'children'> {
    data: DataFrame[];
    config: UPlotConfigBuilder;
}
export declare const PlotLegend: React.FC<PlotLegendProps>;
export {};
