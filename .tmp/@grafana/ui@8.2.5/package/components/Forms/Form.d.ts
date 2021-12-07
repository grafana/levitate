import React, { HTMLProps } from 'react';
import { Mode, DeepPartial, UnpackNestedValue, SubmitHandler } from 'react-hook-form';
import { FormAPI } from '../../types';
interface FormProps<T> extends Omit<HTMLProps<HTMLFormElement>, 'onSubmit'> {
    validateOn?: Mode;
    validateOnMount?: boolean;
    validateFieldsOnMount?: string | string[];
    defaultValues?: UnpackNestedValue<DeepPartial<T>>;
    onSubmit: SubmitHandler<T>;
    children: (api: FormAPI<T>) => React.ReactNode;
    /** Sets max-width for container. Use it instead of setting individual widths on inputs.*/
    maxWidth?: number | 'none';
}
export declare function Form<T>({ defaultValues, onSubmit, validateOnMount, validateFieldsOnMount, children, validateOn, maxWidth, ...htmlProps }: FormProps<T>): JSX.Element;
export {};
