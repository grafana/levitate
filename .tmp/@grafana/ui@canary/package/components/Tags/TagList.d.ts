import { FC } from 'react';
import { OnTagClick } from './Tag';
export interface Props {
    tags: string[];
    onClick?: OnTagClick;
    /** Custom styles for the wrapper component */
    className?: string;
}
export declare const TagList: FC<Props>;
