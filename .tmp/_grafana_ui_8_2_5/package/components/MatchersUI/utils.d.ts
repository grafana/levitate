import { DataFrame, Field, SelectableValue } from '@grafana/data';
/**
 * @internal
 */
export interface FrameFieldsDisplayNames {
    display: Set<string>;
    raw: Set<string>;
    fields: Map<string, Field>;
}
/**
 * @internal
 */
export declare function frameHasName(name: string | undefined, names: FrameFieldsDisplayNames): boolean;
/**
 * @internal
 */
export declare function useFieldDisplayNames(data: DataFrame[], filter?: (field: Field) => boolean): FrameFieldsDisplayNames;
/**
 * @internal
 */
export declare function useSelectOptions(displayNames: FrameFieldsDisplayNames, currentName?: string, firstItem?: SelectableValue<string>): Array<SelectableValue<string>>;
