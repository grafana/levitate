import { ContainerProps as BaseContainerProps, GroupTypeBase } from 'react-select';
export interface SelectContainerProps<Option, isMulti extends boolean, Group extends GroupTypeBase<Option>> extends BaseContainerProps<Option, isMulti, Group> {
    isFocused: boolean;
}
export declare const SelectContainer: <Option, isMulti extends boolean, Group extends GroupTypeBase<Option>>(props: SelectContainerProps<Option, isMulti, Group>) => JSX.Element;
