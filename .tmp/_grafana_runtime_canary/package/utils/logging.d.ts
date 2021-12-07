import { Severity as LogLevel } from '@sentry/browser';
export { LogLevel };
declare type Contexts = Record<string, Record<string, number | string | Record<string, string | number>>>;
/**
 * Log a message at INFO level. Depending on configuration might be forwarded to backend and logged to stdout or sent to Sentry
 *
 * @public
 */
export declare function logInfo(message: string, contexts?: Contexts): void;
/**
 * Log a message at WARNING level. Depending on configuration might be forwarded to backend and logged to stdout or sent to Sentry
 *
 * @public
 */
export declare function logWarning(message: string, contexts?: Contexts): void;
/**
 * Log a message at DEBUG level. Depending on configuration might be forwarded to backend and logged to stdout or sent to Sentry
 *
 * @public
 */
export declare function logDebug(message: string, contexts?: Contexts): void;
/**
 * Log an error. Depending on configuration might be forwarded to backend and logged to stdout or sent to Sentry
 *
 * @public
 */
export declare function logError(err: Error, contexts?: Contexts): void;
