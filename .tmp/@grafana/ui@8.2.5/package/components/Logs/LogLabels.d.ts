import React, { FunctionComponent } from 'react';
import { Labels } from '@grafana/data';
import { Themeable } from '../../types/theme';
interface Props extends Themeable {
    labels: Labels;
}
export declare const UnThemedLogLabels: FunctionComponent<Props>;
export declare const LogLabels: React.FunctionComponent<{
    labels: Labels;
}>;
export {};
