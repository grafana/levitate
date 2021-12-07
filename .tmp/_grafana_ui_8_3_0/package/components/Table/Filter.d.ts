import { FC } from 'react';
import { Field } from '@grafana/data';
import { TableStyles } from './styles';
interface Props {
    column: any;
    tableStyles: TableStyles;
    field?: Field;
}
export declare const Filter: FC<Props>;
export {};
