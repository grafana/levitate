import { RegistryItem, Registry } from './Registry';
export declare enum BinaryOperationID {
    Add = "+",
    Subtract = "-",
    Divide = "/",
    Multiply = "*"
}
export declare type BinaryOperation = (left: number, right: number) => number;
interface BinaryOperatorInfo extends RegistryItem {
    operation: BinaryOperation;
}
export declare const binaryOperators: Registry<BinaryOperatorInfo>;
export {};
