import React from 'react';
import { GrafanaTheme2 } from '@grafana/data';
export interface FieldValidationMessageProps {
    children: string;
    /** Override component style */
    className?: string;
    horizontal?: boolean;
}
export declare const getFieldValidationMessageStyles: import("memoize-one").MemoizedFn<(theme: GrafanaTheme2) => {
    vertical: string;
    horizontal: string;
    fieldValidationMessageIcon: string;
}>;
export declare const FieldValidationMessage: React.FC<FieldValidationMessageProps>;
