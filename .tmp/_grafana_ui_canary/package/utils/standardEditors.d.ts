import { DataLink, FieldConfigPropertyItem, NumberFieldConfigSettings, StandardEditorsRegistryItem, StringFieldConfigSettings, ThresholdsConfig, ThresholdsFieldConfigSettings, ValueMapping, ValueMappingFieldConfigSettings, FieldColor, FieldColorConfigSettings } from '@grafana/data';
/**
 * Returns collection of common field config properties definitions
 */
export declare const getStandardFieldConfigs: () => (FieldConfigPropertyItem<any, number, NumberFieldConfigSettings> | FieldConfigPropertyItem<any, FieldColor | undefined, FieldColorConfigSettings> | FieldConfigPropertyItem<any, string, StringFieldConfigSettings> | FieldConfigPropertyItem<any, ThresholdsConfig, ThresholdsFieldConfigSettings> | FieldConfigPropertyItem<any, ValueMapping[], ValueMappingFieldConfigSettings> | FieldConfigPropertyItem<any, DataLink<any>[], StringFieldConfigSettings>)[];
/**
 * Returns collection of standard option editors definitions
 *
 * @internal
 */
export declare const getStandardOptionEditors: () => (StandardEditorsRegistryItem<any, any> | StandardEditorsRegistryItem<string, any> | StandardEditorsRegistryItem<number, any> | StandardEditorsRegistryItem<boolean, any> | StandardEditorsRegistryItem<ValueMapping[], any> | StandardEditorsRegistryItem<ThresholdsConfig, any> | StandardEditorsRegistryItem<DataLink<any>[], any> | StandardEditorsRegistryItem<string[], any> | StandardEditorsRegistryItem<FieldColor, any>)[];
