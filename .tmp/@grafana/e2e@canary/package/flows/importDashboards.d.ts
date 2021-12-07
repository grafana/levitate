/**
 * Smoke test several dashboard json files from a test directory
 * and validate that all the panels in each import finish loading their queries
 * @param dirPath the relative path to a directory which contains json files representing dashboards,
 * for example if your dashboards live in `cypress/testDashboards` you can pass `/testDashboards`
 * @param queryTimeout a number of ms to wait for the imported dashboard to finish loading
 */
export declare const importDashboards: (dirPath: string, queryTimeout?: number | undefined) => Promise<void>;
