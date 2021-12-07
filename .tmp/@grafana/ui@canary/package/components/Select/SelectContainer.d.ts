import { ContainerProps as BaseContainerProps, GroupBase } from 'react-select';
export interface SelectContainerProps<Option, isMulti extends boolean, Group extends GroupBase<Option>> extends BaseContainerProps<Option, isMulti, Group> {
    isFocused: boolean;
}
export declare const SelectContainer: <Option, isMulti extends boolean, Group extends GroupBase<Option>>(props: SelectContainerProps<Option, isMulti, Group>) => JSX.Element;
