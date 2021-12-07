/// <reference types="react" />
import { ContainerProps, GroupTypeBase } from 'react-select';
interface CorrectContainerProps<Option, isMulti extends boolean, Group extends GroupTypeBase<Option>> extends ContainerProps<Option, isMulti, Group> {
    isFocused: boolean;
}
export declare const SelectContainer: <Option, isMulti extends boolean, Group extends GroupTypeBase<Option>>(props: CorrectContainerProps<Option, isMulti, Group>) => JSX.Element;
export {};
