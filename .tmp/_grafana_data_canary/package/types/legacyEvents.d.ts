import { DataQueryError } from './datasource';
import { AngularPanelMenuItem } from './panel';
import { DataFrame } from './dataFrame';
import { BusEventBase, BusEventWithPayload } from '../events/types';
import { DataHoverPayload } from '../events';
export declare type AlertPayload = [string, string?];
export declare type AlertErrorPayload = [string, (string | Error)?];
export declare const AppEvents: {
    alertSuccess: import("../events").AppEvent<AlertPayload>;
    alertWarning: import("../events").AppEvent<AlertPayload>;
    alertError: import("../events").AppEvent<AlertErrorPayload>;
};
export declare const PanelEvents: {
    refresh: import("../events").AppEvent<undefined>;
    componentDidMount: import("../events").AppEvent<undefined>;
    dataReceived: import("../events").AppEvent<any[]>;
    dataError: import("../events").AppEvent<DataQueryError>;
    dataFramesReceived: import("../events").AppEvent<DataFrame[]>;
    dataSnapshotLoad: import("../events").AppEvent<any[]>;
    editModeInitialized: import("../events").AppEvent<undefined>;
    initPanelActions: import("../events").AppEvent<AngularPanelMenuItem[]>;
    initialized: import("../events").AppEvent<undefined>;
    panelTeardown: import("../events").AppEvent<undefined>;
    render: import("../events").AppEvent<any>;
};
/** @public */
export interface LegacyGraphHoverEventPayload extends DataHoverPayload {
    pos: any;
    panel: {
        id: number;
    };
}
/** @alpha */
export declare class LegacyGraphHoverEvent extends BusEventWithPayload<LegacyGraphHoverEventPayload> {
    static type: string;
}
/** @alpha */
export declare class LegacyGraphHoverClearEvent extends BusEventBase {
    static type: string;
    payload: DataHoverPayload;
}
