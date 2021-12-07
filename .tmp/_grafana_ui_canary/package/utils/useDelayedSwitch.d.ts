declare type DelayOptions = {
    duration?: number;
    delay?: number;
};
/**
 * Hook that delays changing of boolean switch to prevent too much time spent in "on" state. It is kind of a throttle
 * but you can specify different time for on and off throttling so this only allows a boolean values and also prefers
 * to stay "off" so turning "on" is always delayed while turning "off" is throttled.
 *
 * This is useful for showing loading elements to prevent it flashing too much in case of quick loading time or
 * prevent it flash if loaded state comes right after switch to loading.
 */
export declare function useDelayedSwitch(value: boolean, options?: DelayOptions): boolean;
export {};
