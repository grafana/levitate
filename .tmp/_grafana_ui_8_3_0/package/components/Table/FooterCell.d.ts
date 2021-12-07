import { FooterItem } from './types';
export interface FooterProps {
    value: FooterItem;
}
export declare const FooterCell: (props: FooterProps) => JSX.Element | ((props: any) => JSX.Element);
export declare const EmptyCell: (props: any) => JSX.Element;
