import { PureComponent, ChangeEvent } from 'react';
import { Threshold, ThresholdsConfig, ThresholdsMode } from '@grafana/data';
export interface Props {
    thresholds: ThresholdsConfig;
    onChange: (thresholds: ThresholdsConfig) => void;
}
interface State {
    steps: ThresholdWithKey[];
}
export declare class ThresholdsEditor extends PureComponent<Props, State> {
    private latestThresholdInputRef;
    constructor(props: Props);
    onAddThreshold: () => void;
    onRemoveThreshold: (threshold: ThresholdWithKey) => void;
    onChangeThresholdValue: (event: ChangeEvent<HTMLInputElement>, threshold: ThresholdWithKey) => void;
    onChangeThresholdColor: (threshold: ThresholdWithKey, color: string) => void;
    onBlur: () => void;
    onChange: () => void;
    onModeChanged: (value?: ThresholdsMode | undefined) => void;
    renderInput(threshold: ThresholdWithKey, styles: ThresholdStyles, idx: number): JSX.Element;
    render(): JSX.Element;
}
interface ThresholdWithKey extends Threshold {
    key: number;
}
export declare function thresholdsWithoutKey(thresholds: ThresholdsConfig, steps: ThresholdWithKey[]): ThresholdsConfig;
interface ThresholdStyles {
    wrapper: string;
    thresholds: string;
    item: string;
    colorPicker: string;
    addButton: string;
    percentIcon: string;
    inputPrefix: string;
    trashIcon: string;
}
export {};
