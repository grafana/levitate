import { PureComponent } from 'react';
import { SelectableValue } from '@grafana/data';
import { ToolbarButtonVariant } from '../Button';
export declare const defaultIntervals: string[];
export interface Props {
    intervals?: string[];
    onRefresh?: () => any;
    onIntervalChanged: (interval: string) => void;
    value?: string;
    tooltip?: string;
    isLoading?: boolean;
    isLive?: boolean;
    text?: string;
    noIntervalPicker?: boolean;
    width?: string;
    primary?: boolean;
}
export declare class RefreshPicker extends PureComponent<Props> {
    static offOption: {
        label: string;
        value: string;
        ariaLabel: string;
    };
    static liveOption: {
        label: string;
        value: string;
        ariaLabel: string;
    };
    static isLive: (refreshInterval?: string | undefined) => boolean;
    constructor(props: Props);
    onChangeSelect: (item: SelectableValue<string>) => void;
    getVariant(): ToolbarButtonVariant;
    render(): JSX.Element;
}
export declare function intervalsToOptions({ intervals }?: {
    intervals?: string[];
}): Array<SelectableValue<string>>;
