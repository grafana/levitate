import { Task } from './task';
export interface GithubPublishOptions {
    dryrun?: boolean;
    verbose?: boolean;
    commitHash?: string;
    dev?: boolean;
}
export declare const githubPublishTask: Task<GithubPublishOptions>;
