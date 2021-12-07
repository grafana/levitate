import { FC } from 'react';
export interface Props {
    placeholder?: string;
    /** Array of selected tags */
    tags?: string[];
    onChange: (tags: string[]) => void;
    width?: number;
    className?: string;
    /** Toggle disabled state */
    disabled?: boolean;
    /** Enable adding new tags when input loses focus */
    addOnBlur?: boolean;
    /** Toggle invalid state */
    invalid?: boolean;
}
export declare const TagsInput: FC<Props>;
