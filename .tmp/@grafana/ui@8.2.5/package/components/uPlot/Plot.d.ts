import React from 'react';
import uPlot from 'uplot';
import { PlotProps } from './types';
declare type UPlotChartState = {
    plot: uPlot | null;
};
/**
 * @internal
 * uPlot abstraction responsible for plot initialisation, setup and refresh
 * Receives a data frame that is x-axis aligned, as of https://github.com/leeoniya/uPlot/tree/master/docs#data-format
 * Exposes context for uPlot instance access
 */
export declare class UPlotChart extends React.Component<PlotProps, UPlotChartState> {
    plotContainer: React.RefObject<HTMLDivElement>;
    plotCanvasBBox: React.RefObject<DOMRect>;
    constructor(props: PlotProps);
    reinitPlot(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: PlotProps): void;
    render(): JSX.Element;
}
export {};
