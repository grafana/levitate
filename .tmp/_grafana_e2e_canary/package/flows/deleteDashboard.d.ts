export interface DeleteDashboardConfig {
    quick?: boolean;
    title: string;
    uid: string;
}
export declare const deleteDashboard: ({ quick, title, uid }: DeleteDashboardConfig) => void;
