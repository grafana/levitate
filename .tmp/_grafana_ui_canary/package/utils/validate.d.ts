import { ValidationRule, ValidationEvents } from '../types/input';
export declare enum EventsWithValidation {
    onBlur = "onBlur",
    onFocus = "onFocus",
    onChange = "onChange"
}
export declare const validate: (value: string, validationRules: ValidationRule[]) => string[] | null;
export declare const hasValidationEvent: (event: EventsWithValidation, validationEvents: ValidationEvents | undefined) => ValidationRule[] | undefined;
export declare const regexValidation: (pattern: string | RegExp, errorMessage?: string | undefined) => ValidationRule;
