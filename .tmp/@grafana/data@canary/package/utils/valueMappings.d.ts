import { ThresholdsConfig, ValueMapping, ValueMappingResult } from '../types';
export declare function getValueMappingResult(valueMappings: ValueMapping[], value: any): ValueMappingResult | null;
export declare function isNumeric(num: any): boolean;
/**
 * @deprecated use MappingType instead
 * @internal
 */
export declare enum LegacyMappingType {
    ValueToText = 1,
    RangeToText = 2
}
/**
 * @deprecated use MappingType instead
 * @internal
 */
export interface LegacyBaseMap {
    id: number;
    text: string;
    type: LegacyMappingType;
}
/**
 * @deprecated use ValueMapping instead
 * @internal
 */
export declare type LegacyValueMapping = LegacyValueMap | LegacyRangeMap;
/**
 * @deprecated use ValueMap instead
 * @internal
 */
export interface LegacyValueMap extends LegacyBaseMap {
    value: string;
}
/**
 * @deprecated use RangeMap instead
 * @internal
 */
export interface LegacyRangeMap extends LegacyBaseMap {
    from: string;
    to: string;
}
/**
 * @deprecated use getValueMappingResult instead
 * @internal
 */
export declare function getMappedValue(valueMappings: LegacyValueMapping[], value: any): LegacyValueMapping;
/**
 * @alpha
 * Converts the old Angular value mappings to new react style
 */
export declare function convertOldAngularValueMappings(panel: any, migratedThresholds?: ThresholdsConfig): ValueMapping[];
