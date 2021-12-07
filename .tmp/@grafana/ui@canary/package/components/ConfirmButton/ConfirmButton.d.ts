import React from 'react';
import { Themeable } from '../../types';
import { ComponentSize } from '../../types/size';
import { ButtonVariant } from '../Button';
export interface Props extends Themeable {
    /** Confirm action callback */
    onConfirm(): void;
    /** Custom button styles */
    className?: string;
    /** Button size */
    size?: ComponentSize;
    /** Text for the Confirm button */
    confirmText?: string;
    /** Disable button click action */
    disabled?: boolean;
    /** Variant of the Confirm button */
    confirmVariant?: ButtonVariant;
    /** Hide confirm actions when after of them is clicked */
    closeOnConfirm?: boolean;
    /** Move focus to button when mounted */
    autoFocus?: boolean;
    /** Optional on click handler for the original button */
    onClick?(): void;
    /** Callback for the cancel action */
    onCancel?(): void;
}
export declare const ConfirmButton: React.FunctionComponent<{
    disabled?: boolean | undefined;
    size?: ComponentSize | undefined;
    className?: string | undefined;
    onClick?: (() => void) | undefined;
    autoFocus?: boolean | undefined;
    onConfirm: () => void;
    confirmText?: string | undefined;
    confirmVariant?: ButtonVariant | undefined;
    closeOnConfirm?: boolean | undefined;
    onCancel?: (() => void) | undefined;
}>;
