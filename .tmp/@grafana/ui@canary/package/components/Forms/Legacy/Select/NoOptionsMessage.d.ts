import { NoticeProps, GroupBase } from 'react-select';
import { SelectableValue } from '@grafana/data';
export declare type Props<T> = NoticeProps<SelectableValue<T>, boolean, GroupBase<SelectableValue<T>>>;
export declare const NoOptionsMessage: <T extends unknown>(props: Props<T>) => JSX.Element;
export default NoOptionsMessage;
