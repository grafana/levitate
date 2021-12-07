export declare const useAsyncDependency: (importStatement: Promise<any>) => {
    dependency: any;
    loading: boolean;
    error?: undefined;
    value?: undefined;
} | {
    dependency: any;
    loading: false;
    error: Error;
    value?: undefined;
} | {
    dependency: any;
    loading: true;
    error?: Error | undefined;
    value?: any;
} | {
    dependency: any;
    loading: false;
    error?: undefined;
    value: any;
};
