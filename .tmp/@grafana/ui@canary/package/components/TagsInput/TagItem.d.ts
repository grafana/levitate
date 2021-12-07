import { FC } from 'react';
interface Props {
    name: string;
    onRemove: (tag: string) => void;
}
/**
 * @internal
 * Only used internally by TagsInput
 * */
export declare const TagItem: FC<Props>;
export {};
