import { ContainerProps, GroupBase } from 'react-select';
export declare const SelectContainer: <Option, isMulti extends boolean, Group extends GroupBase<Option>>(props: ContainerProps<Option, isMulti, Group> & {
    isFocused: boolean;
}) => JSX.Element;
