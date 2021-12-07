import { HeaderGroup } from 'react-table';
import { FooterItem } from './types';
export interface FooterRowProps {
    totalColumnsWidth: number;
    footerGroups: HeaderGroup[];
    footerValues?: FooterItem[];
}
export declare const FooterRow: (props: FooterRowProps) => JSX.Element | null;
export declare function getFooterValue(index: number, footerValues?: FooterItem[]): JSX.Element | ((props: any) => JSX.Element);
