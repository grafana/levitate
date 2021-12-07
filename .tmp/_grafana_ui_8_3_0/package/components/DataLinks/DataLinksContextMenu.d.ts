import React from 'react';
import { FieldConfig, LinkModel } from '@grafana/data';
interface DataLinksContextMenuProps {
    children: (props: DataLinksContextMenuApi) => JSX.Element;
    links: () => LinkModel[];
    config: FieldConfig;
}
export interface DataLinksContextMenuApi {
    openMenu?: React.MouseEventHandler<HTMLOrSVGElement>;
    targetClassName?: string;
}
export declare const DataLinksContextMenu: React.FC<DataLinksContextMenuProps>;
export {};
