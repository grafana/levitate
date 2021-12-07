import { BusEventBase, BusEventWithPayload, EventBus, GrafanaTheme2, PanelModel, TimeRange } from '@grafana/data';
/**
 * Called when a dashboard is refreshed
 *
 * @public
 */
export declare class RefreshEvent extends BusEventBase {
    static type: string;
}
/**
 * Called when the theme settings change
 *
 * @public
 */
export declare class ThemeChangedEvent extends BusEventWithPayload<GrafanaTheme2> {
    static type: string;
}
/**
 * Called when time range is updated
 *
 * @public
 */
export declare class TimeRangeUpdatedEvent extends BusEventWithPayload<TimeRange> {
    static type: string;
}
/**
 * Called to copy a panel JSON into local storage
 *
 * @public
 */
export declare class CopyPanelEvent extends BusEventWithPayload<PanelModel> {
    static type: string;
}
/**
 * Used during startup by Grafana to set the LocationSrv so it is available
 * via the {@link getLocationSrv} to the rest of the application.
 *
 * @internal
 */
export declare function setAppEvents(instance: EventBus): void;
/**
 * Used to retrieve an event bus that manages application level events
 *
 * @public
 */
export declare function getAppEvents(): EventBus;
