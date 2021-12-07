import GithubClient from './githubClient';
import { AxiosResponse } from 'axios';
declare class GitHubRelease {
    token: string;
    username: string;
    repository: string;
    releaseNotes: string;
    commitHash?: string;
    git: GithubClient;
    constructor(token: string, username: string, repository: string, releaseNotes: string, commitHash?: string);
    publishAssets(srcLocation: string, destUrl: string): Promise<AxiosResponse<any>>[];
    release(): Promise<void>;
}
export { GitHubRelease };
