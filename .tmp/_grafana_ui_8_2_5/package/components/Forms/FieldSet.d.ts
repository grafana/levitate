import React, { FC, HTMLProps } from 'react';
export interface Props extends HTMLProps<HTMLFieldSetElement> {
    children: React.ReactNode[] | React.ReactNode;
    /** Text for the fieldset's legend */
    label?: string;
}
export declare const FieldSet: FC<Props>;
