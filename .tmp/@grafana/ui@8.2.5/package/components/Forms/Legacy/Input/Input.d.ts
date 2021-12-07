import React, { PureComponent, ChangeEvent } from 'react';
import { ValidationEvents, ValidationRule } from '../../../../types';
export declare enum LegacyInputStatus {
    Invalid = "invalid",
    Valid = "valid"
}
export interface Props extends React.HTMLProps<HTMLInputElement> {
    validationEvents?: ValidationEvents;
    hideErrorMessage?: boolean;
    inputRef?: React.LegacyRef<HTMLInputElement>;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>, status?: LegacyInputStatus) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>, status?: LegacyInputStatus) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, status?: LegacyInputStatus) => void;
}
interface State {
    error: string | null;
}
export declare class Input extends PureComponent<Props, State> {
    static defaultProps: {
        className: string;
    };
    state: State;
    get status(): LegacyInputStatus;
    get isInvalid(): boolean;
    validatorAsync: (validationRules: ValidationRule[]) => (evt: ChangeEvent<HTMLInputElement>) => void;
    populateEventPropsWithStatus: (restProps: any, validationEvents: ValidationEvents | undefined) => any;
    render(): JSX.Element;
}
export {};
