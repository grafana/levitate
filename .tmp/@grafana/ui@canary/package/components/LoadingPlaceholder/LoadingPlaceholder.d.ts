import { HTMLAttributes, SFC } from 'react';
/**
 * @public
 */
export interface LoadingPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
}
/**
 * @public
 */
export declare const LoadingPlaceholder: SFC<LoadingPlaceholderProps>;
