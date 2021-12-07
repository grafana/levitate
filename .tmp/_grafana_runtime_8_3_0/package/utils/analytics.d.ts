import { MetaAnalyticsEventPayload } from '../types/analytics';
/**
 * Helper function to report meta analytics to the {@link EchoSrv}.
 *
 * @public
 */
export declare const reportMetaAnalytics: (payload: MetaAnalyticsEventPayload) => void;
/**
 * Helper function to report pageview events to the {@link EchoSrv}.
 *
 * @public
 */
export declare const reportPageview: () => void;
/**
 * Helper function to report interaction events to the {@link EchoSrv}.
 *
 * @public
 */
export declare const reportInteraction: (interactionName: string, properties?: Record<string, any> | undefined) => void;
