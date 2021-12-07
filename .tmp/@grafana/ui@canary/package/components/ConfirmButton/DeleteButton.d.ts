import { FC } from 'react';
import { ComponentSize } from '../../types/size';
export interface Props {
    /** Confirm action callback */
    onConfirm(): void;
    /** Button size */
    size?: ComponentSize;
    /** Disable button click action */
    disabled?: boolean;
    'aria-label'?: string;
}
export declare const DeleteButton: FC<Props>;
