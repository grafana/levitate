import { Task } from './task';
interface Details {
    name?: string;
    hasStory: boolean;
    group?: string;
    isStoryPublic: boolean;
    hasTests: boolean;
}
interface GeneratorOptions {
    details: Details;
    path: string;
}
declare type ComponentGenerator = (options: GeneratorOptions) => Promise<any>;
export declare const promptDetails: () => Promise<Details> & {
    ui: import("inquirer/lib/ui/prompt");
};
export declare const generateComponents: ComponentGenerator;
export declare const componentCreateTask: Task<any>;
export {};
