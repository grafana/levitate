import { Field, LinkModel } from '@grafana/data';
import { MouseEventHandler } from 'react';
import { Row } from 'react-table';
/**
 * @internal
 */
export declare const getCellLinks: (field: Field, row: Row<any>) => {
    link: LinkModel<any> | undefined;
    onClick: MouseEventHandler<HTMLAnchorElement> | undefined;
};
