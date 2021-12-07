/// <reference types="react" />
import { DataQueryError, DataQueryRequest, DataQueryTimings } from './datasource';
import { PluginMeta } from './plugin';
import { ScopedVars } from './ScopedVars';
import { LoadingState, PreferredVisualisationType } from './data';
import { DataFrame } from './dataFrame';
import { AbsoluteTimeRange, TimeRange, TimeZone } from './time';
import { EventBus } from '../events';
import { FieldConfigSource } from './fieldOverrides';
import { Registry } from '../utils';
import { StandardEditorProps } from '../field';
import { OptionsEditorItem } from './OptionsUIRegistryBuilder';
import { OptionEditorConfig } from './options';
import { AlertStateInfo } from './alerts';
import { PanelModel } from './dashboard';
import { DataTransformerConfig } from './transformations';
export declare type InterpolateFunction = (value: string, scopedVars?: ScopedVars, format?: string | Function) => string;
export interface PanelPluginMeta extends PluginMeta {
    /** Indicates that panel does not issue queries */
    skipDataQuery?: boolean;
    /** Indicates that panel should not be available in visualisation picker */
    hideFromList?: boolean;
    /** Sort order */
    sort: number;
}
export interface PanelData {
    /** State of the data (loading, done, error, streaming) */
    state: LoadingState;
    /** Contains data frames with field overrides applied */
    series: DataFrame[];
    /**
     * This is a key that will change when the DataFrame[] structure changes.
     * The revision is a useful way to know if only data has changed or data+structure
     */
    structureRev?: number;
    /** A list of annotation items */
    annotations?: DataFrame[];
    /**
     * @internal
     */
    alertState?: AlertStateInfo;
    /** Request contains the queries and properties sent to the datasource */
    request?: DataQueryRequest;
    /** Timing measurements */
    timings?: DataQueryTimings;
    /** Any query errors */
    error?: DataQueryError;
    /** Contains the range from the request or a shifted time range if a request uses relative time */
    timeRange: TimeRange;
}
export interface PanelProps<T = any> {
    /** ID of the panel within the current dashboard */
    id: number;
    /** Result set of panel queries */
    data: PanelData;
    /** Time range of the current dashboard */
    timeRange: TimeRange;
    /** Time zone of the current dashboard */
    timeZone: TimeZone;
    /** Panel options */
    options: T;
    /** Indicates whether or not panel should be rendered transparent */
    transparent: boolean;
    /** Current width of the panel */
    width: number;
    /** Current height of the panel */
    height: number;
    /** Field options configuration */
    fieldConfig: FieldConfigSource;
    /** @internal */
    renderCounter: number;
    /** Panel title */
    title: string;
    /** EventBus  */
    eventBus: EventBus;
    /** Panel options change handler */
    onOptionsChange: (options: T) => void;
    /** Field config change handler */
    onFieldConfigChange: (config: FieldConfigSource) => void;
    /** Template variables interpolation function */
    replaceVariables: InterpolateFunction;
    /** Time range change handler */
    onChangeTimeRange: (timeRange: AbsoluteTimeRange) => void;
}
export interface PanelEditorProps<T = any> {
    /** Panel options */
    options: T;
    /** Panel options change handler */
    onOptionsChange: (options: T, callback?: () => void) => void;
    /** Result set of panel queries */
    data?: PanelData;
}
/**
 * Called when a panel is first loaded with current panel model
 */
export declare type PanelMigrationHandler<TOptions = any> = (panel: PanelModel<TOptions>) => Partial<TOptions>;
/**
 * Called before a panel is initialized. Allows panel inspection for any updates before changing the panel type.
 */
