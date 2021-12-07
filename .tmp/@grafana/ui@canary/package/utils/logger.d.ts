/**
 * @internal
 */
export interface Logger {
    logger: (...t: any[]) => void;
    enable: () => void;
    disable: () => void;
    isEnabled: () => boolean;
}
/** @internal */
export declare const createLogger: (name: string) => Logger;
