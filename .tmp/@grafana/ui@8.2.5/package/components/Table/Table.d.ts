import { FC } from 'react';
import { DataFrame } from '@grafana/data';
import { TableColumnResizeActionCallback, TableFilterActionCallback, FooterItem, TableSortByActionCallback, TableSortByFieldState } from './types';
export interface Props {
    ariaLabel?: string;
    data: DataFrame;
    width: number;
    height: number;
    /** Minimal column width specified in pixels */
    columnMinWidth?: number;
    noHeader?: boolean;
    showTypeIcons?: boolean;
    resizable?: boolean;
    initialSortBy?: TableSortByFieldState[];
    onColumnResize?: TableColumnResizeActionCallback;
    onSortByChange?: TableSortByActionCallback;
    onCellFilterAdded?: TableFilterActionCallback;
    footerValues?: FooterItem[];
}
export declare const Table: FC<Props>;
