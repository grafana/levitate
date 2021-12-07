declare type Panel = {
    title: string;
    [key: string]: unknown;
};
export declare type Dashboard = {
    title: string;
    panels: Panel[];
    uid: string;
    [key: string]: unknown;
};
/**
 * Smoke test a particular dashboard by quickly importing a json file and validate that all the panels finish loading
 * @param dashboardToImport a sample dashboard
 * @param queryTimeout a number of ms to wait for the imported dashboard to finish loading
 */
export declare const importDashboard: (dashboardToImport: Dashboard, queryTimeout?: number | undefined) => void;
export {};
