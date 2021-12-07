import { CellProps } from 'react-table';
import { Field, KeyValue } from '@grafana/data';
import { TableStyles } from './styles';
import { FC } from 'react';
export { TableFieldOptions, TableCellDisplayMode, FieldTextAlignment } from '@grafana/schema';
export interface TableRow {
    [x: string]: any;
}
export declare const FILTER_FOR_OPERATOR = "=";
export declare const FILTER_OUT_OPERATOR = "!=";
export declare type FilterOperator = typeof FILTER_FOR_OPERATOR | typeof FILTER_OUT_OPERATOR;
export declare type FilterItem = {
    key: string;
    value: string;
    operator: FilterOperator;
};
export declare type TableFilterActionCallback = (item: FilterItem) => void;
export declare type TableColumnResizeActionCallback = (fieldDisplayName: string, width: number) => void;
export declare type TableSortByActionCallback = (state: TableSortByFieldState[]) => void;
export interface TableSortByFieldState {
    displayName: string;
    desc?: boolean;
}
export interface TableCellProps extends CellProps<any> {
    tableStyles: TableStyles;
    cellProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    field: Field;
    onCellFilterAdded: TableFilterActionCallback;
    innerWidth: number;
}
export declare type CellComponent = FC<TableCellProps>;
export declare type FooterItem = Array<KeyValue<string>> | string | undefined;
