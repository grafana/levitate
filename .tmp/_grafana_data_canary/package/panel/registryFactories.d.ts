import { FieldConfigOptionsRegistry } from '../field/FieldConfigOptionsRegistry';
import { SetFieldConfigOptionsArgs } from './PanelPlugin';
/**
 * Helper functionality to create a field config registry.
 *
 * @param config - configuration to base the registry on.
 * @param pluginName - name of the plugin that will use the registry.
 * @internal
 */
export declare function createFieldConfigRegistry<TFieldConfigOptions>(config: SetFieldConfigOptionsArgs<TFieldConfigOptions> | undefined, pluginName: string): FieldConfigOptionsRegistry;
