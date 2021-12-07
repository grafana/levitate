import React from 'react';
import { DataFrame, CSVConfig } from '@grafana/data';
import { Themeable } from '../../types/theme';
interface Props extends Themeable {
    config?: CSVConfig;
    text: string;
    width: string | number;
    height: string | number;
    onSeriesParsed: (data: DataFrame[], text: string) => void;
}
interface State {
    text: string;
    data: DataFrame[];
}
/**
 * Expects the container div to have size set and will fill it 100%
 */
export declare class UnThemedTableInputCSV extends React.PureComponent<Props, State> {
    constructor(props: Props);
    readCSV: any;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    onTextChange: (event: any) => void;
    render(): JSX.Element;
}
export declare const TableInputCSV: React.FunctionComponent<{
    text: string;
    config?: CSVConfig | undefined;
    height: string | number;
    width: string | number;
    onSeriesParsed: (data: DataFrame[], text: string) => void;
}>;
export {};
