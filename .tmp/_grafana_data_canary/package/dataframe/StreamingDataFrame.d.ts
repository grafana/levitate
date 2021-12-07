import { Field, DataFrame, QueryResultMeta } from '../types';
import { ArrayVector } from '../vector';
import { DataFrameJSON } from './DataFrameJSON';
/**
 * Indicate if the frame is appened or replace
 *
 * @public -- but runtime
 */
export declare enum StreamingFrameAction {
    Append = "append",
    Replace = "replace"
}
/**
 * Stream packet info is attached to StreamingDataFrames and indicate how many
 * rows were added to the end of the frame.  The number of discarded rows can be
 * calculated from previous state
 *
 * @public -- but runtime
 */
export interface StreamPacketInfo {
    number: number;
    action: StreamingFrameAction;
    length: number;
}
/**
 * @alpha
 */
export interface StreamingFrameOptions {
    maxLength?: number;
    maxDelta?: number;
    action?: StreamingFrameAction;
}
/**
 * Unlike a circular buffer, this will append and periodically slice the front
 *
 * @alpha
 */
export declare class StreamingDataFrame implements DataFrame {
    name?: string;
    refId?: string;
    meta: QueryResultMeta;
    fields: Array<Field<any, ArrayVector<any>>>;
    length: number;
    options: StreamingFrameOptions;
    private schemaFields;
    private timeFieldIndex;
    private pushMode;
    private alwaysReplace;
    private labels;
    readonly packetInfo: StreamPacketInfo;
    constructor(frame: DataFrameJSON, opts?: StreamingFrameOptions);
    /**
     * apply the new message to the existing data.  This will replace the existing schema
     * if a new schema is included in the message, or append data matching the current schema
     */
    push(msg: DataFrameJSON): void;
    private addLabel;
}
export declare function transpose(vrecs: any[][]): Map<any, any>;
/**
 * @internal // not exported in yet
 */
export declare function getLastStreamingDataFramePacket(frame: DataFrame): StreamPacketInfo | undefined;
