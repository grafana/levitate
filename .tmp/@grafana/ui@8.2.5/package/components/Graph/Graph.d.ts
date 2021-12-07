/// <reference types="jquery" />
import React, { PureComponent } from 'react';
import { TimeRange, GraphSeriesXY, TimeZone } from '@grafana/data';
import { FlotPosition, FlotItem } from './types';
import { VizTooltipProps } from '../VizTooltip';
export interface GraphProps {
    ariaLabel?: string;
    children?: JSX.Element | JSX.Element[];
    series: GraphSeriesXY[];
    timeRange: TimeRange;
    timeZone?: TimeZone;
    showLines?: boolean;
    showPoints?: boolean;
    showBars?: boolean;
    width: number;
    height: number;
    isStacked?: boolean;
    lineWidth?: number;
    onHorizontalRegionSelected?: (from: number, to: number) => void;
}
interface GraphState {
    pos?: FlotPosition;
    contextPos?: FlotPosition;
    isTooltipVisible: boolean;
    isContextVisible: boolean;
    activeItem?: FlotItem<GraphSeriesXY>;
    contextItem?: FlotItem<GraphSeriesXY>;
}
export declare class Graph extends PureComponent<GraphProps, GraphState> {
    static defaultProps: {
        showLines: boolean;
        showPoints: boolean;
        showBars: boolean;
        isStacked: boolean;
        lineWidth: number;
    };
    state: GraphState;
    element: HTMLElement | null;
    $element: any;
    componentDidUpdate(prevProps: GraphProps, prevState: GraphState): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onPlotSelected: (event: JQueryEventObject, ranges: {
        xaxis: {
            from: number;
            to: number;
        };
    }) => void;
    onPlotHover: (event: JQueryEventObject, pos: FlotPosition, item?: FlotItem<GraphSeriesXY> | undefined) => void;
    onPlotClick: (event: JQueryEventObject, contextPos: FlotPosition, item?: FlotItem<GraphSeriesXY> | undefined) => void;
    getYAxes(series: GraphSeriesXY[]): {
        show: boolean;
        index: number;
        position: string;
        min: number | null | undefined;
        tickDecimals: number | null | undefined;
    }[] | {
        show: boolean;
        min: number;
        max: number;
    }[];
    renderTooltip: () => React.ReactElement<VizTooltipProps, string | React.JSXElementConstructor<any>> | null;
    renderContextMenu: () => JSX.Element | null;
    getBarWidth: () => number;
    draw(): void;
    render(): JSX.Element;
}
export default Graph;
