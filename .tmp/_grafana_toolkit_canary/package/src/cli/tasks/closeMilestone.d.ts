import { Task } from './task';
interface CloseMilestoneOptions {
    milestone: string;
    dryRun: boolean;
}
export declare const closeMilestoneTask: Task<CloseMilestoneOptions>;
export {};
