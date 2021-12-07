import { PureComponent } from 'react';
import { VizOrientation } from '@grafana/data';
interface Props<V, D> {
    /**
     * Optionally precalculate dimensions to support consistent behavior between repeated
     * values.  Two typical patterns are:
     * 1) Calculate raw values like font size etc and pass them to each vis
     * 2) find the maximum input values and pass that to the vis
     */
    getAlignmentFactors?: (values: V[], width: number, height: number) => D;
    /**
     * Render a single value
     */
    renderValue: (props: VizRepeaterRenderValueProps<V, D>) => JSX.Element;
    height: number;
    width: number;
    source: any;
    getValues: () => V[];
    renderCounter: number;
    orientation: VizOrientation;
    itemSpacing?: number;
    /** When orientation is set to auto layout items in a grid */
    autoGrid?: boolean;
    minVizHeight?: number;
}
export interface VizRepeaterRenderValueProps<V, D = {}> {
    value: V;
    width: number;
    height: number;
    orientation: VizOrientation;
    alignmentFactors: D;
    /**
     * Total number of values being shown in repeater
     */
    count: number;
}
interface DefaultProps {
    itemSpacing: number;
}
interface State<V> {
    values: V[];
}
export declare class VizRepeater<V, D = {}> extends PureComponent<Props<V, D>, State<V>> {
    static defaultProps: DefaultProps;
    constructor(props: Props<V, D>);
    componentDidUpdate(prevProps: Props<V, D>): void;
    getOrientation(): VizOrientation;
    renderGrid(): JSX.Element;
    render(): JSX.Element;
}
export {};
