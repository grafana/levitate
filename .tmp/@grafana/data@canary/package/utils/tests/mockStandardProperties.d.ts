import { ThresholdsMode } from '../../types';
export declare const mockStandardProperties: () => ({
    id: string;
    path: string;
    name: string;
    description: string;
    editor: () => null;
    override: () => null;
    process: <T>(value: T, _context: import("../../types").FieldOverrideContext, _settings: any) => T;
    settings: {
        placeholder: string;
    };
    shouldApply: () => boolean;
} | {
    id: string;
    path: string;
    name: string;
    description: string;
    editor: () => null;
    override: () => null;
    process: (value: any, context: import("../../types").FieldOverrideContext, settings?: import("../../field").StringFieldConfigSettings | undefined) => any;
    settings: {
        placeholder: string;
        expandTemplateVars: boolean;
    };
    shouldApply: () => boolean;
} | {
    id: string;
    path: string;
    name: string;
    description: string;
    editor: () => null;
    override: () => null;
    process: <T>(value: T, _context: import("../../types").FieldOverrideContext, _settings: any) => T;
    settings: {};
    defaultValue: {
        mode: ThresholdsMode;
        steps: {
            value: number;
            color: string;
        }[];
    };
    shouldApply: () => boolean;
} | {
    id: string;
    path: string;
    name: string;
    description: string;
    editor: () => null;
    override: () => null;
    process: <T>(value: T, _context: import("../../types").FieldOverrideContext, _settings: any) => T;
    settings: {};
    defaultValue: never[];
    shouldApply: () => boolean;
})[];
