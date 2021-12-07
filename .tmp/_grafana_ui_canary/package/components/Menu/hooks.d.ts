import { RefObject } from 'react';
/** @internal */
export interface UseMenuFocusProps {
    localRef: RefObject<HTMLDivElement>;
    isMenuOpen?: boolean;
    openedWithArrow?: boolean;
    setOpenedWithArrow?: (openedWithArrow: boolean) => void;
    close?: () => void;
    onOpen?: (focusOnItem: (itemId: number) => void) => void;
    onClose?: () => void;
    onKeyDown?: React.KeyboardEventHandler;
}
/** @internal */
export declare type UseMenuFocusReturn = [(event: React.KeyboardEvent) => void, () => void];
/** @internal */
export declare const useMenuFocus: ({ localRef, isMenuOpen, openedWithArrow, setOpenedWithArrow, close, onOpen, onClose, onKeyDown, }: UseMenuFocusProps) => UseMenuFocusReturn;
