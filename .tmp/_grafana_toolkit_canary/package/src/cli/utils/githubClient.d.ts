import { AxiosInstance } from 'axios';
interface GithubClientProps {
    required?: boolean;
    enterprise?: boolean;
    owner?: string;
    repo?: string;
}
declare class GithubClient {
    client: AxiosInstance;
    constructor({ required, enterprise, owner, repo }?: GithubClientProps);
    private createClient;
}
export default GithubClient;
