import { Registry, RegistryItem } from '../utils/Registry';
/**
 * @alpha
 */
export interface MonacoLanguageRegistryItem extends RegistryItem {
    init: () => Promise<void>;
}
/**
 * @alpha
 */
export declare const monacoLanguageRegistry: Registry<MonacoLanguageRegistryItem>;
