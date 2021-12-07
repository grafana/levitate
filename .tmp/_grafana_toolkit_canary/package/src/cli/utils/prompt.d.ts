import { Question, InputQuestion, CheckboxQuestion, NumberQuestion, PasswordQuestion, EditorQuestion, ConfirmQuestion, ListQuestion, ChoiceOptions } from 'inquirer';
declare type QuestionWithValidation<A = any> = InputQuestion<A> | CheckboxQuestion<A> | NumberQuestion<A> | PasswordQuestion<A> | EditorQuestion<A>;
export declare const answerRequired: (question: QuestionWithValidation) => Question<any>;
export declare const promptInput: <A>(name: string, message: string | ((answers: A) => string), required?: boolean, def?: any, when?: boolean | ((answers: A) => boolean | Promise<boolean>)) => Question<any> | InputQuestion<A>;
export declare const promptList: <A>(name: string, message: string | ((answers: A) => string), choices: () => ChoiceOptions[], def?: any, when?: boolean | ((answers: A) => boolean | Promise<boolean>)) => ListQuestion<A>;
export declare const promptConfirm: <A>(name: string, message: string | ((answers: A) => string), def?: any, when?: boolean | ((answers: A) => boolean | Promise<boolean>)) => ConfirmQuestion<A>;
export {};