export declare type PanelTypeChangedHandler<TOptions = any> = (panel: PanelModel<TOptions>, prevPluginId: string, prevOptions: Record<string, any>, prevFieldConfig: FieldConfigSource) => Partial<TOptions>;
export declare type PanelOptionEditorsRegistry = Registry<PanelOptionsEditorItem>;
export interface PanelOptionsEditorProps<TValue> extends StandardEditorProps<TValue> {
}
export interface PanelOptionsEditorItem<TOptions = any, TValue = any, TSettings = any> extends OptionsEditorItem<TOptions, TSettings, PanelOptionsEditorProps<TValue>, TValue> {
}
export interface PanelOptionsEditorConfig<TOptions, TSettings = any, TValue = any> extends OptionEditorConfig<TOptions, TSettings, TValue> {
}
/**
 * @internal
 */
export interface PanelMenuItem {
    type?: 'submenu' | 'divider';
    text: string;
    iconClassName?: string;
    onClick?: (event: React.MouseEvent<any>) => void;
    shortcut?: string;
    href?: string;
    subMenu?: PanelMenuItem[];
}
/**
 * @internal
 */
export interface AngularPanelMenuItem {
    click: Function;
    icon: string;
    href: string;
    divider: boolean;
    text: string;
    shortcut: string;
    submenu: any[];
}
export declare enum VizOrientation {
    Auto = "auto",
    Vertical = "vertical",
    Horizontal = "horizontal"
}
export interface PanelPluginDataSupport {
    annotations: boolean;
    alertStates: boolean;
}
/**
 * @alpha
 */
export interface VisualizationSuggestion<TOptions = any, TFieldConfig = any> {
    /** Name of suggestion */
    name: string;
    /** Description */
    description?: string;
    /** Panel plugin id */
    pluginId: string;
    /** Panel plugin options */
    options?: Partial<TOptions>;
    /** Panel plugin field options */
    fieldConfig?: FieldConfigSource<Partial<TFieldConfig>>;
    /** Data transformations */
    transformations?: DataTransformerConfig[];
    /** Tweak for small preview */
    previewModifier?: (suggestion: VisualizationSuggestion) => void;
    /** A value between 0-100 how suitable suggestion is */
    score?: VisualizationSuggestionScore;
}
export declare enum VisualizationSuggestionScore {
    /** We are pretty sure this is the best possible option */
    Best = 100,
    /** Should be a really good option */
    Good = 70,
    /** Can be visualized but there are likely better options. If no score is set this score is assumed */
    OK = 50
}
/**
 * @alpha
 */
export interface PanelDataSummary {
    hasData?: boolean;
    rowCountTotal: number;
    rowCountMax: number;
    frameCount: number;
    fieldCount: number;
    numberFieldCount: number;
    timeFieldCount: number;
    stringFieldCount: number;
    hasNumberField?: boolean;
    hasTimeField?: boolean;
    hasStringField?: boolean;
    /** The first frame that set's this value */
    preferredVisualisationType?: PreferredVisualisationType;
}
/**
 * @alpha
 */
export declare class VisualizationSuggestionsBuilder {
    /** Current data */
    data?: PanelData;
    /** Current panel & options */
    panel?: PanelModel;
    /** Summary stats for current data */
    dataSummary: PanelDataSummary;
    private list;
    constructor(data?: PanelData, panel?: PanelModel);
    getListAppender<TOptions, TFieldConfig>(defaults: VisualizationSuggestion<TOptions, TFieldConfig>): VisualizationSuggestionsListAppender<TOptions, TFieldConfig>;
    private computeDataSummary;
    getList(): VisualizationSuggestion<any, any>[];
}
/**
 * @alpha
 */
export declare type VisualizationSuggestionsSupplier = {
    /**
     * Adds good suitable suggestions for the current data
     */
    getSuggestionsForData: (builder: VisualizationSuggestionsBuilder) => void;
};
/**
 * Helps with typings and defaults
 * @alpha
 */
export declare class VisualizationSuggestionsListAppender<TOptions, TFieldConfig> {
    private list;
    private defaults;
    constructor(list: VisualizationSuggestion[], defaults: VisualizationSuggestion<TOptions, TFieldConfig>);
    append(overrides: Partial<VisualizationSuggestion<TOptions, TFieldConfig>>): void;
}
