import React from 'react';
import { LogRowModel, Field, LinkModel } from '@grafana/data';
import { Themeable } from '../../types/theme';
export interface Props extends Themeable {
    row: LogRowModel;
    showDetectedFields: string[];
    wrapLogMessage: boolean;
    getFieldLinks?: (field: Field, rowIndex: number) => Array<LinkModel<Field>>;
}
export declare const LogRowMessageDetectedFields: React.FunctionComponent<{
    row: LogRowModel;
    wrapLogMessage: boolean;
    showDetectedFields: string[];
    getFieldLinks?: ((field: Field, rowIndex: number) => Array<LinkModel<Field>>) | undefined;
}>;
