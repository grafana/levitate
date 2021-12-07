import { PluginState } from '../types';
import { SelectableValue } from '../types/select';
export interface RegistryItem {
    id: string;
    name: string;
    description?: string;
    aliasIds?: string[];
    /**
     * Some extensions should not be user selectable
     *  like: 'all' and 'any' matchers;
     */
    excludeFromPicker?: boolean;
    /**
     * Optional feature state
     */
    state?: PluginState;
}
export interface RegistryItemWithOptions<TOptions = any> extends RegistryItem {
    /**
     * Convert the options to a string
     */
    getOptionsDisplayText?: (options: TOptions) => string;
    /**
     * Default options used if nothing else is specified
     */
    defaultOptions?: TOptions;
}
interface RegistrySelectInfo {
    options: Array<SelectableValue<string>>;
    current: Array<SelectableValue<string>>;
}
export declare class Registry<T extends RegistryItem> {
    private init?;
    private ordered;
    private byId;
    private initialized;
    constructor(init?: (() => T[]) | undefined);
    setInit: (init: () => T[]) => void;
    getIfExists(id: string | undefined): T | undefined;
    private initialize;
    get(id: string): T;
    selectOptions(current?: string[], filter?: (ext: T) => boolean): RegistrySelectInfo;
    /**
     * Return a list of values by ID, or all values if not specified
     */
    list(ids?: any[]): T[];
    isEmpty(): boolean;
    register(ext: T): void;
    private sort;
}
export {};
