import { DataQuery } from './query';
import { RawTimeRange, TimeRange } from './time';
declare type AnyQuery = DataQuery & Record<string, any>;
/** @internal */
export interface ExploreUrlState<T extends DataQuery = AnyQuery> {
    datasource: string;
    queries: T[];
    range: RawTimeRange;
    originPanelId?: number;
    context?: string;
}
/**
 * SplitOpen type is used in Explore and related components.
 */
export declare type SplitOpen = <T extends DataQuery = any>(options?: {
    datasourceUid: string;
    query: T;
    range?: TimeRange;
} | undefined) => void;
export {};
