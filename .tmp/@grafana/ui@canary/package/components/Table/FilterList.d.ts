import { FC } from 'react';
import { SelectableValue } from '@grafana/data';
interface Props {
    values: SelectableValue[];
    options: SelectableValue[];
    onChange: (options: SelectableValue[]) => void;
    caseSensitive?: boolean;
}
export declare const FilterList: FC<Props>;
export {};
