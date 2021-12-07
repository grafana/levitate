import { PureComponent } from 'react';
interface Style {
    [key: string]: string;
}
interface ParsedChunk {
    style: Style;
    text: string;
}
interface Props {
    value: string;
    highlight?: {
        searchWords: string[];
        highlightClassName: string;
    };
}
interface State {
    chunks: ParsedChunk[];
    prevValue: string;
}
export declare class LogMessageAnsi extends PureComponent<Props, State> {
    state: State;
    static getDerivedStateFromProps(props: Props, state: State): {
        chunks: ({
            style: Style;
            text: string;
        } | {
            text: string;
            style?: undefined;
        })[];
        prevValue: string;
    } | null;
    render(): (string | JSX.Element)[];
}
export {};
