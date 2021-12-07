export interface DeleteDataSourceConfig {
    id: string;
    name: string;
    quick?: boolean;
}
export declare const deleteDataSource: ({ id, name, quick }: DeleteDataSourceConfig) => void;
