import { PureComponent } from 'react';
interface Props {
    className?: string;
    json: {};
    config?: any;
    open?: number;
    onDidRender?: (formattedJson: any) => void;
}
export declare class JSONFormatter extends PureComponent<Props> {
    private wrapperRef;
    static defaultProps: {
        open: number;
        config: {
            animateOpen: boolean;
        };
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    renderJson: () => void;
    render(): JSX.Element;
}
export {};
