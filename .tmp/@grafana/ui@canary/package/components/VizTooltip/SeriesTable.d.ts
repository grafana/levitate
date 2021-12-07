import React from 'react';
import { GraphSeriesValue } from '@grafana/data';
/**
 * @public
 */
export interface SeriesTableRowProps {
    color?: string;
    label?: string;
    value?: string | GraphSeriesValue;
    isActive?: boolean;
}
/**
 * @public
 */
export declare const SeriesTableRow: React.FC<SeriesTableRowProps>;
/**
 * @public
 */
export interface SeriesTableProps {
    timestamp?: string | GraphSeriesValue;
    series: SeriesTableRowProps[];
}
/**
 * @public
 */
export declare const SeriesTable: React.FC<SeriesTableProps>;
