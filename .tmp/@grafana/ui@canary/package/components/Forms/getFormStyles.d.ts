import { GrafanaTheme2 } from '@grafana/data';
import { ButtonVariant } from '../Button';
import { ComponentSize } from '../../types/size';
/** @deprecated */
export declare const getFormStyles: import("memoize-one").MemoizedFn<(theme: GrafanaTheme2, options: {
    variant: ButtonVariant;
    size: ComponentSize;
    invalid: boolean;
}) => {
    label: {
        label: string;
        labelContent: string;
        description: string;
        categories: string;
        chevron: string;
    };
    legend: {
        legend: string;
    };
    fieldValidationMessage: {
        vertical: string;
        horizontal: string;
        fieldValidationMessageIcon: string;
    };
    button: {
        button: string;
        disabled: string;
        img: string;
        icon: string;
        content: string;
    };
    input: {
        wrapper: string;
        inputWrapper: string;
        input: string;
        inputDisabled: string;
        addon: string;
        prefix: string;
        suffix: string;
        loadingIndicator: string;
    };
    checkbox: {
        wrapper: string;
        input: string;
        checkmark: string;
        label: string;
        description: string;
    };
}>;
