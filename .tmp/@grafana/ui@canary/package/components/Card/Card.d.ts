import React, { FC, ReactNode } from 'react';
import { GrafanaTheme2 } from '@grafana/data';
import { CardContainerProps } from './CardContainer';
/**
 * @public
 */
export interface Props extends Omit<CardContainerProps, 'disableEvents' | 'disableHover'> {
    /** Main heading for the Card **/
    heading: ReactNode;
    /** Card description text */
    description?: string;
    /** Indicates if the card and all its actions can be interacted with */
    disabled?: boolean;
    /** Link to redirect to on card click. If provided, the Card inner content will be rendered inside `a` */
    href?: string;
    /** On click handler for the Card */
    onClick?: () => void;
}
export interface CardInterface extends FC<Props> {
    Tags: typeof Tags;
    Figure: typeof Figure;
    Meta: typeof Meta;
    Actions: typeof Actions;
    SecondaryActions: typeof SecondaryActions;
}
/**
 * Generic card component
 *
 * @public
 */
export declare const Card: CardInterface;
/**
 * @public
 */
export declare const getCardStyles: import("memoize-one").MemoizedFn<(theme: GrafanaTheme2) => {
    inner: string;
    heading: string;
    info: string;
    metadata: string;
    description: string;
    media: string;
    actionRow: string;
    actions: string;
    secondaryActions: string;
    separator: string;
    tagList: string;
}>;
interface ChildProps {
    styles?: ReturnType<typeof getCardStyles>;
    disabled?: boolean;
}
declare const Tags: FC<ChildProps>;
declare const Figure: FC<ChildProps & {
    align?: 'top' | 'center';
    className?: string;
}>;
declare const Meta: FC<ChildProps & {
    separator?: string;
}>;
interface ActionsProps extends ChildProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary';
}
declare const Actions: FC<ActionsProps>;
declare const SecondaryActions: FC<ActionsProps>;
export {};
