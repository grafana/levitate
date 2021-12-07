import React, { HTMLAttributes } from 'react';
import { GrafanaTheme2 } from '@grafana/data';
export interface FieldProps extends HTMLAttributes<HTMLDivElement> {
    /** Form input element, i.e Input or Switch */
    children: React.ReactElement;
    /** Label for the field */
    label?: React.ReactNode;
    /** Description of the field */
    description?: React.ReactNode;
    /** Indicates if field is in invalid state */
    invalid?: boolean;
    /** Indicates if field is in loading state */
    loading?: boolean;
    /** Indicates if field is disabled */
    disabled?: boolean;
    /** Indicates if field is required */
    required?: boolean;
    /** Error message to display */
    error?: string | null;
    /** Indicates horizontal layout of the field */
    horizontal?: boolean;
    /** make validation message overflow horizontally. Prevents pushing out adjacent inline components */
    validationMessageHorizontalOverflow?: boolean;
    className?: string;
}
export declare const getFieldStyles: (theme: GrafanaTheme2) => {
    field: string;
    fieldHorizontal: string;
    fieldValidationWrapper: string;
    fieldValidationWrapperHorizontal: string;
    validationMessageHorizontalOverflow: string;
};
export declare const Field: React.FC<FieldProps>;
