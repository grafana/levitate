import { SelectableValue } from '@grafana/data';
import { SelectCommonProps, MultiSelectCommonProps, SelectAsyncProps } from './types';
import { SelectContainer, SelectContainerProps } from './SelectContainer';
export declare function Select<T>(props: SelectCommonProps<T>): JSX.Element;
export declare function MultiSelect<T>(props: MultiSelectCommonProps<T>): JSX.Element;
interface AsyncSelectProps<T> extends Omit<SelectCommonProps<T>, 'options'>, SelectAsyncProps<T> {
    value?: SelectableValue<T> | null;
    invalid?: boolean;
}
export declare function AsyncSelect<T>(props: AsyncSelectProps<T>): JSX.Element;
interface AsyncMultiSelectProps<T> extends Omit<MultiSelectCommonProps<T>, 'options'>, SelectAsyncProps<T> {
    value?: Array<SelectableValue<T>>;
}
export declare function AsyncMultiSelect<T>(props: AsyncMultiSelectProps<T>): JSX.Element;
export { SelectContainer, SelectContainerProps };
