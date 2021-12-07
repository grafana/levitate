/// <reference types="react" />
import { OptionProps } from 'react-select';
export interface ExtendedOptionProps extends OptionProps<any, any> {
    data: {
        description?: string;
        imgUrl?: string;
    };
}
export declare const SelectOption: (props: ExtendedOptionProps) => JSX.Element;
export default SelectOption;
