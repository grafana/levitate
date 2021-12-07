import React, { PropsWithChildren } from 'react';
import { IconName } from '../../types';
export interface Props {
    /** @deprecated no longer used */
    icon?: IconName;
    /** @deprecated no longer used */
    iconTooltip?: string;
    /** Title for the modal or custom header element */
    title: string | JSX.Element;
    className?: string;
    contentClassName?: string;
    closeOnEscape?: boolean;
    closeOnBackdropClick?: boolean;
    isOpen?: boolean;
    onDismiss?: () => void;
    /** If not set will call onDismiss if that is set. */
    onClickBackdrop?: () => void;
}
export declare function Modal(props: PropsWithChildren<Props>): JSX.Element | null;
export declare namespace Modal {
    var ButtonRow: typeof ModalButtonRow;
}
declare function ModalButtonRow({ leftItems, children }: {
    leftItems?: React.ReactNode;
    children: React.ReactNode;
}): JSX.Element;
export {};
