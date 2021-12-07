import React from 'react';
import { GraphSeriesXY } from '@grafana/data';
export interface GraphSeriesTogglerAPI {
    onSeriesToggle: (label: string, event: React.MouseEvent<HTMLElement>) => void;
    toggledSeries: GraphSeriesXY[];
}
export interface GraphSeriesTogglerProps {
    children: (api: GraphSeriesTogglerAPI) => JSX.Element;
    series: GraphSeriesXY[];
    onHiddenSeriesChanged?: (hiddenSeries: string[]) => void;
}
export interface GraphSeriesTogglerState {
    hiddenSeries: string[];
    toggledSeries: GraphSeriesXY[];
}
export declare class GraphSeriesToggler extends React.Component<GraphSeriesTogglerProps, GraphSeriesTogglerState> {
    constructor(props: GraphSeriesTogglerProps);
    componentDidUpdate(prevProps: Readonly<GraphSeriesTogglerProps>): void;
    onSeriesToggle(label: string, event: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
