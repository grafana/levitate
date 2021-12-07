import { FC, HTMLProps, ReactNode } from 'react';
export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'css'> {
    children: ReactNode | ReactNode[];
}
export declare const InlineFieldRow: FC<Props>;
