/// <reference types="react" />
import { HeaderGroup } from 'react-table';
import { DataFrame } from '@grafana/data';
export interface HeaderRowProps {
    headerGroups: HeaderGroup[];
    data: DataFrame;
    showTypeIcons?: boolean;
}
export declare const HeaderRow: (props: HeaderRowProps) => JSX.Element;
