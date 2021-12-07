/**
 * The channel id is defined as:
 *
 *   ${scope}/${namespace}/${path}
 *
 * The scope drives how the namespace is used and controlled
 *
 * @alpha
 */
export declare enum LiveChannelScope {
    DataSource = "ds",
    Plugin = "plugin",
    Grafana = "grafana",
    Stream = "stream"
}
/**
 * The type of data to expect in a given channel
 *
 * @alpha
 */
export declare enum LiveChannelType {
    DataStream = "stream",
    DataFrame = "frame",
    JSON = "json"
}
export declare enum LiveChannelConnectionState {
    /** The connection is not yet established */
    Pending = "pending",
    /** Connected to the channel */
    Connected = "connected",
    /** Disconnected from the channel.  The channel will reconnect when possible */
    Disconnected = "disconnected",
    /** Was at some point connected, and will not try to reconnect */
    Shutdown = "shutdown",
    /** Channel configuraiton was invalid and will not connect */
    Invalid = "invalid"
}
export declare enum LiveChannelEventType {
    Status = "status",
    Join = "join",
    Leave = "leave",
    Message = "message"
}
/**
 * @alpha -- experimental
 */
export interface LiveChannelStatusEvent {
    type: LiveChannelEventType.Status;
    /**
     * {scope}/{namespace}/{path}
     */
    id: string;
    /**
     * unix millies timestamp for the last status change
     */
    timestamp: number;
    /**
     * flag if the channel is actively connected to the channel.
     * This may be false while the connections get established or if the network is lost
     * As long as the `shutdown` flag is not set, the connection will try to reestablish
     */
    state: LiveChannelConnectionState;
    /**
     * When joining a channel, there may be an initial packet in the subscribe method
     */
    message?: any;
    /**
     * The last error.
     *
     * This will remain in the status until a new message is successfully received from the channel
     */
    error?: any;
}
export interface LiveChannelJoinEvent {
    type: LiveChannelEventType.Join;
    user: any;
}
export interface LiveChannelLeaveEvent {
    type: LiveChannelEventType.Leave;
    user: any;
}
export interface LiveChannelMessageEvent<T> {
    type: LiveChannelEventType.Message;
    message: T;
}
export declare type LiveChannelEvent<T = any> = LiveChannelStatusEvent | LiveChannelJoinEvent | LiveChannelLeaveEvent | LiveChannelMessageEvent<T>;
export declare function isLiveChannelStatusEvent<T>(evt: LiveChannelEvent<T>): evt is LiveChannelStatusEvent;
export declare function isLiveChannelJoinEvent<T>(evt: LiveChannelEvent<T>): evt is LiveChannelJoinEvent;
export declare function isLiveChannelLeaveEvent<T>(evt: LiveChannelEvent<T>): evt is LiveChannelLeaveEvent;
export declare function isLiveChannelMessageEvent<T>(evt: LiveChannelEvent<T>): evt is LiveChannelMessageEvent<T>;
/**
 * @alpha -- experimental
 */
export interface LiveChannelPresenceStatus {
    users: any;
}
/**
 * @alpha -- experimental
 */
export interface LiveChannelAddress {
    scope: LiveChannelScope;
    namespace: string;
    path: string;
}
/**
 * Return an address from a string
 *
 * @alpha -- experimental
 */
export declare function parseLiveChannelAddress(id?: string): LiveChannelAddress | undefined;
/**
 * Check if the address has a scope, namespace, and path
 *
 * @alpha -- experimental
 */
export declare function isValidLiveChannelAddress(addr?: LiveChannelAddress): addr is LiveChannelAddress;
/**
 * Convert the address to an explicit channel path
 *
 * @alpha -- experimental
 */
export declare function toLiveChannelId(addr: LiveChannelAddress): string;
