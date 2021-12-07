export interface AddDataSourceConfig {
    basicAuth: boolean;
    basicAuthPassword: string;
    basicAuthUser: string;
    /**
     * @deprecated check health request is no longer supported
     */
    checkHealth: boolean;
    expectedAlertMessage: string | RegExp;
    form: () => void;
    name: string;
    skipTlsVerify: boolean;
    type: string;
    timeout?: number;
}
export declare const addDataSource: (config?: Partial<AddDataSourceConfig> | undefined) => Cypress.Chainable<{
    config: AddDataSourceConfig;
}>;
