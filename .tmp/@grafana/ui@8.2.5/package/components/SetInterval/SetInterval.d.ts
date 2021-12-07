import { PureComponent } from 'react';
import { SelectableValue } from '@grafana/data';
export declare function getIntervalFromString(strInterval: string): SelectableValue<number>;
interface Props {
    func: () => any;
    loading: boolean;
    interval: string;
}
export declare class SetInterval extends PureComponent<Props> {
    private propsSubject;
    private subscription;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    render(): null;
}
export {};
