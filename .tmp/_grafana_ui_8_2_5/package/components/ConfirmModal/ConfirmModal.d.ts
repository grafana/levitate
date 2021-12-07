import React from 'react';
import { IconName } from '../../types/icon';
export interface ConfirmModalProps {
    /** Toggle modal's open/closed state */
    isOpen: boolean;
    /** Title for the modal header */
    title: string;
    /** Modal content */
    body: React.ReactNode;
    /** Modal description */
    description?: React.ReactNode;
    /** Text for confirm button */
    confirmText: string;
    /** Text for dismiss button */
    dismissText?: string;
    /** Icon for the modal header */
    icon?: IconName;
    /** Text user needs to fill in before confirming */
    confirmationText?: string;
    /** Text for alternative button */
    alternativeText?: string;
    /** Confirm action callback */
    onConfirm(): void;
    /** Dismiss action callback */
    onDismiss(): void;
    /** Alternative action callback */
    onAlternative?(): void;
}
export declare const ConfirmModal: ({ isOpen, title, body, description, confirmText, confirmationText, dismissText, alternativeText, icon, onConfirm, onDismiss, onAlternative, }: ConfirmModalProps) => JSX.Element;
