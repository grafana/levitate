import { Unsubscribable, Observable } from 'rxjs';
import { EventBus, LegacyEmitter, BusEventHandler, BusEventType, LegacyEventHandler, BusEvent, AppEvent, EventFilterOptions } from './types';
/**
 * @alpha
 */
export declare class EventBusSrv implements EventBus, LegacyEmitter {
    private emitter;
    constructor();
    publish<T extends BusEvent>(event: T): void;
    subscribe<T extends BusEvent>(typeFilter: BusEventType<T>, handler: BusEventHandler<T>): Unsubscribable;
    getStream<T extends BusEvent>(eventType: BusEventType<T>): Observable<T>;
    newScopedBus(key: string, filter?: EventFilterOptions): EventBus;
    /**
     * Legacy functions
     */
    emit<T>(event: AppEvent<T> | string, payload?: T | any): void;
    on<T>(event: AppEvent<T> | string, handler: LegacyEventHandler<T>, scope?: any): void;
    off<T>(event: AppEvent<T> | string, handler: LegacyEventHandler<T>): void;
    removeAllListeners(): void;
}
