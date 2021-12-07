import React, { FC } from 'react';
export interface Props {
    value: string | undefined;
    placeholder?: string;
    width?: number;
    onChange: (value: string) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    autoFocus?: boolean;
}
export declare const FilterInput: FC<Props>;
