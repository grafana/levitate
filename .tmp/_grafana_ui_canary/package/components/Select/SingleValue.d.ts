import { GroupBase, SingleValueProps } from 'react-select';
import { SelectableValue } from '@grafana/data';
export declare type Props<T> = SingleValueProps<SelectableValue<T>, boolean, GroupBase<SelectableValue<T>>>;
export declare const SingleValue: <T extends unknown>(props: Props<T>) => JSX.Element;
