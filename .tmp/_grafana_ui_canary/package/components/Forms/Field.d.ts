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
    /**
     *  A unique id that associates the label of the Field component with the control with the unique id.
     *  If the `htmlFor` property is missing the `htmlFor` will be inferred from the `id` or `inputId` property of the first child.
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for
     */
    htmlFor?: string;
}
export declare const getFieldStyles: import("memoize-one").MemoizedFn<(theme: GrafanaTheme2) => {
    field: string;
    fieldHorizontal: string;
    fieldValidationWrapper: string;
    fieldValidationWrapperHorizontal: string;
    validationMessageHorizontalOverflow: string;
}>;
export declare const Field: React.FC<FieldProps>;
