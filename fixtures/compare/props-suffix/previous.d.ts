/// <reference types="react" />
/// <reference types="lodash" />
import * as react_select from 'react-select';
import { NoticeProps, GroupBase, ActionMeta as ActionMeta$1, OptionsOrGroups, CommonProps as CommonProps$2, CSSObjectWithLabel, ContainerProps as ContainerProps$1 } from 'react-select';
import * as _grafana_data from '@grafana/data';
import { SelectableValue, GrafanaTheme, GrafanaTheme2, Field as Field$1, IconName, FieldType, LinkTarget, LinkModel, ThemeContext, FieldReducerInfo, TimeRange, TimeZone, DateTime, InternalTimeZones, VariableSuggestion, NavModelItem, DataFrame, KeyValue, CSVConfig, DisplayValue, FieldSparkline, DisplayValueAlignmentFactors, DecimalCount, ThresholdsConfig, FieldColorMode, DataFrameFieldIndex, EventBus, FieldConfig, DisplayProcessor, VizOrientation as VizOrientation$1, Dimensions, GraphSeriesValue, LoadingState, DashboardCursorSync, CoreApp, AnnotationEventUIModel, DataLinkPostProcessor, GraphSeriesXY, ReduceDataOptions, PanelModel, ValueMapping, DataLink, FeatureState, DataSourceJsonData, DataSourceSettings, DataSourcePluginOptionsEditorProps, SliderMarks, RegistryItem, FieldMatcherInfo, Registry, ThemeTypographyVariantTypes, ThemeSpacingTokens, ThemeShape, ThemeShadows, RelativeTimeRange, FormattedValue, PluginSignatureStatus, DateTimeInput, Dimension, FlotDataPoint, FieldMatcher, DataHoverEvent, LegacyGraphHoverEvent, FieldConfigEditorBuilder, StandardEditorProps, PanelOptionsEditorBuilder, BootData } from '@grafana/data';
export { IconName, ThemeContext, toIconName } from '@grafana/data';
import * as React$1 from 'react';
import React__default, { Component, InputHTMLAttributes, ReactElement, CSSProperties, ReactNode, PureComponent, ChangeEvent, ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren, RefCallback, HTMLProps, FC, ComponentType, ErrorInfo, MouseEvent as MouseEvent$1, AnchorHTMLAttributes, ElementType, FormEvent, DetailedHTMLProps } from 'react';
import { Placement, Side } from '@floating-ui/react';
import { Placement as Placement$1, VirtualElement } from '@popperjs/core';
import { Editor, Plugin, EventHook } from 'slate-react';
import { SchemaProperties, Document as Document$1, Value, Node, Mark } from 'slate';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, UseFormReturn, FieldErrors, FieldArrayMethodProps, Mode, DefaultValues, SubmitHandler, UseFieldArrayProps } from 'react-hook-form';
export { FieldErrors as FormFieldErrors, SubmitHandler as FormsOnSubmit } from 'react-hook-form';
import { Row, IdType, CellProps, DefaultSortTypes, SortByFn, SortingRule, TableOptions } from 'react-table';
export { CellProps, SortByFn } from 'react-table';
export { ansicolor } from 'ansicolor';
import * as micro_memoize from 'micro-memoize';
import * as schema from '@grafana/schema';
import { VizTextDisplayOptions, AxisPlacement, ScaleDistribution, ScaleOrientation, ScaleDirection, LineConfig, BarConfig, FillConfig, PointsConfig, GraphGradientMode, GraphDrawStyle, GraphThresholdsStyleConfig, GraphFieldConfig, VizOrientation, BarGaugeDisplayMode, BarGaugeValueMode, BarGaugeNamePlacement, TooltipDisplayMode, LegendPlacement, LegendDisplayMode, OptionsWithTextFormatting, LineInterpolation, BarAlignment, VisibilityMode, StackingMode, GraphThresholdsStyleMode, VizLegendOptions, SortOrder, AxisConfig, ScaleDistributionConfig, HideableFieldConfig, OptionsWithLegend, OptionsWithTooltip, StackingConfig } from '@grafana/schema';
export { AxisConfig, AxisPlacement, BarAlignment, BarConfig, BarGaugeDisplayMode, VisibilityMode as BarValueVisibility, GraphDrawStyle as DrawStyle, FieldTextAlignment, FillConfig, GraphFieldConfig, GraphGradientMode, GraphThresholdsStyleConfig, GraphThresholdsStyleMode, HideSeriesConfig, HideableFieldConfig, LegendDisplayMode, LegendPlacement, LineConfig, LineInterpolation, LineStyle, OptionsWithLegend, OptionsWithTextFormatting, OptionsWithTooltip, VisibilityMode as PointVisibility, PointsConfig, ScaleDirection, ScaleDistribution, ScaleDistributionConfig, ScaleOrientation, StackableFieldConfig, StackingConfig, StackingMode, TableAutoCellOptions, TableBarGaugeCellOptions, TableCellDisplayMode, TableColorTextCellOptions, TableColoredBackgroundCellOptions, TableImageCellOptions, TableJsonViewCellOptions, TableSparklineCellOptions, TooltipDisplayMode, VizLegendOptions, VizTextDisplayOptions, VizTooltipOptions } from '@grafana/schema';
import Prism from 'prismjs';
import * as _emotion_serialize from '@emotion/serialize';
import * as csstype from 'csstype';
import { PopperArrowProps } from 'react-popper';
import { positionValues } from 'react-custom-scrollbars-2';
import { EditorProps } from '@monaco-editor/react';
import * as monacoType from 'monaco-editor/esm/vs/editor/editor.api';
export { monacoType as monacoTypes };
import uPlot, { Options, AlignedData, Axis, Scale, Series, Hooks, Cursor, Select as Select$2, Band, Padding, Range } from 'uplot';
import { AsyncState } from 'react-use/lib/useAsync';
import { DropzoneOptions, Accept } from 'react-dropzone';

type Props$1g<T> = NoticeProps<SelectableValue<T>, boolean, GroupBase<SelectableValue<T>>>;

interface PopoverContentProps {
    /**
     * @deprecated
     * This prop is deprecated and no longer has any effect as popper position updates automatically.
     * It will be removed in a future release.
     */
    updatePopperPosition?: () => void;
}
type PopoverContent = string | React.ReactElement | ((props: PopoverContentProps) => JSX.Element);
type TooltipPlacement = Placement | 'auto' | 'auto-start' | 'auto-end';

interface TooltipProps {
    theme?: 'info' | 'error' | 'info-alt';
    show?: boolean;
    placement?: TooltipPlacement;
    content: PopoverContent;
    children: JSX.Element;
    /**
     * Set to true if you want the tooltip to stay long enough so the user can move mouse over content to select text or click a link
     */
    interactive?: boolean;
}
declare const Tooltip: React__default.ForwardRefExoticComponent<TooltipProps & React__default.RefAttributes<HTMLElement>>;

type PopperControllerRenderProp = (showPopper: () => void, hidePopper: () => void, popperProps: {
    show: boolean;
    placement: Placement$1;
    content: PopoverContent;
}) => JSX.Element;
interface Props$1f {
    placement?: Placement$1;
    content: PopoverContent;
    className?: string;
    children: PopperControllerRenderProp;
    hideAfter?: number;
}
interface State$7 {
    show: boolean;
}
declare class PopoverController extends Component<Props$1f, State$7> {
    private hideTimeout;
    state: {
        show: boolean;
    };
    showPopper: () => void;
    hidePopper: () => void;
    render(): JSX.Element;
}

interface Props$1e extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    tooltip?: PopoverContent;
    labelWidth?: number;
    inputWidth?: number | null;
    inputEl?: React__default.ReactNode;
    /** Make tooltip interactive */
    interactive?: boolean;
}

interface Props$1d extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onReset'> {
    onReset: (event: React__default.SyntheticEvent<HTMLButtonElement>) => void;
    isConfigured: boolean;
    label?: string;
    tooltip?: PopoverContent;
    labelWidth?: number;
    inputWidth?: number;
    placeholder?: string;
    interactive?: boolean;
}

interface Themeable {
    theme: GrafanaTheme;
}
interface Themeable2 {
    theme: GrafanaTheme2;
}

interface ValidationRule {
    rule: (valueToValidate: string) => boolean;
    errorMessage: string;
}
interface ValidationEvents {
    [eventName: string]: ValidationRule[];
}

declare function getPreviousCousin(node: any, selector: string): any;
declare function getNextCharacter(global?: any): any;

declare const dom_d_getPreviousCousin: typeof getPreviousCousin;
declare const dom_d_getNextCharacter: typeof getNextCharacter;
declare namespace dom_d {
  export {
    dom_d_getPreviousCousin as getPreviousCousin,
    dom_d_getNextCharacter as getNextCharacter,
  };
}

/** Returns the ID value of the first, and only, child element  */
declare function getChildId(children: ReactElement): string | undefined;
/**
 * Given react node or function returns element accordingly
 *
 * @param itemToRender
 * @param props props to be passed to the function if item provided as such
 */
declare function renderOrCallToRender<TProps = {}>(itemToRender: ((props: TProps) => React__default.ReactNode) | React__default.ReactNode, props?: TProps): React__default.ReactNode;

declare const reactUtils_d_getChildId: typeof getChildId;
declare const reactUtils_d_renderOrCallToRender: typeof renderOrCallToRender;
declare namespace reactUtils_d {
  export {
    reactUtils_d_getChildId as getChildId,
    reactUtils_d_renderOrCallToRender as renderOrCallToRender,
  };
}

/**
 * @alpha
 */
declare const DEFAULT_ANNOTATION_COLOR = "rgba(0, 211, 255, 1)";
/**
 * @alpha
 */
declare const OK_COLOR = "rgba(11, 237, 50, 1)";
/**
 * @alpha
 */
declare const ALERTING_COLOR = "rgba(237, 46, 24, 1)";
/**
 * @alpha
 */
declare const NO_DATA_COLOR = "rgba(150, 150, 150, 1)";
/**
 * @alpha
 */
declare const PENDING_COLOR = "rgba(247, 149, 32, 1)";
/**
 * @alpha
 */
declare const REGION_FILL_ALPHA = 0.09;
declare const colors: string[];
declare function getTextColorForBackground(color: string): "rgb(32, 34, 38)" | "rgb(247, 248, 250)";
declare function getTextColorForAlphaBackground(color: string, themeIsDark: boolean): "rgb(32, 34, 38)" | "rgb(247, 248, 250)";
declare let sortedColors: boolean[];

declare enum EventsWithValidation {
    onBlur = "onBlur",
    onFocus = "onFocus",
    onChange = "onChange"
}
declare const validate: (value: string, validationRules: ValidationRule[]) => string[] | null;
declare const hasValidationEvent: (event: EventsWithValidation, validationEvents: ValidationEvents | undefined) => ValidationRule[] | undefined;
declare const regexValidation: (pattern: string | RegExp, errorMessage?: string) => ValidationRule;

declare const SCHEMA: SchemaProperties;
declare const makeFragment: (text: string, syntax?: string) => Document$1;
declare const makeValue: (text: string, syntax?: string) => Value;

type ComponentSize = 'xs' | 'sm' | 'md' | 'lg';

type IconType = 'mono' | 'default' | 'solid';
type IconSize = ComponentSize | 'xl' | 'xxl' | 'xxxl';
declare const isIconSize: (value: string) => value is IconSize;
declare const getAvailableIcons: () => string[];
/**
 * Get the icon for a given field
 */
declare function getFieldTypeIcon(field?: Field$1): IconName;
/** Get an icon for a given field type  */
declare function getFieldTypeIconName(type?: FieldType): IconName;

/** @internal */
type MenuItemElement = HTMLAnchorElement & HTMLButtonElement & HTMLDivElement;
/** @internal */
interface MenuItemProps<T = unknown> {
    /** Label of the menu item */
    label: string;
    /** Description of item */
    description?: string;
    /** Aria label for accessibility support */
    ariaLabel?: string;
    /** Aria checked for accessibility support */
    ariaChecked?: boolean;
    /** Target of the menu item (i.e. new window)  */
    target?: LinkTarget;
    /** Icon of the menu item */
    icon?: IconName;
    /** Role of the menu item */
    role?: string;
    /** Url of the menu item */
    url?: string;
    /** Handler for the click behaviour */
    onClick?: (event: React__default.MouseEvent<HTMLElement>, payload?: T) => void;
    /** Custom MenuItem styles*/
    className?: string;
    /** Active */
    active?: boolean;
    /** Disabled */
    disabled?: boolean;
    /** Show in destructive style (error color) */
    destructive?: boolean;
    tabIndex?: number;
    /** List of menu items for the subMenu */
    childItems?: Array<ReactElement<MenuItemProps>>;
    /** Custom style for SubMenu */
    customSubMenuContainerStyles?: CSSProperties;
    /** Shortcut key combination */
    shortcut?: string;
    /** Test id for e2e tests and fullstory*/
    testId?: string;
}
/** @internal */
declare const MenuItem: React__default.MemoExoticComponent<React__default.ForwardRefExoticComponent<MenuItemProps<unknown> & React__default.RefAttributes<MenuItemElement>>>;

/**
 * Delays creating links until we need to open the ContextMenu
 */
declare const linkModelToContextMenuItems: (links: () => LinkModel[]) => MenuItemProps[];
declare const isCompactUrl: (url: string) => boolean;

declare function getTagColorIndexFromName(name?: string): number;
/**
 * Returns tag badge background and border colors based on hashed tag name.
 * @param name tag name
 */
declare function getTagColorsFromName(name?: string): {
    color: string;
    borderColor: string;
};
declare function getTagColor(index: number): {
    color: string;
    borderColor: string;
};

declare function getScrollbarWidth(): number;

/**
 * @internal
 */
declare const getCellLinks: (field: Field$1, row: Row) => LinkModel<unknown>[] | undefined;

/**
 * @internal
 */
declare function getCanvasContext(): CanvasRenderingContext2D;
/**
 * @beta
 */
declare function measureText(text: string, fontSize: number, fontWeight?: number): TextMetrics;
/**
 * @beta
 */
declare function calculateFontSize(text: string, width: number, height: number, lineHeight: number, maxSize?: number, fontWeight?: number): number;

/** @internal */
declare function useForceUpdate(): () => void;

/**
 * List of auto-complete search function used by SuggestionsPlugin.handleTypeahead()
 * @alpha
 */
declare enum SearchFunctionType {
    Word = "Word",
    Prefix = "Prefix",
    Fuzzy = "Fuzzy"
}

/**
 * @internal
 */
interface Logger {
    logger: (...t: any[]) => void;
    enable: () => void;
    disable: () => void;
    isEnabled: () => boolean;
}
/** @internal */
declare const createLogger: (name: string) => Logger;

/**
 * Allows debug helpers attachement to the window object
 * @internal
 */
declare function attachDebugger(key: string, thebugger?: any, logger?: Logger): void;

/**
 * @deprecated use it from @grafana/data. Kept here for backward compatibility.
 */
declare enum NodeGraphDataFrameFieldNames {
    id = "id",
    title = "title",
    subTitle = "subTitle",
    mainStat = "mainStat",
    secondaryStat = "secondaryStat",
    source = "source",
    target = "target",
    detail = "detail__",
    arc = "arc__",
    color = "color"
}

type FuzzyMatch = {
    /**
     * Total number of unmatched letters between matched letters
     */
    distance: number;
    ranges: HighlightPart[];
    found: boolean;
};
/**
 * Attempts to do a partial input search, e.g. allowing to search for a text (needle)
 * in another text (stack) by skipping some letters in-between. All letters from
 * the needle must exist in the stack in the same order to find a match.
 *
 * The search is case sensitive. Convert stack and needle to lower case
 * to make it case insensitive.
 *
 * @param stack - main text to be searched
 * @param needle - partial text to find in the stack
 *
 * @internal
 */
declare function fuzzyMatch(stack: string, needle: string): FuzzyMatch;

/**
 * @internal
 */
type SearchFunction = (items: CompletionItem[], prefix: string) => CompletionItem[];
interface CompletionItemGroup {
    /**
     * Label that will be displayed for all entries of this group.
     */
    label: string;
    /**
     * List of suggestions of this group.
     */
    items: CompletionItem[];
    /**
     * If true, match only by prefix (and not mid-word).
     * @deprecated use searchFunctionType instead
     */
    prefixMatch?: boolean;
    /**
     * Function type used to create auto-complete list
     * @alpha
     */
    searchFunctionType?: SearchFunctionType;
    /**
     * If true, do not filter items in this group based on the search.
     */
    skipFilter?: boolean;
    /**
     * If true, do not sort items.
     */
    skipSort?: boolean;
}
declare enum CompletionItemKind {
    GroupTitle = "GroupTitle"
}
/**
 * @internal
 */
type HighlightPart = {
    start: number;
    end: number;
};
interface CompletionItem {
    /**
     * The label of this completion item. By default
     * this is also the text that is inserted when selecting
     * this completion.
     */
    label: string;
    /**
     * The kind of this completion item. An icon is chosen
     * by the editor based on the kind.
     */
    kind?: CompletionItemKind | string;
    /**
     * A human-readable string with additional information
     * about this item, like type or symbol information.
     */
    detail?: string;
    /**
     * A human-readable string, can be Markdown, that represents a doc-comment.
     */
    documentation?: string;
    /**
     * A string that should be used when comparing this item
     * with other items. When `falsy` the `label` is used.
     * @deprecated use sortValue instead
     */
    sortText?: string;
    /**
     * A string or number that should be used when comparing this
     * item with other items. When `undefined` then `label` is used.
     * @alpha
     */
    sortValue?: string | number;
    /**
     * Parts of the label to be highlighted
     * @internal
     */
    highlightParts?: HighlightPart[];
    /**
     * A string that should be used when filtering a set of
     * completion items. When `falsy` the `label` is used.
     */
    filterText?: string;
    /**
     * A string or snippet that should be inserted in a document when selecting
     * this completion. When `falsy` the `label` is used.
     */
    insertText?: string;
    /**
     * Delete number of characters before the caret position,
     * by default the letters from the beginning of the word.
     */
    deleteBackwards?: number;
    /**
     * Number of steps to move after the insertion, can be negative.
     */
    move?: number;
}
interface TypeaheadOutput {
    context?: string;
    suggestions: CompletionItemGroup[];
}
interface TypeaheadInput {
    text: string;
    prefix: string;
    wrapperClasses: string[];
    labelKey?: string;
    value?: Value;
    editor?: Editor;
}
interface SuggestionsState {
    groupedItems: CompletionItemGroup[];
    typeaheadPrefix: string;
    typeaheadContext: string;
    typeaheadText: string;
}

/**
 * @deprecated use the types from react-hook-form instead
 */
type FormAPI<T extends FieldValues> = Omit<UseFormReturn<T>, 'handleSubmit'> & {
    errors: FieldErrors<T>;
};
type FieldArrayValue = Partial<FieldValues> | Array<Partial<FieldValues>>;
/**
 * @deprecated use the types from react-hook-form instead
 */
interface FieldArrayApi {
    fields: Array<Record<string, any>>;
    append: (value: FieldArrayValue, options?: FieldArrayMethodProps) => void;
    prepend: (value: FieldArrayValue) => void;
    remove: (index?: number | number[]) => void;
    swap: (indexA: number, indexB: number) => void;
    move: (from: number, to: number) => void;
    insert: (index: number, value: FieldArrayValue) => void;
}

type SelectValue<T> = T | SelectableValue<T> | T[] | Array<SelectableValue<T>>;
type ActionMeta = ActionMeta$1<{}>;
type InputActionMeta = {
    action: 'set-value' | 'input-change' | 'input-blur' | 'menu-close';
};
type LoadOptionsCallback<T> = (options: Array<SelectableValue<T>>) => void;
interface SelectCommonProps<T> {
    /** Aria label applied to the input field */
    ['aria-label']?: string;
    ['data-testid']?: string;
    allowCreateWhileLoading?: boolean;
    allowCustomValue?: boolean;
    /** Focus is set to the Select when rendered*/
    autoFocus?: boolean;
    backspaceRemovesValue?: boolean;
    blurInputOnSelect?: boolean;
    captureMenuScroll?: boolean;
    className?: string;
    closeMenuOnSelect?: boolean;
    /** Used for custom components. For more information, see `react-select` */
    components?: any;
    /** Sets the position of the createOption element in your options list. Defaults to 'last' */
    createOptionPosition?: 'first' | 'last';
    defaultValue?: any;
    disabled?: boolean;
    filterOption?: (option: SelectableValue<T>, searchQuery: string) => boolean;
    formatOptionLabel?: (item: SelectableValue<T>, formatOptionMeta: FormatOptionLabelMeta<T>) => React__default.ReactNode;
    /** Function for formatting the text that is displayed when creating a new value*/
    formatCreateLabel?: (input: string) => React__default.ReactNode;
    getOptionLabel?: (item: SelectableValue<T>) => React__default.ReactNode;
    getOptionValue?: (item: SelectableValue<T>) => T | undefined;
    hideSelectedOptions?: boolean;
    inputValue?: string;
    invalid?: boolean;
    isClearable?: boolean;
    /** The id to set on the SelectContainer component. To set the id for a label (with htmlFor), @see inputId instead */
    id?: string;
    isLoading?: boolean;
    isMulti?: boolean;
    /** The id of the search input. Use this to set a matching label with htmlFor */
    inputId?: string;
    isOpen?: boolean;
    /** Disables the possibility to type into the input*/
    isSearchable?: boolean;
    showAllSelectedWhenOpen?: boolean;
    maxMenuHeight?: number;
    minMenuHeight?: number;
    maxVisibleValues?: number;
    menuPlacement?: 'auto' | 'bottom' | 'top';
    menuPosition?: 'fixed' | 'absolute';
    /**
     * Setting to false will prevent the menu from portalling to the body.
     */
    menuShouldPortal?: boolean;
    /** The message to display when no options could be found */
    noOptionsMessage?: string;
    onBlur?: () => void;
    onChange: (value: SelectableValue<T>, actionMeta: ActionMeta) => {} | void;
    onCloseMenu?: () => void;
    /** allowCustomValue must be enabled. Function decides what to do with that custom value. */
    onCreateOption?: (value: string) => void;
    onInputChange?: (value: string, actionMeta: InputActionMeta) => void;
    onKeyDown?: (event: React__default.KeyboardEvent) => void;
    /** Callback which fires when the user scrolls to the bottom of the menu */
    onMenuScrollToBottom?: (event: WheelEvent | TouchEvent) => void;
    /** Callback which fires when the user scrolls to the top of the menu */
    onMenuScrollToTop?: (event: WheelEvent | TouchEvent) => void;
    onOpenMenu?: () => void;
    onFocus?: () => void;
    openMenuOnFocus?: boolean;
    options?: Array<SelectableValue<T>>;
    placeholder?: string;
    /** item to be rendered in front of the input */
    prefix?: JSX.Element | string | null;
    /** Use a custom element to control Select. A proper ref to the renderControl is needed if 'portal' isn't set to null*/
    renderControl?: ControlComponent<T>;
    tabSelectsValue?: boolean;
    value?: T | SelectValue<T> | null;
    /** Will wrap the MenuList in a react-window FixedSizeVirtualList for improved performance, does not support options with "description" properties */
    virtualized?: boolean;
    /** Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.*/
    width?: number | 'auto';
    isOptionDisabled?: (option: SelectableValue<T>) => boolean;
    /** allowCustomValue must be enabled. Determines whether the "create new" option should be displayed based on the current input value, select value and options array. */
    isValidNewOption?: (inputValue: string, value: SelectableValue<T> | null, options: OptionsOrGroups<SelectableValue<T>, GroupBase<SelectableValue<T>>>) => boolean;
    /** Message to display isLoading=true*/
    loadingMessage?: string;
    /** Disables wrapping of multi value values when closed */
    noMultiValueWrap?: boolean;
}
interface SelectAsyncProps<T> {
    /** When specified as boolean the loadOptions will execute when component is mounted */
    defaultOptions?: boolean | Array<SelectableValue<T>>;
    /** Asynchronously load select options */
    loadOptions?: (query: string, cb?: LoadOptionsCallback<T>) => Promise<Array<SelectableValue<T>>> | void;
    /** If cacheOptions is true, then the loaded data will be cached. The cache will remain until cacheOptions changes value. */
    cacheOptions?: boolean;
    /** Message to display when options are loading */
    loadingMessage?: string;
}
/** The VirtualizedSelect component uses a slightly different SelectableValue, description and other props are not supported */
interface VirtualizedSelectProps<T> extends Omit<SelectCommonProps<T>, 'virtualized'> {
    options?: Array<Pick<SelectableValue<T>, 'label' | 'value'>>;
}
/** The AsyncVirtualizedSelect component uses a slightly different SelectableValue, description and other props are not supported */
interface VirtualizedSelectAsyncProps<T> extends Omit<SelectCommonProps<T>, 'virtualized'>, SelectAsyncProps<T> {
}
interface MultiSelectCommonProps<T> extends Omit<SelectCommonProps<T>, 'onChange' | 'isMulti' | 'value'> {
    value?: Array<SelectableValue<T>> | T[];
    onChange: (item: Array<SelectableValue<T>>, actionMeta: ActionMeta) => {} | void;
}
interface SelectBaseProps<T> extends SelectCommonProps<T>, SelectAsyncProps<T> {
    invalid?: boolean;
}
interface CustomControlProps<T> {
    ref: React__default.Ref<any>;
    isOpen: boolean;
    /** Currently selected value */
    value?: SelectableValue<T>;
    /** onClick will be automatically passed to custom control allowing menu toggle */
    onClick: () => void;
    /** onBlur will be automatically passed to custom control closing the menu on element blur */
    onBlur: () => void;
    disabled: boolean;
    invalid: boolean;
}
type ControlComponent<T> = React__default.ComponentType<CustomControlProps<T>>;
interface SelectableOptGroup<T = any> {
    label: string;
    options: Array<SelectableValue<T>>;
    [key: string]: any;
}
type SelectOptions<T = any> = SelectableValue<T> | Array<SelectableValue<T> | SelectableOptGroup<T> | Array<SelectableOptGroup<T>>>;
type FormatOptionLabelMeta<T> = {
    context: string;
    inputValue: string;
    selectValue: Array<SelectableValue<T>>;
};
type ReactSelectProps<Option, IsMulti extends boolean, Group extends GroupBase<Option>> = CommonProps$2<Option, IsMulti, Group>['selectProps'] & {
    invalid: boolean;
};
interface CustomComponentProps<Option, isMulti extends boolean, Group extends GroupBase<Option>> {
    selectProps: ReactSelectProps<Option, isMulti, Group>;
}

interface Column<TableData extends object> {
    /**
     * ID of the column. Must be unique among all other columns
     */
    id: IdType<TableData>;
    /**
     * Custom render function for te cell
     */
    cell?: (props: CellProps<TableData>) => ReactNode;
    /**
     * Header name. if `undefined` the header will be empty. Useful for action columns.
     */
    header?: string;
    /**
     * Column sort type. If `undefined` the column will not be sortable.
     * */
    sortType?: DefaultSortTypes | SortByFn<TableData>;
    /**
     * If `true` prevents the column from growing more than its content.
     */
    disableGrow?: boolean;
    /**
     * If the provided function returns `false` the column will be hidden.
     */
    visible?: (data: TableData[]) => boolean;
}

/** @deprecated Please use the `Input` component, which does not require this enum. */
declare enum LegacyInputStatus {
    Invalid = "invalid",
    Valid = "valid"
}
interface Props$1c extends React__default.HTMLProps<HTMLInputElement> {
    validationEvents?: ValidationEvents;
    hideErrorMessage?: boolean;
    inputRef?: React__default.LegacyRef<HTMLInputElement>;
    onBlur?: (event: React__default.FocusEvent<HTMLInputElement>, status?: LegacyInputStatus) => void;
    onFocus?: (event: React__default.FocusEvent<HTMLInputElement>, status?: LegacyInputStatus) => void;
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>, status?: LegacyInputStatus) => void;
}
interface State$6 {
    error: string | null;
}
/** @deprecated Please use the `Input` component. {@link https://developers.grafana.com/ui/latest/index.html?path=/story/forms-input--simple See Storybook for example.} */
declare class Input$1 extends PureComponent<Props$1c, State$6> {
    static defaultProps: {
        className: string;
    };
    state: State$6;
    get status(): LegacyInputStatus;
    get isInvalid(): boolean;
    validatorAsync: (validationRules: ValidationRule[]) => (evt: ChangeEvent<HTMLInputElement>) => void;
    populateEventPropsWithStatus: (restProps: any, validationEvents: ValidationEvents | undefined) => any;
    render(): React__default.JSX.Element;
}

/**
 * Changes in new selects:
 * - noOptionsMessage & loadingMessage is of string type
 * - isDisabled is renamed to disabled
 */
type LegacyCommonProps<T> = Omit<SelectCommonProps<T>, 'noOptionsMessage' | 'disabled' | 'value' | 'loadingMessage'>;
interface AsyncProps<T> extends LegacyCommonProps<T>, Omit<SelectAsyncProps<T>, 'loadingMessage'> {
    loadingMessage?: () => string;
    noOptionsMessage?: () => string;
    tooltipContent?: PopoverContent;
    isDisabled?: boolean;
    value?: SelectableValue<T>;
}
interface LegacySelectProps<T> extends LegacyCommonProps<T> {
    tooltipContent?: PopoverContent;
    noOptionsMessage?: () => string;
    isDisabled?: boolean;
    value?: SelectableValue<T>;
}
/** @deprecated Please use the `Select` component, as seen {@link https://developers.grafana.com/ui/latest/index.html?path=/story/forms-select--basic in Storybook}. */
declare class Select$1<T> extends PureComponent<LegacySelectProps<T>> {
    context: React__default.ContextType<typeof ThemeContext>;
    static contextType: React__default.Context<_grafana_data.GrafanaTheme2>;
    static defaultProps: Partial<LegacySelectProps<unknown>>;
    render(): React__default.JSX.Element;
}
/** @deprecated Please use the `Select` component with async functionality, as seen {@link https://developers.grafana.com/ui/latest/index.html?path=/story/forms-select--basic-select-async in Storybook}. */
declare class AsyncSelect$1<T> extends PureComponent<AsyncProps<T>> {
    static contextType: React__default.Context<_grafana_data.GrafanaTheme2>;
    static defaultProps: Partial<AsyncProps<unknown>>;
    render(): React__default.JSX.Element;
}

interface Props$1b {
    label: string;
    checked: boolean;
    disabled?: boolean;
    className?: string;
    labelClass?: string;
    switchClass?: string;
    tooltip?: string;
    tooltipPlacement?: Placement$1;
    transparent?: boolean;
    onChange: (event: React__default.SyntheticEvent<HTMLInputElement>) => void;
}
interface State$5 {
    id: string;
}
/** @deprecated Please use the `Switch` component, {@link https://developers.grafana.com/ui/latest/index.html?path=/story/forms-switch--controlled as seen in Storybook} */
declare class Switch$1 extends PureComponent<Props$1b, State$5> {
    state: {
        id: string;
    };
    internalOnChange: (event: React__default.FormEvent<HTMLInputElement>) => void;
    render(): React__default.JSX.Element;
}

interface IconProps extends Omit<React__default.SVGProps<SVGElement>, 'onLoad' | 'onError' | 'ref'> {
    name: IconName;
    size?: IconSize;
    type?: IconType;
    title?: string;
}
declare const Icon: React__default.ForwardRefExoticComponent<IconProps & React__default.RefAttributes<SVGElement>>;

type IconButtonVariant = 'primary' | 'secondary' | 'destructive';
interface BaseProps$1 extends Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> {
    /** Name of the icon **/
    name: IconName;
    /** Icon size - sizes xxl and xxxl are deprecated and when used being decreased to xl*/
    size?: IconSize;
    /** Type of the icon - mono or default */
    iconType?: IconType;
    /** Variant to change the color of the Icon */
    variant?: IconButtonVariant;
}
interface BasePropsWithTooltip extends BaseProps$1 {
    /** Tooltip content to display on hover and as the aria-label */
    tooltip: PopoverContent;
    /** Position of the tooltip */
    tooltipPlacement?: TooltipPlacement;
}
interface BasePropsWithAriaLabel extends BaseProps$1 {
    /** @deprecated use aria-label instead*/
    ariaLabel?: string;
    /** Text available only for screen readers. No tooltip will be set in this case. */
    ['aria-label']: string;
}
type Props$1a = BasePropsWithTooltip | BasePropsWithAriaLabel;
declare const IconButton: React__default.ForwardRefExoticComponent<Props$1a & React__default.RefAttributes<HTMLButtonElement>>;

type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'success';
type ButtonFill = 'solid' | 'outline' | 'text';
type CommonProps$1 = {
    size?: ComponentSize;
    variant?: ButtonVariant;
    fill?: ButtonFill;
    icon?: IconName;
    className?: string;
    children?: React__default.ReactNode;
    fullWidth?: boolean;
    type?: string;
    /** Tooltip content to display on hover */
    tooltip?: PopoverContent;
    /** Position of the tooltip */
    tooltipPlacement?: TooltipPlacement;
};
type ButtonProps = CommonProps$1 & ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: React__default.ForwardRefExoticComponent<CommonProps$1 & React__default.ButtonHTMLAttributes<HTMLButtonElement> & React__default.RefAttributes<HTMLButtonElement>>;
declare const LinkButton: React__default.ForwardRefExoticComponent<CommonProps$1 & React__default.ButtonHTMLAttributes<HTMLButtonElement> & React__default.AnchorHTMLAttributes<HTMLAnchorElement> & React__default.RefAttributes<HTMLAnchorElement>>;
declare const clearButtonStyles: (theme: GrafanaTheme2) => string;

interface Props$19 extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}
declare const ButtonGroup: React__default.ForwardRefExoticComponent<Props$19 & React__default.RefAttributes<HTMLDivElement>>;

declare const ConfirmButton: React__default.FunctionComponent<{
    size?: ComponentSize | undefined;
    disabled?: boolean | undefined;
    onClick?: (() => void) | undefined;
    children: string | ReactElement;
    className?: string | undefined;
    autoFocus?: boolean | undefined;
    onCancel?: (() => void) | undefined;
    onConfirm: () => void;
    confirmText?: string | undefined;
    confirmVariant?: ButtonVariant | undefined;
    closeOnConfirm?: boolean | undefined;
}>;

interface Props$18 {
    /** Confirm action callback */
    onConfirm(): void;
    /** Button size */
    size?: ComponentSize;
    /** Disable button click action */
    disabled?: boolean;
    'aria-label'?: string;
    /** Close after delete button is clicked */
    closeOnConfirm?: boolean;
}
declare const DeleteButton: ({ size, disabled, onConfirm, "aria-label": ariaLabel, closeOnConfirm }: Props$18) => React__default.JSX.Element;

type RenderPopperArrowFn = (props: {
    arrowProps: PopperArrowProps;
    placement: string;
}) => JSX.Element;
interface Props$17 extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'content'> {
    show: boolean;
    placement?: Placement$1;
    content: PopoverContent;
    referenceElement: HTMLElement | VirtualElement;
    wrapperClassName?: string;
    renderArrow?: RenderPopperArrowFn;
}
declare class Popover extends PureComponent<Props$17> {
    render(): React__default.JSX.Element;
}

interface ToggletipContentProps {
    /**
     * @deprecated
     * This prop is deprecated and no longer has any effect as popper position updates automatically.
     * It will be removed in a future release.
     */
    update?: () => void;
}
type ToggletipContent = string | React.ReactElement | ((props: ToggletipContentProps) => JSX.Element);

interface ToggletipProps {
    /** The theme used to display the toggletip */
    theme?: 'info' | 'error';
    /** The title to be displayed on the header */
    title?: JSX.Element | string;
    /** determine whether to show or not the close button **/
    closeButton?: boolean;
    /** Callback function to be called when the toggletip is closed */
    onClose?: () => void;
    /** The preferred placement of the toggletip */
    placement?: Placement$1;
    /** The text or component that houses the content of the toggleltip */
    content: ToggletipContent;
    /** The text or component to be displayed on the toggletip's bottom */
    footer?: JSX.Element | string;
    /** The UI control users interact with to display toggletips */
    children: JSX.Element;
    /** Determine whether the toggletip should fit its content or not */
    fitContent?: boolean;
    /** Determine whether the toggletip should be shown or not */
    show?: boolean;
    /** Callback function to be called when the toggletip is opened */
    onOpen?: () => void;
}
declare const Toggletip: React__default.MemoExoticComponent<({ children, theme, placement, content, title, closeButton, onClose, footer, fitContent, onOpen, show, }: ToggletipProps) => React__default.JSX.Element>;

interface Props$16 {
    className?: string;
    root?: HTMLElement;
    forwardedRef?: React__default.ForwardedRef<HTMLDivElement>;
}
declare function Portal(props: PropsWithChildren<Props$16>): React__default.ReactPortal;
/** @internal */
declare function getPortalContainer(): HTMLElement;
/** @internal */
declare function PortalContainer(): React__default.JSX.Element;

type ScrollbarPosition = positionValues;
interface Props$15 {
    className?: string;
    testId?: string;
    autoHide?: boolean;
    autoHideTimeout?: number;
    autoHeightMax?: string;
    hideTracksWhenNotNeeded?: boolean;
    hideHorizontalTrack?: boolean;
    hideVerticalTrack?: boolean;
    scrollRefCallback?: RefCallback<HTMLDivElement>;
    scrollTop?: number;
    setScrollTop?: (position: ScrollbarPosition) => void;
    showScrollIndicators?: boolean;
    autoHeightMin?: number | string;
    updateAfterMountMs?: number;
    onScroll?: React__default.UIEventHandler;
}
/**
 * Wraps component into <Scrollbars> component from `react-custom-scrollbars`
 */
declare const CustomScrollbar: ({ autoHide, autoHideTimeout, setScrollTop, className, testId, autoHeightMin, autoHeightMax, hideTracksWhenNotNeeded, hideHorizontalTrack, hideVerticalTrack, scrollRefCallback, showScrollIndicators, updateAfterMountMs, scrollTop, onScroll, children, }: React__default.PropsWithChildren<Props$15>) => React__default.JSX.Element;

interface TabConfig {
    label: string;
    value: string;
    content: React__default.ReactNode;
    icon: IconName;
}
interface TabbedContainerProps {
    tabs: TabConfig[];
    defaultTab?: string;
    closeIconTooltip?: string;
    onClose: () => void;
}
declare function TabbedContainer({ tabs, defaultTab, closeIconTooltip, onClose }: TabbedContainerProps): React__default.JSX.Element;

interface Props$14 extends ButtonProps {
    /** A function that returns text to be copied */
    getText(): string;
    /** Callback when the text has been successfully copied */
    onClipboardCopy?(copiedText: string): void;
    /** Callback when there was an error copying the text */
    onClipboardError?(copiedText: string, error: unknown): void;
}
declare function ClipboardButton({ onClipboardCopy, onClipboardError, children, getText, icon, variant, ...buttonProps }: Props$14): React__default.JSX.Element;

interface CascaderProps {
    /** The separator between levels in the search */
    separator?: string;
    placeholder?: string;
    /** As the onSelect handler reports only the leaf node selected, the leaf nodes should have unique value. */
    options: CascaderOption[];
    /** Changes the value for every selection, including branch nodes. Defaults to true. */
    changeOnSelect?: boolean;
    onSelect(val: string): void;
    /** Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.*/
    width?: number;
    /** Single string that needs to be the same as value of the last item in the selection chain. */
    initialValue?: string;
    allowCustomValue?: boolean;
    /** A function for formatting the message for custom value creation. Only applies when allowCustomValue is set to true*/
    formatCreateLabel?: (val: string) => string;
    /** If true all levels are shown in the input by simple concatenating the labels */
    displayAllSelectedLevels?: boolean;
    onBlur?: () => void;
    /** When mounted focus automatically on the input */
    autoFocus?: boolean;
    /** Keep the dropdown open all the time, useful in case whole cascader visibility is controlled by the parent */
    alwaysOpen?: boolean;
    /** Don't show what is selected in the cascader input/search. Useful when input is used just as search and the
        cascader is hidden after selection. */
    hideActiveLevelLabel?: boolean;
    disabled?: boolean;
}
interface CascaderState {
    isSearching: boolean;
    focusCascade: boolean;
    rcValue: SelectableValue<string[]>;
    activeLabel: string;
}
interface CascaderOption {
    /**
     *  The value used under the hood
     */
    value: string;
    /**
     *  The label to display in the UI
     */
    label: string;
    /** Items will be just flattened into the main list of items recursively. */
    items?: CascaderOption[];
    disabled?: boolean;
    /** Avoid using */
    title?: string;
    /**  Children will be shown in a submenu. Use 'items' instead, as 'children' exist to ensure backwards compatibility.*/
    children?: CascaderOption[];
}
declare class Cascader extends PureComponent<CascaderProps, CascaderState> {
    constructor(props: CascaderProps);
    static defaultProps: {
        changeOnSelect: boolean;
    };
    flattenOptions: (options: CascaderOption[], optionPath?: CascaderOption[]) => SelectableValue<string[]>[];
    getSearchableOptions: micro_memoize.Memoized<(options: CascaderOption[]) => SelectableValue<string[]>[]>;
    setInitialValue(searchableOptions: Array<SelectableValue<string[]>>, initValue?: string): {
        rcValue: string[];
        activeLabel: any;
    };
    onChange: (value: string[], selectedOptions: CascaderOption[]) => void;
    onSelect: (obj: SelectableValue<string[]>) => void;
    onCreateOption: (value: string) => void;
    onBlur: () => void;
    onBlurCascade: () => void;
    onInputKeyDown: (e: React__default.KeyboardEvent<HTMLInputElement>) => void;
    onSelectInputChange: (value: string) => void;
    render(): React__default.JSX.Element;
}

interface ButtonCascaderProps {
    options: CascaderOption[];
    children?: string;
    icon?: IconName;
    disabled?: boolean;
    value?: string[];
    fieldNames?: {
        label: string;
        value: string;
        children: string;
    };
    loadData?: (selectedOptions: CascaderOption[]) => void;
    onChange?: (value: string[], selectedOptions: CascaderOption[]) => void;
    onPopupVisibleChange?: (visible: boolean) => void;
    className?: string;
    variant?: ButtonProps['variant'];
    buttonProps?: ButtonProps;
    hideDownIcon?: boolean;
}
declare const ButtonCascader: {
    (props: ButtonCascaderProps): React__default.JSX.Element;
    displayName: string;
};

interface InlineToastProps {
    children: React__default.ReactNode;
    suffixIcon?: IconName;
    referenceElement: HTMLElement | null;
    placement: Side;
    /**
     * @deprecated
     * Placement to use if there is not enough space to show the full toast with the original placement
     * This is now done automatically.
     */
    alternativePlacement?: Side;
}
declare function InlineToast({ referenceElement, children, suffixIcon, placement }: InlineToastProps): React__default.JSX.Element;

/**
 * @public
 */
interface LoadingPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
    text: React__default.ReactNode;
}
/**
 * @public
 */
declare const LoadingPlaceholder: ({ text, className, ...rest }: LoadingPlaceholderProps) => React__default.JSX.Element;

interface LoadingBarProps {
    width: number;
    delay?: number;
    ariaLabel?: string;
}
declare function LoadingBar({ width, delay, ariaLabel }: LoadingBarProps): React__default.JSX.Element;

type ColorPickerChangeHandler = (color: string) => void;
interface ColorPickerProps extends Themeable2 {
    color: string;
    onChange: ColorPickerChangeHandler;
    enableNamedColors?: boolean;
}

/**
 * If you need custom trigger for the color picker you can do that with a render prop pattern and supply a function
 * as a child. You will get show/hide function which you can map to desired interaction (like onClick or onMouseLeave)
 * and a ref which needs to be passed to an HTMLElement for correct positioning. If you want to use class or functional
 * component as a custom trigger you will need to forward the reference to first HTMLElement child.
 */
type ColorPickerTriggerRenderer = (props: {
    ref: React__default.RefObject<any>;
    showColorPicker: () => void;
    hideColorPicker: () => void;
}) => React__default.ReactNode;
declare const ColorPicker: React__default.FunctionComponent<{
    color: string;
    onChange: ColorPickerChangeHandler;
    children?: ColorPickerTriggerRenderer | undefined;
    enableNamedColors?: boolean | undefined;
}>;
declare const SeriesColorPicker: React__default.FunctionComponent<{
    color: string;
    onChange: ColorPickerChangeHandler;
    children?: ColorPickerTriggerRenderer | undefined;
    enableNamedColors?: boolean | undefined;
    updatePopperPosition?: (() => void) | undefined;
    yaxis?: number | undefined;
    onToggleAxis?: (() => void) | undefined;
}>;

interface Props$13 extends Omit<HTMLProps<HTMLInputElement>, 'prefix' | 'size'> {
    /** Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.*/
    width?: number;
    /** Show an invalid state around the input */
    invalid?: boolean;
    /** Show an icon as a prefix in the input */
    prefix?: ReactNode;
    /** Show an icon as a suffix in the input */
    suffix?: ReactNode;
    /** Show a loading indicator as a suffix in the input */
    loading?: boolean;
    /** Add a component as an addon before the input  */
    addonBefore?: ReactNode;
    /** Add a component as an addon after the input */
    addonAfter?: ReactNode;
}
interface StyleDeps {
    theme: GrafanaTheme2;
    invalid?: boolean;
    width?: number;
}
declare const Input: React__default.ForwardRefExoticComponent<Omit<Props$13, "ref"> & React__default.RefAttributes<HTMLInputElement>>;
declare const getInputStyles: micro_memoize.Memoized<({ theme, invalid, width }: StyleDeps) => {
    wrapper: string;
    inputWrapper: string;
    input: string;
    inputDisabled: string;
    addon: string;
    prefix: string;
    suffix: string;
    loadingIndicator: string;
}>;

interface ColorPickerInputProps extends Omit<Props$13, 'value' | 'onChange'> {
    value?: string;
    onChange: (color: string) => void;
    /** Format for returning the color in onChange callback, defaults to 'rgb' */
    returnColorAs?: 'rgb' | 'hex';
}
declare const ColorPickerInput: React__default.ForwardRefExoticComponent<Omit<ColorPickerInputProps, "ref"> & React__default.RefAttributes<HTMLInputElement>>;

interface SeriesColorPickerPopoverProps extends ColorPickerProps, PopoverContentProps {
    yaxis?: number;
    onToggleAxis?: () => void;
}
declare const SeriesColorPickerPopover: (props: SeriesColorPickerPopoverProps) => React__default.JSX.Element;
declare const SeriesColorPickerPopoverWithTheme: React__default.FunctionComponent<{
    color: string;
    onChange: ColorPickerChangeHandler;
    enableNamedColors?: boolean | undefined;
    updatePopperPosition?: (() => void) | undefined;
    yaxis?: number | undefined;
    onToggleAxis?: (() => void) | undefined;
}>;

interface Props$12 {
    children: JSX.Element | string;
}
declare const EmptySearchResult: ({ children }: Props$12) => React__default.JSX.Element;

interface UnitPickerProps {
    onChange: (item?: string) => void;
    value?: string;
    width?: number;
}
declare class UnitPicker extends PureComponent<UnitPickerProps> {
    onChange: (value: SelectableValue<string>) => void;
    render(): React__default.JSX.Element;
}

interface Props$11 {
    placeholder?: string;
    onChange: (stats: string[]) => void;
    stats: string[];
    allowMultiple?: boolean;
    defaultStat?: string;
    className?: string;
    width?: number;
    menuPlacement?: 'auto' | 'bottom' | 'top';
    inputId?: string;
    filterOptions?: (ext: FieldReducerInfo) => boolean;
}
declare class StatsPicker extends PureComponent<Props$11> {
    static defaultProps: Partial<Props$11>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props$11): void;
    checkInput: () => void;
    onSelectionChange: (item: SelectableValue<string>) => void;
    render(): React__default.JSX.Element;
}

type CommonProps = {
    /** Icon name */
    icon?: IconName | React__default.ReactNode;
    /** Icon size */
    iconSize?: IconSize;
    /** Tooltip */
    tooltip?: string;
    /** For image icons */
    imgSrc?: string;
    /** Alt text for imgSrc */
    imgAlt?: string;
    /** if true or false will show angle-down/up */
    isOpen?: boolean;
    /** Controls flex-grow: 1 */
    fullWidth?: boolean;
    /** reduces padding to xs */
    narrow?: boolean;
    /** variant */
    variant?: ToolbarButtonVariant;
    /** Hide any children and only show icon */
    iconOnly?: boolean;
    /** Show highlight dot */
    isHighlighted?: boolean;
};
type ToolbarButtonVariant = 'default' | 'primary' | 'destructive' | 'active' | 'canvas';
declare const ToolbarButton: React__default.ForwardRefExoticComponent<CommonProps & React__default.ButtonHTMLAttributes<HTMLButtonElement> & React__default.RefAttributes<HTMLButtonElement>>;

interface Props$10 extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    /** Determine flex-alignment of child buttons. Needed for overflow behaviour. */
    alignment?: 'left' | 'right';
}
declare const ToolbarButtonRow: React__default.ForwardRefExoticComponent<Props$10 & React__default.RefAttributes<HTMLDivElement>>;

declare const defaultIntervals: string[];
interface Props$$ {
    intervals?: string[];
    onRefresh?: () => void;
    onIntervalChanged: (interval: string) => void;
    value?: string;
    tooltip?: string;
    isLoading?: boolean;
    isLive?: boolean;
    text?: string;
    noIntervalPicker?: boolean;
    showAutoInterval?: boolean;
    width?: string;
    primary?: boolean;
    isOnCanvas?: boolean;
}
declare class RefreshPicker extends PureComponent<Props$$> {
    static offOption: {
        label: string;
        value: string;
        ariaLabel: string;
    };
    static liveOption: {
        label: string;
        value: string;
        ariaLabel: string;
    };
    static autoOption: {
        label: string;
        value: string;
        ariaLabel: string;
    };
    static isLive: (refreshInterval?: string) => boolean;
    constructor(props: Props$$);
    onChangeSelect: (item: SelectableValue<string>) => void;
    getVariant(): ToolbarButtonVariant;
    render(): React__default.JSX.Element;
}

/** @public */
interface TimeRangePickerProps {
    hideText?: boolean;
    value: TimeRange;
    timeZone?: TimeZone;
    fiscalYearStartMonth?: number;
    timeSyncButton?: JSX.Element;
    isSynced?: boolean;
    onChange: (timeRange: TimeRange) => void;
    onChangeTimeZone: (timeZone: TimeZone) => void;
    onChangeFiscalYearStartMonth?: (month: number) => void;
    onMoveBackward: () => void;
    onMoveForward: () => void;
    onZoom: () => void;
    onError?: (error?: string) => void;
    history?: TimeRange[];
    hideQuickRanges?: boolean;
    widthOverride?: number;
    isOnCanvas?: boolean;
    onToolbarTimePickerClick?: () => void;
}
declare function TimeRangePicker(props: TimeRangePickerProps): React__default.JSX.Element;
declare namespace TimeRangePicker {
    var displayName: string;
}
declare const TimePickerTooltip: ({ timeRange, timeZone }: {
    timeRange: TimeRange;
    timeZone?: string | undefined;
}) => React__default.JSX.Element;

type LabelProps$2 = Pick<TimeRangePickerProps, 'hideText' | 'value' | 'timeZone'> & {
    placeholder?: string;
    className?: string;
};
declare const TimeRangeLabel: React__default.NamedExoticComponent<LabelProps$2>;

type FormInputSize = 'sm' | 'md' | 'lg' | 'auto';

interface Props$_ {
    onChange: (value: DateTime) => void;
    value?: DateTime;
    showHour?: boolean;
    showSeconds?: boolean;
    minuteStep?: number;
    size?: FormInputSize;
    disabled?: boolean;
    disabledHours?: () => number[];
    disabledMinutes?: () => number[];
    disabledSeconds?: () => number[];
}
declare const TimeOfDayPicker: ({ minuteStep, showHour, showSeconds, onChange, value, size, disabled, disabledHours, disabledMinutes, disabledSeconds, }: Props$_) => React__default.JSX.Element;

interface Props$Z {
    onChange: (timeZone?: TimeZone) => void;
    value?: TimeZone;
    width?: number;
    autoFocus?: boolean;
    onBlur?: () => void;
    includeInternal?: boolean | InternalTimeZones[];
    disabled?: boolean;
    inputId?: string;
    menuShouldPortal?: boolean;
    openMenuOnFocus?: boolean;
}
declare const TimeZonePicker: (props: Props$Z) => React__default.JSX.Element;

interface Props$Y {
    onChange: (weekStart: string) => void;
    value: string;
    width?: number;
    autoFocus?: boolean;
    onBlur?: () => void;
    disabled?: boolean;
    inputId?: string;
}
declare const WeekStartPicker: (props: Props$Y) => React__default.JSX.Element;

/** @public */
interface DatePickerProps {
    isOpen?: boolean;
    onClose: () => void;
    onChange: (value: Date) => void;
    value?: Date;
    minDate?: Date;
    maxDate?: Date;
}
/** @public */
declare const DatePicker: React__default.NamedExoticComponent<DatePickerProps>;

/** @public */
interface DatePickerWithInputProps extends Omit<Props$13, 'ref' | 'value' | 'onChange'> {
    /** Value selected by the DatePicker */
    value?: Date | string;
    /** The minimum date the value can be set to */
    minDate?: Date;
    /** The maximum date the value can be set to */
    maxDate?: Date;
    /** Handles changes when a new date is selected */
    onChange: (value: Date | string) => void;
    /** Hide the calendar when date is selected */
    closeOnSelect?: boolean;
    /** Text that appears when the input has no text */
    placeholder?: string;
}
/** @public */
declare const DatePickerWithInput: ({ value, minDate, maxDate, onChange, closeOnSelect, placeholder, ...rest }: DatePickerWithInputProps) => React__default.JSX.Element;

interface Props$X {
    /** Input date for the component */
    date?: DateTime;
    /** Callback for returning the selected date */
    onChange: (date: DateTime) => void;
    /** label for the input field */
    label?: ReactNode;
    /** Set the latest selectable date */
    maxDate?: Date;
    /** Set the minimum selectable date */
    minDate?: Date;
    /** Display seconds on the time picker */
    showSeconds?: boolean;
    /** Set the hours that can't be selected */
    disabledHours?: () => number[];
    /** Set the minutes that can't be selected */
    disabledMinutes?: () => number[];
    /** Set the seconds that can't be selected */
    disabledSeconds?: () => number[];
}
declare const DateTimePicker: ({ date, maxDate, minDate, label, onChange, disabledHours, disabledMinutes, disabledSeconds, showSeconds, }: Props$X) => React__default.JSX.Element;

interface ListProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => JSX.Element;
    getItemKey?: (item: T) => string;
    className?: string;
}

declare class List<T> extends PureComponent<ListProps<T>> {
    render(): React__default.JSX.Element;
}

type InteractiveTableHeaderTooltip = {
    content: PopoverContent;
    iconName?: IconName;
};
type FetchDataArgs<Data> = {
    sortBy: Array<SortingRule<Data>>;
};
type FetchDataFunc<Data> = ({ sortBy }: FetchDataArgs<Data>) => void;
interface Props$W<TableData extends object> {
    className?: string;
    /**
     * Table's columns definition. Must be memoized.
     */
    columns: Array<Column<TableData>>;
    /**
     * The data to display in the table. Must be memoized.
     */
    data: TableData[];
    /**
     * Must return a unique id for each row
     */
    getRowId: TableOptions<TableData>['getRowId'];
    /**
     * Optional tooltips for the table headers. The key must match the column id.
     */
    headerTooltips?: Record<string, InteractiveTableHeaderTooltip>;
    /**
     * Number of rows per page. A value of zero disables pagination. Defaults to 0.
     */
    pageSize?: number;
    /**
     * Render function for the expanded row. if not provided, the tables rows will not be expandable.
     */
    renderExpandedRow?: (row: TableData) => ReactNode;
    /**
     * A custom function to fetch data when the table is sorted. If not provided, the table will be sorted client-side.
     * It's important for this function to have a stable identity, e.g. being wrapped into useCallback to prevent unnecessary
     * re-renders of the table.
     */
    fetchData?: FetchDataFunc<TableData>;
}
/** @alpha */
declare function InteractiveTable<TableData extends object>({ className, columns, data, getRowId, headerTooltips, pageSize, renderExpandedRow, fetchData, }: Props$W<TableData>): React__default.JSX.Element;

interface Props$V {
    placeholder?: string;
    /** Array of selected tags */
    tags?: string[];
    onChange: (tags: string[]) => void;
    width?: number;
    id?: string;
    className?: string;
    /** Toggle disabled state */
    disabled?: boolean;
    /** Enable adding new tags when input loses focus */
    addOnBlur?: boolean;
    /** Toggle invalid state */
    invalid?: boolean;
}
declare const TagsInput: ({ placeholder, tags, onChange, width, className, disabled, addOnBlur, invalid, id, }: Props$V) => React__default.JSX.Element;

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
    /** Form input element, i.e Input or Switch */
    children: React__default.ReactElement;
    /** Label for the field */
    label?: React__default.ReactNode;
    /** Description of the field */
    description?: React__default.ReactNode;
    /** Indicates if field is in invalid state */
    invalid?: boolean;
    /** Indicates if field is in loading state */
    loading?: boolean;
    /** Indicates if field is disabled */
    disabled?: boolean;
    /** Indicates if field is required */
    required?: boolean;
    /** Error message to display */
    error?: React__default.ReactNode;
    /** Indicates horizontal layout of the field */
    horizontal?: boolean;
    /** make validation message overflow horizontally. Prevents pushing out adjacent inline components */
    validationMessageHorizontalOverflow?: boolean;
    className?: string;
    /**
     *  A unique id that associates the label of the Field component with the control with the unique id.
     *  If the `htmlFor` property is missing the `htmlFor` will be inferred from the `id` or `inputId` property of the first child.
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for
     */
    htmlFor?: string;
}
declare const Field: React__default.ForwardRefExoticComponent<FieldProps & React__default.RefAttributes<HTMLDivElement>>;

interface Props$U<T = string> extends Omit<FieldProps, 'children'> {
    /** Saving request that will be triggered 600ms after changing the value */
    onFinishChange: (inputValue: T) => Promise<void>;
    /** Custom error message to display on saving */
    saveErrorMessage?: string;
    /** Input that will save its value on change  */
    children: (onChange: (newValue: T) => void) => React__default.ReactElement;
}
declare function AutoSaveField<T = string>(props: Props$U<T>): React__default.JSX.Element;
declare namespace AutoSaveField {
    var displayName: string;
}

interface Props$T {
    /** The current page index being shown. */
    currentPage: number;
    /** Number of total pages. */
    numberOfPages: number;
    /** Callback function for fetching the selected page.  */
    onNavigate: (toPage: number) => void;
    /** When set to true and the pagination result is only one page it will not render the pagination at all. */
    hideWhenSinglePage?: boolean;
    /** Small version only shows the current page and the navigation buttons. */
    showSmallVersion?: boolean;
    className?: string;
}
declare const Pagination: ({ currentPage, numberOfPages, onNavigate, hideWhenSinglePage, showSmallVersion, className, }: Props$T) => React__default.JSX.Element | null;

/**
 * @public
 */
type OnTagClick = (name: string, event: React__default.MouseEvent<HTMLElement>) => void;
interface Props$S extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
    /** Name of the tag to display */
    name: string;
    icon?: IconName;
    /** Use constant color from TAG_COLORS. Using index instead of color directly so we can match other styling. */
    colorIndex?: number;
    onClick?: OnTagClick;
}
declare const Tag: React__default.ForwardRefExoticComponent<Props$S & React__default.RefAttributes<HTMLElement>> & {
    Skeleton: (props: unknown) => React__default.JSX.Element;
};

interface Props$R {
    /** Maximum number of the tags to display */
    displayMax?: number;
    /** Names of the tags to display */
    tags: string[];
    /** Callback when the tag is clicked */
    onClick?: OnTagClick;
    /** Custom styles for the wrapper component */
    className?: string;
    /** aria-label for the `i`-th Tag component */
    getAriaLabel?: (name: string, i: number) => string;
    getColorIndex?: (name: string, i: number) => number;
    /** Icon to show next to tag label */
    icon?: IconName;
}
declare const TagList: React__default.NamedExoticComponent<Props$R & React__default.RefAttributes<HTMLUListElement>> & {
    readonly type: React__default.ForwardRefExoticComponent<Props$R & React__default.RefAttributes<HTMLUListElement>>;
} & {
    Skeleton: (props: unknown) => React__default.JSX.Element;
};

interface FilterPillProps {
    selected: boolean;
    label: string;
    onClick: React__default.MouseEventHandler<HTMLElement>;
    icon?: IconName;
}
declare const FilterPill: ({ label, selected, onClick, icon }: FilterPillProps) => React__default.JSX.Element;

interface ConfirmModalProps {
    /** Toggle modal's open/closed state */
    isOpen: boolean;
    /** Title for the modal header */
    title: string;
    /** Modal content */
    body: React__default.ReactNode;
    /** Modal description */
    description?: React__default.ReactNode;
    /** Text for confirm button */
    confirmText: string;
    /** Variant for confirm button */
    confirmVariant?: ButtonVariant;
    /** Text for dismiss button */
    dismissText?: string;
    /** Variant for dismiss button */
    dismissVariant?: ButtonVariant;
    /** Icon for the modal header */
    icon?: IconName;
    /** Additional styling for modal container */
    modalClass?: string;
    /** Text user needs to fill in before confirming */
    confirmationText?: string;
    /** Text for alternative button */
    alternativeText?: string;
    /** Confirm button variant */
    confirmButtonVariant?: ButtonVariant;
    /** Confirm action callback
     * Return a promise to disable the confirm button until the promise is resolved
     */
    onConfirm(): void | Promise<void>;
    /** Dismiss action callback */
    onDismiss(): void;
    /** Alternative action callback */
    onAlternative?(): void;
}
declare const ConfirmModal: ({ isOpen, title, body, description, confirmText, confirmVariant, confirmationText, dismissText, dismissVariant, alternativeText, modalClass, icon, onConfirm, onDismiss, onAlternative, confirmButtonVariant, }: ConfirmModalProps) => JSX.Element;

interface QueryFieldProps extends Themeable2 {
    additionalPlugins?: Plugin[];
    cleanText?: (text: string) => string;
    disabled?: boolean;
    query?: string | null;
    onRunQuery?: () => void;
    onBlur?: () => void;
    onChange?: (value: string) => void;
    onRichValueChange?: (value: Value) => void;
    onClick?: EventHook<React__default.MouseEvent<Element, MouseEvent>>;
    onTypeahead?: (typeahead: TypeaheadInput) => Promise<TypeaheadOutput>;
    onWillApplySuggestion?: (suggestion: string, state: SuggestionsState) => string;
    placeholder?: string;
    portalOrigin: string;
    syntax?: string;
    syntaxLoaded?: boolean;
    theme: GrafanaTheme2;
}
declare const QueryField: React__default.FunctionComponent<{
    query?: string | null | undefined;
    disabled?: boolean | undefined;
    onChange?: ((value: string) => void) | undefined;
    onClick?: EventHook<React__default.MouseEvent<Element, MouseEvent>> | undefined;
    onRunQuery?: (() => void) | undefined;
    onBlur?: (() => void) | undefined;
    placeholder?: string | undefined;
    syntax?: string | undefined;
    onTypeahead?: ((typeahead: TypeaheadInput) => Promise<TypeaheadOutput>) | undefined;
    cleanText?: ((text: string) => string) | undefined;
    onWillApplySuggestion?: ((suggestion: string, state: SuggestionsState) => string) | undefined;
    portalOrigin: string;
    additionalPlugins?: Plugin<Editor>[] | undefined;
    onRichValueChange?: ((value: Value) => void) | undefined;
    syntaxLoaded?: boolean | undefined;
}>;

type ReactMonacoEditorProps = Omit<EditorProps, 'theme'>;
type CodeEditorChangeHandler = (value: string) => void;
type CodeEditorSuggestionProvider = () => CodeEditorSuggestionItem[];

type Monaco = typeof monacoType;
type MonacoEditor = monacoType.editor.IStandaloneCodeEditor;
type MonacoOptions = MonacoOptionsWithGrafanaDefaults;
/**
 * @alpha
 */
declare enum CodeEditorSuggestionItemKind {
    Method = "method",
    Field = "field",
    Property = "property",
    Constant = "constant",
    Text = "text"
}
/**
 * @alpha
 */
interface CodeEditorSuggestionItem {
    /**
     * The label of this completion item. By default
     * this is also the text that is inserted when selecting
     * this completion.
     */
    label: string;
    /**
     * The kind of this completion item. An icon is chosen
     * by the editor based on the kind.
     */
    kind?: CodeEditorSuggestionItemKind;
    /**
     * A human-readable string with additional information
     * about this item, like type or symbol information.
     */
    detail?: string;
    /**
     * A human-readable string that represents a doc-comment.
     */
    documentation?: string;
    /**
     * A string or snippet that should be inserted in a document when selecting
     * this completion. When `falsy` the `label` is used.
     */
    insertText?: string;
}
/**
 * This interface will extend the original Monaco editor options interface
 * but changing the code comments to contain the proper default values to
 * prevent the consumer of the CodeEditor to get incorrect documentation in editor.
 */
interface MonacoOptionsWithGrafanaDefaults extends monacoType.editor.IStandaloneEditorConstructionOptions {
    /**
     * Enable custom contextmenu.
     * Defaults to false.
     */
    contextmenu?: boolean;
    /**
     * The number of spaces a tab is equal to.
     * This setting is overridden based on the file contents when `detectIndentation` is on.
     * Defaults to 4.
     */
    tabSize?: number;
    /**
     * Show code lens
     * Defaults to false.
     */
    codeLens?: boolean;
    /**
     * Control the width of line numbers, by reserving horizontal space for rendering at least an amount of digits.
     * Defaults to 4.
     */
    lineNumbersMinChars?: number;
    /**
     * The width reserved for line decorations (in px).
     * Line decorations are placed between line numbers and the editor content.
     * You can pass in a string in the format floating point followed by "ch". e.g. 1.3ch.
     * Defaults to 1 * theme.spacing.gridSize.
     */
    lineDecorationsWidth?: number | string;
    /**
     * Controls if a border should be drawn around the overview ruler.
     * Defaults to `false`.
     */
    overviewRulerBorder?: boolean;
    /**
     * Enable that the editor will install an interval to check if its container dom node size has changed.
     * Enabling this might have a severe performance impact.
     * Defaults to true.
     */
    automaticLayout?: boolean;
    /**
     * Always consume mouse wheel events (always call preventDefault() and stopPropagation() on the browser events).
     * Always consuming mouse wheel events will prevent the page from scrolling if the cursor is over the editor.
     * Defaults to `false`.
     */
    alwaysConsumeMouseWheel?: boolean;
}

declare const CodeEditor: React__default.FunctionComponent<{
    value: string;
    width?: string | number | undefined;
    onChange?: CodeEditorChangeHandler | undefined;
    onBlur?: CodeEditorChangeHandler | undefined;
    readOnly?: boolean | undefined;
    height?: string | number | undefined;
    onFocus?: CodeEditorChangeHandler | undefined;
    language: string;
    showMiniMap?: boolean | undefined;
    showLineNumbers?: boolean | undefined;
    monacoOptions?: MonacoOptionsWithGrafanaDefaults | undefined;
    onBeforeEditorMount?: ((monaco: typeof monacoType) => void) | undefined;
    onEditorDidMount?: ((editor: monacoType.editor.IStandaloneCodeEditor, monaco: typeof monacoType) => void) | undefined;
    onEditorWillUnmount?: (() => void) | undefined;
    onSave?: CodeEditorChangeHandler | undefined;
    getSuggestions?: CodeEditorSuggestionProvider | undefined;
    containerStyles?: string | undefined;
}>;

/**
 * @internal
 * Experimental export
 **/
declare const ReactMonacoEditorLazy: (props: ReactMonacoEditorProps) => React__default.JSX.Element;

/**
 * @alpha
 */
declare function variableSuggestionToCodeEditorSuggestion(sug: VariableSuggestion): CodeEditorSuggestionItem;

interface Props$Q {
    /** @deprecated no longer used */
    icon?: IconName;
    /** @deprecated no longer used */
    iconTooltip?: string;
    /** Title for the modal or custom header element */
    title: string | JSX.Element;
    className?: string;
    contentClassName?: string;
    closeOnEscape?: boolean;
    closeOnBackdropClick?: boolean;
    trapFocus?: boolean;
    isOpen?: boolean;
    onDismiss?: () => void;
    /** If not set will call onDismiss if that is set. */
    onClickBackdrop?: () => void;
}
declare function Modal(props: PropsWithChildren<Props$Q>): React__default.JSX.Element | null;
declare namespace Modal {
    var ButtonRow: typeof ModalButtonRow;
}
declare function ModalButtonRow({ leftItems, children }: {
    leftItems?: React__default.ReactNode;
    children: React__default.ReactNode;
}): React__default.JSX.Element;

interface Props$P {
    title: string;
    id?: string;
    /** @deprecated */
    icon?: IconName;
    /** @deprecated */
    iconTooltip?: string;
}
/** @internal */
declare const ModalHeader: ({ icon, iconTooltip, title, children, id }: React__default.PropsWithChildren<Props$P>) => React__default.JSX.Element;

interface ModalTab {
    value: string;
    label: string;
    icon?: IconName;
    tabSuffix?: NavModelItem['tabSuffix'];
}
interface Props$O {
    icon: IconName;
    title: string;
    tabs: ModalTab[];
    activeTab: string;
    onChangeTab(tab: ModalTab): void;
}
declare const ModalTabsHeader: ({ icon, title, tabs, activeTab, onChangeTab }: Props$O) => React__default.JSX.Element;

interface Props$N {
    /** @deprecated */
    icon?: IconName;
    /** @deprecated */
    iconClass?: string;
}
/** @internal */
declare const ModalTabContent: ({ children }: React__default.PropsWithChildren<Props$N>) => React__default.JSX.Element;

interface ModalsContextState {
    component: React__default.ComponentType<any> | null;
    props: any;
    showModal: <T>(component: React__default.ComponentType<T>, props: T) => void;
    hideModal: () => void;
}
declare const ModalsContext: React__default.Context<ModalsContextState>;
interface ModalsProviderProps {
    children: React__default.ReactNode;
    /** Set default component to render as modal. Useful when rendering modals from Angular */
    component?: React__default.ComponentType<any> | null;
    /** Set default component props. Useful when rendering modals from Angular */
    props?: any;
}
declare class ModalsProvider extends Component<ModalsProviderProps, ModalsContextState> {
    constructor(props: ModalsProviderProps);
    showModal: <T>(component: React__default.ComponentType<T>, props: T) => void;
    hideModal: () => void;
    render(): React__default.JSX.Element;
}
declare const ModalRoot: () => React__default.JSX.Element;
declare const ModalsController: React__default.Consumer<ModalsContextState>;

interface Props$M {
    pageIcon?: IconName;
    title?: string;
    section?: string;
    parent?: string;
    onGoBack?: () => void;
    titleHref?: string;
    parentHref?: string;
    leftItems?: ReactNode[];
    children?: ReactNode;
    className?: string;
    isFullscreen?: boolean;
    'aria-label'?: string;
    buttonOverflowAlignment?: 'left' | 'right';
    /**
     * Forces left items to be visible on small screens.
     * By default left items are hidden on small screens.
     */
    forceShowLeftItems?: boolean;
}
/** @alpha */
declare const PageToolbar: React__default.MemoExoticComponent<({ title, section, parent, pageIcon, onGoBack, children, titleHref, parentHref, leftItems, isFullscreen, className, "aria-label": ariaLabel, buttonOverflowAlignment, forceShowLeftItems, }: Props$M) => React__default.JSX.Element>;

interface Props$L {
    func: () => unknown;
    loading: boolean;
    interval: string;
}
declare class SetInterval extends PureComponent<Props$L> {
    private propsSubject;
    private subscription;
    constructor(props: Props$L);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props$L): void;
    componentWillUnmount(): void;
    render(): null;
}

declare const FILTER_FOR_OPERATOR = "=";
declare const FILTER_OUT_OPERATOR = "!=";
type AdHocFilterOperator = typeof FILTER_FOR_OPERATOR | typeof FILTER_OUT_OPERATOR;
type AdHocFilterItem = {
    key: string;
    value: string;
    operator: AdHocFilterOperator;
};
type TableFilterActionCallback = (item: AdHocFilterItem) => void;
type TableColumnResizeActionCallback = (fieldDisplayName: string, width: number) => void;
type TableSortByActionCallback = (state: TableSortByFieldState[]) => void;
interface TableSortByFieldState {
    displayName: string;
    desc?: boolean;
}
type FooterItem = Array<KeyValue<string>> | string | undefined;
interface TableFooterCalc {
    show: boolean;
    reducer: string[];
    fields?: string[];
    enablePagination?: boolean;
    countRows?: boolean;
}
interface Props$K {
    ariaLabel?: string;
    data: DataFrame;
    width: number;
    height: number;
    maxHeight?: number;
    /** Minimal column width specified in pixels */
    columnMinWidth?: number;
    noHeader?: boolean;
    showTypeIcons?: boolean;
    resizable?: boolean;
    initialSortBy?: TableSortByFieldState[];
    onColumnResize?: TableColumnResizeActionCallback;
    onSortByChange?: TableSortByActionCallback;
    onCellFilterAdded?: TableFilterActionCallback;
    footerOptions?: TableFooterCalc;
    footerValues?: FooterItem[];
    enablePagination?: boolean;
    cellHeight?: schema.TableCellHeight;
    /** @alpha Used by SparklineCell when provided */
    timeRange?: TimeRange;
    enableSharedCrosshair?: boolean;
    initialRowIndex?: number;
}
/**
 * @alpha
 * Props that will be passed to the TableCustomCellOptions.cellComponent when rendered.
 */
interface CustomCellRendererProps {
    field: Field$1;
    rowIndex: number;
    frame: DataFrame;
    value: unknown;
}
/**
 * @alpha
 * Can be used to define completely custom cell contents by providing a custom cellComponent.
 */
interface TableCustomCellOptions {
    cellComponent: FC<CustomCellRendererProps>;
    type: schema.TableCellDisplayMode.Custom;
}
type TableCellOptions = schema.TableCellOptions | TableCustomCellOptions;
type TableFieldOptions = Omit<schema.TableFieldOptions, 'cellOptions'> & {
    cellOptions: TableCellOptions;
};

declare const Table: React__default.MemoExoticComponent<(props: Props$K) => React__default.JSX.Element>;

declare const TableInputCSV: React__default.FunctionComponent<{
    text: string;
    width: string | number;
    config?: CSVConfig | undefined;
    height: string | number;
    onSeriesParsed: (data: DataFrame[], text: string) => void;
}>;

interface Props$J {
    /** Children should be a single <Tab /> or an array of <Tab /> */
    children: ReactNode;
    className?: string;
    /** For hiding the bottom border (on PageHeader for example) */
    hideBorder?: boolean;
}
declare const TabsBar: React__default.ForwardRefExoticComponent<Props$J & React__default.RefAttributes<HTMLDivElement>>;

interface TabProps extends HTMLProps<HTMLElement> {
    label: string;
    active?: boolean;
    /** When provided, it is possible to use the tab as a hyperlink. Use in cases where the tabs update location. */
    href?: string;
    icon?: IconName;
    onChangeTab?: (event: React__default.MouseEvent<HTMLElement>) => void;
    /** A number rendered next to the text. Usually used to display the number of items in a tab's view. */
    counter?: number | null;
    /** Extra content, displayed after the tab label and counter */
    suffix?: NavModelItem['tabSuffix'];
}
declare const Tab: React__default.ForwardRefExoticComponent<Omit<TabProps, "ref"> & React__default.RefAttributes<HTMLElement>>;

declare const VerticalTab: React__default.ForwardRefExoticComponent<Omit<TabProps, "ref"> & React__default.RefAttributes<HTMLAnchorElement>>;

interface Props$I extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
declare const TabContent: ({ children, className, ...restProps }: Props$I) => React__default.JSX.Element;

interface CounterProps {
    value: number;
}
declare const Counter: ({ value }: CounterProps) => React__default.JSX.Element;

interface RenderUserContentAsHTMLProps<T = HTMLSpanElement> extends Omit<HTMLAttributes<T>, 'dangerouslySetInnerHTML'> {
    component?: keyof React__default.ReactHTML;
    content: string;
}
declare function RenderUserContentAsHTML<T>({ component, content, ...rest }: PropsWithChildren<RenderUserContentAsHTMLProps<T>>): JSX.Element;

declare enum BigValueColorMode {
    Background = "background",
    BackgroundSolid = "background_solid",
    None = "none",
    Value = "value"
}
declare enum BigValueGraphMode {
    None = "none",
    Line = "line",
    Area = "area"
}
declare enum BigValueJustifyMode {
    Auto = "auto",
    Center = "center"
}
/**
 * Options for how the value & title are to be displayed
 */
declare enum BigValueTextMode {
    Auto = "auto",
    Value = "value",
    ValueAndName = "value_and_name",
    Name = "name",
    None = "none"
}
interface Props$H extends Themeable2 {
    /** Height of the component */
    height: number;
    /** Width of the component */
    width: number;
    /** Value displayed as Big Value */
    value: DisplayValue;
    /** Sparkline values for showing a graph under/behind the value  */
    sparkline?: FieldSparkline;
    /** onClick handler for the value */
    onClick?: React__default.MouseEventHandler<HTMLElement>;
    /** Custom styling */
    className?: string;
    /** Color mode for coloring the value or the background */
    colorMode: BigValueColorMode;
    /** Show a graph behind/under the value */
    graphMode: BigValueGraphMode;
    /** Auto justify value and text or center it */
    justifyMode?: BigValueJustifyMode;
    /** Factors that should influence the positioning of the text  */
    alignmentFactors?: DisplayValueAlignmentFactors;
    /** Explicit font size control */
    text?: VizTextDisplayOptions;
    /** Specify which text should be visible in the BigValue */
    textMode?: BigValueTextMode;
    /** If true disables the tooltip */
    hasLinks?: boolean;
    /**
     * If part of a series of stat panes, this is the total number.
     * Used by BigValueTextMode.Auto text mode.
     */
    count?: number;
    /**
     * Disable the wide layout for the BigValue
     */
    disableWideLayout?: boolean;
}
declare class BigValue extends PureComponent<Props$H> {
    static defaultProps: Partial<Props$H>;
    render(): React__default.JSX.Element;
}

/**
 * @internal -- not a public API
 */
declare const FIXED_UNIT = "__fixed";
type PlotConfig = Pick<Options, 'mode' | 'series' | 'scales' | 'axes' | 'cursor' | 'bands' | 'hooks' | 'select' | 'tzDate' | 'padding'>;
type FacetValues = any[];
type FacetSeries = FacetValues[];
type FacetedData = [_: null, ...series: FacetSeries];
interface PlotProps {
    data: AlignedData | FacetedData;
    width: number;
    height: number;
    config: UPlotConfigBuilder;
    children?: React__default.ReactNode;
    plotRef?: (u: uPlot) => void;
}
declare abstract class PlotConfigBuilder<P, T> {
    props: P;
    constructor(props: P);
    abstract getConfig(): T;
}
/**
 * @alpha
 */
type PlotTooltipInterpolator = (updateActiveSeriesIdx: (sIdx: number | null) => void, updateActiveDatapointIdx: (dIdx: number | null) => void, updateTooltipPosition: (clear?: boolean) => void, u: uPlot) => void;
interface PlotSelection {
    min: number;
    max: number;
    bbox: {
        top: number;
        left: number;
        width: number;
        height: number;
    };
}

/** @internal */
interface StackingGroup {
    series: number[];
    dir: StackDirection;
}
/** @internal */
declare const enum StackDirection {
    Pos = 1,
    Neg = -1
}

interface AxisProps {
    scaleKey: string;
    theme: GrafanaTheme2;
    label?: string;
    show?: boolean;
    size?: number | null;
    gap?: number;
    tickLabelRotation?: number;
    placement?: AxisPlacement;
    grid?: Axis.Grid;
    ticks?: Axis.Ticks;
    filter?: Axis.Filter;
    space?: Axis.Space;
    formatValue?: (v: any, decimals?: DecimalCount) => string;
    incrs?: Axis.Incrs;
    splits?: Axis.Splits;
    values?: Axis.Values;
    isTime?: boolean;
    timeZone?: TimeZone;
    color?: uPlot.Axis.Stroke;
    border?: uPlot.Axis.Border;
    decimals?: DecimalCount;
    distr?: ScaleDistribution;
}
declare const UPLOT_AXIS_FONT_SIZE = 12;

interface ScaleProps {
    scaleKey: string;
    isTime?: boolean;
    min?: number | null;
    max?: number | null;
    softMin?: number | null;
    softMax?: number | null;
    range?: Scale.Range;
    distribution?: ScaleDistribution;
    orientation: ScaleOrientation;
    direction: ScaleDirection;
    log?: number;
    linearThreshold?: number;
    centeredZero?: boolean;
    decimals?: DecimalCount;
}

interface SeriesProps extends LineConfig, BarConfig, FillConfig, PointsConfig {
    scaleKey: string;
    pxAlign?: boolean;
    gradientMode?: GraphGradientMode;
    dynamicSeriesColor?: (seriesIdx: number) => string | undefined;
    facets?: uPlot.Series.Facet[];
    /** Used when gradientMode is set to Scheme */
    thresholds?: ThresholdsConfig;
    colorMode?: FieldColorMode;
    hardMin?: number | null;
    hardMax?: number | null;
    softMin?: number | null;
    softMax?: number | null;
    drawStyle?: GraphDrawStyle;
    pathBuilder?: Series.PathBuilder | null;
    pointsFilter?: Series.Points.Filter | null;
    pointsBuilder?: Series.Points.Show | null;
    show?: boolean;
    dataFrameFieldIndex?: DataFrameFieldIndex;
    theme: GrafanaTheme2;
    value?: uPlot.Series.Value;
}
declare class UPlotSeriesBuilder extends PlotConfigBuilder<SeriesProps, Series> {
    getConfig(): {
        show: boolean;
        class?: string | undefined;
        scale: string;
        auto?: boolean | undefined;
        sorted?: Series.Sorted | undefined;
        spanGaps: boolean | undefined;
        gaps?: Series.GapsRefiner | undefined;
        pxAlign: number | boolean | undefined;
        label?: string | undefined;
        value: Series.Value;
        values?: Series.Values | undefined;
        paths?: Series.PathBuilder | undefined;
        points?: Series.Points | undefined;
        facets: Series.Facet[] | undefined;
        width?: number | undefined;
        stroke?: Series.Stroke | undefined;
        fill: Series.Fill | undefined;
        fillTo?: Series.FillTo | undefined;
        dash?: number[] | undefined;
        cap?: CanvasLineCap | undefined;
        alpha?: number | undefined;
        idxs?: Series.MinMaxIdxs | undefined;
        min?: number | undefined;
        max?: number | undefined;
    };
    private getLineColor;
    private getFill;
}

interface UPlotThresholdOptions {
    scaleKey: string;
    thresholds: ThresholdsConfig;
    config: GraphThresholdsStyleConfig;
    theme: GrafanaTheme2;
    hardMin?: number | null;
    hardMax?: number | null;
    softMin?: number | null;
    softMax?: number | null;
}

type PrepData = (frames: DataFrame[]) => AlignedData | FacetedData;
type PreDataStacked = (frames: DataFrame[], stackingGroups: StackingGroup[]) => AlignedData | FacetedData;
declare class UPlotConfigBuilder {
    series: UPlotSeriesBuilder[];
    private axes;
    private scales;
    private bands;
    private stackingGroups;
    private cursor;
    private select;
    private hasLeftAxis;
    private hooks;
    private tz;
    private sync;
    private mode;
    private frames;
    private thresholds;
    private tooltipInterpolator;
    private padding?;
    private cachedConfig?;
    prepData: PrepData | undefined;
    constructor(timeZone?: TimeZone);
    scaleKeys: [string, string];
    addHook<T extends keyof Hooks.Defs>(type: T, hook: Hooks.Defs[T]): void;
    addThresholds(options: UPlotThresholdOptions): void;
    addAxis(props: AxisProps): void;
    getAxisPlacement(scaleKey: string): AxisPlacement;
    setCursor(cursor?: Cursor): void;
    setMode(mode: uPlot.Mode): void;
    setSelect(select: Select$2): void;
    addSeries(props: SeriesProps): void;
    getSeries(): UPlotSeriesBuilder[];
    /** Add or update the scale with the scale key */
    addScale(props: ScaleProps): void;
    addBand(band: Band): void;
    setStackingGroups(groups: StackingGroup[]): void;
    getStackingGroups(): StackingGroup[];
    setTooltipInterpolator(interpolator: PlotTooltipInterpolator): void;
    getTooltipInterpolator(): PlotTooltipInterpolator | undefined;
    setPrepData(prepData: PreDataStacked): void;
    setSync(): void;
    hasSync(): boolean;
    setPadding(padding: Padding): void;
    getConfig(): PlotConfig;
    private tzDate;
    private ensureNonOverlappingAxes;
}
type Renderers = Array<{
    fieldMap: Record<string, string>;
    indicesOnly: string[];
    init: (config: UPlotConfigBuilder, fieldIndices: Record<string, number>) => void;
}>;
/** @alpha */
type UPlotConfigPrepOpts<T extends Record<string, unknown> = {}> = {
    frame: DataFrame;
    theme: GrafanaTheme2;
    timeZones: TimeZone[];
    getTimeRange: () => TimeRange;
    eventBus: EventBus;
    allFrames: DataFrame[];
    renderers?: Renderers;
    tweakScale?: (opts: ScaleProps, forField: Field$1) => ScaleProps;
    tweakAxis?: (opts: AxisProps, forField: Field$1) => AxisProps;
    eventsScope?: string;
    hoverProximity?: number;
} & T;
/** @alpha */
type UPlotConfigPrepFn<T extends {} = {}> = (opts: UPlotConfigPrepOpts<T>) => UPlotConfigBuilder;

interface SparklineProps extends Themeable2 {
    width: number;
    height: number;
    config?: FieldConfig<GraphFieldConfig>;
    sparkline: FieldSparkline;
}
interface State$4 {
    data: AlignedData;
    alignedDataFrame: DataFrame;
    configBuilder: UPlotConfigBuilder;
}
/** @internal */
declare class Sparkline extends PureComponent<SparklineProps, State$4> {
    constructor(props: SparklineProps);
    static getDerivedStateFromProps(props: SparklineProps, state: State$4): {
        data: AlignedData;
        alignedDataFrame: DataFrame;
        configBuilder: UPlotConfigBuilder;
    };
    componentDidUpdate(prevProps: SparklineProps, prevState: State$4): void;
    getYRange(field: Field$1): Range.MinMax;
    prepareConfig(data: DataFrame): UPlotConfigBuilder;
    render(): React__default.JSX.Element;
}

interface Props$G {
    height: number;
    field: FieldConfig;
    showThresholdMarkers: boolean;
    showThresholdLabels: boolean;
    width: number;
    value: DisplayValue;
    text?: VizTextDisplayOptions;
    onClick?: React__default.MouseEventHandler<HTMLElement>;
    className?: string;
    theme: GrafanaTheme2;
    orientation?: VizOrientation;
}
declare class Gauge extends PureComponent<Props$G> {
    canvasElement: HTMLDivElement | null;
    static defaultProps: Partial<Props$G>;
    componentDidMount(): void;
    componentDidUpdate(): void;
    draw(): void;
    renderVisualization: () => React__default.JSX.Element;
    render(): React__default.JSX.Element;
}

interface Props$F extends Themeable2 {
    height: number;
    width: number;
    field: FieldConfig;
    display?: DisplayProcessor;
    value: DisplayValue;
    orientation: VizOrientation$1;
    text?: VizTextDisplayOptions;
    itemSpacing?: number;
    lcdCellWidth?: number;
    displayMode: BarGaugeDisplayMode;
    onClick?: React__default.MouseEventHandler<HTMLElement>;
    className?: string;
    showUnfilled?: boolean;
    alignmentFactors?: DisplayValueAlignmentFactors;
    valueDisplayMode?: BarGaugeValueMode;
    namePlacement?: BarGaugeNamePlacement;
}
declare class BarGauge extends PureComponent<Props$F> {
    static defaultProps: Partial<Props$F>;
    render(): React__default.JSX.Element;
    renderBarAndValue(): React__default.ReactNode;
    renderBasicAndGradientBars(): ReactNode;
    renderRetroBars(): ReactNode;
}

interface FlotPosition {
    pageX: number;
    pageY: number;
    x: number;
    x1: number;
    y: number;
    y1: number;
}
type ActiveDimensions<T extends Dimensions = any> = {
    [key in keyof T]: [number, number | undefined] | null;
};
interface VizTooltipContentProps<T extends Dimensions = any> {
    dimensions: T;
    activeDimensions?: ActiveDimensions<T>;
    timeZone?: TimeZone;
    pos: FlotPosition;
    mode: TooltipDisplayMode;
}
interface VizTooltipProps {
    /** Element used as tooltips content */
    content?: React__default.ReactElement;
    /** Optional component to be used as a tooltip content */
    tooltipComponent?: React__default.ComponentType<React__default.PropsWithChildren<VizTooltipContentProps>>;
    /** x/y position relative to the window */
    position?: {
        x: number;
        y: number;
    };
    /** x/y offset relative to tooltip origin element, i.e. graph's datapoint */
    offset?: {
        x: number;
        y: number;
    };
    mode?: TooltipDisplayMode;
}
/**
 * @public
 */
declare const VizTooltip: {
    ({ content, position, offset }: VizTooltipProps): React__default.JSX.Element | null;
    displayName: string;
};

/**
 * @public
 */
interface VizTooltipContainerProps extends HTMLAttributes<HTMLDivElement> {
    position: {
        x: number;
        y: number;
    };
    offset: {
        x: number;
        y: number;
    };
    children?: React__default.ReactNode;
    allowPointerEvents?: boolean;
}
/**
 * @public
 */
declare const VizTooltipContainer: {
    ({ position: { x: positionX, y: positionY }, offset: { x: offsetX, y: offsetY }, children, allowPointerEvents, className, ...otherProps }: VizTooltipContainerProps): React__default.JSX.Element;
    displayName: string;
};

/**
 * @public
 */
interface SeriesTableRowProps {
    color?: string;
    label?: React__default.ReactNode;
    value?: string | GraphSeriesValue;
    isActive?: boolean;
}
/**
 * @public
 */
declare const SeriesTableRow: ({ color, label, value, isActive }: SeriesTableRowProps) => React__default.JSX.Element;
/**
 * @public
 */
interface SeriesTableProps {
    timestamp?: string | GraphSeriesValue;
    series: SeriesTableRowProps[];
}
/**
 * @public
 */
declare const SeriesTable: ({ timestamp, series }: SeriesTableProps) => React__default.JSX.Element;

interface Props$E<V, D> {
    /**
     * Optionally precalculate dimensions to support consistent behavior between repeated
     * values.  Two typical patterns are:
     * 1) Calculate raw values like font size etc and pass them to each vis
     * 2) find the maximum input values and pass that to the vis
     */
    getAlignmentFactors?: (values: V[], width: number, height: number) => D;
    /**
     * Render a single value
     */
    renderValue: (props: VizRepeaterRenderValueProps<V, D>) => JSX.Element;
    height: number;
    width: number;
    source: unknown;
    getValues: () => V[];
    renderCounter: number;
    orientation: VizOrientation$1;
    itemSpacing?: number;
    /** When orientation is set to auto layout items in a grid */
    autoGrid?: boolean;
    minVizWidth?: number;
    minVizHeight?: number;
    maxVizHeight?: number;
}
interface VizRepeaterRenderValueProps<V, D = {}> {
    value: V;
    width: number;
    height: number;
    orientation: VizOrientation$1;
    alignmentFactors: D;
    /**
     * Total number of values being shown in repeater
     */
    count: number;
}
interface DefaultProps {
    itemSpacing: number;
}
interface State$3<V> {
    values: V[];
}
declare class VizRepeater<V, D = {}> extends PureComponent<Props$E<V, D>, State$3<V>> {
    static defaultProps: DefaultProps;
    constructor(props: Props$E<V, D>);
    componentDidUpdate(prevProps: Props$E<V, D>): void;
    getOrientation(): VizOrientation$1;
    renderGrid(): React__default.JSX.Element;
    render(): React__default.JSX.Element;
}

/**
 * @internal
 */
type LoadingIndicatorProps = {
    loading: boolean;
    onCancel: () => void;
};
/**
 * @internal
 */
declare const LoadingIndicator: ({ onCancel, loading }: LoadingIndicatorProps) => React__default.JSX.Element | null;

/**
 * @internal
 */
type PanelChromeProps = (AutoSize | FixedDimensions) & (Collapsible | HoverHeader);
interface BaseProps {
    padding?: PanelPadding;
    title?: string | React__default.ReactElement;
    description?: string | (() => string);
    titleItems?: ReactNode;
    menu?: ReactElement | (() => ReactElement);
    dragClass?: string;
    dragClassCancel?: string;
    /**
     * Use only to indicate loading or streaming data in the panel.
     * Any other values of loadingState are ignored.
     */
    loadingState?: LoadingState;
    /**
     * Used to display status message (used for panel errors currently)
     */
    statusMessage?: string;
    /**
     * Handle opening error details view (like inspect / error tab)
     */
    statusMessageOnClick?: (e: React__default.SyntheticEvent) => void;
    /**
     * @deprecated use `actions' instead
     **/
    leftItems?: ReactNode[];
    actions?: ReactNode;
    displayMode?: 'default' | 'transparent';
    onCancelQuery?: () => void;
    /**
     * callback when opening the panel menu
     */
    onOpenMenu?: () => void;
}
interface FixedDimensions extends BaseProps {
    width: number;
    height: number;
    children: (innerWidth: number, innerHeight: number) => ReactNode;
}
interface AutoSize extends BaseProps {
    width?: never;
    height?: never;
    children: ReactNode;
}
interface Collapsible {
    collapsible: boolean;
    collapsed?: boolean;
    /**
     * callback when collapsing or expanding the panel
     */
    onToggleCollapse?: (collapsed: boolean) => void;
    hoverHeader?: never;
    hoverHeaderOffset?: never;
}
interface HoverHeader {
    collapsible?: never;
    collapsed?: never;
    onToggleCollapse?: never;
    hoverHeader?: boolean;
    hoverHeaderOffset?: number;
}
/**
 * @internal
 */
type PanelPadding = 'none' | 'md';

type TitleItemProps = {
    className?: string;
    children: React__default.ReactNode;
    onClick?: LinkModel['onClick'];
    href?: string;
    target?: LinkTarget;
    title?: string;
};
type TitleItemElement = HTMLAnchorElement & HTMLButtonElement;
declare const TitleItem: React__default.ForwardRefExoticComponent<TitleItemProps & React__default.RefAttributes<TitleItemElement>>;

/**
 * Mode to describe if a legend is isolated/selected or being appended to an existing
 * series selection.
 * @alpha
 */
declare enum SeriesVisibilityChangeMode {
    ToggleSelection = "select",
    AppendToSelection = "append"
}

/** @alpha */
interface PanelContext {
    /** Identifier for the events scope */
    eventsScope: string;
    eventBus: EventBus;
    /** Dashboard panels sync */
    sync?: () => DashboardCursorSync;
    /** Information on what the outer container is */
    app?: CoreApp | 'string';
    /**
     * Called when a component wants to change the color for a series
     *
     * @alpha -- experimental
     */
    onSeriesColorChange?: (label: string, color: string) => void;
    onToggleSeriesVisibility?: (label: string, mode: SeriesVisibilityChangeMode) => void;
    canAddAnnotations?: () => boolean;
    canEditAnnotations?: (dashboardUID?: string) => boolean;
    canDeleteAnnotations?: (dashboardUID?: string) => boolean;
    onAnnotationCreate?: (annotation: AnnotationEventUIModel) => void;
    onAnnotationUpdate?: (annotation: AnnotationEventUIModel) => void;
    onAnnotationDelete?: (id: string) => void;
    /**
     * Used from visualizations like Table to add ad-hoc filters from cell values
     */
    onAddAdHocFilter?: (item: AdHocFilterItem) => void;
    /**
     * Enables modifying thresholds directly from the panel
     *
     * @alpha -- experimental
     */
    canEditThresholds?: boolean;
    /**
     * Shows threshold indicators on the right-hand side of the panel
     *
     * @alpha -- experimental
     */
    showThresholds?: boolean;
    /**
     * Called when a panel wants to change default thresholds configuration
     *
     * @alpha -- experimental
     */
    onThresholdsChange?: (thresholds: ThresholdsConfig) => void;
    /** For instance state that can be shared between panel & options UI  */
    instanceState?: any;
    /** Update instance state, this is only supported in dashboard panel context currently */
    onInstanceStateChange?: (state: any) => void;
    /**
     * Called when a panel is changing the sort order of the legends.
     */
    onToggleLegendSort?: (sortBy: string) => void;
    /**
     * Optional, only some contexts support this. This action can be cancelled by user which will result
     * in a the Promise resolving to a false value.
     */
    onUpdateData?: (frames: DataFrame[]) => Promise<boolean>;
    /**
     * Optional supplier for internal data links. If not provided a link pointing to Explore will be generated.
     * @internal
     */
    dataLinkPostProcessor?: DataLinkPostProcessor;
}
declare const PanelContextRoot: React__default.Context<PanelContext>;
/**
 * @alpha
 */
declare const PanelContextProvider: React__default.Provider<PanelContext>;
/**
 * @alpha
 */
declare const usePanelContext: () => PanelContext;

/**
 * @internal
 */
interface PanelChromeType extends React__default.FC<PanelChromeProps> {
    LoadingIndicator: typeof LoadingIndicator;
    TitleItem: typeof TitleItem;
}
/**
 * @internal
 */
declare const PanelChrome: PanelChromeType;

/**
 * @beta
 */
interface VizLayoutProps {
    width: number;
    height: number;
    legend?: React__default.ReactElement<VizLayoutLegendProps> | null;
    children: (width: number, height: number) => React__default.ReactNode;
}
/**
 * @beta
 */
interface VizLayoutComponentType extends FC<VizLayoutProps> {
    Legend: ComponentType<VizLayoutLegendProps>;
}
/**
 * @beta
 */
declare const VizLayout: VizLayoutComponentType;
/**
 * @beta
 */
interface VizLayoutLegendProps {
    placement: LegendPlacement;
    children: React__default.ReactNode;
    maxHeight?: string;
    maxWidth?: string;
    width?: number;
}

declare enum SeriesVisibilityChangeBehavior {
    Isolate = 0,
    Hide = 1
}
interface VizLegendBaseProps<T> {
    placement: LegendPlacement;
    className?: string;
    items: Array<VizLegendItem<T>>;
    seriesVisibilityChangeBehavior?: SeriesVisibilityChangeBehavior;
    onLabelClick?: (item: VizLegendItem<T>, event: React__default.MouseEvent<HTMLButtonElement>) => void;
    itemRenderer?: (item: VizLegendItem<T>, index: number) => JSX.Element;
    onLabelMouseOver?: (item: VizLegendItem, event: React__default.MouseEvent<HTMLButtonElement> | React__default.FocusEvent<HTMLButtonElement>) => void;
    onLabelMouseOut?: (item: VizLegendItem, event: React__default.MouseEvent<HTMLButtonElement> | React__default.FocusEvent<HTMLButtonElement>) => void;
    readonly?: boolean;
}
interface VizLegendTableProps<T> extends VizLegendBaseProps<T> {
    sortBy?: string;
    sortDesc?: boolean;
    onToggleSort?: (sortBy: string) => void;
    isSortable?: boolean;
}
interface LegendProps<T = any> extends VizLegendBaseProps<T>, VizLegendTableProps<T> {
    displayMode: LegendDisplayMode;
}
interface VizLegendItem<T = any> {
    getItemKey?: () => string;
    label: string;
    color?: string;
    gradient?: string;
    yAxis: number;
    disabled?: boolean;
    getDisplayValues?: () => DisplayValue[];
    fieldIndex?: DataFrameFieldIndex;
    data?: T;
}

/**
 * @public
 */
declare function VizLegend<T>({ items, displayMode, sortBy: sortKey, seriesVisibilityChangeBehavior, sortDesc, onLabelClick, onToggleSort, placement, className, itemRenderer, readonly, isSortable, }: LegendProps<T>): React__default.JSX.Element | null;
declare namespace VizLegend {
    var displayName: string;
}

interface Props$D<T> {
    item: VizLegendItem<T>;
    className?: string;
    onLabelClick?: (item: VizLegendItem<T>, event: React__default.MouseEvent<HTMLButtonElement>) => void;
    onLabelMouseOver?: (item: VizLegendItem, event: React__default.MouseEvent<HTMLButtonElement> | React__default.FocusEvent<HTMLButtonElement>) => void;
    onLabelMouseOut?: (item: VizLegendItem, event: React__default.MouseEvent<HTMLButtonElement> | React__default.FocusEvent<HTMLButtonElement>) => void;
    readonly?: boolean;
}
/**
 * @internal
 */
declare const VizLegendListItem: {
    <T = unknown>({ item, onLabelClick, onLabelMouseOver, onLabelMouseOut, className, readonly, }: Props$D<T>): React__default.JSX.Element;
    displayName: string;
};

type AlertVariant = 'success' | 'warning' | 'error' | 'info';
interface Props$C extends HTMLAttributes<HTMLDivElement> {
    title: string;
    /** On click handler for alert button, mostly used for dismissing the alert */
    onRemove?: (event: React__default.MouseEvent) => void;
    severity?: AlertVariant;
    children?: ReactNode;
    elevated?: boolean;
    buttonContent?: React__default.ReactNode | string;
    bottomSpacing?: number;
    topSpacing?: number;
}
declare const Alert: React__default.ForwardRefExoticComponent<Props$C & React__default.RefAttributes<HTMLDivElement>>;

/** @deprecated */
interface GraphSeriesTogglerAPI {
    onSeriesToggle: (label: string, event: React__default.MouseEvent<HTMLElement>) => void;
    toggledSeries: GraphSeriesXY[];
}
/** @deprecated */
interface GraphSeriesTogglerProps {
    children: (api: GraphSeriesTogglerAPI) => JSX.Element;
    series: GraphSeriesXY[];
    onHiddenSeriesChanged?: (hiddenSeries: string[]) => void;
}
/** @deprecated */
interface GraphSeriesTogglerState {
    hiddenSeries: string[];
    toggledSeries: GraphSeriesXY[];
}
/** @deprecated */
declare class GraphSeriesToggler extends Component<GraphSeriesTogglerProps, GraphSeriesTogglerState> {
    constructor(props: GraphSeriesTogglerProps);
    componentDidUpdate(prevProps: Readonly<GraphSeriesTogglerProps>): void;
    onSeriesToggle(label: string, event: React__default.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}

interface Props$B {
    /** Expand or collapse te content */
    isOpen?: boolean;
    /** Element or text for the Collapse header */
    label: React__default.ReactNode;
    /** Indicates loading state of the content */
    loading?: boolean;
    /** Toggle collapsed header icon */
    collapsible?: boolean;
    /** Callback for the toggle functionality */
    onToggle?: (isOpen: boolean) => void;
    /** Additional class name for the root element */
    className?: string;
}
declare const ControlledCollapse: ({ isOpen, onToggle, ...otherProps }: React__default.PropsWithChildren<Props$B>) => React__default.JSX.Element;
declare const Collapse: {
    ({ isOpen, label, loading, collapsible, onToggle, className, children, }: React__default.PropsWithChildren<Props$B>): React__default.JSX.Element;
    displayName: string;
};

interface Props$A {
    label: ReactNode;
    isOpen: boolean;
    /** Callback for the toggle functionality */
    onToggle?: (isOpen: boolean) => void;
    children: ReactNode;
    className?: string;
    contentClassName?: string;
    loading?: boolean;
    labelId?: string;
    headerDataTestId?: string;
    contentDataTestId?: string;
}
declare const CollapsableSection: ({ label, isOpen, onToggle, className, contentClassName, children, labelId, loading, headerDataTestId, contentDataTestId, }: Props$A) => React__default.JSX.Element;

type DataLinkButtonProps = {
    link: LinkModel<Field$1>;
    buttonProps?: ButtonProps;
};
/**
 * @internal
 */
declare function DataLinkButton({ link, buttonProps }: DataLinkButtonProps): React__default.JSX.Element;

type Props$z = {
    links: Array<LinkModel<Field$1>>;
};
/**
 * @internal
 */
declare function FieldLinkList({ links }: Props$z): React__default.JSX.Element;

interface Props$y {
    className?: string;
}
declare const FullWidthButtonContainer: ({ className, children }: React__default.PropsWithChildren<Props$y>) => React__default.JSX.Element;

interface Props$x {
    /**
     *  Callback to trigger when clicking outside of current element occurs.
     */
    onClick: () => void;
    /**
     *  Runs the 'onClick' function when pressing a key outside of the current element. Defaults to true.
     */
    includeButtonPress: boolean;
    /** Object to attach the click event listener to. */
    parent: Window | Document;
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener. Defaults to false.
     */
    useCapture?: boolean;
}
interface State$2 {
    hasEventListener: boolean;
}
declare class ClickOutsideWrapper extends PureComponent<React__default.PropsWithChildren<Props$x>, State$2> {
    static defaultProps: {
        includeButtonPress: boolean;
        parent: (Window & typeof globalThis) | undefined;
        useCapture: boolean;
    };
    myRef: React__default.RefObject<HTMLDivElement>;
    state: {
        hasEventListener: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    onOutsideClick: EventListener;
    render(): React__default.JSX.Element;
}

interface SingleStatBaseOptions extends OptionsWithTextFormatting {
    reduceOptions: ReduceDataOptions;
    orientation: VizOrientation$1;
}
declare function sharedSingleStatPanelChangedHandler(panel: PanelModel<Partial<SingleStatBaseOptions>> | any, prevPluginId: string, prevOptions: any): any;
declare function sharedSingleStatMigrationHandler(panel: PanelModel<SingleStatBaseOptions>): SingleStatBaseOptions;
/**
 * @deprecated use convertOldAngularValueMappings instead
 * Convert the angular single stat mapping to new react style
 */
declare function convertOldAngularValueMapping(panel: any): ValueMapping[];

interface CallToActionCardProps {
    message?: string | JSX.Element;
    callToActionElement: JSX.Element;
    footer?: string | JSX.Element;
    className?: string;
}
declare const CallToActionCard: ({ message, callToActionElement, footer, className }: CallToActionCardProps) => React__default.JSX.Element;

interface ContextMenuProps {
    /** Starting horizontal position for the menu */
    x: number;
    /** Starting vertical position for the menu */
    y: number;
    /** Callback for closing the menu */
    onClose?: () => void;
    /** On menu open focus the first element */
    focusOnOpen?: boolean;
    /** RenderProp function that returns menu items to display */
    renderMenuItems?: () => React__default.ReactNode;
    /** A function that returns header element */
    renderHeader?: () => React__default.ReactNode;
}
declare const ContextMenu: React__default.MemoExoticComponent<({ x, y, onClose, focusOnOpen, renderMenuItems, renderHeader }: ContextMenuProps) => React__default.JSX.Element>;

/** @internal */
interface MenuItemsGroup<T = unknown> {
    /** Label for the menu items group */
    label?: string;
    /** Aria label for accessibility support */
    ariaLabel?: string;
    /** Items of the group */
    items: Array<MenuItemProps<T>>;
}
/** @internal */
interface MenuGroupProps extends Partial<MenuItemsGroup> {
    /** special children prop to pass children elements */
    children: React__default.ReactNode;
}
/** @internal */
declare const MenuGroup: {
    ({ label, ariaLabel, children }: MenuGroupProps): React__default.JSX.Element;
    displayName: string;
};

declare function MenuDivider(): React__default.JSX.Element;

interface MenuProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** React element rendered at the top of the menu */
    header?: React__default.ReactNode;
    children: React__default.ReactNode;
    ariaLabel?: string;
    onOpen?: (focusOnItem: (itemId: number) => void) => void;
    onClose?: () => void;
    onKeyDown?: React__default.KeyboardEventHandler;
}
declare const Menu: React__default.ForwardRefExoticComponent<MenuProps & React__default.RefAttributes<HTMLDivElement>> & {
    Item: React__default.MemoExoticComponent<React__default.ForwardRefExoticComponent<MenuItemProps<unknown> & React__default.RefAttributes<MenuItemElement>>>;
    Divider: typeof MenuDivider;
    Group: {
        ({ label, ariaLabel, children }: MenuGroupProps): React__default.JSX.Element;
        displayName: string;
    };
};

interface WithContextMenuProps {
    /** Menu item trigger that accepts openMenu prop */
    children: (props: {
        openMenu: React__default.MouseEventHandler<HTMLElement>;
    }) => JSX.Element;
    /** A function that returns an array of menu items */
    renderMenuItems: () => React__default.ReactNode;
    /** On menu open focus the first element */
    focusOnOpen?: boolean;
}
declare const WithContextMenu: ({ children, renderMenuItems, focusOnOpen }: WithContextMenuProps) => React__default.JSX.Element;

interface DataLinksInlineEditorProps {
    links?: DataLink[];
    onChange: (links: DataLink[]) => void;
    getSuggestions: () => VariableSuggestion[];
    data: DataFrame[];
}
declare const DataLinksInlineEditor: ({ links, onChange, getSuggestions, data }: DataLinksInlineEditorProps) => React__default.JSX.Element;

interface DataLinkInputProps {
    value: string;
    onChange: (url: string, callback?: () => void) => void;
    suggestions: VariableSuggestion[];
    placeholder?: string;
}
declare const DataLinkInput: React__default.MemoExoticComponent<({ value, onChange, suggestions, placeholder, }: DataLinkInputProps) => React__default.JSX.Element>;

interface DataLinksContextMenuProps {
    children: (props: DataLinksContextMenuApi) => JSX.Element;
    links: () => LinkModel[];
    style?: CSSProperties;
}
interface DataLinksContextMenuApi {
    openMenu?: React__default.MouseEventHandler<HTMLOrSVGElement>;
    targetClassName?: string;
}
declare const DataLinksContextMenu: ({ children, links, style }: DataLinksContextMenuProps) => React__default.JSX.Element;

interface Props$w extends React__default.HTMLAttributes<HTMLDivElement> {
    color?: string;
    gradient?: string;
}
declare const SeriesIcon: React__default.MemoExoticComponent<React__default.ForwardRefExoticComponent<Props$w & React__default.RefAttributes<HTMLDivElement>>>;

interface InfoBoxProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'title'> {
    children: React__default.ReactNode;
    /** Title of the box */
    title?: string | JSX.Element;
    /** Url of the read more link */
    url?: string;
    /** Text of the read more link */
    urlTitle?: string;
    /** Indicates whether or not box should be rendered with Grafana branding background */
    branded?: boolean;
    /** Color variant of the box */
    severity?: AlertVariant;
    /** Call back to be performed when box is dismissed */
    onDismiss?: () => void;
}
/** @deprecated use Alert with severity info */
declare const InfoBox: React__default.MemoExoticComponent<React__default.ForwardRefExoticComponent<InfoBoxProps & React__default.RefAttributes<HTMLDivElement>>>;

interface FeatureInfoBoxProps extends Omit<InfoBoxProps, 'title' | 'urlTitle'> {
    title: string;
    featureState?: FeatureState;
}
/** @deprecated use Alert with severity info */
declare const FeatureInfoBox: React__default.MemoExoticComponent<React__default.ForwardRefExoticComponent<FeatureInfoBoxProps & React__default.RefAttributes<HTMLDivElement>>>;
interface FeatureBadgeProps {
    featureState: FeatureState;
    tooltip?: string;
}
declare const FeatureBadge: ({ featureState, tooltip }: FeatureBadgeProps) => React__default.JSX.Element;

interface JsonExplorerConfig {
    animateOpen?: boolean;
    animateClose?: boolean;
    theme?: string;
}
/**
 * @class JsonExplorer
 *
 * JsonExplorer allows you to render JSON objects in HTML with a
 * **collapsible** navigation.
 */
declare class JsonExplorer {
    json: any;
    private open;
    private config;
    private key?;
    private _isOpen;
    private element;
    private skipChildren;
    /**
     * @param {object} json The JSON object you want to render. It has to be an
     * object or array. Do NOT pass raw JSON string.
     *
     * @param {number} [open=1] his number indicates up to how many levels the
     * rendered tree should expand. Set it to `0` to make the whole tree collapsed
     * or set it to `Infinity` to expand the tree deeply
     *
     * @param {object} [config=defaultConfig] -
     *  defaultConfig = {
     *   hoverPreviewEnabled: false,
     *   hoverPreviewArrayCount: 100,
     *   hoverPreviewFieldCount: 5
     * }
     *
     * Available configurations:
     *  #####Hover Preview
     * * `hoverPreviewEnabled`:  enable preview on hover
     * * `hoverPreviewArrayCount`: number of array items to show in preview Any
     *    array larger than this number will be shown as `Array[XXX]` where `XXX`
     *    is length of the array.
     * * `hoverPreviewFieldCount`: number of object properties to show for object
     *   preview. Any object with more properties that thin number will be
     *   truncated.
     *
     * @param {string} [key=undefined] The key that this object in its parent
     * context
     */
    constructor(json: any, open?: number, config?: JsonExplorerConfig, key?: string | undefined);
    private get isOpen();
    private set isOpen(value);
    private get isDate();
    private get isUrl();
    private get isArray();
    private get isObject();
    private get isEmptyObject();
    private get isEmpty();
    private get hasKey();
    private get constructorName();
    private get type();
    private get keys();
    /**
     * Toggles `isOpen` state
     *
     */
    toggleOpen(): void;
    /**
     * Open all children up to a certain depth.
     * Allows actions such as expand all/collapse all
     *
     */
    openAtDepth(depth?: number): void;
    isNumberArray(): boolean;
    renderArray(): HTMLSpanElement;
    /**
     * Renders an HTML element and installs event listeners
     *
     * @returns {HTMLDivElement}
     */
    render(skipRoot?: boolean): HTMLDivElement;
    /**
     * Appends all the children to children element
     * Animated option is used when user triggers this via a click
     */
    appendChildren(animated?: boolean): void;
    /**
     * Removes all the children from children element
     * Animated option is used when user triggers this via a click
     */
    removeChildren(animated?: boolean): void;
}

interface Props$v {
    className?: string;
    json: {};
    config?: JsonExplorerConfig;
    open?: number;
    onDidRender?: (formattedJson: {}) => void;
}
declare class JSONFormatter extends PureComponent<Props$v> {
    private wrapperRef;
    static defaultProps: {
        open: number;
        config: {
            animateOpen: boolean;
        };
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    renderJson: () => void;
    render(): React__default.JSX.Element;
}

interface ErrorBoundaryApi {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}
interface Props$u {
    children: (r: ErrorBoundaryApi) => ReactNode;
    /** Will re-render children after error if recover values changes */
    dependencies?: unknown[];
    /** Callback called on error */
    onError?: (error: Error) => void;
    /** Callback error state is cleared due to recover props change */
    onRecover?: () => void;
}
interface State$1 {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}
declare class ErrorBoundary extends PureComponent<Props$u, State$1> {
    readonly state: State$1;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    componentDidUpdate(prevProps: Props$u): void;
    render(): React__default.ReactNode;
}
/**
 * Props for the ErrorBoundaryAlert component
 *
 * @public
 */
interface ErrorBoundaryAlertProps {
    /** Title for the error boundary alert */
    title?: string;
    /** Component to be wrapped with an error boundary */
    children: ReactNode;
    /** 'page' will render full page error with stacktrace. 'alertbox' will render an <Alert />. Default 'alertbox' */
    style?: 'page' | 'alertbox';
    /** Will re-render children after error if recover values changes */
    dependencies?: unknown[];
}
declare class ErrorBoundaryAlert extends PureComponent<ErrorBoundaryAlertProps> {
    static defaultProps: Partial<ErrorBoundaryAlertProps>;
    render(): React__default.JSX.Element;
}
/**
 * HOC for wrapping a component in an error boundary.
 *
 * @param Component - the react component to wrap in error boundary
 * @param errorBoundaryProps - error boundary options
 *
 * @public
 */
declare function withErrorBoundary<P extends {} = {}>(Component: ComponentType<P>, errorBoundaryProps?: Omit<ErrorBoundaryAlertProps, 'children'>): ComponentType<P>;

interface Props$t extends ErrorBoundaryApi {
    title: string;
}
declare const ErrorWithStack: {
    ({ error, errorInfo, title }: Props$t): React__default.JSX.Element;
    displayName: string;
};

interface AzureAuthSettings {
    /** Set to true if Azure authentication supported by the datasource */
    readonly azureAuthSupported: boolean;
    /** Gets whether the Azure authentication currently enabled for the datasource */
    readonly getAzureAuthEnabled: (config: DataSourceSettings<any, any>) => boolean;
    /** Enables/disables the Azure authentication from the datasource */
    readonly setAzureAuthEnabled: (config: DataSourceSettings<any, any>, enabled: boolean) => Partial<DataSourceSettings<any, any>>;
    /** Optional React component of additional Azure settings UI if authentication is enabled  */
    readonly azureSettingsUI?: React__default.ComponentType<HttpSettingsBaseProps>;
}
interface HttpSettingsBaseProps<JSONData extends DataSourceJsonData = any, SecureJSONData = any> {
    /** The configuration object of the data source */
    dataSourceConfig: DataSourceSettings<JSONData, SecureJSONData>;
    /** Callback for handling changes to the configuration object */
    onChange: (config: DataSourceSettings<JSONData, SecureJSONData>) => void;
    /** Show the Forward OAuth identity option */
    showForwardOAuthIdentityOption?: boolean;
}
interface HttpSettingsProps extends HttpSettingsBaseProps {
    /** The default url for the data source */
    defaultUrl: string;
    /** Set label for url option */
    urlLabel?: string;
    /** Added to default url tooltip */
    urlDocs?: React__default.ReactNode;
    /** Show the http access help box */
    showAccessOptions?: boolean;
    /** Show the SigV4 auth toggle option */
    sigV4AuthToggleEnabled?: boolean;
    /** Azure authentication settings **/
    azureAuthSettings?: AzureAuthSettings;
    /** If SIGV4 is enabled, provide an editor for SIGV4 connection config  **/
    renderSigV4Editor?: React__default.ReactNode;
    /** Show the Secure Socks Datasource Proxy toggle option */
    secureSocksDSProxyEnabled?: boolean;
}

declare const DataSourceHttpSettings: (props: HttpSettingsProps) => React__default.JSX.Element;

interface CustomHeader {
    id: string;
    name: string;
    value: string;
    configured: boolean;
}
type CustomHeaders = CustomHeader[];
interface Props$s {
    dataSourceConfig: DataSourceSettings<any, any>;
    onChange: (config: DataSourceSettings) => void;
}
interface State {
    headers: CustomHeaders;
}
declare class CustomHeadersSettings extends PureComponent<Props$s, State> {
    state: State;
    constructor(props: Props$s);
    updateSettings: () => void;
    onHeaderAdd: () => void;
    onHeaderChange: (headerIndex: number, value: CustomHeader) => void;
    onHeaderReset: (headerId: string) => void;
    onHeaderRemove: (headerId: string) => void;
    render(): React__default.JSX.Element;
}

interface Props$r<T extends DataSourceJsonData> extends Pick<DataSourcePluginOptionsEditorProps<T>, 'options' | 'onOptionsChange'> {
}
interface AlertingConfig extends DataSourceJsonData {
    manageAlerts?: boolean;
}
declare function AlertingSettings<T extends AlertingConfig>({ options, onOptionsChange }: Props$r<T>): JSX.Element;

interface Props$q<T extends DataSourceJsonData> extends Pick<DataSourcePluginOptionsEditorProps<T>, 'options' | 'onOptionsChange'> {
}
interface SecureSocksProxyConfig extends DataSourceJsonData {
    enableSecureSocksProxy?: boolean;
}
declare function SecureSocksProxySettings<T extends SecureSocksProxyConfig>({ options, onOptionsChange, }: Props$q<T>): JSX.Element;

declare const TLSAuthSettings: ({ dataSourceConfig, onChange }: HttpSettingsBaseProps) => React__default.JSX.Element;

interface Props$p {
    label: string;
    hasCert: boolean;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onClick: (event: MouseEvent$1<HTMLButtonElement>) => void;
}
declare const CertificationKey: ({ hasCert, label, onChange, onClick, placeholder }: Props$p) => React__default.JSX.Element;

interface Props$o {
    className?: string;
    style?: React__default.CSSProperties;
    iconClassName?: string;
    inline?: boolean;
    size?: IconSize;
}
/**
 * @deprecated
 * use a predefined size, e.g. 'md' or 'lg' instead
 */
interface PropsWithDeprecatedSize extends Omit<Props$o, 'size'> {
    size?: number | string;
}
/**
 * @public
 */
declare const Spinner: ({ className, inline, iconClassName, style, size, }: Props$o | PropsWithDeprecatedSize) => React__default.JSX.Element;

type Props$n = {
    children: React__default.ReactNode;
    visible: boolean;
    duration?: number;
};
declare function FadeTransition(props: Props$n): React__default.JSX.Element;

type Props$m = {
    children: React__default.ReactNode;
    visible: boolean;
    size: number;
    duration?: number;
    horizontal?: boolean;
};
declare function SlideOutTransition(props: Props$m): React__default.JSX.Element;

interface SegmentProps {
    Component?: ReactElement;
    className?: string;
    allowCustomValue?: boolean;
    placeholder?: string;
    disabled?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    autofocus?: boolean;
    allowEmptyValue?: boolean;
    inputPlaceholder?: string;
}

interface SegmentSyncProps<T> extends SegmentProps, Omit<HTMLProps<HTMLDivElement>, 'value' | 'onChange'> {
    value?: T | SelectableValue<T>;
    onChange: (item: SelectableValue<T>) => void;
    options: Array<SelectableValue<T>>;
    inputMinWidth?: number;
}
declare function Segment<T>({ options, value, onChange, Component, className, allowCustomValue, allowEmptyValue, placeholder, disabled, inputMinWidth, inputPlaceholder, onExpandedChange, autofocus, ...rest }: React__default.PropsWithChildren<SegmentSyncProps<T>>): React__default.JSX.Element;

interface SegmentAsyncProps<T> extends SegmentProps, Omit<HTMLProps<HTMLDivElement>, 'value' | 'onChange'> {
    value?: T | SelectableValue<T>;
    loadOptions: (query?: string) => Promise<Array<SelectableValue<T>>>;
    /**
     *  If true options will be reloaded when user changes the value in the input,
     *  otherwise, options will be loaded when the segment is clicked
     */
    reloadOptionsOnChange?: boolean;
    onChange: (item: SelectableValue<T>) => void;
    noOptionMessageHandler?: (state: AsyncState<Array<SelectableValue<T>>>) => string;
    inputMinWidth?: number;
}
declare function SegmentAsync<T>({ value, onChange, loadOptions, reloadOptionsOnChange, Component, className, allowCustomValue, allowEmptyValue, disabled, placeholder, inputMinWidth, inputPlaceholder, autofocus, onExpandedChange, noOptionMessageHandler, ...rest }: React__default.PropsWithChildren<SegmentAsyncProps<T>>): React__default.JSX.Element;

/** @internal
 * Should be used only internally by Segment/SegmentAsync which can guarantee that SegmentSelect is hidden
 * when a value is selected. See comment below on closeMenuOnSelect()
 */
interface Props$l<T> extends Omit<HTMLProps<HTMLDivElement>, 'value' | 'onChange'> {
    value?: T | SelectableValue<T>;
    options: Array<SelectableValue<T>>;
    onChange: (item: SelectableValue<T>) => void;
    /**
     * If provided - AsyncSelect will be used allowing to reload options when the value in the input changes
     */
    loadOptions?: (inputValue: string) => Promise<Array<SelectableValue<T>>>;
    onClickOutside: () => void;
    width: number;
    noOptionsMessage?: string;
    allowCustomValue?: boolean;
    /**
     * If true, empty value will be passed to onChange callback otherwise using empty value
     * will work as canceling and using the previous value
     */
    allowEmptyValue?: boolean;
    placeholder?: string;
}
/** @internal */
declare function SegmentSelect<T>({ value, placeholder, options, onChange, onClickOutside, loadOptions, width: widthPixels, noOptionsMessage, allowCustomValue, allowEmptyValue, ...rest }: React__default.PropsWithChildren<Props$l<T>>): React__default.JSX.Element;

interface SegmentInputProps extends Omit<SegmentProps, 'allowCustomValue' | 'allowEmptyValue'>, Omit<HTMLProps<HTMLInputElement>, 'value' | 'onChange'> {
    value: string | number;
    onChange: (text: string | number) => void;
}
declare function SegmentInput({ value: initialValue, onChange, Component, className, placeholder, inputPlaceholder, disabled, autofocus, onExpandedChange, ...rest }: React__default.PropsWithChildren<SegmentInputProps>): React__default.JSX.Element;

/**
 * Horizontal section for editor components.
 *
 * @alpha
 */
declare const SegmentSection: ({ label, htmlFor, children, fill, }: {
    label: string;
    htmlFor?: string | undefined;
    children: React__default.ReactNode;
    fill?: boolean | undefined;
}) => React__default.JSX.Element;

interface Props$k {
    children: ReactNode;
    /** Title shown at the top of the drawer */
    title?: ReactNode;
    /** Subtitle shown below the title */
    subtitle?: ReactNode;
    /** Should the Drawer be closable by clicking on the mask, defaults to true */
    closeOnMaskClick?: boolean;
    /** @deprecated */
    inline?: boolean;
    /**
     * @deprecated use the size property instead
     **/
    width?: number | string;
    /**
     * @deprecated use a large size instead if high width is needed
     **/
    expandable?: boolean;
    /**
     * Specifies the width and min-width.
     * sm = width 25vw & min-width 384px
     * md = width 50vw & min-width 568px
     * lg = width 75vw & min-width 744px
     **/
    size?: 'sm' | 'md' | 'lg';
    /** Tabs */
    tabs?: React__default.ReactNode;
    /**
     * @deprecated this is now default behaviour. content is always scrollable.
     **/
    scrollableContent?: boolean;
    /** Callback for closing the drawer */
    onClose: () => void;
}
declare function Drawer({ children, onClose, closeOnMaskClick, scrollableContent, title, subtitle, width, size, tabs, }: Props$k): React__default.JSX.Element;

type Orientation$1 = 'horizontal' | 'vertical';

interface CommonSliderProps {
    min: number;
    max: number;
    orientation?: Orientation$1;
    /** Set current positions of handle(s). If only 1 value supplied, only 1 handle displayed. */
    reverse?: boolean;
    step?: number;
    tooltipAlwaysVisible?: boolean;
    /** Marks on the slider. The key determines the position, and the value determines what will show. If you want to set the style of a specific mark point, the value should be an object which contains style and label properties. */
    marks?: SliderMarks;
    /** If the value is true, it means a continuous value interval, otherwise, it is a independent value. */
    included?: boolean;
}
interface SliderProps extends CommonSliderProps {
    value?: number;
    onChange?: (value: number) => void;
    onAfterChange?: (value?: number) => void;
    formatTooltipResult?: (value: number) => number;
    ariaLabelForHandle?: string;
}
interface RangeSliderProps extends CommonSliderProps {
    value?: number[];
    onChange?: (value: number[]) => void;
    onAfterChange?: (value?: number[]) => void;
    formatTooltipResult?: (value: number) => number | string;
}

/**
 * @public
 */
declare const Slider: {
    ({ min, max, onChange, onAfterChange, orientation, reverse, step, value, ariaLabelForHandle, marks, included, }: SliderProps): React__default.JSX.Element;
    displayName: string;
};

/**
 * @public
 *
 * RichHistoryQueriesTab uses this Range Component
 */
declare const RangeSlider: {
    ({ min, max, onChange, onAfterChange, orientation, reverse, step, formatTooltipResult, value, tooltipAlwaysVisible, }: RangeSliderProps): React__default.JSX.Element;
    displayName: string;
};

interface FormProps<T extends FieldValues> extends Omit<HTMLProps<HTMLFormElement>, 'onSubmit' | 'children'> {
    validateOn?: Mode;
    validateOnMount?: boolean;
    validateFieldsOnMount?: string | string[];
    defaultValues?: DefaultValues<T>;
    onSubmit: SubmitHandler<T>;
    children: (api: FormAPI<T>) => React__default.ReactNode;
    /** Sets max-width for container. Use it instead of setting individual widths on inputs.*/
    maxWidth?: number | 'none';
}
/**
 * @deprecated use the `useForm` hook from react-hook-form instead
 */
declare function Form<T extends FieldValues>({ defaultValues, onSubmit, validateOnMount, validateFieldsOnMount, children, validateOn, maxWidth, ...htmlProps }: FormProps<T>): React__default.JSX.Element;

declare const sharedInputStyle: (theme: GrafanaTheme2, invalid?: boolean) => string;

/**
 * @deprecated use the `Controller` component from react-hook-form instead
 */
declare const InputControl: <TFieldValues extends react_hook_form.FieldValues = react_hook_form.FieldValues, TName extends react_hook_form.FieldPath<TFieldValues> = react_hook_form.FieldPath<TFieldValues>>(props: react_hook_form.ControllerProps<TFieldValues, TName>) => React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>>;

interface ValuePickerProps<T> {
    /** Aria label applied to the input field */
    ['aria-label']?: string;
    /** Label to display on the picker button */
    label: string;
    /** Icon to display on the picker button */
    icon?: IconName;
    /** ValuePicker options  */
    options: Array<SelectableValue<T>>;
    /** Callback to handle selected option */
    onChange: (value: SelectableValue<T>) => void;
    /** Which ButtonVariant to render */
    variant?: ButtonVariant;
    /** Size of button  */
    size?: ComponentSize;
    /** Min width for select in grid units */
    minWidth?: number;
    /** Should the picker cover the full width of its parent */
    isFullWidth?: boolean;
    /** Control where the menu is rendered */
    menuPlacement?: 'auto' | 'bottom' | 'top';
    /** Which ButtonFill to use */
    fill?: ButtonFill;
    /** custom css applied to the button */
    buttonCss?: string;
}
declare function ValuePicker<T>({ 'aria-label': ariaLabel, label, icon, options, onChange, variant, minWidth, size, isFullWidth, menuPlacement, fill, buttonCss, }: ValuePickerProps<T>): React__default.JSX.Element;

interface FieldMatcherUIRegistryItem<TOptions> extends RegistryItem {
    component: React__default.ComponentType<MatcherUIProps<TOptions>>;
    matcher: FieldMatcherInfo<TOptions>;
    optionsToLabel: (options: TOptions) => string;
}
interface MatcherUIProps<T> {
    matcher: FieldMatcherInfo<T>;
    id?: string;
    data: DataFrame[];
    options: T;
    onChange: (options: T) => void;
}

declare const fieldMatchersUI: Registry<FieldMatcherUIRegistryItem<any>>;

interface Props$j extends AnchorHTMLAttributes<HTMLAnchorElement> {
}
/**
 * @alpha
 */
declare const Link: React__default.ForwardRefExoticComponent<Props$j & React__default.RefAttributes<HTMLAnchorElement>>;

type TextLinkVariants = keyof Omit<ThemeTypographyVariantTypes, 'code'>;
interface TextLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> {
    /** url to which redirect the user, external or internal */
    href: string;
    /** Color to use for text */
    color?: keyof GrafanaTheme2['colors']['text'];
    /** Specify if the link will redirect users to a page in or out Grafana */
    external?: boolean;
    /** True when the link will be displayed inline with surrounding text, false if it will be displayed as a block. Depending on this prop correspondant default styles will be applied */
    inline?: boolean;
    /** The default variant is 'body'. To fit another styles set the correspondent variant as it is necessary also to adjust the icon size. `code` is excluded, as it is not fit for links. */
    variant?: TextLinkVariants;
    /** Override the default weight for the used variant */
    weight?: 'light' | 'regular' | 'medium' | 'bold';
    /** Set the icon to be shown. An external link will show the 'external-link-alt' icon as default.*/
    icon?: IconName;
    children: string;
}
declare const TextLink: React__default.ForwardRefExoticComponent<TextLinkProps & React__default.RefAttributes<HTMLAnchorElement>>;

interface TextProps extends Omit<React__default.HTMLAttributes<HTMLElement>, 'className' | 'style'> {
    /** Defines what HTML element is defined underneath. "span" by default */
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
    /** What typograpy variant should be used for the component. Only use if default variant for the defined element is not what is needed */
    variant?: keyof ThemeTypographyVariantTypes;
    /** Override the default weight for the used variant */
    weight?: 'light' | 'regular' | 'medium' | 'bold';
    /** Color to use for text */
    color?: keyof GrafanaTheme2['colors']['text'] | 'error' | 'success' | 'warning' | 'info';
    /** Use to cut the text off with ellipsis if there isn't space to show all of it. On hover shows the rest of the text */
    truncate?: boolean;
    /** If true, show the text as italic. False by default */
    italic?: boolean;
    /** Whether to align the text to left, center or right */
    textAlignment?: CSSProperties['textAlign'];
    children: NonNullable<React__default.ReactNode>;
}
declare const Text: React__default.ForwardRefExoticComponent<TextProps & React__default.RefAttributes<HTMLElement>>;

/**
 * Type that represents a prop that can be responsive.
 *
 * @example To turn a prop like `margin: number` responsive, change it to `margin: ResponsiveProp<number>`.
 */
type ResponsiveProp<T> = T | Responsive<T>;
type Responsive<T> = {
    xs: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    xxl?: T;
};

type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'start' | 'end' | 'self-start' | 'self-end';
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right';
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type FlexGrow = number;
type FlexShrink = number;
type FlexBasis = 'auto' | 'initial' | '0' | `${number}%` | `${number}px`;
type Flex = FlexGrow | `${FlexGrow}` | `${FlexGrow} ${FlexShrink}` | `${FlexGrow} ${FlexShrink} ${FlexBasis}`;
type FlexProps = {
    /** Sets the property `flex-grow` */
    grow?: ResponsiveProp<FlexGrow>;
    /** Sets the property `flex-shrink` */
    shrink?: ResponsiveProp<FlexShrink>;
    /** Sets the property `flex-basis` */
    basis?: ResponsiveProp<FlexBasis>;
    /** Sets the property `flex` */
    flex?: ResponsiveProp<Flex>;
};

type Display = 'flex' | 'block' | 'inline' | 'inline-block' | 'none';
type BackgroundColor = keyof GrafanaTheme2['colors']['background'] | 'error' | 'success' | 'warning' | 'info';
type BorderStyle = 'solid' | 'dashed';
type BorderColor = keyof GrafanaTheme2['colors']['border'] | 'error' | 'success' | 'warning' | 'info';
type BorderRadius = keyof ThemeShape['radius'];
type BoxShadow = keyof ThemeShadows;
interface BoxProps extends FlexProps, Omit<React__default.HTMLAttributes<HTMLElement>, 'className' | 'style'> {
    /** Sets the property `margin` */
    margin?: ResponsiveProp<ThemeSpacingTokens>;
    /** Sets the properties `margin-top` and `margin-bottom`. Higher priority than margin. */
    marginX?: ResponsiveProp<ThemeSpacingTokens>;
    /** Sets the properties `margin-left` and `margin-right`. Higher priority than margin. */
    marginY?: ResponsiveProp<ThemeSpacingTokens>;
    /** Sets the property `margin-top`. Higher priority than margin and marginY. */
    marginTop?: ResponsiveProp<ThemeSpacingTokens>;
    /** Sets the property `margin-bottom`. Higher priority than margin and marginXY */
    marginBottom?: ResponsiveProp<ThemeSpacingTokens>;
    /** Sets the property `margin-left`. Higher priority than margin and marginX. */
    marginLeft?: ResponsiveProp<ThemeSpacingTokens>;
    /** Sets the property `margin-right`. Higher priority than margin and marginX. */
    marginRight?: ResponsiveProp<ThemeSpacingTokens>;
    /** Sets the property `padding` */
    padding?: ResponsiveProp<ThemeSpacingTokens>;
    /** Sets the properties `padding-top` and `padding-bottom`. Higher priority than padding. */
    paddingX?: ResponsiveProp<ThemeSpacingTokens>;
    /** Sets the properties `padding-left` and `padding-right`. Higher priority than padding. */
    paddingY?: ResponsiveProp<ThemeSpacingTokens>;
    /** Sets the property `padding-top`. Higher priority than padding and paddingY. */
    paddingTop?: ResponsiveProp<ThemeSpacingTokens>;
    /** Sets the property `padding-bottom`. Higher priority than padding and paddingY. */
    paddingBottom?: ResponsiveProp<ThemeSpacingTokens>;
    /** Sets the property `padding-left`. Higher priority than padding and paddingX. */
    paddingLeft?: ResponsiveProp<ThemeSpacingTokens>;
    /** Sets the property `padding-right`. Higher priority than padding and paddingX. */
    paddingRight?: ResponsiveProp<ThemeSpacingTokens>;
    borderStyle?: ResponsiveProp<BorderStyle>;
    borderColor?: ResponsiveProp<BorderColor>;
    borderRadius?: ResponsiveProp<BorderRadius>;
    alignItems?: ResponsiveProp<AlignItems>;
    justifyContent?: ResponsiveProp<JustifyContent>;
    gap?: ResponsiveProp<ThemeSpacingTokens>;
    backgroundColor?: ResponsiveProp<BackgroundColor>;
    display?: ResponsiveProp<Display>;
    boxShadow?: ResponsiveProp<BoxShadow>;
    /** Sets the HTML element that will be rendered as a Box. Defaults to 'div' */
    element?: ElementType;
}
declare const Box: React__default.ForwardRefExoticComponent<BoxProps & {
    children?: React__default.ReactNode;
} & React__default.RefAttributes<HTMLElement>>;

interface StackProps extends FlexProps, Omit<React__default.HTMLAttributes<HTMLElement>, 'className' | 'style'> {
    gap?: ResponsiveProp<ThemeSpacingTokens>;
    alignItems?: ResponsiveProp<AlignItems>;
    justifyContent?: ResponsiveProp<JustifyContent>;
    direction?: ResponsiveProp<Direction>;
    wrap?: ResponsiveProp<Wrap>;
    children?: React__default.ReactNode;
}
declare const Stack: React__default.ForwardRefExoticComponent<StackProps & React__default.RefAttributes<HTMLDivElement>>;

interface GridPropsBase extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
    children: NonNullable<React__default.ReactNode>;
    /** Specifies the gutters between columns and rows. It is overwritten when a column or row gap has a value. */
    gap?: ResponsiveProp<ThemeSpacingTokens>;
}
interface PropsWithColumns extends GridPropsBase {
    /** Number of columns */
    columns?: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
    minColumnWidth?: never;
}
interface PropsWithMinColumnWidth extends GridPropsBase {
    columns?: never;
    /** For a responsive layout, fit as many columns while maintaining this minimum column width.
     *  The real width will be calculated based on the theme spacing tokens: `theme.spacing(minColumnWidth)`
     */
    minColumnWidth?: ResponsiveProp<1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 44 | 55 | 72 | 89 | 144>;
}
/** 'columns' and 'minColumnWidth' are mutually exclusive */
type GridProps = PropsWithColumns | PropsWithMinColumnWidth;
declare const Grid: React__default.ForwardRefExoticComponent<GridProps & React__default.RefAttributes<HTMLDivElement>>;

interface SpaceProps {
    /**
     * The amount of vertical space to use.
     */
    v?: ResponsiveProp<ThemeSpacingTokens>;
    /**
     * The amount of horizontal space to use.
     */
    h?: ResponsiveProp<ThemeSpacingTokens>;
    /**
     * The layout of the space. If set to `inline`, the component will behave like an inline-block element,
     * otherwise it will behave like a block element.
     */
    layout?: 'block' | 'inline';
}
declare const Space: ({ v, h, layout }: SpaceProps) => React__default.JSX.Element;

interface LabelProps$1 extends React__default.LabelHTMLAttributes<HTMLLabelElement> {
    children: React__default.ReactNode;
    description?: React__default.ReactNode;
    category?: React__default.ReactNode[];
}
declare const Label$1: ({ children, description, className, category, ...labelProps }: LabelProps$1) => React__default.JSX.Element;

interface LabelProps extends React__default.HTMLAttributes<HTMLLegendElement> {
    children: string | ReactNode;
    description?: string;
}
declare const Legend: ({ children, className, ...legendProps }: LabelProps) => React__default.JSX.Element;

interface Props$i extends Omit<HTMLProps<HTMLFieldSetElement>, 'label'> {
    children: React__default.ReactNode[] | React__default.ReactNode;
    /** Label for the fieldset's legend */
    label?: React__default.ReactNode;
}
declare const FieldSet: ({ label, children, className, ...rest }: Props$i) => React__default.JSX.Element;

interface FieldValidationMessageProps {
    /** Override component style */
    className?: string;
    horizontal?: boolean;
}
declare const FieldValidationMessage: ({ children, horizontal, className, }: React__default.PropsWithChildren<FieldValidationMessageProps>) => React__default.JSX.Element;

interface Props$h extends Omit<FieldProps, 'css' | 'horizontal' | 'description' | 'error'> {
    /** Content for the label's tooltip */
    tooltip?: PopoverContent;
    /** Custom width for the label as a multiple of 8px */
    labelWidth?: number | 'auto';
    /** Make the field's child to fill the width of the row. Equivalent to setting `flex-grow:1` on the field */
    grow?: boolean;
    /** Make the field's child shrink with width of the row. Equivalent to setting `flex-shrink:1` on the field */
    shrink?: boolean;
    /** Make field's background transparent */
    transparent?: boolean;
    /** Error message to display */
    error?: string | null;
    htmlFor?: string;
    /** Make tooltip interactive */
    interactive?: boolean;
}
declare const InlineField: {
    ({ children, label, tooltip, labelWidth, invalid, loading, disabled, required, className, htmlFor, grow, shrink, error, transparent, interactive, ...htmlProps }: Props$h): React__default.JSX.Element;
    displayName: string;
};

interface Props$g {
    grow?: boolean;
    className?: string;
}
/** @beta */
declare const InlineSegmentGroup: {
    ({ children, className, grow, ...htmlProps }: React__default.PropsWithChildren<Props$g>): React__default.JSX.Element;
    displayName: string;
};

interface Props$f extends Omit<LabelProps$1, 'css' | 'description' | 'category'> {
    /** Content for the labels tooltip. If provided, an info icon with the tooltip content
     * will be displayed */
    tooltip?: PopoverContent;
    /** Custom width for the label */
    width?: number | 'auto';
    /** Make labels's background transparent */
    transparent?: boolean;
    /** Make tooltip interactive */
    interactive?: boolean;
    /** @beta */
    /** Controls which element the InlineLabel should be rendered into */
    as?: React__default.ElementType;
}
declare const InlineLabel: ({ children, className, tooltip, width, transparent, interactive, as: Component, ...rest }: Props$f) => React__default.JSX.Element;

interface Props$e extends Omit<HTMLProps<HTMLDivElement>, 'css'> {
    children: ReactNode | ReactNode[];
}
declare const InlineFieldRow: ({ children, className, ...htmlProps }: Props$e) => React__default.JSX.Element;

interface FieldArrayProps extends UseFieldArrayProps {
    children: (api: FieldArrayApi) => JSX.Element;
}
/**
 * @deprecated use the `useFieldArray` hook from react-hook-form instead
 */
declare const FieldArray: FC<FieldArrayProps>;

declare function resetSelectStyles(theme: GrafanaTheme2): {
    clearIndicator: () => {};
    container: () => {};
    control: () => {};
    dropdownIndicator: () => {};
    group: () => {};
    groupHeading: () => {};
    indicatorsContainer: () => {};
    indicatorSeparator: () => {};
    input: (originalStyles: CSSObjectWithLabel) => {
        color: string;
        margin: number;
        padding: number;
        zIndex: number;
        accentColor?: readonly string[] | csstype.Property.AccentColor | readonly csstype.Property.AccentColor[] | undefined;
        alignContent?: readonly string[] | csstype.Property.AlignContent | readonly csstype.Property.AlignContent[] | undefined;
        alignItems?: readonly string[] | csstype.Property.AlignItems | readonly csstype.Property.AlignItems[] | undefined;
        alignSelf?: readonly string[] | csstype.Property.AlignSelf | readonly csstype.Property.AlignSelf[] | undefined;
        alignTracks?: readonly string[] | csstype.Property.AlignTracks | readonly csstype.Property.AlignTracks[] | undefined;
        animationComposition?: readonly string[] | csstype.Property.AnimationComposition | readonly csstype.Property.AnimationComposition[] | undefined;
        animationDelay?: readonly string[] | csstype.Property.AnimationDelay<string & {}> | readonly csstype.Property.AnimationDelay<string & {}>[] | undefined;
        animationDirection?: readonly string[] | csstype.Property.AnimationDirection | readonly csstype.Property.AnimationDirection[] | undefined;
        animationDuration?: readonly string[] | csstype.Property.AnimationDuration<string & {}> | readonly csstype.Property.AnimationDuration<string & {}>[] | undefined;
        animationFillMode?: readonly string[] | csstype.Property.AnimationFillMode | readonly csstype.Property.AnimationFillMode[] | undefined;
        animationIterationCount?: csstype.Property.AnimationIterationCount | readonly NonNullable<csstype.Property.AnimationIterationCount | undefined>[] | readonly ((string & {}) | csstype.Globals | "infinite")[] | undefined;
        animationName?: readonly string[] | csstype.Property.AnimationName | readonly csstype.Property.AnimationName[] | undefined;
        animationPlayState?: readonly string[] | csstype.Property.AnimationPlayState | readonly csstype.Property.AnimationPlayState[] | undefined;
        animationRangeEnd?: readonly (string | (string & {}))[] | csstype.Property.AnimationRangeEnd<string | number> | readonly NonNullable<csstype.Property.AnimationRangeEnd<string | number> | undefined>[] | undefined;
        animationRangeStart?: readonly (string | (string & {}))[] | csstype.Property.AnimationRangeStart<string | number> | readonly NonNullable<csstype.Property.AnimationRangeStart<string | number> | undefined>[] | undefined;
        animationTimeline?: readonly string[] | csstype.Property.AnimationTimeline | readonly csstype.Property.AnimationTimeline[] | undefined;
        animationTimingFunction?: readonly string[] | csstype.Property.AnimationTimingFunction | readonly csstype.Property.AnimationTimingFunction[] | undefined;
        appearance?: csstype.Property.Appearance | readonly NonNullable<csstype.Property.Appearance | undefined>[] | readonly csstype.Property.Appearance[] | undefined;
        aspectRatio?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.AspectRatio | readonly NonNullable<csstype.Property.AspectRatio | undefined>[] | undefined;
        backdropFilter?: readonly string[] | csstype.Property.BackdropFilter | readonly csstype.Property.BackdropFilter[] | undefined;
        backfaceVisibility?: csstype.Property.BackfaceVisibility | readonly NonNullable<csstype.Property.BackfaceVisibility | undefined>[] | readonly csstype.Property.BackfaceVisibility[] | undefined;
        backgroundAttachment?: readonly string[] | csstype.Property.BackgroundAttachment | readonly csstype.Property.BackgroundAttachment[] | undefined;
        backgroundBlendMode?: readonly string[] | csstype.Property.BackgroundBlendMode | readonly csstype.Property.BackgroundBlendMode[] | undefined;
        backgroundClip?: readonly string[] | csstype.Property.BackgroundClip | readonly csstype.Property.BackgroundClip[] | undefined;
        backgroundColor?: readonly string[] | csstype.Property.BackgroundColor | readonly csstype.Property.BackgroundColor[] | undefined;
        backgroundImage?: readonly string[] | csstype.Property.BackgroundImage | readonly csstype.Property.BackgroundImage[] | undefined;
        backgroundOrigin?: readonly string[] | csstype.Property.BackgroundOrigin | readonly csstype.Property.BackgroundOrigin[] | undefined;
        backgroundPositionX?: readonly (string | (string & {}))[] | csstype.Property.BackgroundPositionX<string | number> | readonly NonNullable<csstype.Property.BackgroundPositionX<string | number> | undefined>[] | undefined;
        backgroundPositionY?: readonly (string | (string & {}))[] | csstype.Property.BackgroundPositionY<string | number> | readonly NonNullable<csstype.Property.BackgroundPositionY<string | number> | undefined>[] | undefined;
        backgroundRepeat?: readonly string[] | csstype.Property.BackgroundRepeat | readonly csstype.Property.BackgroundRepeat[] | undefined;
        backgroundSize?: readonly (string | (string & {}))[] | csstype.Property.BackgroundSize<string | number> | readonly NonNullable<csstype.Property.BackgroundSize<string | number> | undefined>[] | undefined;
        blockOverflow?: readonly string[] | csstype.Property.BlockOverflow | readonly csstype.Property.BlockOverflow[] | undefined;
        blockSize?: readonly (string | (string & {}))[] | csstype.Property.BlockSize<string | number> | readonly NonNullable<csstype.Property.BlockSize<string | number> | undefined>[] | undefined;
        borderBlockColor?: readonly string[] | csstype.Property.BorderBlockColor | readonly csstype.Property.BorderBlockColor[] | undefined;
        borderBlockEndColor?: readonly string[] | csstype.Property.BorderBlockEndColor | readonly csstype.Property.BorderBlockEndColor[] | undefined;
        borderBlockEndStyle?: csstype.Property.BorderBlockEndStyle | readonly NonNullable<csstype.Property.BorderBlockEndStyle | undefined>[] | readonly csstype.Property.BorderBlockEndStyle[] | undefined;
        borderBlockEndWidth?: readonly string[] | csstype.Property.BorderBlockEndWidth<string | number> | readonly NonNullable<csstype.Property.BorderBlockEndWidth<string | number> | undefined>[] | undefined;
        borderBlockStartColor?: readonly string[] | csstype.Property.BorderBlockStartColor | readonly csstype.Property.BorderBlockStartColor[] | undefined;
        borderBlockStartStyle?: csstype.Property.BorderBlockStartStyle | readonly NonNullable<csstype.Property.BorderBlockStartStyle | undefined>[] | readonly csstype.Property.BorderBlockStartStyle[] | undefined;
        borderBlockStartWidth?: readonly string[] | csstype.Property.BorderBlockStartWidth<string | number> | readonly NonNullable<csstype.Property.BorderBlockStartWidth<string | number> | undefined>[] | undefined;
        borderBlockStyle?: csstype.Property.BorderBlockStyle | readonly NonNullable<csstype.Property.BorderBlockStyle | undefined>[] | readonly csstype.Property.BorderBlockStyle[] | undefined;
        borderBlockWidth?: readonly string[] | csstype.Property.BorderBlockWidth<string | number> | readonly NonNullable<csstype.Property.BorderBlockWidth<string | number> | undefined>[] | undefined;
        borderBottomColor?: readonly string[] | csstype.Property.BorderBottomColor | readonly csstype.Property.BorderBottomColor[] | undefined;
        borderBottomLeftRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderBottomLeftRadius<string | number> | readonly NonNullable<csstype.Property.BorderBottomLeftRadius<string | number> | undefined>[] | undefined;
        borderBottomRightRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderBottomRightRadius<string | number> | readonly NonNullable<csstype.Property.BorderBottomRightRadius<string | number> | undefined>[] | undefined;
        borderBottomStyle?: csstype.Property.BorderBottomStyle | readonly NonNullable<csstype.Property.BorderBottomStyle | undefined>[] | readonly csstype.Property.BorderBottomStyle[] | undefined;
        borderBottomWidth?: readonly string[] | csstype.Property.BorderBottomWidth<string | number> | readonly NonNullable<csstype.Property.BorderBottomWidth<string | number> | undefined>[] | undefined;
        borderCollapse?: csstype.Property.BorderCollapse | readonly NonNullable<csstype.Property.BorderCollapse | undefined>[] | readonly csstype.Property.BorderCollapse[] | undefined;
        borderEndEndRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderEndEndRadius<string | number> | readonly NonNullable<csstype.Property.BorderEndEndRadius<string | number> | undefined>[] | undefined;
        borderEndStartRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderEndStartRadius<string | number> | readonly NonNullable<csstype.Property.BorderEndStartRadius<string | number> | undefined>[] | undefined;
        borderImageOutset?: readonly (string | (string & {}))[] | csstype.Property.BorderImageOutset<string | number> | readonly NonNullable<csstype.Property.BorderImageOutset<string | number> | undefined>[] | undefined;
        borderImageRepeat?: readonly string[] | csstype.Property.BorderImageRepeat | readonly csstype.Property.BorderImageRepeat[] | undefined;
        borderImageSlice?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BorderImageSlice | readonly NonNullable<csstype.Property.BorderImageSlice | undefined>[] | undefined;
        borderImageSource?: readonly string[] | csstype.Property.BorderImageSource | readonly csstype.Property.BorderImageSource[] | undefined;
        borderImageWidth?: readonly (string | (string & {}))[] | csstype.Property.BorderImageWidth<string | number> | readonly NonNullable<csstype.Property.BorderImageWidth<string | number> | undefined>[] | undefined;
        borderInlineColor?: readonly string[] | csstype.Property.BorderInlineColor | readonly csstype.Property.BorderInlineColor[] | undefined;
        borderInlineEndColor?: readonly string[] | csstype.Property.BorderInlineEndColor | readonly csstype.Property.BorderInlineEndColor[] | undefined;
        borderInlineEndStyle?: csstype.Property.BorderInlineEndStyle | readonly NonNullable<csstype.Property.BorderInlineEndStyle | undefined>[] | readonly csstype.Property.BorderInlineEndStyle[] | undefined;
        borderInlineEndWidth?: readonly string[] | csstype.Property.BorderInlineEndWidth<string | number> | readonly NonNullable<csstype.Property.BorderInlineEndWidth<string | number> | undefined>[] | undefined;
        borderInlineStartColor?: readonly string[] | csstype.Property.BorderInlineStartColor | readonly csstype.Property.BorderInlineStartColor[] | undefined;
        borderInlineStartStyle?: csstype.Property.BorderInlineStartStyle | readonly NonNullable<csstype.Property.BorderInlineStartStyle | undefined>[] | readonly csstype.Property.BorderInlineStartStyle[] | undefined;
        borderInlineStartWidth?: readonly string[] | csstype.Property.BorderInlineStartWidth<string | number> | readonly NonNullable<csstype.Property.BorderInlineStartWidth<string | number> | undefined>[] | undefined;
        borderInlineStyle?: csstype.Property.BorderInlineStyle | readonly NonNullable<csstype.Property.BorderInlineStyle | undefined>[] | readonly csstype.Property.BorderInlineStyle[] | undefined;
        borderInlineWidth?: readonly string[] | csstype.Property.BorderInlineWidth<string | number> | readonly NonNullable<csstype.Property.BorderInlineWidth<string | number> | undefined>[] | undefined;
        borderLeftColor?: readonly string[] | csstype.Property.BorderLeftColor | readonly csstype.Property.BorderLeftColor[] | undefined;
        borderLeftStyle?: csstype.Property.BorderLeftStyle | readonly NonNullable<csstype.Property.BorderLeftStyle | undefined>[] | readonly csstype.Property.BorderLeftStyle[] | undefined;
        borderLeftWidth?: readonly string[] | csstype.Property.BorderLeftWidth<string | number> | readonly NonNullable<csstype.Property.BorderLeftWidth<string | number> | undefined>[] | undefined;
        borderRightColor?: readonly string[] | csstype.Property.BorderRightColor | readonly csstype.Property.BorderRightColor[] | undefined;
        borderRightStyle?: csstype.Property.BorderRightStyle | readonly NonNullable<csstype.Property.BorderRightStyle | undefined>[] | readonly csstype.Property.BorderRightStyle[] | undefined;
        borderRightWidth?: readonly string[] | csstype.Property.BorderRightWidth<string | number> | readonly NonNullable<csstype.Property.BorderRightWidth<string | number> | undefined>[] | undefined;
        borderSpacing?: readonly (string | (string & {}))[] | csstype.Property.BorderSpacing<string | number> | readonly NonNullable<csstype.Property.BorderSpacing<string | number> | undefined>[] | undefined;
        borderStartEndRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderStartEndRadius<string | number> | readonly NonNullable<csstype.Property.BorderStartEndRadius<string | number> | undefined>[] | undefined;
        borderStartStartRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderStartStartRadius<string | number> | readonly NonNullable<csstype.Property.BorderStartStartRadius<string | number> | undefined>[] | undefined;
        borderTopColor?: readonly string[] | csstype.Property.BorderTopColor | readonly csstype.Property.BorderTopColor[] | undefined;
        borderTopLeftRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderTopLeftRadius<string | number> | readonly NonNullable<csstype.Property.BorderTopLeftRadius<string | number> | undefined>[] | undefined;
        borderTopRightRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderTopRightRadius<string | number> | readonly NonNullable<csstype.Property.BorderTopRightRadius<string | number> | undefined>[] | undefined;
        borderTopStyle?: csstype.Property.BorderTopStyle | readonly NonNullable<csstype.Property.BorderTopStyle | undefined>[] | readonly csstype.Property.BorderTopStyle[] | undefined;
        borderTopWidth?: readonly string[] | csstype.Property.BorderTopWidth<string | number> | readonly NonNullable<csstype.Property.BorderTopWidth<string | number> | undefined>[] | undefined;
        bottom?: readonly (string | (string & {}))[] | csstype.Property.Bottom<string | number> | readonly NonNullable<csstype.Property.Bottom<string | number> | undefined>[] | undefined;
        boxDecorationBreak?: csstype.Property.BoxDecorationBreak | readonly NonNullable<csstype.Property.BoxDecorationBreak | undefined>[] | readonly csstype.Property.BoxDecorationBreak[] | undefined;
        boxShadow?: readonly string[] | csstype.Property.BoxShadow | readonly csstype.Property.BoxShadow[] | undefined;
        boxSizing?: csstype.Property.BoxSizing | readonly NonNullable<csstype.Property.BoxSizing | undefined>[] | readonly csstype.Property.BoxSizing[] | undefined;
        breakAfter?: csstype.Property.BreakAfter | readonly NonNullable<csstype.Property.BreakAfter | undefined>[] | readonly csstype.Property.BreakAfter[] | undefined;
        breakBefore?: csstype.Property.BreakBefore | readonly NonNullable<csstype.Property.BreakBefore | undefined>[] | readonly csstype.Property.BreakBefore[] | undefined;
        breakInside?: csstype.Property.BreakInside | readonly NonNullable<csstype.Property.BreakInside | undefined>[] | readonly csstype.Property.BreakInside[] | undefined;
        captionSide?: csstype.Property.CaptionSide | readonly NonNullable<csstype.Property.CaptionSide | undefined>[] | readonly csstype.Property.CaptionSide[] | undefined;
        caretColor?: readonly string[] | csstype.Property.CaretColor | readonly csstype.Property.CaretColor[] | undefined;
        caretShape?: csstype.Property.CaretShape | readonly NonNullable<csstype.Property.CaretShape | undefined>[] | readonly csstype.Property.CaretShape[] | undefined;
        clear?: csstype.Property.Clear | readonly NonNullable<csstype.Property.Clear | undefined>[] | readonly csstype.Property.Clear[] | undefined;
        clipPath?: readonly string[] | csstype.Property.ClipPath | readonly csstype.Property.ClipPath[] | undefined;
        colorAdjust?: csstype.Property.PrintColorAdjust | readonly NonNullable<csstype.Property.PrintColorAdjust | undefined>[] | readonly csstype.Property.PrintColorAdjust[] | undefined;
        colorScheme?: readonly string[] | csstype.Property.ColorScheme | readonly csstype.Property.ColorScheme[] | undefined;
        columnCount?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.ColumnCount | readonly NonNullable<csstype.Property.ColumnCount | undefined>[] | undefined;
        columnFill?: csstype.Property.ColumnFill | readonly NonNullable<csstype.Property.ColumnFill | undefined>[] | readonly csstype.Property.ColumnFill[] | undefined;
        columnGap?: readonly (string | (string & {}))[] | csstype.Property.ColumnGap<string | number> | readonly NonNullable<csstype.Property.ColumnGap<string | number> | undefined>[] | undefined;
        columnRuleColor?: readonly string[] | csstype.Property.ColumnRuleColor | readonly csstype.Property.ColumnRuleColor[] | undefined;
        columnRuleStyle?: readonly string[] | csstype.Property.ColumnRuleStyle | readonly csstype.Property.ColumnRuleStyle[] | undefined;
        columnRuleWidth?: readonly (string | (string & {}))[] | csstype.Property.ColumnRuleWidth<string | number> | readonly NonNullable<csstype.Property.ColumnRuleWidth<string | number> | undefined>[] | undefined;
        columnSpan?: csstype.Property.ColumnSpan | readonly NonNullable<csstype.Property.ColumnSpan | undefined>[] | readonly csstype.Property.ColumnSpan[] | undefined;
        columnWidth?: readonly string[] | csstype.Property.ColumnWidth<string | number> | readonly NonNullable<csstype.Property.ColumnWidth<string | number> | undefined>[] | undefined;
        contain?: readonly string[] | csstype.Property.Contain | readonly csstype.Property.Contain[] | undefined;
        containIntrinsicBlockSize?: readonly (string | (string & {}))[] | csstype.Property.ContainIntrinsicBlockSize<string | number> | readonly NonNullable<csstype.Property.ContainIntrinsicBlockSize<string | number> | undefined>[] | undefined;
        containIntrinsicHeight?: readonly (string | (string & {}))[] | csstype.Property.ContainIntrinsicHeight<string | number> | readonly NonNullable<csstype.Property.ContainIntrinsicHeight<string | number> | undefined>[] | undefined;
        containIntrinsicInlineSize?: readonly (string | (string & {}))[] | csstype.Property.ContainIntrinsicInlineSize<string | number> | readonly NonNullable<csstype.Property.ContainIntrinsicInlineSize<string | number> | undefined>[] | undefined;
        containIntrinsicWidth?: readonly (string | (string & {}))[] | csstype.Property.ContainIntrinsicWidth<string | number> | readonly NonNullable<csstype.Property.ContainIntrinsicWidth<string | number> | undefined>[] | undefined;
        containerName?: readonly string[] | csstype.Property.ContainerName | readonly csstype.Property.ContainerName[] | undefined;
        containerType?: csstype.Property.ContainerType | readonly NonNullable<csstype.Property.ContainerType | undefined>[] | readonly csstype.Property.ContainerType[] | undefined;
        content?: readonly string[] | csstype.Property.Content | readonly csstype.Property.Content[] | undefined;
        contentVisibility?: csstype.Property.ContentVisibility | readonly NonNullable<csstype.Property.ContentVisibility | undefined>[] | readonly csstype.Property.ContentVisibility[] | undefined;
        counterIncrement?: readonly string[] | csstype.Property.CounterIncrement | readonly csstype.Property.CounterIncrement[] | undefined;
        counterReset?: readonly string[] | csstype.Property.CounterReset | readonly csstype.Property.CounterReset[] | undefined;
        counterSet?: readonly string[] | csstype.Property.CounterSet | readonly csstype.Property.CounterSet[] | undefined;
        cursor?: readonly string[] | csstype.Property.Cursor | readonly csstype.Property.Cursor[] | undefined;
        direction?: csstype.Property.Direction | readonly NonNullable<csstype.Property.Direction | undefined>[] | readonly csstype.Property.Direction[] | undefined;
        display?: readonly string[] | csstype.Property.Display | readonly csstype.Property.Display[] | undefined;
        emptyCells?: csstype.Property.EmptyCells | readonly NonNullable<csstype.Property.EmptyCells | undefined>[] | readonly csstype.Property.EmptyCells[] | undefined;
        filter?: readonly string[] | csstype.Property.Filter | readonly csstype.Property.Filter[] | undefined;
        flexBasis?: readonly (string | (string & {}))[] | csstype.Property.FlexBasis<string | number> | readonly NonNullable<csstype.Property.FlexBasis<string | number> | undefined>[] | undefined;
        flexDirection?: csstype.Property.FlexDirection | readonly NonNullable<csstype.Property.FlexDirection | undefined>[] | readonly csstype.Property.FlexDirection[] | undefined;
        flexGrow?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.FlexGrow | readonly NonNullable<csstype.Property.FlexGrow | undefined>[] | undefined;
        flexShrink?: csstype.Property.FlexShrink | readonly NonNullable<csstype.Property.FlexShrink | undefined>[] | readonly ((string & {}) | csstype.Globals)[] | undefined;
        flexWrap?: csstype.Property.FlexWrap | readonly NonNullable<csstype.Property.FlexWrap | undefined>[] | readonly csstype.Property.FlexWrap[] | undefined;
        float?: csstype.Property.Float | readonly NonNullable<csstype.Property.Float | undefined>[] | readonly csstype.Property.Float[] | undefined;
        fontFamily?: readonly string[] | csstype.Property.FontFamily | readonly csstype.Property.FontFamily[] | undefined;
        fontFeatureSettings?: readonly string[] | csstype.Property.FontFeatureSettings | readonly csstype.Property.FontFeatureSettings[] | undefined;
        fontKerning?: csstype.Property.FontKerning | readonly NonNullable<csstype.Property.FontKerning | undefined>[] | readonly csstype.Property.FontKerning[] | undefined;
        fontLanguageOverride?: readonly string[] | csstype.Property.FontLanguageOverride | readonly csstype.Property.FontLanguageOverride[] | undefined;
        fontOpticalSizing?: csstype.Property.FontOpticalSizing | readonly NonNullable<csstype.Property.FontOpticalSizing | undefined>[] | readonly csstype.Property.FontOpticalSizing[] | undefined;
        fontPalette?: readonly string[] | csstype.Property.FontPalette | readonly csstype.Property.FontPalette[] | undefined;
        fontSize?: readonly (string | (string & {}))[] | csstype.Property.FontSize<string | number> | readonly NonNullable<csstype.Property.FontSize<string | number> | undefined>[] | undefined;
        fontSizeAdjust?: csstype.Property.FontSizeAdjust | readonly NonNullable<csstype.Property.FontSizeAdjust | undefined>[] | readonly ("none" | (string & {}) | csstype.Globals | "from-font")[] | undefined;
        fontSmooth?: readonly string[] | csstype.Property.FontSmooth<string | number> | readonly NonNullable<csstype.Property.FontSmooth<string | number> | undefined>[] | undefined;
        fontStretch?: readonly string[] | csstype.Property.FontStretch | readonly csstype.Property.FontStretch[] | undefined;
        fontStyle?: readonly string[] | csstype.Property.FontStyle | readonly csstype.Property.FontStyle[] | undefined;
        fontSynthesis?: readonly string[] | csstype.Property.FontSynthesis | readonly csstype.Property.FontSynthesis[] | undefined;
        fontSynthesisPosition?: csstype.Property.FontSynthesisPosition | readonly NonNullable<csstype.Property.FontSynthesisPosition | undefined>[] | readonly csstype.Property.FontSynthesisPosition[] | undefined;
        fontSynthesisSmallCaps?: csstype.Property.FontSynthesisSmallCaps | readonly NonNullable<csstype.Property.FontSynthesisSmallCaps | undefined>[] | readonly csstype.Property.FontSynthesisSmallCaps[] | undefined;
        fontSynthesisStyle?: csstype.Property.FontSynthesisStyle | readonly NonNullable<csstype.Property.FontSynthesisStyle | undefined>[] | readonly csstype.Property.FontSynthesisStyle[] | undefined;
        fontSynthesisWeight?: csstype.Property.FontSynthesisWeight | readonly NonNullable<csstype.Property.FontSynthesisWeight | undefined>[] | readonly csstype.Property.FontSynthesisWeight[] | undefined;
        fontVariant?: readonly string[] | csstype.Property.FontVariant | readonly csstype.Property.FontVariant[] | undefined;
        fontVariantAlternates?: readonly string[] | csstype.Property.FontVariantAlternates | readonly csstype.Property.FontVariantAlternates[] | undefined;
        fontVariantCaps?: csstype.Property.FontVariantCaps | readonly NonNullable<csstype.Property.FontVariantCaps | undefined>[] | readonly csstype.Property.FontVariantCaps[] | undefined;
        fontVariantEastAsian?: readonly string[] | csstype.Property.FontVariantEastAsian | readonly csstype.Property.FontVariantEastAsian[] | undefined;
        fontVariantEmoji?: csstype.Property.FontVariantEmoji | readonly NonNullable<csstype.Property.FontVariantEmoji | undefined>[] | readonly csstype.Property.FontVariantEmoji[] | undefined;
        fontVariantLigatures?: readonly string[] | csstype.Property.FontVariantLigatures | readonly csstype.Property.FontVariantLigatures[] | undefined;
        fontVariantNumeric?: readonly string[] | csstype.Property.FontVariantNumeric | readonly csstype.Property.FontVariantNumeric[] | undefined;
        fontVariantPosition?: csstype.Property.FontVariantPosition | readonly NonNullable<csstype.Property.FontVariantPosition | undefined>[] | readonly csstype.Property.FontVariantPosition[] | undefined;
        fontVariationSettings?: readonly string[] | csstype.Property.FontVariationSettings | readonly csstype.Property.FontVariationSettings[] | undefined;
        fontWeight?: csstype.Property.FontWeight | readonly NonNullable<csstype.Property.FontWeight | undefined>[] | readonly ("normal" | "bold" | (string & {}) | csstype.Globals | "bolder" | "lighter")[] | undefined;
        forcedColorAdjust?: csstype.Property.ForcedColorAdjust | readonly NonNullable<csstype.Property.ForcedColorAdjust | undefined>[] | readonly csstype.Property.ForcedColorAdjust[] | undefined;
        gridAutoColumns?: readonly (string | (string & {}))[] | csstype.Property.GridAutoColumns<string | number> | readonly NonNullable<csstype.Property.GridAutoColumns<string | number> | undefined>[] | undefined;
        gridAutoFlow?: readonly string[] | csstype.Property.GridAutoFlow | readonly csstype.Property.GridAutoFlow[] | undefined;
        gridAutoRows?: readonly (string | (string & {}))[] | csstype.Property.GridAutoRows<string | number> | readonly NonNullable<csstype.Property.GridAutoRows<string | number> | undefined>[] | undefined;
        gridColumnEnd?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GridColumnEnd | readonly NonNullable<csstype.Property.GridColumnEnd | undefined>[] | undefined;
        gridColumnStart?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GridColumnStart | readonly NonNullable<csstype.Property.GridColumnStart | undefined>[] | undefined;
        gridRowEnd?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GridRowEnd | readonly NonNullable<csstype.Property.GridRowEnd | undefined>[] | undefined;
        gridRowStart?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GridRowStart | readonly NonNullable<csstype.Property.GridRowStart | undefined>[] | undefined;
        gridTemplateAreas?: readonly string[] | csstype.Property.GridTemplateAreas | readonly csstype.Property.GridTemplateAreas[] | undefined;
        gridTemplateColumns?: readonly (string | (string & {}))[] | csstype.Property.GridTemplateColumns<string | number> | readonly NonNullable<csstype.Property.GridTemplateColumns<string | number> | undefined>[] | undefined;
        gridTemplateRows?: readonly (string | (string & {}))[] | csstype.Property.GridTemplateRows<string | number> | readonly NonNullable<csstype.Property.GridTemplateRows<string | number> | undefined>[] | undefined;
        hangingPunctuation?: readonly string[] | csstype.Property.HangingPunctuation | readonly csstype.Property.HangingPunctuation[] | undefined;
        height?: readonly (string | (string & {}))[] | csstype.Property.Height<string | number> | readonly NonNullable<csstype.Property.Height<string | number> | undefined>[] | undefined;
        hyphenateCharacter?: readonly string[] | csstype.Property.HyphenateCharacter | readonly csstype.Property.HyphenateCharacter[] | undefined;
        hyphenateLimitChars?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.HyphenateLimitChars | readonly NonNullable<csstype.Property.HyphenateLimitChars | undefined>[] | undefined;
        hyphens?: csstype.Property.Hyphens | readonly NonNullable<csstype.Property.Hyphens | undefined>[] | readonly csstype.Property.Hyphens[] | undefined;
        imageOrientation?: readonly string[] | csstype.Property.ImageOrientation | readonly csstype.Property.ImageOrientation[] | undefined;
        imageRendering?: csstype.Property.ImageRendering | readonly NonNullable<csstype.Property.ImageRendering | undefined>[] | readonly csstype.Property.ImageRendering[] | undefined;
        imageResolution?: readonly string[] | csstype.Property.ImageResolution | readonly csstype.Property.ImageResolution[] | undefined;
        initialLetter?: csstype.Property.InitialLetter | readonly NonNullable<csstype.Property.InitialLetter | undefined>[] | readonly ("normal" | (string & {}) | csstype.Globals)[] | undefined;
        inlineSize?: readonly (string | (string & {}))[] | csstype.Property.InlineSize<string | number> | readonly NonNullable<csstype.Property.InlineSize<string | number> | undefined>[] | undefined;
        inputSecurity?: csstype.Property.InputSecurity | readonly NonNullable<csstype.Property.InputSecurity | undefined>[] | readonly csstype.Property.InputSecurity[] | undefined;
        insetBlockEnd?: readonly (string | (string & {}))[] | csstype.Property.InsetBlockEnd<string | number> | readonly NonNullable<csstype.Property.InsetBlockEnd<string | number> | undefined>[] | undefined;
        insetBlockStart?: readonly (string | (string & {}))[] | csstype.Property.InsetBlockStart<string | number> | readonly NonNullable<csstype.Property.InsetBlockStart<string | number> | undefined>[] | undefined;
        insetInlineEnd?: readonly (string | (string & {}))[] | csstype.Property.InsetInlineEnd<string | number> | readonly NonNullable<csstype.Property.InsetInlineEnd<string | number> | undefined>[] | undefined;
        insetInlineStart?: readonly (string | (string & {}))[] | csstype.Property.InsetInlineStart<string | number> | readonly NonNullable<csstype.Property.InsetInlineStart<string | number> | undefined>[] | undefined;
        isolation?: csstype.Property.Isolation | readonly NonNullable<csstype.Property.Isolation | undefined>[] | readonly csstype.Property.Isolation[] | undefined;
        justifyContent?: readonly string[] | csstype.Property.JustifyContent | readonly csstype.Property.JustifyContent[] | undefined;
        justifyItems?: readonly string[] | csstype.Property.JustifyItems | readonly csstype.Property.JustifyItems[] | undefined;
        justifySelf?: readonly string[] | csstype.Property.JustifySelf | readonly csstype.Property.JustifySelf[] | undefined;
        justifyTracks?: readonly string[] | csstype.Property.JustifyTracks | readonly csstype.Property.JustifyTracks[] | undefined;
        left?: readonly (string | (string & {}))[] | csstype.Property.Left<string | number> | readonly NonNullable<csstype.Property.Left<string | number> | undefined>[] | undefined;
        letterSpacing?: readonly string[] | csstype.Property.LetterSpacing<string | number> | readonly NonNullable<csstype.Property.LetterSpacing<string | number> | undefined>[] | undefined;
        lineBreak?: csstype.Property.LineBreak | readonly NonNullable<csstype.Property.LineBreak | undefined>[] | readonly csstype.Property.LineBreak[] | undefined;
        lineHeight?: csstype.Property.LineHeight<string | number> | readonly NonNullable<csstype.Property.LineHeight<string | number> | undefined>[] | readonly (string | (string & {}))[] | undefined;
        lineHeightStep?: readonly string[] | csstype.Property.LineHeightStep<string | number> | readonly NonNullable<csstype.Property.LineHeightStep<string | number> | undefined>[] | undefined;
        listStyleImage?: readonly string[] | csstype.Property.ListStyleImage | readonly csstype.Property.ListStyleImage[] | undefined;
        listStylePosition?: csstype.Property.ListStylePosition | readonly NonNullable<csstype.Property.ListStylePosition | undefined>[] | readonly csstype.Property.ListStylePosition[] | undefined;
        listStyleType?: readonly string[] | csstype.Property.ListStyleType | readonly csstype.Property.ListStyleType[] | undefined;
        marginBlockEnd?: readonly (string | (string & {}))[] | csstype.Property.MarginBlockEnd<string | number> | readonly NonNullable<csstype.Property.MarginBlockEnd<string | number> | undefined>[] | undefined;
        marginBlockStart?: readonly (string | (string & {}))[] | csstype.Property.MarginBlockStart<string | number> | readonly NonNullable<csstype.Property.MarginBlockStart<string | number> | undefined>[] | undefined;
        marginBottom?: readonly (string | (string & {}))[] | csstype.Property.MarginBottom<string | number> | readonly NonNullable<csstype.Property.MarginBottom<string | number> | undefined>[] | undefined;
        marginInlineEnd?: readonly (string | (string & {}))[] | csstype.Property.MarginInlineEnd<string | number> | readonly NonNullable<csstype.Property.MarginInlineEnd<string | number> | undefined>[] | undefined;
        marginInlineStart?: readonly (string | (string & {}))[] | csstype.Property.MarginInlineStart<string | number> | readonly NonNullable<csstype.Property.MarginInlineStart<string | number> | undefined>[] | undefined;
        marginLeft?: readonly (string | (string & {}))[] | csstype.Property.MarginLeft<string | number> | readonly NonNullable<csstype.Property.MarginLeft<string | number> | undefined>[] | undefined;
        marginRight?: readonly (string | (string & {}))[] | csstype.Property.MarginRight<string | number> | readonly NonNullable<csstype.Property.MarginRight<string | number> | undefined>[] | undefined;
        marginTop?: readonly (string | (string & {}))[] | csstype.Property.MarginTop<string | number> | readonly NonNullable<csstype.Property.MarginTop<string | number> | undefined>[] | undefined;
        marginTrim?: csstype.Property.MarginTrim | readonly NonNullable<csstype.Property.MarginTrim | undefined>[] | readonly csstype.Property.MarginTrim[] | undefined;
        maskBorderMode?: csstype.Property.MaskBorderMode | readonly NonNullable<csstype.Property.MaskBorderMode | undefined>[] | readonly csstype.Property.MaskBorderMode[] | undefined;
        maskBorderOutset?: readonly (string | (string & {}))[] | csstype.Property.MaskBorderOutset<string | number> | readonly NonNullable<csstype.Property.MaskBorderOutset<string | number> | undefined>[] | undefined;
        maskBorderRepeat?: readonly string[] | csstype.Property.MaskBorderRepeat | readonly csstype.Property.MaskBorderRepeat[] | undefined;
        maskBorderSlice?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.MaskBorderSlice | readonly NonNullable<csstype.Property.MaskBorderSlice | undefined>[] | undefined;
        maskBorderSource?: readonly string[] | csstype.Property.MaskBorderSource | readonly csstype.Property.MaskBorderSource[] | undefined;
        maskBorderWidth?: readonly (string | (string & {}))[] | csstype.Property.MaskBorderWidth<string | number> | readonly NonNullable<csstype.Property.MaskBorderWidth<string | number> | undefined>[] | undefined;
        maskClip?: readonly string[] | csstype.Property.MaskClip | readonly csstype.Property.MaskClip[] | undefined;
        maskComposite?: readonly string[] | csstype.Property.MaskComposite | readonly csstype.Property.MaskComposite[] | undefined;
        maskImage?: readonly string[] | csstype.Property.MaskImage | readonly csstype.Property.MaskImage[] | undefined;
        maskMode?: readonly string[] | csstype.Property.MaskMode | readonly csstype.Property.MaskMode[] | undefined;
        maskOrigin?: readonly string[] | csstype.Property.MaskOrigin | readonly csstype.Property.MaskOrigin[] | undefined;
        maskPosition?: readonly (string | (string & {}))[] | csstype.Property.MaskPosition<string | number> | readonly NonNullable<csstype.Property.MaskPosition<string | number> | undefined>[] | undefined;
        maskRepeat?: readonly string[] | csstype.Property.MaskRepeat | readonly csstype.Property.MaskRepeat[] | undefined;
        maskSize?: readonly (string | (string & {}))[] | csstype.Property.MaskSize<string | number> | readonly NonNullable<csstype.Property.MaskSize<string | number> | undefined>[] | undefined;
        maskType?: csstype.Property.MaskType | readonly NonNullable<csstype.Property.MaskType | undefined>[] | readonly csstype.Property.MaskType[] | undefined;
        masonryAutoFlow?: readonly string[] | csstype.Property.MasonryAutoFlow | readonly csstype.Property.MasonryAutoFlow[] | undefined;
        mathDepth?: csstype.Property.MathDepth | readonly NonNullable<csstype.Property.MathDepth | undefined>[] | readonly ((string & {}) | csstype.Globals | "auto-add")[] | undefined;
        mathShift?: csstype.Property.MathShift | readonly NonNullable<csstype.Property.MathShift | undefined>[] | readonly csstype.Property.MathShift[] | undefined;
        mathStyle?: csstype.Property.MathStyle | readonly NonNullable<csstype.Property.MathStyle | undefined>[] | readonly csstype.Property.MathStyle[] | undefined;
        maxBlockSize?: readonly (string | (string & {}))[] | csstype.Property.MaxBlockSize<string | number> | readonly NonNullable<csstype.Property.MaxBlockSize<string | number> | undefined>[] | undefined;
        maxHeight?: readonly (string | (string & {}))[] | csstype.Property.MaxHeight<string | number> | readonly NonNullable<csstype.Property.MaxHeight<string | number> | undefined>[] | undefined;
        maxInlineSize?: readonly (string | (string & {}))[] | csstype.Property.MaxInlineSize<string | number> | readonly NonNullable<csstype.Property.MaxInlineSize<string | number> | undefined>[] | undefined;
        maxLines?: csstype.Property.MaxLines | readonly NonNullable<csstype.Property.MaxLines | undefined>[] | readonly ("none" | (string & {}) | csstype.Globals)[] | undefined;
        maxWidth?: readonly (string | (string & {}))[] | csstype.Property.MaxWidth<string | number> | readonly NonNullable<csstype.Property.MaxWidth<string | number> | undefined>[] | undefined;
        minBlockSize?: readonly (string | (string & {}))[] | csstype.Property.MinBlockSize<string | number> | readonly NonNullable<csstype.Property.MinBlockSize<string | number> | undefined>[] | undefined;
        minHeight?: readonly (string | (string & {}))[] | csstype.Property.MinHeight<string | number> | readonly NonNullable<csstype.Property.MinHeight<string | number> | undefined>[] | undefined;
        minInlineSize?: readonly (string | (string & {}))[] | csstype.Property.MinInlineSize<string | number> | readonly NonNullable<csstype.Property.MinInlineSize<string | number> | undefined>[] | undefined;
        minWidth?: readonly (string | (string & {}))[] | csstype.Property.MinWidth<string | number> | readonly NonNullable<csstype.Property.MinWidth<string | number> | undefined>[] | undefined;
        mixBlendMode?: csstype.Property.MixBlendMode | readonly NonNullable<csstype.Property.MixBlendMode | undefined>[] | readonly csstype.Property.MixBlendMode[] | undefined;
        motionDistance?: readonly (string | (string & {}))[] | csstype.Property.OffsetDistance<string | number> | readonly NonNullable<csstype.Property.OffsetDistance<string | number> | undefined>[] | undefined;
        motionPath?: readonly string[] | csstype.Property.OffsetPath | readonly csstype.Property.OffsetPath[] | undefined;
        motionRotation?: readonly string[] | csstype.Property.OffsetRotate | readonly csstype.Property.OffsetRotate[] | undefined;
        objectFit?: csstype.Property.ObjectFit | readonly NonNullable<csstype.Property.ObjectFit | undefined>[] | readonly csstype.Property.ObjectFit[] | undefined;
        objectPosition?: readonly (string | (string & {}))[] | csstype.Property.ObjectPosition<string | number> | readonly NonNullable<csstype.Property.ObjectPosition<string | number> | undefined>[] | undefined;
        offsetAnchor?: readonly (string | (string & {}))[] | csstype.Property.OffsetAnchor<string | number> | readonly NonNullable<csstype.Property.OffsetAnchor<string | number> | undefined>[] | undefined;
        offsetDistance?: readonly (string | (string & {}))[] | csstype.Property.OffsetDistance<string | number> | readonly NonNullable<csstype.Property.OffsetDistance<string | number> | undefined>[] | undefined;
        offsetPath?: readonly string[] | csstype.Property.OffsetPath | readonly csstype.Property.OffsetPath[] | undefined;
        offsetPosition?: readonly (string | (string & {}))[] | csstype.Property.OffsetPosition<string | number> | readonly NonNullable<csstype.Property.OffsetPosition<string | number> | undefined>[] | undefined;
        offsetRotate?: readonly string[] | csstype.Property.OffsetRotate | readonly csstype.Property.OffsetRotate[] | undefined;
        offsetRotation?: readonly string[] | csstype.Property.OffsetRotate | readonly csstype.Property.OffsetRotate[] | undefined;
        opacity?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Opacity | readonly NonNullable<csstype.Property.Opacity | undefined>[] | undefined;
        order?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Order | readonly NonNullable<csstype.Property.Order | undefined>[] | undefined;
        orphans?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Orphans | readonly NonNullable<csstype.Property.Orphans | undefined>[] | undefined;
        outlineColor?: readonly string[] | csstype.Property.OutlineColor | readonly csstype.Property.OutlineColor[] | undefined;
        outlineOffset?: readonly string[] | csstype.Property.OutlineOffset<string | number> | readonly NonNullable<csstype.Property.OutlineOffset<string | number> | undefined>[] | undefined;
        outlineStyle?: readonly string[] | csstype.Property.OutlineStyle | readonly csstype.Property.OutlineStyle[] | undefined;
        outlineWidth?: readonly string[] | csstype.Property.OutlineWidth<string | number> | readonly NonNullable<csstype.Property.OutlineWidth<string | number> | undefined>[] | undefined;
        overflowAnchor?: csstype.Property.OverflowAnchor | readonly NonNullable<csstype.Property.OverflowAnchor | undefined>[] | readonly csstype.Property.OverflowAnchor[] | undefined;
        overflowBlock?: csstype.Property.OverflowBlock | readonly NonNullable<csstype.Property.OverflowBlock | undefined>[] | readonly csstype.Property.OverflowBlock[] | undefined;
        overflowClipBox?: csstype.Property.OverflowClipBox | readonly NonNullable<csstype.Property.OverflowClipBox | undefined>[] | readonly csstype.Property.OverflowClipBox[] | undefined;
        overflowClipMargin?: readonly (string | (string & {}))[] | csstype.Property.OverflowClipMargin<string | number> | readonly NonNullable<csstype.Property.OverflowClipMargin<string | number> | undefined>[] | undefined;
        overflowInline?: csstype.Property.OverflowInline | readonly NonNullable<csstype.Property.OverflowInline | undefined>[] | readonly csstype.Property.OverflowInline[] | undefined;
        overflowWrap?: csstype.Property.OverflowWrap | readonly NonNullable<csstype.Property.OverflowWrap | undefined>[] | readonly csstype.Property.OverflowWrap[] | undefined;
        overflowX?: csstype.Property.OverflowX | readonly NonNullable<csstype.Property.OverflowX | undefined>[] | readonly csstype.Property.OverflowX[] | undefined;
        overflowY?: csstype.Property.OverflowY | readonly NonNullable<csstype.Property.OverflowY | undefined>[] | readonly csstype.Property.OverflowY[] | undefined;
        overlay?: csstype.Property.Overlay | readonly NonNullable<csstype.Property.Overlay | undefined>[] | readonly csstype.Property.Overlay[] | undefined;
        overscrollBehaviorBlock?: csstype.Property.OverscrollBehaviorBlock | readonly NonNullable<csstype.Property.OverscrollBehaviorBlock | undefined>[] | readonly csstype.Property.OverscrollBehaviorBlock[] | undefined;
        overscrollBehaviorInline?: csstype.Property.OverscrollBehaviorInline | readonly NonNullable<csstype.Property.OverscrollBehaviorInline | undefined>[] | readonly csstype.Property.OverscrollBehaviorInline[] | undefined;
        overscrollBehaviorX?: csstype.Property.OverscrollBehaviorX | readonly NonNullable<csstype.Property.OverscrollBehaviorX | undefined>[] | readonly csstype.Property.OverscrollBehaviorX[] | undefined;
        overscrollBehaviorY?: csstype.Property.OverscrollBehaviorY | readonly NonNullable<csstype.Property.OverscrollBehaviorY | undefined>[] | readonly csstype.Property.OverscrollBehaviorY[] | undefined;
        paddingBlockEnd?: readonly (string | (string & {}))[] | csstype.Property.PaddingBlockEnd<string | number> | readonly NonNullable<csstype.Property.PaddingBlockEnd<string | number> | undefined>[] | undefined;
        paddingBlockStart?: readonly (string | (string & {}))[] | csstype.Property.PaddingBlockStart<string | number> | readonly NonNullable<csstype.Property.PaddingBlockStart<string | number> | undefined>[] | undefined;
        paddingBottom?: readonly (string | (string & {}))[] | csstype.Property.PaddingBottom<string | number> | readonly NonNullable<csstype.Property.PaddingBottom<string | number> | undefined>[] | undefined;
        paddingInlineEnd?: readonly (string | (string & {}))[] | csstype.Property.PaddingInlineEnd<string | number> | readonly NonNullable<csstype.Property.PaddingInlineEnd<string | number> | undefined>[] | undefined;
        paddingInlineStart?: readonly (string | (string & {}))[] | csstype.Property.PaddingInlineStart<string | number> | readonly NonNullable<csstype.Property.PaddingInlineStart<string | number> | undefined>[] | undefined;
        paddingLeft?: readonly (string | (string & {}))[] | csstype.Property.PaddingLeft<string | number> | readonly NonNullable<csstype.Property.PaddingLeft<string | number> | undefined>[] | undefined;
        paddingRight?: readonly (string | (string & {}))[] | csstype.Property.PaddingRight<string | number> | readonly NonNullable<csstype.Property.PaddingRight<string | number> | undefined>[] | undefined;
        paddingTop?: readonly (string | (string & {}))[] | csstype.Property.PaddingTop<string | number> | readonly NonNullable<csstype.Property.PaddingTop<string | number> | undefined>[] | undefined;
        page?: readonly string[] | csstype.Property.Page | readonly csstype.Property.Page[] | undefined;
        pageBreakAfter?: csstype.Property.PageBreakAfter | readonly NonNullable<csstype.Property.PageBreakAfter | undefined>[] | readonly csstype.Property.PageBreakAfter[] | undefined;
        pageBreakBefore?: csstype.Property.PageBreakBefore | readonly NonNullable<csstype.Property.PageBreakBefore | undefined>[] | readonly csstype.Property.PageBreakBefore[] | undefined;
        pageBreakInside?: csstype.Property.PageBreakInside | readonly NonNullable<csstype.Property.PageBreakInside | undefined>[] | readonly csstype.Property.PageBreakInside[] | undefined;
        paintOrder?: readonly string[] | csstype.Property.PaintOrder | readonly csstype.Property.PaintOrder[] | undefined;
        perspective?: readonly string[] | csstype.Property.Perspective<string | number> | readonly NonNullable<csstype.Property.Perspective<string | number> | undefined>[] | undefined;
        perspectiveOrigin?: readonly (string | (string & {}))[] | csstype.Property.PerspectiveOrigin<string | number> | readonly NonNullable<csstype.Property.PerspectiveOrigin<string | number> | undefined>[] | undefined;
        pointerEvents?: csstype.Property.PointerEvents | readonly NonNullable<csstype.Property.PointerEvents | undefined>[] | readonly csstype.Property.PointerEvents[] | undefined;
        position?: csstype.Property.Position | readonly NonNullable<csstype.Property.Position | undefined>[] | readonly csstype.Property.Position[] | undefined;
        printColorAdjust?: csstype.Property.PrintColorAdjust | readonly NonNullable<csstype.Property.PrintColorAdjust | undefined>[] | readonly csstype.Property.PrintColorAdjust[] | undefined;
        quotes?: readonly string[] | csstype.Property.Quotes | readonly csstype.Property.Quotes[] | undefined;
        resize?: csstype.Property.Resize | readonly NonNullable<csstype.Property.Resize | undefined>[] | readonly csstype.Property.Resize[] | undefined;
        right?: readonly (string | (string & {}))[] | csstype.Property.Right<string | number> | readonly NonNullable<csstype.Property.Right<string | number> | undefined>[] | undefined;
        rotate?: readonly string[] | csstype.Property.Rotate | readonly csstype.Property.Rotate[] | undefined;
        rowGap?: readonly (string | (string & {}))[] | csstype.Property.RowGap<string | number> | readonly NonNullable<csstype.Property.RowGap<string | number> | undefined>[] | undefined;
        rubyAlign?: csstype.Property.RubyAlign | readonly NonNullable<csstype.Property.RubyAlign | undefined>[] | readonly csstype.Property.RubyAlign[] | undefined;
        rubyMerge?: csstype.Property.RubyMerge | readonly NonNullable<csstype.Property.RubyMerge | undefined>[] | readonly csstype.Property.RubyMerge[] | undefined;
        rubyPosition?: readonly string[] | csstype.Property.RubyPosition | readonly csstype.Property.RubyPosition[] | undefined;
        scale?: readonly ("none" | (string & {}) | csstype.Globals)[] | csstype.Property.Scale | readonly NonNullable<csstype.Property.Scale | undefined>[] | undefined;
        scrollBehavior?: csstype.Property.ScrollBehavior | readonly NonNullable<csstype.Property.ScrollBehavior | undefined>[] | readonly csstype.Property.ScrollBehavior[] | undefined;
        scrollMarginBlockEnd?: readonly string[] | csstype.Property.ScrollMarginBlockEnd<string | number> | readonly NonNullable<csstype.Property.ScrollMarginBlockEnd<string | number> | undefined>[] | undefined;
        scrollMarginBlockStart?: readonly string[] | csstype.Property.ScrollMarginBlockStart<string | number> | readonly NonNullable<csstype.Property.ScrollMarginBlockStart<string | number> | undefined>[] | undefined;
        scrollMarginBottom?: readonly string[] | csstype.Property.ScrollMarginBottom<string | number> | readonly NonNullable<csstype.Property.ScrollMarginBottom<string | number> | undefined>[] | undefined;
        scrollMarginInlineEnd?: readonly string[] | csstype.Property.ScrollMarginInlineEnd<string | number> | readonly NonNullable<csstype.Property.ScrollMarginInlineEnd<string | number> | undefined>[] | undefined;
        scrollMarginInlineStart?: readonly string[] | csstype.Property.ScrollMarginInlineStart<string | number> | readonly NonNullable<csstype.Property.ScrollMarginInlineStart<string | number> | undefined>[] | undefined;
        scrollMarginLeft?: readonly string[] | csstype.Property.ScrollMarginLeft<string | number> | readonly NonNullable<csstype.Property.ScrollMarginLeft<string | number> | undefined>[] | undefined;
        scrollMarginRight?: readonly string[] | csstype.Property.ScrollMarginRight<string | number> | readonly NonNullable<csstype.Property.ScrollMarginRight<string | number> | undefined>[] | undefined;
        scrollMarginTop?: readonly string[] | csstype.Property.ScrollMarginTop<string | number> | readonly NonNullable<csstype.Property.ScrollMarginTop<string | number> | undefined>[] | undefined;
        scrollPaddingBlockEnd?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingBlockEnd<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingBlockEnd<string | number> | undefined>[] | undefined;
        scrollPaddingBlockStart?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingBlockStart<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingBlockStart<string | number> | undefined>[] | undefined;
        scrollPaddingBottom?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingBottom<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingBottom<string | number> | undefined>[] | undefined;
        scrollPaddingInlineEnd?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingInlineEnd<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingInlineEnd<string | number> | undefined>[] | undefined;
        scrollPaddingInlineStart?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingInlineStart<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingInlineStart<string | number> | undefined>[] | undefined;
        scrollPaddingLeft?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingLeft<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingLeft<string | number> | undefined>[] | undefined;
        scrollPaddingRight?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingRight<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingRight<string | number> | undefined>[] | undefined;
        scrollPaddingTop?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingTop<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingTop<string | number> | undefined>[] | undefined;
        scrollSnapAlign?: readonly string[] | csstype.Property.ScrollSnapAlign | readonly csstype.Property.ScrollSnapAlign[] | undefined;
        scrollSnapMarginBottom?: readonly string[] | csstype.Property.ScrollMarginBottom<string | number> | readonly NonNullable<csstype.Property.ScrollMarginBottom<string | number> | undefined>[] | undefined;
        scrollSnapMarginLeft?: readonly string[] | csstype.Property.ScrollMarginLeft<string | number> | readonly NonNullable<csstype.Property.ScrollMarginLeft<string | number> | undefined>[] | undefined;
        scrollSnapMarginRight?: readonly string[] | csstype.Property.ScrollMarginRight<string | number> | readonly NonNullable<csstype.Property.ScrollMarginRight<string | number> | undefined>[] | undefined;
        scrollSnapMarginTop?: readonly string[] | csstype.Property.ScrollMarginTop<string | number> | readonly NonNullable<csstype.Property.ScrollMarginTop<string | number> | undefined>[] | undefined;
        scrollSnapStop?: csstype.Property.ScrollSnapStop | readonly NonNullable<csstype.Property.ScrollSnapStop | undefined>[] | readonly csstype.Property.ScrollSnapStop[] | undefined;
        scrollSnapType?: readonly string[] | csstype.Property.ScrollSnapType | readonly csstype.Property.ScrollSnapType[] | undefined;
        scrollTimelineAxis?: readonly string[] | csstype.Property.ScrollTimelineAxis | readonly csstype.Property.ScrollTimelineAxis[] | undefined;
        scrollTimelineName?: readonly string[] | csstype.Property.ScrollTimelineName | readonly csstype.Property.ScrollTimelineName[] | undefined;
        scrollbarColor?: readonly string[] | csstype.Property.ScrollbarColor | readonly csstype.Property.ScrollbarColor[] | undefined;
        scrollbarGutter?: readonly string[] | csstype.Property.ScrollbarGutter | readonly csstype.Property.ScrollbarGutter[] | undefined;
        scrollbarWidth?: csstype.Property.ScrollbarWidth | readonly NonNullable<csstype.Property.ScrollbarWidth | undefined>[] | readonly csstype.Property.ScrollbarWidth[] | undefined;
        shapeImageThreshold?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.ShapeImageThreshold | readonly NonNullable<csstype.Property.ShapeImageThreshold | undefined>[] | undefined;
        shapeMargin?: readonly (string | (string & {}))[] | csstype.Property.ShapeMargin<string | number> | readonly NonNullable<csstype.Property.ShapeMargin<string | number> | undefined>[] | undefined;
        shapeOutside?: readonly string[] | csstype.Property.ShapeOutside | readonly csstype.Property.ShapeOutside[] | undefined;
        tabSize?: readonly (string | (string & {}))[] | csstype.Property.TabSize<string | number> | readonly NonNullable<csstype.Property.TabSize<string | number> | undefined>[] | undefined;
        tableLayout?: csstype.Property.TableLayout | readonly NonNullable<csstype.Property.TableLayout | undefined>[] | readonly csstype.Property.TableLayout[] | undefined;
        textAlign?: csstype.Property.TextAlign | readonly NonNullable<csstype.Property.TextAlign | undefined>[] | readonly csstype.Property.TextAlign[] | undefined;
        textAlignLast?: csstype.Property.TextAlignLast | readonly NonNullable<csstype.Property.TextAlignLast | undefined>[] | readonly csstype.Property.TextAlignLast[] | undefined;
        textCombineUpright?: readonly string[] | csstype.Property.TextCombineUpright | readonly csstype.Property.TextCombineUpright[] | undefined;
        textDecorationColor?: readonly string[] | csstype.Property.TextDecorationColor | readonly csstype.Property.TextDecorationColor[] | undefined;
        textDecorationLine?: readonly string[] | csstype.Property.TextDecorationLine | readonly csstype.Property.TextDecorationLine[] | undefined;
        textDecorationSkip?: readonly string[] | csstype.Property.TextDecorationSkip | readonly csstype.Property.TextDecorationSkip[] | undefined;
        textDecorationSkipInk?: csstype.Property.TextDecorationSkipInk | readonly NonNullable<csstype.Property.TextDecorationSkipInk | undefined>[] | readonly csstype.Property.TextDecorationSkipInk[] | undefined;
        textDecorationStyle?: csstype.Property.TextDecorationStyle | readonly NonNullable<csstype.Property.TextDecorationStyle | undefined>[] | readonly csstype.Property.TextDecorationStyle[] | undefined;
        textDecorationThickness?: readonly (string | (string & {}))[] | csstype.Property.TextDecorationThickness<string | number> | readonly NonNullable<csstype.Property.TextDecorationThickness<string | number> | undefined>[] | undefined;
        textEmphasisColor?: readonly string[] | csstype.Property.TextEmphasisColor | readonly csstype.Property.TextEmphasisColor[] | undefined;
        textEmphasisPosition?: readonly string[] | csstype.Property.TextEmphasisPosition | readonly csstype.Property.TextEmphasisPosition[] | undefined;
        textEmphasisStyle?: readonly string[] | csstype.Property.TextEmphasisStyle | readonly csstype.Property.TextEmphasisStyle[] | undefined;
        textIndent?: readonly (string | (string & {}))[] | csstype.Property.TextIndent<string | number> | readonly NonNullable<csstype.Property.TextIndent<string | number> | undefined>[] | undefined;
        textJustify?: csstype.Property.TextJustify | readonly NonNullable<csstype.Property.TextJustify | undefined>[] | readonly csstype.Property.TextJustify[] | undefined;
        textOrientation?: csstype.Property.TextOrientation | readonly NonNullable<csstype.Property.TextOrientation | undefined>[] | readonly csstype.Property.TextOrientation[] | undefined;
        textOverflow?: readonly string[] | csstype.Property.TextOverflow | readonly csstype.Property.TextOverflow[] | undefined;
        textRendering?: csstype.Property.TextRendering | readonly NonNullable<csstype.Property.TextRendering | undefined>[] | readonly csstype.Property.TextRendering[] | undefined;
        textShadow?: readonly string[] | csstype.Property.TextShadow | readonly csstype.Property.TextShadow[] | undefined;
        textSizeAdjust?: readonly string[] | csstype.Property.TextSizeAdjust | readonly csstype.Property.TextSizeAdjust[] | undefined;
        textTransform?: csstype.Property.TextTransform | readonly NonNullable<csstype.Property.TextTransform | undefined>[] | readonly csstype.Property.TextTransform[] | undefined;
        textUnderlineOffset?: readonly (string | (string & {}))[] | csstype.Property.TextUnderlineOffset<string | number> | readonly NonNullable<csstype.Property.TextUnderlineOffset<string | number> | undefined>[] | undefined;
        textUnderlinePosition?: readonly string[] | csstype.Property.TextUnderlinePosition | readonly csstype.Property.TextUnderlinePosition[] | undefined;
        textWrap?: csstype.Property.TextWrap | readonly NonNullable<csstype.Property.TextWrap | undefined>[] | readonly csstype.Property.TextWrap[] | undefined;
        timelineScope?: readonly string[] | csstype.Property.TimelineScope | readonly csstype.Property.TimelineScope[] | undefined;
        top?: readonly (string | (string & {}))[] | csstype.Property.Top<string | number> | readonly NonNullable<csstype.Property.Top<string | number> | undefined>[] | undefined;
        touchAction?: readonly string[] | csstype.Property.TouchAction | readonly csstype.Property.TouchAction[] | undefined;
        transform?: readonly string[] | csstype.Property.Transform | readonly csstype.Property.Transform[] | undefined;
        transformBox?: csstype.Property.TransformBox | readonly NonNullable<csstype.Property.TransformBox | undefined>[] | readonly csstype.Property.TransformBox[] | undefined;
        transformOrigin?: readonly (string | (string & {}))[] | csstype.Property.TransformOrigin<string | number> | readonly NonNullable<csstype.Property.TransformOrigin<string | number> | undefined>[] | undefined;
        transformStyle?: csstype.Property.TransformStyle | readonly NonNullable<csstype.Property.TransformStyle | undefined>[] | readonly csstype.Property.TransformStyle[] | undefined;
        transitionBehavior?: readonly string[] | csstype.Property.TransitionBehavior | readonly csstype.Property.TransitionBehavior[] | undefined;
        transitionDelay?: readonly string[] | csstype.Property.TransitionDelay<string & {}> | readonly csstype.Property.TransitionDelay<string & {}>[] | undefined;
        transitionDuration?: readonly string[] | csstype.Property.TransitionDuration<string & {}> | readonly csstype.Property.TransitionDuration<string & {}>[] | undefined;
        transitionProperty?: readonly string[] | csstype.Property.TransitionProperty | readonly csstype.Property.TransitionProperty[] | undefined;
        transitionTimingFunction?: readonly string[] | csstype.Property.TransitionTimingFunction | readonly csstype.Property.TransitionTimingFunction[] | undefined;
        translate?: readonly (string | (string & {}))[] | csstype.Property.Translate<string | number> | readonly NonNullable<csstype.Property.Translate<string | number> | undefined>[] | undefined;
        unicodeBidi?: csstype.Property.UnicodeBidi | readonly NonNullable<csstype.Property.UnicodeBidi | undefined>[] | readonly csstype.Property.UnicodeBidi[] | undefined;
        userSelect?: csstype.Property.UserSelect | readonly NonNullable<csstype.Property.UserSelect | undefined>[] | readonly csstype.Property.UserSelect[] | undefined;
        verticalAlign?: readonly (string | (string & {}))[] | csstype.Property.VerticalAlign<string | number> | readonly NonNullable<csstype.Property.VerticalAlign<string | number> | undefined>[] | undefined;
        viewTimelineAxis?: readonly string[] | csstype.Property.ViewTimelineAxis | readonly csstype.Property.ViewTimelineAxis[] | undefined;
        viewTimelineInset?: readonly (string | (string & {}))[] | csstype.Property.ViewTimelineInset<string | number> | readonly NonNullable<csstype.Property.ViewTimelineInset<string | number> | undefined>[] | undefined;
        viewTimelineName?: readonly string[] | csstype.Property.ViewTimelineName | readonly csstype.Property.ViewTimelineName[] | undefined;
        viewTransitionName?: readonly string[] | csstype.Property.ViewTransitionName | readonly csstype.Property.ViewTransitionName[] | undefined;
        visibility?: csstype.Property.Visibility | readonly NonNullable<csstype.Property.Visibility | undefined>[] | readonly csstype.Property.Visibility[] | undefined;
        whiteSpace?: readonly string[] | csstype.Property.WhiteSpace | readonly csstype.Property.WhiteSpace[] | undefined;
        whiteSpaceCollapse?: csstype.Property.WhiteSpaceCollapse | readonly NonNullable<csstype.Property.WhiteSpaceCollapse | undefined>[] | readonly csstype.Property.WhiteSpaceCollapse[] | undefined;
        whiteSpaceTrim?: readonly string[] | csstype.Property.WhiteSpaceTrim | readonly csstype.Property.WhiteSpaceTrim[] | undefined;
        widows?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Widows | readonly NonNullable<csstype.Property.Widows | undefined>[] | undefined;
        width?: readonly (string | (string & {}))[] | csstype.Property.Width<string | number> | readonly NonNullable<csstype.Property.Width<string | number> | undefined>[] | undefined;
        willChange?: readonly string[] | csstype.Property.WillChange | readonly csstype.Property.WillChange[] | undefined;
        wordBreak?: csstype.Property.WordBreak | readonly NonNullable<csstype.Property.WordBreak | undefined>[] | readonly csstype.Property.WordBreak[] | undefined;
        wordSpacing?: readonly string[] | csstype.Property.WordSpacing<string | number> | readonly NonNullable<csstype.Property.WordSpacing<string | number> | undefined>[] | undefined;
        wordWrap?: csstype.Property.WordWrap | readonly NonNullable<csstype.Property.WordWrap | undefined>[] | readonly csstype.Property.WordWrap[] | undefined;
        writingMode?: csstype.Property.WritingMode | readonly NonNullable<csstype.Property.WritingMode | undefined>[] | readonly csstype.Property.WritingMode[] | undefined;
        zoom?: csstype.Property.Zoom | readonly NonNullable<csstype.Property.Zoom | undefined>[] | readonly ("normal" | (string & {}) | csstype.Globals | "reset")[] | undefined;
        all?: csstype.Globals | readonly NonNullable<csstype.Globals | undefined>[] | readonly csstype.Globals[] | undefined;
        animation?: csstype.Property.Animation<string & {}> | readonly NonNullable<csstype.Property.Animation<string & {}> | undefined>[] | readonly ("linear" | "auto" | "none" | "normal" | "reverse" | "paused" | (string & {}) | csstype.Globals | "both" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-end" | "step-start" | "backwards" | "forwards" | "alternate" | "alternate-reverse" | "infinite" | "running")[] | undefined;
        animationRange?: readonly (string | (string & {}))[] | csstype.Property.AnimationRange<string | number> | readonly NonNullable<csstype.Property.AnimationRange<string | number> | undefined>[] | undefined;
        background?: readonly (string | (string & {}))[] | csstype.Property.Background<string | number> | readonly NonNullable<csstype.Property.Background<string | number> | undefined>[] | undefined;
        backgroundPosition?: readonly (string | (string & {}))[] | csstype.Property.BackgroundPosition<string | number> | readonly NonNullable<csstype.Property.BackgroundPosition<string | number> | undefined>[] | undefined;
        border?: readonly (string | (string & {}))[] | csstype.Property.Border<string | number> | readonly NonNullable<csstype.Property.Border<string | number> | undefined>[] | undefined;
        borderBlock?: readonly (string | (string & {}))[] | csstype.Property.BorderBlock<string | number> | readonly NonNullable<csstype.Property.BorderBlock<string | number> | undefined>[] | undefined;
        borderBlockEnd?: readonly (string | (string & {}))[] | csstype.Property.BorderBlockEnd<string | number> | readonly NonNullable<csstype.Property.BorderBlockEnd<string | number> | undefined>[] | undefined;
        borderBlockStart?: readonly (string | (string & {}))[] | csstype.Property.BorderBlockStart<string | number> | readonly NonNullable<csstype.Property.BorderBlockStart<string | number> | undefined>[] | undefined;
        borderBottom?: readonly (string | (string & {}))[] | csstype.Property.BorderBottom<string | number> | readonly NonNullable<csstype.Property.BorderBottom<string | number> | undefined>[] | undefined;
        borderColor?: readonly string[] | csstype.Property.BorderColor | readonly csstype.Property.BorderColor[] | undefined;
        borderImage?: csstype.Property.BorderImage | readonly NonNullable<csstype.Property.BorderImage | undefined>[] | readonly ("none" | "repeat" | (string & {}) | csstype.Globals | "round" | "space" | "stretch")[] | undefined;
        borderInline?: readonly (string | (string & {}))[] | csstype.Property.BorderInline<string | number> | readonly NonNullable<csstype.Property.BorderInline<string | number> | undefined>[] | undefined;
        borderInlineEnd?: readonly (string | (string & {}))[] | csstype.Property.BorderInlineEnd<string | number> | readonly NonNullable<csstype.Property.BorderInlineEnd<string | number> | undefined>[] | undefined;
        borderInlineStart?: readonly (string | (string & {}))[] | csstype.Property.BorderInlineStart<string | number> | readonly NonNullable<csstype.Property.BorderInlineStart<string | number> | undefined>[] | undefined;
        borderLeft?: readonly (string | (string & {}))[] | csstype.Property.BorderLeft<string | number> | readonly NonNullable<csstype.Property.BorderLeft<string | number> | undefined>[] | undefined;
        borderRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderRadius<string | number> | readonly NonNullable<csstype.Property.BorderRadius<string | number> | undefined>[] | undefined;
        borderRight?: readonly (string | (string & {}))[] | csstype.Property.BorderRight<string | number> | readonly NonNullable<csstype.Property.BorderRight<string | number> | undefined>[] | undefined;
        borderStyle?: readonly string[] | csstype.Property.BorderStyle | readonly csstype.Property.BorderStyle[] | undefined;
        borderTop?: readonly (string | (string & {}))[] | csstype.Property.BorderTop<string | number> | readonly NonNullable<csstype.Property.BorderTop<string | number> | undefined>[] | undefined;
        borderWidth?: readonly (string | (string & {}))[] | csstype.Property.BorderWidth<string | number> | readonly NonNullable<csstype.Property.BorderWidth<string | number> | undefined>[] | undefined;
        caret?: readonly string[] | csstype.Property.Caret | readonly csstype.Property.Caret[] | undefined;
        columnRule?: readonly (string | (string & {}))[] | csstype.Property.ColumnRule<string | number> | readonly NonNullable<csstype.Property.ColumnRule<string | number> | undefined>[] | undefined;
        columns?: readonly (string | (string & {}))[] | csstype.Property.Columns<string | number> | readonly NonNullable<csstype.Property.Columns<string | number> | undefined>[] | undefined;
        containIntrinsicSize?: readonly (string | (string & {}))[] | csstype.Property.ContainIntrinsicSize<string | number> | readonly NonNullable<csstype.Property.ContainIntrinsicSize<string | number> | undefined>[] | undefined;
        container?: readonly string[] | csstype.Property.Container | readonly csstype.Property.Container[] | undefined;
        flex?: readonly (string | (string & {}))[] | csstype.Property.Flex<string | number> | readonly NonNullable<csstype.Property.Flex<string | number> | undefined>[] | undefined;
        flexFlow?: readonly string[] | csstype.Property.FlexFlow | readonly csstype.Property.FlexFlow[] | undefined;
        font?: readonly string[] | csstype.Property.Font | readonly csstype.Property.Font[] | undefined;
        gap?: readonly (string | (string & {}))[] | csstype.Property.Gap<string | number> | readonly NonNullable<csstype.Property.Gap<string | number> | undefined>[] | undefined;
        grid?: readonly string[] | csstype.Property.Grid | readonly csstype.Property.Grid[] | undefined;
        gridArea?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GridArea | readonly NonNullable<csstype.Property.GridArea | undefined>[] | undefined;
        gridColumn?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GridColumn | readonly NonNullable<csstype.Property.GridColumn | undefined>[] | undefined;
        gridRow?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GridRow | readonly NonNullable<csstype.Property.GridRow | undefined>[] | undefined;
        gridTemplate?: readonly string[] | csstype.Property.GridTemplate | readonly csstype.Property.GridTemplate[] | undefined;
        inset?: readonly (string | (string & {}))[] | csstype.Property.Inset<string | number> | readonly NonNullable<csstype.Property.Inset<string | number> | undefined>[] | undefined;
        insetBlock?: readonly (string | (string & {}))[] | csstype.Property.InsetBlock<string | number> | readonly NonNullable<csstype.Property.InsetBlock<string | number> | undefined>[] | undefined;
        insetInline?: readonly (string | (string & {}))[] | csstype.Property.InsetInline<string | number> | readonly NonNullable<csstype.Property.InsetInline<string | number> | undefined>[] | undefined;
        lineClamp?: readonly ("none" | (string & {}) | csstype.Globals)[] | csstype.Property.LineClamp | readonly NonNullable<csstype.Property.LineClamp | undefined>[] | undefined;
        listStyle?: readonly string[] | csstype.Property.ListStyle | readonly csstype.Property.ListStyle[] | undefined;
        marginBlock?: readonly (string | (string & {}))[] | csstype.Property.MarginBlock<string | number> | readonly NonNullable<csstype.Property.MarginBlock<string | number> | undefined>[] | undefined;
        marginInline?: readonly (string | (string & {}))[] | csstype.Property.MarginInline<string | number> | readonly NonNullable<csstype.Property.MarginInline<string | number> | undefined>[] | undefined;
        mask?: readonly (string | (string & {}))[] | csstype.Property.Mask<string | number> | readonly NonNullable<csstype.Property.Mask<string | number> | undefined>[] | undefined;
        maskBorder?: csstype.Property.MaskBorder | readonly NonNullable<csstype.Property.MaskBorder | undefined>[] | readonly ("none" | "repeat" | "alpha" | (string & {}) | csstype.Globals | "round" | "space" | "stretch" | "luminance")[] | undefined;
        motion?: readonly (string | (string & {}))[] | csstype.Property.Offset<string | number> | readonly NonNullable<csstype.Property.Offset<string | number> | undefined>[] | undefined;
        offset?: readonly (string | (string & {}))[] | csstype.Property.Offset<string | number> | readonly NonNullable<csstype.Property.Offset<string | number> | undefined>[] | undefined;
        outline?: readonly (string | (string & {}))[] | csstype.Property.Outline<string | number> | readonly NonNullable<csstype.Property.Outline<string | number> | undefined>[] | undefined;
        overflow?: readonly string[] | csstype.Property.Overflow | readonly csstype.Property.Overflow[] | undefined;
        overscrollBehavior?: readonly string[] | csstype.Property.OverscrollBehavior | readonly csstype.Property.OverscrollBehavior[] | undefined;
        paddingBlock?: readonly (string | (string & {}))[] | csstype.Property.PaddingBlock<string | number> | readonly NonNullable<csstype.Property.PaddingBlock<string | number> | undefined>[] | undefined;
        paddingInline?: readonly (string | (string & {}))[] | csstype.Property.PaddingInline<string | number> | readonly NonNullable<csstype.Property.PaddingInline<string | number> | undefined>[] | undefined;
        placeContent?: readonly string[] | csstype.Property.PlaceContent | readonly csstype.Property.PlaceContent[] | undefined;
        placeItems?: readonly string[] | csstype.Property.PlaceItems | readonly csstype.Property.PlaceItems[] | undefined;
        placeSelf?: readonly string[] | csstype.Property.PlaceSelf | readonly csstype.Property.PlaceSelf[] | undefined;
        scrollMargin?: readonly (string | (string & {}))[] | csstype.Property.ScrollMargin<string | number> | readonly NonNullable<csstype.Property.ScrollMargin<string | number> | undefined>[] | undefined;
        scrollMarginBlock?: readonly (string | (string & {}))[] | csstype.Property.ScrollMarginBlock<string | number> | readonly NonNullable<csstype.Property.ScrollMarginBlock<string | number> | undefined>[] | undefined;
        scrollMarginInline?: readonly (string | (string & {}))[] | csstype.Property.ScrollMarginInline<string | number> | readonly NonNullable<csstype.Property.ScrollMarginInline<string | number> | undefined>[] | undefined;
        scrollPadding?: readonly (string | (string & {}))[] | csstype.Property.ScrollPadding<string | number> | readonly NonNullable<csstype.Property.ScrollPadding<string | number> | undefined>[] | undefined;
        scrollPaddingBlock?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingBlock<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingBlock<string | number> | undefined>[] | undefined;
        scrollPaddingInline?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingInline<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingInline<string | number> | undefined>[] | undefined;
        scrollSnapMargin?: readonly (string | (string & {}))[] | csstype.Property.ScrollMargin<string | number> | readonly NonNullable<csstype.Property.ScrollMargin<string | number> | undefined>[] | undefined;
        scrollTimeline?: readonly string[] | csstype.Property.ScrollTimeline | readonly csstype.Property.ScrollTimeline[] | undefined;
        textDecoration?: readonly (string | (string & {}))[] | csstype.Property.TextDecoration<string | number> | readonly NonNullable<csstype.Property.TextDecoration<string | number> | undefined>[] | undefined;
        textEmphasis?: readonly string[] | csstype.Property.TextEmphasis | readonly csstype.Property.TextEmphasis[] | undefined;
        transition?: readonly string[] | csstype.Property.Transition<string & {}> | readonly csstype.Property.Transition<string & {}>[] | undefined;
        viewTimeline?: readonly string[] | csstype.Property.ViewTimeline | readonly csstype.Property.ViewTimeline[] | undefined;
        MozAnimationDelay?: readonly string[] | csstype.Property.AnimationDelay<string & {}> | readonly csstype.Property.AnimationDelay<string & {}>[] | undefined;
        MozAnimationDirection?: readonly string[] | csstype.Property.AnimationDirection | readonly csstype.Property.AnimationDirection[] | undefined;
        MozAnimationDuration?: readonly string[] | csstype.Property.AnimationDuration<string & {}> | readonly csstype.Property.AnimationDuration<string & {}>[] | undefined;
        MozAnimationFillMode?: readonly string[] | csstype.Property.AnimationFillMode | readonly csstype.Property.AnimationFillMode[] | undefined;
        MozAnimationIterationCount?: csstype.Property.AnimationIterationCount | readonly NonNullable<csstype.Property.AnimationIterationCount | undefined>[] | readonly ((string & {}) | csstype.Globals | "infinite")[] | undefined;
        MozAnimationName?: readonly string[] | csstype.Property.AnimationName | readonly csstype.Property.AnimationName[] | undefined;
        MozAnimationPlayState?: readonly string[] | csstype.Property.AnimationPlayState | readonly csstype.Property.AnimationPlayState[] | undefined;
        MozAnimationTimingFunction?: readonly string[] | csstype.Property.AnimationTimingFunction | readonly csstype.Property.AnimationTimingFunction[] | undefined;
        MozAppearance?: csstype.Property.MozAppearance | readonly NonNullable<csstype.Property.MozAppearance | undefined>[] | readonly csstype.Property.MozAppearance[] | undefined;
        MozBinding?: readonly string[] | csstype.Property.MozBinding | readonly csstype.Property.MozBinding[] | undefined;
        MozBorderBottomColors?: readonly string[] | csstype.Property.MozBorderBottomColors | readonly csstype.Property.MozBorderBottomColors[] | undefined;
        MozBorderEndColor?: readonly string[] | csstype.Property.BorderInlineEndColor | readonly csstype.Property.BorderInlineEndColor[] | undefined;
        MozBorderEndStyle?: csstype.Property.BorderInlineEndStyle | readonly NonNullable<csstype.Property.BorderInlineEndStyle | undefined>[] | readonly csstype.Property.BorderInlineEndStyle[] | undefined;
        MozBorderEndWidth?: readonly string[] | csstype.Property.BorderInlineEndWidth<string | number> | readonly NonNullable<csstype.Property.BorderInlineEndWidth<string | number> | undefined>[] | undefined;
        MozBorderLeftColors?: readonly string[] | csstype.Property.MozBorderLeftColors | readonly csstype.Property.MozBorderLeftColors[] | undefined;
        MozBorderRightColors?: readonly string[] | csstype.Property.MozBorderRightColors | readonly csstype.Property.MozBorderRightColors[] | undefined;
        MozBorderStartColor?: readonly string[] | csstype.Property.BorderInlineStartColor | readonly csstype.Property.BorderInlineStartColor[] | undefined;
        MozBorderStartStyle?: csstype.Property.BorderInlineStartStyle | readonly NonNullable<csstype.Property.BorderInlineStartStyle | undefined>[] | readonly csstype.Property.BorderInlineStartStyle[] | undefined;
        MozBorderTopColors?: readonly string[] | csstype.Property.MozBorderTopColors | readonly csstype.Property.MozBorderTopColors[] | undefined;
        MozBoxSizing?: csstype.Property.BoxSizing | readonly NonNullable<csstype.Property.BoxSizing | undefined>[] | readonly csstype.Property.BoxSizing[] | undefined;
        MozColumnCount?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.ColumnCount | readonly NonNullable<csstype.Property.ColumnCount | undefined>[] | undefined;
        MozColumnFill?: csstype.Property.ColumnFill | readonly NonNullable<csstype.Property.ColumnFill | undefined>[] | readonly csstype.Property.ColumnFill[] | undefined;
        MozColumnRuleColor?: readonly string[] | csstype.Property.ColumnRuleColor | readonly csstype.Property.ColumnRuleColor[] | undefined;
        MozColumnRuleStyle?: readonly string[] | csstype.Property.ColumnRuleStyle | readonly csstype.Property.ColumnRuleStyle[] | undefined;
        MozColumnRuleWidth?: readonly (string | (string & {}))[] | csstype.Property.ColumnRuleWidth<string | number> | readonly NonNullable<csstype.Property.ColumnRuleWidth<string | number> | undefined>[] | undefined;
        MozColumnWidth?: readonly string[] | csstype.Property.ColumnWidth<string | number> | readonly NonNullable<csstype.Property.ColumnWidth<string | number> | undefined>[] | undefined;
        MozContextProperties?: readonly string[] | csstype.Property.MozContextProperties | readonly csstype.Property.MozContextProperties[] | undefined;
        MozFontFeatureSettings?: readonly string[] | csstype.Property.FontFeatureSettings | readonly csstype.Property.FontFeatureSettings[] | undefined;
        MozFontLanguageOverride?: readonly string[] | csstype.Property.FontLanguageOverride | readonly csstype.Property.FontLanguageOverride[] | undefined;
        MozHyphens?: csstype.Property.Hyphens | readonly NonNullable<csstype.Property.Hyphens | undefined>[] | readonly csstype.Property.Hyphens[] | undefined;
        MozImageRegion?: readonly string[] | csstype.Property.MozImageRegion | readonly csstype.Property.MozImageRegion[] | undefined;
        MozMarginEnd?: readonly (string | (string & {}))[] | csstype.Property.MarginInlineEnd<string | number> | readonly NonNullable<csstype.Property.MarginInlineEnd<string | number> | undefined>[] | undefined;
        MozMarginStart?: readonly (string | (string & {}))[] | csstype.Property.MarginInlineStart<string | number> | readonly NonNullable<csstype.Property.MarginInlineStart<string | number> | undefined>[] | undefined;
        MozOrient?: csstype.Property.MozOrient | readonly NonNullable<csstype.Property.MozOrient | undefined>[] | readonly csstype.Property.MozOrient[] | undefined;
        MozOsxFontSmoothing?: readonly string[] | csstype.Property.FontSmooth<string | number> | readonly NonNullable<csstype.Property.FontSmooth<string | number> | undefined>[] | undefined;
        MozOutlineRadiusBottomleft?: readonly (string | (string & {}))[] | csstype.Property.MozOutlineRadiusBottomleft<string | number> | readonly NonNullable<csstype.Property.MozOutlineRadiusBottomleft<string | number> | undefined>[] | undefined;
        MozOutlineRadiusBottomright?: readonly (string | (string & {}))[] | csstype.Property.MozOutlineRadiusBottomright<string | number> | readonly NonNullable<csstype.Property.MozOutlineRadiusBottomright<string | number> | undefined>[] | undefined;
        MozOutlineRadiusTopleft?: readonly (string | (string & {}))[] | csstype.Property.MozOutlineRadiusTopleft<string | number> | readonly NonNullable<csstype.Property.MozOutlineRadiusTopleft<string | number> | undefined>[] | undefined;
        MozOutlineRadiusTopright?: readonly (string | (string & {}))[] | csstype.Property.MozOutlineRadiusTopright<string | number> | readonly NonNullable<csstype.Property.MozOutlineRadiusTopright<string | number> | undefined>[] | undefined;
        MozPaddingEnd?: readonly (string | (string & {}))[] | csstype.Property.PaddingInlineEnd<string | number> | readonly NonNullable<csstype.Property.PaddingInlineEnd<string | number> | undefined>[] | undefined;
        MozPaddingStart?: readonly (string | (string & {}))[] | csstype.Property.PaddingInlineStart<string | number> | readonly NonNullable<csstype.Property.PaddingInlineStart<string | number> | undefined>[] | undefined;
        MozStackSizing?: csstype.Property.MozStackSizing | readonly NonNullable<csstype.Property.MozStackSizing | undefined>[] | readonly csstype.Property.MozStackSizing[] | undefined;
        MozTabSize?: readonly (string | (string & {}))[] | csstype.Property.TabSize<string | number> | readonly NonNullable<csstype.Property.TabSize<string | number> | undefined>[] | undefined;
        MozTextBlink?: csstype.Property.MozTextBlink | readonly NonNullable<csstype.Property.MozTextBlink | undefined>[] | readonly csstype.Property.MozTextBlink[] | undefined;
        MozTextSizeAdjust?: readonly string[] | csstype.Property.TextSizeAdjust | readonly csstype.Property.TextSizeAdjust[] | undefined;
        MozUserFocus?: csstype.Property.MozUserFocus | readonly NonNullable<csstype.Property.MozUserFocus | undefined>[] | readonly csstype.Property.MozUserFocus[] | undefined;
        MozUserModify?: csstype.Property.MozUserModify | readonly NonNullable<csstype.Property.MozUserModify | undefined>[] | readonly csstype.Property.MozUserModify[] | undefined;
        MozUserSelect?: csstype.Property.UserSelect | readonly NonNullable<csstype.Property.UserSelect | undefined>[] | readonly csstype.Property.UserSelect[] | undefined;
        MozWindowDragging?: csstype.Property.MozWindowDragging | readonly NonNullable<csstype.Property.MozWindowDragging | undefined>[] | readonly csstype.Property.MozWindowDragging[] | undefined;
        MozWindowShadow?: csstype.Property.MozWindowShadow | readonly NonNullable<csstype.Property.MozWindowShadow | undefined>[] | readonly csstype.Property.MozWindowShadow[] | undefined;
        msAccelerator?: csstype.Property.MsAccelerator | readonly NonNullable<csstype.Property.MsAccelerator | undefined>[] | readonly csstype.Property.MsAccelerator[] | undefined;
        msBlockProgression?: csstype.Property.MsBlockProgression | readonly NonNullable<csstype.Property.MsBlockProgression | undefined>[] | readonly csstype.Property.MsBlockProgression[] | undefined;
        msContentZoomChaining?: csstype.Property.MsContentZoomChaining | readonly NonNullable<csstype.Property.MsContentZoomChaining | undefined>[] | readonly csstype.Property.MsContentZoomChaining[] | undefined;
        msContentZoomLimitMax?: readonly string[] | csstype.Property.MsContentZoomLimitMax | readonly csstype.Property.MsContentZoomLimitMax[] | undefined;
        msContentZoomLimitMin?: readonly string[] | csstype.Property.MsContentZoomLimitMin | readonly csstype.Property.MsContentZoomLimitMin[] | undefined;
        msContentZoomSnapPoints?: readonly string[] | csstype.Property.MsContentZoomSnapPoints | readonly csstype.Property.MsContentZoomSnapPoints[] | undefined;
        msContentZoomSnapType?: csstype.Property.MsContentZoomSnapType | readonly NonNullable<csstype.Property.MsContentZoomSnapType | undefined>[] | readonly csstype.Property.MsContentZoomSnapType[] | undefined;
        msContentZooming?: csstype.Property.MsContentZooming | readonly NonNullable<csstype.Property.MsContentZooming | undefined>[] | readonly csstype.Property.MsContentZooming[] | undefined;
        msFilter?: readonly string[] | csstype.Property.MsFilter | readonly csstype.Property.MsFilter[] | undefined;
        msFlexDirection?: csstype.Property.FlexDirection | readonly NonNullable<csstype.Property.FlexDirection | undefined>[] | readonly csstype.Property.FlexDirection[] | undefined;
        msFlexPositive?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.FlexGrow | readonly NonNullable<csstype.Property.FlexGrow | undefined>[] | undefined;
        msFlowFrom?: readonly string[] | csstype.Property.MsFlowFrom | readonly csstype.Property.MsFlowFrom[] | undefined;
        msFlowInto?: readonly string[] | csstype.Property.MsFlowInto | readonly csstype.Property.MsFlowInto[] | undefined;
        msGridColumns?: readonly (string | (string & {}))[] | csstype.Property.MsGridColumns<string | number> | readonly NonNullable<csstype.Property.MsGridColumns<string | number> | undefined>[] | undefined;
        msGridRows?: readonly (string | (string & {}))[] | csstype.Property.MsGridRows<string | number> | readonly NonNullable<csstype.Property.MsGridRows<string | number> | undefined>[] | undefined;
        msHighContrastAdjust?: csstype.Property.MsHighContrastAdjust | readonly NonNullable<csstype.Property.MsHighContrastAdjust | undefined>[] | readonly csstype.Property.MsHighContrastAdjust[] | undefined;
        msHyphenateLimitChars?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.MsHyphenateLimitChars | readonly NonNullable<csstype.Property.MsHyphenateLimitChars | undefined>[] | undefined;
        msHyphenateLimitLines?: csstype.Property.MsHyphenateLimitLines | readonly NonNullable<csstype.Property.MsHyphenateLimitLines | undefined>[] | readonly ((string & {}) | csstype.Globals | "no-limit")[] | undefined;
        msHyphenateLimitZone?: readonly (string | (string & {}))[] | csstype.Property.MsHyphenateLimitZone<string | number> | readonly NonNullable<csstype.Property.MsHyphenateLimitZone<string | number> | undefined>[] | undefined;
        msHyphens?: csstype.Property.Hyphens | readonly NonNullable<csstype.Property.Hyphens | undefined>[] | readonly csstype.Property.Hyphens[] | undefined;
        msImeAlign?: csstype.Property.MsImeAlign | readonly NonNullable<csstype.Property.MsImeAlign | undefined>[] | readonly csstype.Property.MsImeAlign[] | undefined;
        msLineBreak?: csstype.Property.LineBreak | readonly NonNullable<csstype.Property.LineBreak | undefined>[] | readonly csstype.Property.LineBreak[] | undefined;
        msOrder?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Order | readonly NonNullable<csstype.Property.Order | undefined>[] | undefined;
        msOverflowStyle?: csstype.Property.MsOverflowStyle | readonly NonNullable<csstype.Property.MsOverflowStyle | undefined>[] | readonly csstype.Property.MsOverflowStyle[] | undefined;
        msOverflowX?: csstype.Property.OverflowX | readonly NonNullable<csstype.Property.OverflowX | undefined>[] | readonly csstype.Property.OverflowX[] | undefined;
        msOverflowY?: csstype.Property.OverflowY | readonly NonNullable<csstype.Property.OverflowY | undefined>[] | readonly csstype.Property.OverflowY[] | undefined;
        msScrollChaining?: csstype.Property.MsScrollChaining | readonly NonNullable<csstype.Property.MsScrollChaining | undefined>[] | readonly csstype.Property.MsScrollChaining[] | undefined;
        msScrollLimitXMax?: readonly string[] | csstype.Property.MsScrollLimitXMax<string | number> | readonly NonNullable<csstype.Property.MsScrollLimitXMax<string | number> | undefined>[] | undefined;
        msScrollLimitXMin?: readonly string[] | csstype.Property.MsScrollLimitXMin<string | number> | readonly NonNullable<csstype.Property.MsScrollLimitXMin<string | number> | undefined>[] | undefined;
        msScrollLimitYMax?: readonly string[] | csstype.Property.MsScrollLimitYMax<string | number> | readonly NonNullable<csstype.Property.MsScrollLimitYMax<string | number> | undefined>[] | undefined;
        msScrollLimitYMin?: readonly string[] | csstype.Property.MsScrollLimitYMin<string | number> | readonly NonNullable<csstype.Property.MsScrollLimitYMin<string | number> | undefined>[] | undefined;
        msScrollRails?: csstype.Property.MsScrollRails | readonly NonNullable<csstype.Property.MsScrollRails | undefined>[] | readonly csstype.Property.MsScrollRails[] | undefined;
        msScrollSnapPointsX?: readonly string[] | csstype.Property.MsScrollSnapPointsX | readonly csstype.Property.MsScrollSnapPointsX[] | undefined;
        msScrollSnapPointsY?: readonly string[] | csstype.Property.MsScrollSnapPointsY | readonly csstype.Property.MsScrollSnapPointsY[] | undefined;
        msScrollSnapType?: csstype.Property.MsScrollSnapType | readonly NonNullable<csstype.Property.MsScrollSnapType | undefined>[] | readonly csstype.Property.MsScrollSnapType[] | undefined;
        msScrollTranslation?: csstype.Property.MsScrollTranslation | readonly NonNullable<csstype.Property.MsScrollTranslation | undefined>[] | readonly csstype.Property.MsScrollTranslation[] | undefined;
        msScrollbar3dlightColor?: readonly string[] | csstype.Property.MsScrollbar3dlightColor | readonly csstype.Property.MsScrollbar3dlightColor[] | undefined;
        msScrollbarArrowColor?: readonly string[] | csstype.Property.MsScrollbarArrowColor | readonly csstype.Property.MsScrollbarArrowColor[] | undefined;
        msScrollbarBaseColor?: readonly string[] | csstype.Property.MsScrollbarBaseColor | readonly csstype.Property.MsScrollbarBaseColor[] | undefined;
        msScrollbarDarkshadowColor?: readonly string[] | csstype.Property.MsScrollbarDarkshadowColor | readonly csstype.Property.MsScrollbarDarkshadowColor[] | undefined;
        msScrollbarFaceColor?: readonly string[] | csstype.Property.MsScrollbarFaceColor | readonly csstype.Property.MsScrollbarFaceColor[] | undefined;
        msScrollbarHighlightColor?: readonly string[] | csstype.Property.MsScrollbarHighlightColor | readonly csstype.Property.MsScrollbarHighlightColor[] | undefined;
        msScrollbarShadowColor?: readonly string[] | csstype.Property.MsScrollbarShadowColor | readonly csstype.Property.MsScrollbarShadowColor[] | undefined;
        msScrollbarTrackColor?: readonly string[] | csstype.Property.MsScrollbarTrackColor | readonly csstype.Property.MsScrollbarTrackColor[] | undefined;
        msTextAutospace?: csstype.Property.MsTextAutospace | readonly NonNullable<csstype.Property.MsTextAutospace | undefined>[] | readonly csstype.Property.MsTextAutospace[] | undefined;
        msTextCombineHorizontal?: readonly string[] | csstype.Property.TextCombineUpright | readonly csstype.Property.TextCombineUpright[] | undefined;
        msTextOverflow?: readonly string[] | csstype.Property.TextOverflow | readonly csstype.Property.TextOverflow[] | undefined;
        msTouchAction?: readonly string[] | csstype.Property.TouchAction | readonly csstype.Property.TouchAction[] | undefined;
        msTouchSelect?: csstype.Property.MsTouchSelect | readonly NonNullable<csstype.Property.MsTouchSelect | undefined>[] | readonly csstype.Property.MsTouchSelect[] | undefined;
        msTransform?: readonly string[] | csstype.Property.Transform | readonly csstype.Property.Transform[] | undefined;
        msTransformOrigin?: readonly (string | (string & {}))[] | csstype.Property.TransformOrigin<string | number> | readonly NonNullable<csstype.Property.TransformOrigin<string | number> | undefined>[] | undefined;
        msTransitionDelay?: readonly string[] | csstype.Property.TransitionDelay<string & {}> | readonly csstype.Property.TransitionDelay<string & {}>[] | undefined;
        msTransitionDuration?: readonly string[] | csstype.Property.TransitionDuration<string & {}> | readonly csstype.Property.TransitionDuration<string & {}>[] | undefined;
        msTransitionProperty?: readonly string[] | csstype.Property.TransitionProperty | readonly csstype.Property.TransitionProperty[] | undefined;
        msTransitionTimingFunction?: readonly string[] | csstype.Property.TransitionTimingFunction | readonly csstype.Property.TransitionTimingFunction[] | undefined;
        msUserSelect?: csstype.Property.MsUserSelect | readonly NonNullable<csstype.Property.MsUserSelect | undefined>[] | readonly csstype.Property.MsUserSelect[] | undefined;
        msWordBreak?: csstype.Property.WordBreak | readonly NonNullable<csstype.Property.WordBreak | undefined>[] | readonly csstype.Property.WordBreak[] | undefined;
        msWrapFlow?: csstype.Property.MsWrapFlow | readonly NonNullable<csstype.Property.MsWrapFlow | undefined>[] | readonly csstype.Property.MsWrapFlow[] | undefined;
        msWrapMargin?: readonly string[] | csstype.Property.MsWrapMargin<string | number> | readonly NonNullable<csstype.Property.MsWrapMargin<string | number> | undefined>[] | undefined;
        msWrapThrough?: csstype.Property.MsWrapThrough | readonly NonNullable<csstype.Property.MsWrapThrough | undefined>[] | readonly csstype.Property.MsWrapThrough[] | undefined;
        msWritingMode?: csstype.Property.WritingMode | readonly NonNullable<csstype.Property.WritingMode | undefined>[] | readonly csstype.Property.WritingMode[] | undefined;
        WebkitAlignContent?: readonly string[] | csstype.Property.AlignContent | readonly csstype.Property.AlignContent[] | undefined;
        WebkitAlignItems?: readonly string[] | csstype.Property.AlignItems | readonly csstype.Property.AlignItems[] | undefined;
        WebkitAlignSelf?: readonly string[] | csstype.Property.AlignSelf | readonly csstype.Property.AlignSelf[] | undefined;
        WebkitAnimationDelay?: readonly string[] | csstype.Property.AnimationDelay<string & {}> | readonly csstype.Property.AnimationDelay<string & {}>[] | undefined;
        WebkitAnimationDirection?: readonly string[] | csstype.Property.AnimationDirection | readonly csstype.Property.AnimationDirection[] | undefined;
        WebkitAnimationDuration?: readonly string[] | csstype.Property.AnimationDuration<string & {}> | readonly csstype.Property.AnimationDuration<string & {}>[] | undefined;
        WebkitAnimationFillMode?: readonly string[] | csstype.Property.AnimationFillMode | readonly csstype.Property.AnimationFillMode[] | undefined;
        WebkitAnimationIterationCount?: csstype.Property.AnimationIterationCount | readonly NonNullable<csstype.Property.AnimationIterationCount | undefined>[] | readonly ((string & {}) | csstype.Globals | "infinite")[] | undefined;
        WebkitAnimationName?: readonly string[] | csstype.Property.AnimationName | readonly csstype.Property.AnimationName[] | undefined;
        WebkitAnimationPlayState?: readonly string[] | csstype.Property.AnimationPlayState | readonly csstype.Property.AnimationPlayState[] | undefined;
        WebkitAnimationTimingFunction?: readonly string[] | csstype.Property.AnimationTimingFunction | readonly csstype.Property.AnimationTimingFunction[] | undefined;
        WebkitAppearance?: csstype.Property.WebkitAppearance | readonly NonNullable<csstype.Property.WebkitAppearance | undefined>[] | readonly csstype.Property.WebkitAppearance[] | undefined;
        WebkitBackdropFilter?: readonly string[] | csstype.Property.BackdropFilter | readonly csstype.Property.BackdropFilter[] | undefined;
        WebkitBackfaceVisibility?: csstype.Property.BackfaceVisibility | readonly NonNullable<csstype.Property.BackfaceVisibility | undefined>[] | readonly csstype.Property.BackfaceVisibility[] | undefined;
        WebkitBackgroundClip?: readonly string[] | csstype.Property.BackgroundClip | readonly csstype.Property.BackgroundClip[] | undefined;
        WebkitBackgroundOrigin?: readonly string[] | csstype.Property.BackgroundOrigin | readonly csstype.Property.BackgroundOrigin[] | undefined;
        WebkitBackgroundSize?: readonly (string | (string & {}))[] | csstype.Property.BackgroundSize<string | number> | readonly NonNullable<csstype.Property.BackgroundSize<string | number> | undefined>[] | undefined;
        WebkitBorderBeforeColor?: readonly string[] | csstype.Property.WebkitBorderBeforeColor | readonly csstype.Property.WebkitBorderBeforeColor[] | undefined;
        WebkitBorderBeforeStyle?: readonly string[] | csstype.Property.WebkitBorderBeforeStyle | readonly csstype.Property.WebkitBorderBeforeStyle[] | undefined;
        WebkitBorderBeforeWidth?: readonly (string | (string & {}))[] | csstype.Property.WebkitBorderBeforeWidth<string | number> | readonly NonNullable<csstype.Property.WebkitBorderBeforeWidth<string | number> | undefined>[] | undefined;
        WebkitBorderBottomLeftRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderBottomLeftRadius<string | number> | readonly NonNullable<csstype.Property.BorderBottomLeftRadius<string | number> | undefined>[] | undefined;
        WebkitBorderBottomRightRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderBottomRightRadius<string | number> | readonly NonNullable<csstype.Property.BorderBottomRightRadius<string | number> | undefined>[] | undefined;
        WebkitBorderImageSlice?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BorderImageSlice | readonly NonNullable<csstype.Property.BorderImageSlice | undefined>[] | undefined;
        WebkitBorderTopLeftRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderTopLeftRadius<string | number> | readonly NonNullable<csstype.Property.BorderTopLeftRadius<string | number> | undefined>[] | undefined;
        WebkitBorderTopRightRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderTopRightRadius<string | number> | readonly NonNullable<csstype.Property.BorderTopRightRadius<string | number> | undefined>[] | undefined;
        WebkitBoxDecorationBreak?: csstype.Property.BoxDecorationBreak | readonly NonNullable<csstype.Property.BoxDecorationBreak | undefined>[] | readonly csstype.Property.BoxDecorationBreak[] | undefined;
        WebkitBoxReflect?: readonly (string | (string & {}))[] | csstype.Property.WebkitBoxReflect<string | number> | readonly NonNullable<csstype.Property.WebkitBoxReflect<string | number> | undefined>[] | undefined;
        WebkitBoxShadow?: readonly string[] | csstype.Property.BoxShadow | readonly csstype.Property.BoxShadow[] | undefined;
        WebkitBoxSizing?: csstype.Property.BoxSizing | readonly NonNullable<csstype.Property.BoxSizing | undefined>[] | readonly csstype.Property.BoxSizing[] | undefined;
        WebkitClipPath?: readonly string[] | csstype.Property.ClipPath | readonly csstype.Property.ClipPath[] | undefined;
        WebkitColumnCount?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.ColumnCount | readonly NonNullable<csstype.Property.ColumnCount | undefined>[] | undefined;
        WebkitColumnFill?: csstype.Property.ColumnFill | readonly NonNullable<csstype.Property.ColumnFill | undefined>[] | readonly csstype.Property.ColumnFill[] | undefined;
        WebkitColumnRuleColor?: readonly string[] | csstype.Property.ColumnRuleColor | readonly csstype.Property.ColumnRuleColor[] | undefined;
        WebkitColumnRuleStyle?: readonly string[] | csstype.Property.ColumnRuleStyle | readonly csstype.Property.ColumnRuleStyle[] | undefined;
        WebkitColumnRuleWidth?: readonly (string | (string & {}))[] | csstype.Property.ColumnRuleWidth<string | number> | readonly NonNullable<csstype.Property.ColumnRuleWidth<string | number> | undefined>[] | undefined;
        WebkitColumnSpan?: csstype.Property.ColumnSpan | readonly NonNullable<csstype.Property.ColumnSpan | undefined>[] | readonly csstype.Property.ColumnSpan[] | undefined;
        WebkitColumnWidth?: readonly string[] | csstype.Property.ColumnWidth<string | number> | readonly NonNullable<csstype.Property.ColumnWidth<string | number> | undefined>[] | undefined;
        WebkitFilter?: readonly string[] | csstype.Property.Filter | readonly csstype.Property.Filter[] | undefined;
        WebkitFlexBasis?: readonly (string | (string & {}))[] | csstype.Property.FlexBasis<string | number> | readonly NonNullable<csstype.Property.FlexBasis<string | number> | undefined>[] | undefined;
        WebkitFlexDirection?: csstype.Property.FlexDirection | readonly NonNullable<csstype.Property.FlexDirection | undefined>[] | readonly csstype.Property.FlexDirection[] | undefined;
        WebkitFlexGrow?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.FlexGrow | readonly NonNullable<csstype.Property.FlexGrow | undefined>[] | undefined;
        WebkitFlexShrink?: csstype.Property.FlexShrink | readonly NonNullable<csstype.Property.FlexShrink | undefined>[] | readonly ((string & {}) | csstype.Globals)[] | undefined;
        WebkitFlexWrap?: csstype.Property.FlexWrap | readonly NonNullable<csstype.Property.FlexWrap | undefined>[] | readonly csstype.Property.FlexWrap[] | undefined;
        WebkitFontFeatureSettings?: readonly string[] | csstype.Property.FontFeatureSettings | readonly csstype.Property.FontFeatureSettings[] | undefined;
        WebkitFontKerning?: csstype.Property.FontKerning | readonly NonNullable<csstype.Property.FontKerning | undefined>[] | readonly csstype.Property.FontKerning[] | undefined;
        WebkitFontSmoothing?: readonly string[] | csstype.Property.FontSmooth<string | number> | readonly NonNullable<csstype.Property.FontSmooth<string | number> | undefined>[] | undefined;
        WebkitFontVariantLigatures?: readonly string[] | csstype.Property.FontVariantLigatures | readonly csstype.Property.FontVariantLigatures[] | undefined;
        WebkitHyphenateCharacter?: readonly string[] | csstype.Property.HyphenateCharacter | readonly csstype.Property.HyphenateCharacter[] | undefined;
        WebkitHyphens?: csstype.Property.Hyphens | readonly NonNullable<csstype.Property.Hyphens | undefined>[] | readonly csstype.Property.Hyphens[] | undefined;
        WebkitInitialLetter?: csstype.Property.InitialLetter | readonly NonNullable<csstype.Property.InitialLetter | undefined>[] | readonly ("normal" | (string & {}) | csstype.Globals)[] | undefined;
        WebkitJustifyContent?: readonly string[] | csstype.Property.JustifyContent | readonly csstype.Property.JustifyContent[] | undefined;
        WebkitLineBreak?: csstype.Property.LineBreak | readonly NonNullable<csstype.Property.LineBreak | undefined>[] | readonly csstype.Property.LineBreak[] | undefined;
        WebkitLineClamp?: readonly ("none" | (string & {}) | csstype.Globals)[] | csstype.Property.WebkitLineClamp | readonly NonNullable<csstype.Property.WebkitLineClamp | undefined>[] | undefined;
        WebkitMarginEnd?: readonly (string | (string & {}))[] | csstype.Property.MarginInlineEnd<string | number> | readonly NonNullable<csstype.Property.MarginInlineEnd<string | number> | undefined>[] | undefined;
        WebkitMarginStart?: readonly (string | (string & {}))[] | csstype.Property.MarginInlineStart<string | number> | readonly NonNullable<csstype.Property.MarginInlineStart<string | number> | undefined>[] | undefined;
        WebkitMaskAttachment?: readonly string[] | csstype.Property.WebkitMaskAttachment | readonly csstype.Property.WebkitMaskAttachment[] | undefined;
        WebkitMaskBoxImageOutset?: readonly (string | (string & {}))[] | csstype.Property.MaskBorderOutset<string | number> | readonly NonNullable<csstype.Property.MaskBorderOutset<string | number> | undefined>[] | undefined;
        WebkitMaskBoxImageRepeat?: readonly string[] | csstype.Property.MaskBorderRepeat | readonly csstype.Property.MaskBorderRepeat[] | undefined;
        WebkitMaskBoxImageSlice?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.MaskBorderSlice | readonly NonNullable<csstype.Property.MaskBorderSlice | undefined>[] | undefined;
        WebkitMaskBoxImageSource?: readonly string[] | csstype.Property.MaskBorderSource | readonly csstype.Property.MaskBorderSource[] | undefined;
        WebkitMaskBoxImageWidth?: readonly (string | (string & {}))[] | csstype.Property.MaskBorderWidth<string | number> | readonly NonNullable<csstype.Property.MaskBorderWidth<string | number> | undefined>[] | undefined;
        WebkitMaskClip?: readonly string[] | csstype.Property.WebkitMaskClip | readonly csstype.Property.WebkitMaskClip[] | undefined;
        WebkitMaskComposite?: readonly string[] | csstype.Property.WebkitMaskComposite | readonly csstype.Property.WebkitMaskComposite[] | undefined;
        WebkitMaskImage?: readonly string[] | csstype.Property.WebkitMaskImage | readonly csstype.Property.WebkitMaskImage[] | undefined;
        WebkitMaskOrigin?: readonly string[] | csstype.Property.WebkitMaskOrigin | readonly csstype.Property.WebkitMaskOrigin[] | undefined;
        WebkitMaskPosition?: readonly (string | (string & {}))[] | csstype.Property.WebkitMaskPosition<string | number> | readonly NonNullable<csstype.Property.WebkitMaskPosition<string | number> | undefined>[] | undefined;
        WebkitMaskPositionX?: readonly (string | (string & {}))[] | csstype.Property.WebkitMaskPositionX<string | number> | readonly NonNullable<csstype.Property.WebkitMaskPositionX<string | number> | undefined>[] | undefined;
        WebkitMaskPositionY?: readonly (string | (string & {}))[] | csstype.Property.WebkitMaskPositionY<string | number> | readonly NonNullable<csstype.Property.WebkitMaskPositionY<string | number> | undefined>[] | undefined;
        WebkitMaskRepeat?: readonly string[] | csstype.Property.WebkitMaskRepeat | readonly csstype.Property.WebkitMaskRepeat[] | undefined;
        WebkitMaskRepeatX?: csstype.Property.WebkitMaskRepeatX | readonly NonNullable<csstype.Property.WebkitMaskRepeatX | undefined>[] | readonly csstype.Property.WebkitMaskRepeatX[] | undefined;
        WebkitMaskRepeatY?: csstype.Property.WebkitMaskRepeatY | readonly NonNullable<csstype.Property.WebkitMaskRepeatY | undefined>[] | readonly csstype.Property.WebkitMaskRepeatY[] | undefined;
        WebkitMaskSize?: readonly (string | (string & {}))[] | csstype.Property.WebkitMaskSize<string | number> | readonly NonNullable<csstype.Property.WebkitMaskSize<string | number> | undefined>[] | undefined;
        WebkitMaxInlineSize?: readonly (string | (string & {}))[] | csstype.Property.MaxInlineSize<string | number> | readonly NonNullable<csstype.Property.MaxInlineSize<string | number> | undefined>[] | undefined;
        WebkitOrder?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Order | readonly NonNullable<csstype.Property.Order | undefined>[] | undefined;
        WebkitOverflowScrolling?: csstype.Property.WebkitOverflowScrolling | readonly NonNullable<csstype.Property.WebkitOverflowScrolling | undefined>[] | readonly csstype.Property.WebkitOverflowScrolling[] | undefined;
        WebkitPaddingEnd?: readonly (string | (string & {}))[] | csstype.Property.PaddingInlineEnd<string | number> | readonly NonNullable<csstype.Property.PaddingInlineEnd<string | number> | undefined>[] | undefined;
        WebkitPaddingStart?: readonly (string | (string & {}))[] | csstype.Property.PaddingInlineStart<string | number> | readonly NonNullable<csstype.Property.PaddingInlineStart<string | number> | undefined>[] | undefined;
        WebkitPerspective?: readonly string[] | csstype.Property.Perspective<string | number> | readonly NonNullable<csstype.Property.Perspective<string | number> | undefined>[] | undefined;
        WebkitPerspectiveOrigin?: readonly (string | (string & {}))[] | csstype.Property.PerspectiveOrigin<string | number> | readonly NonNullable<csstype.Property.PerspectiveOrigin<string | number> | undefined>[] | undefined;
        WebkitPrintColorAdjust?: csstype.Property.PrintColorAdjust | readonly NonNullable<csstype.Property.PrintColorAdjust | undefined>[] | readonly csstype.Property.PrintColorAdjust[] | undefined;
        WebkitRubyPosition?: readonly string[] | csstype.Property.RubyPosition | readonly csstype.Property.RubyPosition[] | undefined;
        WebkitScrollSnapType?: readonly string[] | csstype.Property.ScrollSnapType | readonly csstype.Property.ScrollSnapType[] | undefined;
        WebkitShapeMargin?: readonly (string | (string & {}))[] | csstype.Property.ShapeMargin<string | number> | readonly NonNullable<csstype.Property.ShapeMargin<string | number> | undefined>[] | undefined;
        WebkitTapHighlightColor?: readonly string[] | csstype.Property.WebkitTapHighlightColor | readonly csstype.Property.WebkitTapHighlightColor[] | undefined;
        WebkitTextCombine?: readonly string[] | csstype.Property.TextCombineUpright | readonly csstype.Property.TextCombineUpright[] | undefined;
        WebkitTextDecorationColor?: readonly string[] | csstype.Property.TextDecorationColor | readonly csstype.Property.TextDecorationColor[] | undefined;
        WebkitTextDecorationLine?: readonly string[] | csstype.Property.TextDecorationLine | readonly csstype.Property.TextDecorationLine[] | undefined;
        WebkitTextDecorationSkip?: readonly string[] | csstype.Property.TextDecorationSkip | readonly csstype.Property.TextDecorationSkip[] | undefined;
        WebkitTextDecorationStyle?: csstype.Property.TextDecorationStyle | readonly NonNullable<csstype.Property.TextDecorationStyle | undefined>[] | readonly csstype.Property.TextDecorationStyle[] | undefined;
        WebkitTextEmphasisColor?: readonly string[] | csstype.Property.TextEmphasisColor | readonly csstype.Property.TextEmphasisColor[] | undefined;
        WebkitTextEmphasisPosition?: readonly string[] | csstype.Property.TextEmphasisPosition | readonly csstype.Property.TextEmphasisPosition[] | undefined;
        WebkitTextEmphasisStyle?: readonly string[] | csstype.Property.TextEmphasisStyle | readonly csstype.Property.TextEmphasisStyle[] | undefined;
        WebkitTextFillColor?: readonly string[] | csstype.Property.WebkitTextFillColor | readonly csstype.Property.WebkitTextFillColor[] | undefined;
        WebkitTextOrientation?: csstype.Property.TextOrientation | readonly NonNullable<csstype.Property.TextOrientation | undefined>[] | readonly csstype.Property.TextOrientation[] | undefined;
        WebkitTextSizeAdjust?: readonly string[] | csstype.Property.TextSizeAdjust | readonly csstype.Property.TextSizeAdjust[] | undefined;
        WebkitTextStrokeColor?: readonly string[] | csstype.Property.WebkitTextStrokeColor | readonly csstype.Property.WebkitTextStrokeColor[] | undefined;
        WebkitTextStrokeWidth?: readonly string[] | csstype.Property.WebkitTextStrokeWidth<string | number> | readonly NonNullable<csstype.Property.WebkitTextStrokeWidth<string | number> | undefined>[] | undefined;
        WebkitTextUnderlinePosition?: readonly string[] | csstype.Property.TextUnderlinePosition | readonly csstype.Property.TextUnderlinePosition[] | undefined;
        WebkitTouchCallout?: csstype.Property.WebkitTouchCallout | readonly NonNullable<csstype.Property.WebkitTouchCallout | undefined>[] | readonly csstype.Property.WebkitTouchCallout[] | undefined;
        WebkitTransform?: readonly string[] | csstype.Property.Transform | readonly csstype.Property.Transform[] | undefined;
        WebkitTransformOrigin?: readonly (string | (string & {}))[] | csstype.Property.TransformOrigin<string | number> | readonly NonNullable<csstype.Property.TransformOrigin<string | number> | undefined>[] | undefined;
        WebkitTransformStyle?: csstype.Property.TransformStyle | readonly NonNullable<csstype.Property.TransformStyle | undefined>[] | readonly csstype.Property.TransformStyle[] | undefined;
        WebkitTransitionDelay?: readonly string[] | csstype.Property.TransitionDelay<string & {}> | readonly csstype.Property.TransitionDelay<string & {}>[] | undefined;
        WebkitTransitionDuration?: readonly string[] | csstype.Property.TransitionDuration<string & {}> | readonly csstype.Property.TransitionDuration<string & {}>[] | undefined;
        WebkitTransitionProperty?: readonly string[] | csstype.Property.TransitionProperty | readonly csstype.Property.TransitionProperty[] | undefined;
        WebkitTransitionTimingFunction?: readonly string[] | csstype.Property.TransitionTimingFunction | readonly csstype.Property.TransitionTimingFunction[] | undefined;
        WebkitUserModify?: csstype.Property.WebkitUserModify | readonly NonNullable<csstype.Property.WebkitUserModify | undefined>[] | readonly csstype.Property.WebkitUserModify[] | undefined;
        WebkitUserSelect?: csstype.Property.UserSelect | readonly NonNullable<csstype.Property.UserSelect | undefined>[] | readonly csstype.Property.UserSelect[] | undefined;
        WebkitWritingMode?: csstype.Property.WritingMode | readonly NonNullable<csstype.Property.WritingMode | undefined>[] | readonly csstype.Property.WritingMode[] | undefined;
        MozAnimation?: csstype.Property.Animation<string & {}> | readonly NonNullable<csstype.Property.Animation<string & {}> | undefined>[] | readonly ("linear" | "auto" | "none" | "normal" | "reverse" | "paused" | (string & {}) | csstype.Globals | "both" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-end" | "step-start" | "backwards" | "forwards" | "alternate" | "alternate-reverse" | "infinite" | "running")[] | undefined;
        MozBorderImage?: csstype.Property.BorderImage | readonly NonNullable<csstype.Property.BorderImage | undefined>[] | readonly ("none" | "repeat" | (string & {}) | csstype.Globals | "round" | "space" | "stretch")[] | undefined;
        MozColumnRule?: readonly (string | (string & {}))[] | csstype.Property.ColumnRule<string | number> | readonly NonNullable<csstype.Property.ColumnRule<string | number> | undefined>[] | undefined;
        MozColumns?: readonly (string | (string & {}))[] | csstype.Property.Columns<string | number> | readonly NonNullable<csstype.Property.Columns<string | number> | undefined>[] | undefined;
        MozOutlineRadius?: readonly (string | (string & {}))[] | csstype.Property.MozOutlineRadius<string | number> | readonly NonNullable<csstype.Property.MozOutlineRadius<string | number> | undefined>[] | undefined;
        msContentZoomLimit?: readonly string[] | csstype.Property.MsContentZoomLimit | readonly csstype.Property.MsContentZoomLimit[] | undefined;
        msContentZoomSnap?: readonly string[] | csstype.Property.MsContentZoomSnap | readonly csstype.Property.MsContentZoomSnap[] | undefined;
        msFlex?: readonly (string | (string & {}))[] | csstype.Property.Flex<string | number> | readonly NonNullable<csstype.Property.Flex<string | number> | undefined>[] | undefined;
        msScrollLimit?: readonly string[] | csstype.Property.MsScrollLimit | readonly csstype.Property.MsScrollLimit[] | undefined;
        msScrollSnapX?: readonly string[] | csstype.Property.MsScrollSnapX | readonly csstype.Property.MsScrollSnapX[] | undefined;
        msScrollSnapY?: readonly string[] | csstype.Property.MsScrollSnapY | readonly csstype.Property.MsScrollSnapY[] | undefined;
        msTransition?: readonly string[] | csstype.Property.Transition<string & {}> | readonly csstype.Property.Transition<string & {}>[] | undefined;
        WebkitAnimation?: csstype.Property.Animation<string & {}> | readonly NonNullable<csstype.Property.Animation<string & {}> | undefined>[] | readonly ("linear" | "auto" | "none" | "normal" | "reverse" | "paused" | (string & {}) | csstype.Globals | "both" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-end" | "step-start" | "backwards" | "forwards" | "alternate" | "alternate-reverse" | "infinite" | "running")[] | undefined;
        WebkitBorderBefore?: readonly (string | (string & {}))[] | csstype.Property.WebkitBorderBefore<string | number> | readonly NonNullable<csstype.Property.WebkitBorderBefore<string | number> | undefined>[] | undefined;
        WebkitBorderImage?: csstype.Property.BorderImage | readonly NonNullable<csstype.Property.BorderImage | undefined>[] | readonly ("none" | "repeat" | (string & {}) | csstype.Globals | "round" | "space" | "stretch")[] | undefined;
        WebkitBorderRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderRadius<string | number> | readonly NonNullable<csstype.Property.BorderRadius<string | number> | undefined>[] | undefined;
        WebkitColumnRule?: readonly (string | (string & {}))[] | csstype.Property.ColumnRule<string | number> | readonly NonNullable<csstype.Property.ColumnRule<string | number> | undefined>[] | undefined;
        WebkitColumns?: readonly (string | (string & {}))[] | csstype.Property.Columns<string | number> | readonly NonNullable<csstype.Property.Columns<string | number> | undefined>[] | undefined;
        WebkitFlex?: readonly (string | (string & {}))[] | csstype.Property.Flex<string | number> | readonly NonNullable<csstype.Property.Flex<string | number> | undefined>[] | undefined;
        WebkitFlexFlow?: readonly string[] | csstype.Property.FlexFlow | readonly csstype.Property.FlexFlow[] | undefined;
        WebkitMask?: readonly (string | (string & {}))[] | csstype.Property.WebkitMask<string | number> | readonly NonNullable<csstype.Property.WebkitMask<string | number> | undefined>[] | undefined;
        WebkitMaskBoxImage?: csstype.Property.MaskBorder | readonly NonNullable<csstype.Property.MaskBorder | undefined>[] | readonly ("none" | "repeat" | "alpha" | (string & {}) | csstype.Globals | "round" | "space" | "stretch" | "luminance")[] | undefined;
        WebkitTextEmphasis?: readonly string[] | csstype.Property.TextEmphasis | readonly csstype.Property.TextEmphasis[] | undefined;
        WebkitTextStroke?: readonly (string | (string & {}))[] | csstype.Property.WebkitTextStroke<string | number> | readonly NonNullable<csstype.Property.WebkitTextStroke<string | number> | undefined>[] | undefined;
        WebkitTransition?: readonly string[] | csstype.Property.Transition<string & {}> | readonly csstype.Property.Transition<string & {}>[] | undefined;
        azimuth?: readonly string[] | csstype.Property.Azimuth | readonly csstype.Property.Azimuth[] | undefined;
        boxAlign?: csstype.Property.BoxAlign | readonly NonNullable<csstype.Property.BoxAlign | undefined>[] | readonly csstype.Property.BoxAlign[] | undefined;
        boxDirection?: csstype.Property.BoxDirection | readonly NonNullable<csstype.Property.BoxDirection | undefined>[] | readonly csstype.Property.BoxDirection[] | undefined;
        boxFlex?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxFlex | readonly NonNullable<csstype.Property.BoxFlex | undefined>[] | undefined;
        boxFlexGroup?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxFlexGroup | readonly NonNullable<csstype.Property.BoxFlexGroup | undefined>[] | undefined;
        boxLines?: csstype.Property.BoxLines | readonly NonNullable<csstype.Property.BoxLines | undefined>[] | readonly csstype.Property.BoxLines[] | undefined;
        boxOrdinalGroup?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxOrdinalGroup | readonly NonNullable<csstype.Property.BoxOrdinalGroup | undefined>[] | undefined;
        boxOrient?: csstype.Property.BoxOrient | readonly NonNullable<csstype.Property.BoxOrient | undefined>[] | readonly csstype.Property.BoxOrient[] | undefined;
        boxPack?: csstype.Property.BoxPack | readonly NonNullable<csstype.Property.BoxPack | undefined>[] | readonly csstype.Property.BoxPack[] | undefined;
        clip?: readonly string[] | csstype.Property.Clip | readonly csstype.Property.Clip[] | undefined;
        gridColumnGap?: readonly (string | (string & {}))[] | csstype.Property.GridColumnGap<string | number> | readonly NonNullable<csstype.Property.GridColumnGap<string | number> | undefined>[] | undefined;
        gridGap?: readonly (string | (string & {}))[] | csstype.Property.GridGap<string | number> | readonly NonNullable<csstype.Property.GridGap<string | number> | undefined>[] | undefined;
        gridRowGap?: readonly (string | (string & {}))[] | csstype.Property.GridRowGap<string | number> | readonly NonNullable<csstype.Property.GridRowGap<string | number> | undefined>[] | undefined;
        imeMode?: csstype.Property.ImeMode | readonly NonNullable<csstype.Property.ImeMode | undefined>[] | readonly csstype.Property.ImeMode[] | undefined;
        offsetBlock?: readonly (string | (string & {}))[] | csstype.Property.InsetBlock<string | number> | readonly NonNullable<csstype.Property.InsetBlock<string | number> | undefined>[] | undefined;
        offsetBlockEnd?: readonly (string | (string & {}))[] | csstype.Property.InsetBlockEnd<string | number> | readonly NonNullable<csstype.Property.InsetBlockEnd<string | number> | undefined>[] | undefined;
        offsetBlockStart?: readonly (string | (string & {}))[] | csstype.Property.InsetBlockStart<string | number> | readonly NonNullable<csstype.Property.InsetBlockStart<string | number> | undefined>[] | undefined;
        offsetInline?: readonly (string | (string & {}))[] | csstype.Property.InsetInline<string | number> | readonly NonNullable<csstype.Property.InsetInline<string | number> | undefined>[] | undefined;
        offsetInlineEnd?: readonly (string | (string & {}))[] | csstype.Property.InsetInlineEnd<string | number> | readonly NonNullable<csstype.Property.InsetInlineEnd<string | number> | undefined>[] | undefined;
        offsetInlineStart?: readonly (string | (string & {}))[] | csstype.Property.InsetInlineStart<string | number> | readonly NonNullable<csstype.Property.InsetInlineStart<string | number> | undefined>[] | undefined;
        scrollSnapCoordinate?: readonly (string | (string & {}))[] | csstype.Property.ScrollSnapCoordinate<string | number> | readonly NonNullable<csstype.Property.ScrollSnapCoordinate<string | number> | undefined>[] | undefined;
        scrollSnapDestination?: readonly (string | (string & {}))[] | csstype.Property.ScrollSnapDestination<string | number> | readonly NonNullable<csstype.Property.ScrollSnapDestination<string | number> | undefined>[] | undefined;
        scrollSnapPointsX?: readonly string[] | csstype.Property.ScrollSnapPointsX | readonly csstype.Property.ScrollSnapPointsX[] | undefined;
        scrollSnapPointsY?: readonly string[] | csstype.Property.ScrollSnapPointsY | readonly csstype.Property.ScrollSnapPointsY[] | undefined;
        scrollSnapTypeX?: csstype.Property.ScrollSnapTypeX | readonly NonNullable<csstype.Property.ScrollSnapTypeX | undefined>[] | readonly csstype.Property.ScrollSnapTypeX[] | undefined;
        scrollSnapTypeY?: csstype.Property.ScrollSnapTypeY | readonly NonNullable<csstype.Property.ScrollSnapTypeY | undefined>[] | readonly csstype.Property.ScrollSnapTypeY[] | undefined;
        KhtmlBoxAlign?: csstype.Property.BoxAlign | readonly NonNullable<csstype.Property.BoxAlign | undefined>[] | readonly csstype.Property.BoxAlign[] | undefined;
        KhtmlBoxDirection?: csstype.Property.BoxDirection | readonly NonNullable<csstype.Property.BoxDirection | undefined>[] | readonly csstype.Property.BoxDirection[] | undefined;
        KhtmlBoxFlex?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxFlex | readonly NonNullable<csstype.Property.BoxFlex | undefined>[] | undefined;
        KhtmlBoxFlexGroup?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxFlexGroup | readonly NonNullable<csstype.Property.BoxFlexGroup | undefined>[] | undefined;
        KhtmlBoxLines?: csstype.Property.BoxLines | readonly NonNullable<csstype.Property.BoxLines | undefined>[] | readonly csstype.Property.BoxLines[] | undefined;
        KhtmlBoxOrdinalGroup?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxOrdinalGroup | readonly NonNullable<csstype.Property.BoxOrdinalGroup | undefined>[] | undefined;
        KhtmlBoxOrient?: csstype.Property.BoxOrient | readonly NonNullable<csstype.Property.BoxOrient | undefined>[] | readonly csstype.Property.BoxOrient[] | undefined;
        KhtmlBoxPack?: csstype.Property.BoxPack | readonly NonNullable<csstype.Property.BoxPack | undefined>[] | readonly csstype.Property.BoxPack[] | undefined;
        KhtmlLineBreak?: csstype.Property.LineBreak | readonly NonNullable<csstype.Property.LineBreak | undefined>[] | readonly csstype.Property.LineBreak[] | undefined;
        KhtmlOpacity?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Opacity | readonly NonNullable<csstype.Property.Opacity | undefined>[] | undefined;
        KhtmlUserSelect?: csstype.Property.UserSelect | readonly NonNullable<csstype.Property.UserSelect | undefined>[] | readonly csstype.Property.UserSelect[] | undefined;
        MozBackfaceVisibility?: csstype.Property.BackfaceVisibility | readonly NonNullable<csstype.Property.BackfaceVisibility | undefined>[] | readonly csstype.Property.BackfaceVisibility[] | undefined;
        MozBackgroundClip?: readonly string[] | csstype.Property.BackgroundClip | readonly csstype.Property.BackgroundClip[] | undefined;
        MozBackgroundInlinePolicy?: csstype.Property.BoxDecorationBreak | readonly NonNullable<csstype.Property.BoxDecorationBreak | undefined>[] | readonly csstype.Property.BoxDecorationBreak[] | undefined;
        MozBackgroundOrigin?: readonly string[] | csstype.Property.BackgroundOrigin | readonly csstype.Property.BackgroundOrigin[] | undefined;
        MozBackgroundSize?: readonly (string | (string & {}))[] | csstype.Property.BackgroundSize<string | number> | readonly NonNullable<csstype.Property.BackgroundSize<string | number> | undefined>[] | undefined;
        MozBorderRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderRadius<string | number> | readonly NonNullable<csstype.Property.BorderRadius<string | number> | undefined>[] | undefined;
        MozBorderRadiusBottomleft?: readonly (string | (string & {}))[] | csstype.Property.BorderBottomLeftRadius<string | number> | readonly NonNullable<csstype.Property.BorderBottomLeftRadius<string | number> | undefined>[] | undefined;
        MozBorderRadiusBottomright?: readonly (string | (string & {}))[] | csstype.Property.BorderBottomRightRadius<string | number> | readonly NonNullable<csstype.Property.BorderBottomRightRadius<string | number> | undefined>[] | undefined;
        MozBorderRadiusTopleft?: readonly (string | (string & {}))[] | csstype.Property.BorderTopLeftRadius<string | number> | readonly NonNullable<csstype.Property.BorderTopLeftRadius<string | number> | undefined>[] | undefined;
        MozBorderRadiusTopright?: readonly (string | (string & {}))[] | csstype.Property.BorderTopRightRadius<string | number> | readonly NonNullable<csstype.Property.BorderTopRightRadius<string | number> | undefined>[] | undefined;
        MozBoxAlign?: csstype.Property.BoxAlign | readonly NonNullable<csstype.Property.BoxAlign | undefined>[] | readonly csstype.Property.BoxAlign[] | undefined;
        MozBoxDirection?: csstype.Property.BoxDirection | readonly NonNullable<csstype.Property.BoxDirection | undefined>[] | readonly csstype.Property.BoxDirection[] | undefined;
        MozBoxFlex?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxFlex | readonly NonNullable<csstype.Property.BoxFlex | undefined>[] | undefined;
        MozBoxOrdinalGroup?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxOrdinalGroup | readonly NonNullable<csstype.Property.BoxOrdinalGroup | undefined>[] | undefined;
        MozBoxOrient?: csstype.Property.BoxOrient | readonly NonNullable<csstype.Property.BoxOrient | undefined>[] | readonly csstype.Property.BoxOrient[] | undefined;
        MozBoxPack?: csstype.Property.BoxPack | readonly NonNullable<csstype.Property.BoxPack | undefined>[] | readonly csstype.Property.BoxPack[] | undefined;
        MozBoxShadow?: readonly string[] | csstype.Property.BoxShadow | readonly csstype.Property.BoxShadow[] | undefined;
        MozFloatEdge?: csstype.Property.MozFloatEdge | readonly NonNullable<csstype.Property.MozFloatEdge | undefined>[] | readonly csstype.Property.MozFloatEdge[] | undefined;
        MozForceBrokenImageIcon?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.MozForceBrokenImageIcon | readonly NonNullable<csstype.Property.MozForceBrokenImageIcon | undefined>[] | undefined;
        MozOpacity?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Opacity | readonly NonNullable<csstype.Property.Opacity | undefined>[] | undefined;
        MozOutline?: readonly (string | (string & {}))[] | csstype.Property.Outline<string | number> | readonly NonNullable<csstype.Property.Outline<string | number> | undefined>[] | undefined;
        MozOutlineColor?: readonly string[] | csstype.Property.OutlineColor | readonly csstype.Property.OutlineColor[] | undefined;
        MozOutlineStyle?: readonly string[] | csstype.Property.OutlineStyle | readonly csstype.Property.OutlineStyle[] | undefined;
        MozOutlineWidth?: readonly string[] | csstype.Property.OutlineWidth<string | number> | readonly NonNullable<csstype.Property.OutlineWidth<string | number> | undefined>[] | undefined;
        MozPerspective?: readonly string[] | csstype.Property.Perspective<string | number> | readonly NonNullable<csstype.Property.Perspective<string | number> | undefined>[] | undefined;
        MozPerspectiveOrigin?: readonly (string | (string & {}))[] | csstype.Property.PerspectiveOrigin<string | number> | readonly NonNullable<csstype.Property.PerspectiveOrigin<string | number> | undefined>[] | undefined;
        MozTextAlignLast?: csstype.Property.TextAlignLast | readonly NonNullable<csstype.Property.TextAlignLast | undefined>[] | readonly csstype.Property.TextAlignLast[] | undefined;
        MozTextDecorationColor?: readonly string[] | csstype.Property.TextDecorationColor | readonly csstype.Property.TextDecorationColor[] | undefined;
        MozTextDecorationLine?: readonly string[] | csstype.Property.TextDecorationLine | readonly csstype.Property.TextDecorationLine[] | undefined;
        MozTextDecorationStyle?: csstype.Property.TextDecorationStyle | readonly NonNullable<csstype.Property.TextDecorationStyle | undefined>[] | readonly csstype.Property.TextDecorationStyle[] | undefined;
        MozTransform?: readonly string[] | csstype.Property.Transform | readonly csstype.Property.Transform[] | undefined;
        MozTransformOrigin?: readonly (string | (string & {}))[] | csstype.Property.TransformOrigin<string | number> | readonly NonNullable<csstype.Property.TransformOrigin<string | number> | undefined>[] | undefined;
        MozTransformStyle?: csstype.Property.TransformStyle | readonly NonNullable<csstype.Property.TransformStyle | undefined>[] | readonly csstype.Property.TransformStyle[] | undefined;
        MozTransition?: readonly string[] | csstype.Property.Transition<string & {}> | readonly csstype.Property.Transition<string & {}>[] | undefined;
        MozTransitionDelay?: readonly string[] | csstype.Property.TransitionDelay<string & {}> | readonly csstype.Property.TransitionDelay<string & {}>[] | undefined;
        MozTransitionDuration?: readonly string[] | csstype.Property.TransitionDuration<string & {}> | readonly csstype.Property.TransitionDuration<string & {}>[] | undefined;
        MozTransitionProperty?: readonly string[] | csstype.Property.TransitionProperty | readonly csstype.Property.TransitionProperty[] | undefined;
        MozTransitionTimingFunction?: readonly string[] | csstype.Property.TransitionTimingFunction | readonly csstype.Property.TransitionTimingFunction[] | undefined;
        MozUserInput?: csstype.Property.MozUserInput | readonly NonNullable<csstype.Property.MozUserInput | undefined>[] | readonly csstype.Property.MozUserInput[] | undefined;
        msImeMode?: csstype.Property.ImeMode | readonly NonNullable<csstype.Property.ImeMode | undefined>[] | readonly csstype.Property.ImeMode[] | undefined;
        OAnimation?: csstype.Property.Animation<string & {}> | readonly NonNullable<csstype.Property.Animation<string & {}> | undefined>[] | readonly ("linear" | "auto" | "none" | "normal" | "reverse" | "paused" | (string & {}) | csstype.Globals | "both" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-end" | "step-start" | "backwards" | "forwards" | "alternate" | "alternate-reverse" | "infinite" | "running")[] | undefined;
        OAnimationDelay?: readonly string[] | csstype.Property.AnimationDelay<string & {}> | readonly csstype.Property.AnimationDelay<string & {}>[] | undefined;
        OAnimationDirection?: readonly string[] | csstype.Property.AnimationDirection | readonly csstype.Property.AnimationDirection[] | undefined;
        OAnimationDuration?: readonly string[] | csstype.Property.AnimationDuration<string & {}> | readonly csstype.Property.AnimationDuration<string & {}>[] | undefined;
        OAnimationFillMode?: readonly string[] | csstype.Property.AnimationFillMode | readonly csstype.Property.AnimationFillMode[] | undefined;
        OAnimationIterationCount?: csstype.Property.AnimationIterationCount | readonly NonNullable<csstype.Property.AnimationIterationCount | undefined>[] | readonly ((string & {}) | csstype.Globals | "infinite")[] | undefined;
        OAnimationName?: readonly string[] | csstype.Property.AnimationName | readonly csstype.Property.AnimationName[] | undefined;
        OAnimationPlayState?: readonly string[] | csstype.Property.AnimationPlayState | readonly csstype.Property.AnimationPlayState[] | undefined;
        OAnimationTimingFunction?: readonly string[] | csstype.Property.AnimationTimingFunction | readonly csstype.Property.AnimationTimingFunction[] | undefined;
        OBackgroundSize?: readonly (string | (string & {}))[] | csstype.Property.BackgroundSize<string | number> | readonly NonNullable<csstype.Property.BackgroundSize<string | number> | undefined>[] | undefined;
        OBorderImage?: csstype.Property.BorderImage | readonly NonNullable<csstype.Property.BorderImage | undefined>[] | readonly ("none" | "repeat" | (string & {}) | csstype.Globals | "round" | "space" | "stretch")[] | undefined;
        OObjectFit?: csstype.Property.ObjectFit | readonly NonNullable<csstype.Property.ObjectFit | undefined>[] | readonly csstype.Property.ObjectFit[] | undefined;
        OObjectPosition?: readonly (string | (string & {}))[] | csstype.Property.ObjectPosition<string | number> | readonly NonNullable<csstype.Property.ObjectPosition<string | number> | undefined>[] | undefined;
        OTabSize?: readonly (string | (string & {}))[] | csstype.Property.TabSize<string | number> | readonly NonNullable<csstype.Property.TabSize<string | number> | undefined>[] | undefined;
        OTextOverflow?: readonly string[] | csstype.Property.TextOverflow | readonly csstype.Property.TextOverflow[] | undefined;
        OTransform?: readonly string[] | csstype.Property.Transform | readonly csstype.Property.Transform[] | undefined;
        OTransformOrigin?: readonly (string | (string & {}))[] | csstype.Property.TransformOrigin<string | number> | readonly NonNullable<csstype.Property.TransformOrigin<string | number> | undefined>[] | undefined;
        OTransition?: readonly string[] | csstype.Property.Transition<string & {}> | readonly csstype.Property.Transition<string & {}>[] | undefined;
        OTransitionDelay?: readonly string[] | csstype.Property.TransitionDelay<string & {}> | readonly csstype.Property.TransitionDelay<string & {}>[] | undefined;
        OTransitionDuration?: readonly string[] | csstype.Property.TransitionDuration<string & {}> | readonly csstype.Property.TransitionDuration<string & {}>[] | undefined;
        OTransitionProperty?: readonly string[] | csstype.Property.TransitionProperty | readonly csstype.Property.TransitionProperty[] | undefined;
        OTransitionTimingFunction?: readonly string[] | csstype.Property.TransitionTimingFunction | readonly csstype.Property.TransitionTimingFunction[] | undefined;
        WebkitBoxAlign?: csstype.Property.BoxAlign | readonly NonNullable<csstype.Property.BoxAlign | undefined>[] | readonly csstype.Property.BoxAlign[] | undefined;
        WebkitBoxDirection?: csstype.Property.BoxDirection | readonly NonNullable<csstype.Property.BoxDirection | undefined>[] | readonly csstype.Property.BoxDirection[] | undefined;
        WebkitBoxFlex?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxFlex | readonly NonNullable<csstype.Property.BoxFlex | undefined>[] | undefined;
        WebkitBoxFlexGroup?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxFlexGroup | readonly NonNullable<csstype.Property.BoxFlexGroup | undefined>[] | undefined;
        WebkitBoxLines?: csstype.Property.BoxLines | readonly NonNullable<csstype.Property.BoxLines | undefined>[] | readonly csstype.Property.BoxLines[] | undefined;
        WebkitBoxOrdinalGroup?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxOrdinalGroup | readonly NonNullable<csstype.Property.BoxOrdinalGroup | undefined>[] | undefined;
        WebkitBoxOrient?: csstype.Property.BoxOrient | readonly NonNullable<csstype.Property.BoxOrient | undefined>[] | readonly csstype.Property.BoxOrient[] | undefined;
        WebkitBoxPack?: csstype.Property.BoxPack | readonly NonNullable<csstype.Property.BoxPack | undefined>[] | readonly csstype.Property.BoxPack[] | undefined;
        alignmentBaseline?: csstype.Property.AlignmentBaseline | readonly NonNullable<csstype.Property.AlignmentBaseline | undefined>[] | readonly csstype.Property.AlignmentBaseline[] | undefined;
        baselineShift?: readonly (string | (string & {}))[] | csstype.Property.BaselineShift<string | number> | readonly NonNullable<csstype.Property.BaselineShift<string | number> | undefined>[] | undefined;
        clipRule?: csstype.Property.ClipRule | readonly NonNullable<csstype.Property.ClipRule | undefined>[] | readonly csstype.Property.ClipRule[] | undefined;
        colorInterpolation?: csstype.Property.ColorInterpolation | readonly NonNullable<csstype.Property.ColorInterpolation | undefined>[] | readonly csstype.Property.ColorInterpolation[] | undefined;
        colorRendering?: csstype.Property.ColorRendering | readonly NonNullable<csstype.Property.ColorRendering | undefined>[] | readonly csstype.Property.ColorRendering[] | undefined;
        dominantBaseline?: csstype.Property.DominantBaseline | readonly NonNullable<csstype.Property.DominantBaseline | undefined>[] | readonly csstype.Property.DominantBaseline[] | undefined;
        fill?: readonly string[] | csstype.Property.Fill | readonly csstype.Property.Fill[] | undefined;
        fillOpacity?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.FillOpacity | readonly NonNullable<csstype.Property.FillOpacity | undefined>[] | undefined;
        fillRule?: csstype.Property.FillRule | readonly NonNullable<csstype.Property.FillRule | undefined>[] | readonly csstype.Property.FillRule[] | undefined;
        floodColor?: readonly string[] | csstype.Property.FloodColor | readonly csstype.Property.FloodColor[] | undefined;
        floodOpacity?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.FloodOpacity | readonly NonNullable<csstype.Property.FloodOpacity | undefined>[] | undefined;
        glyphOrientationVertical?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GlyphOrientationVertical | readonly NonNullable<csstype.Property.GlyphOrientationVertical | undefined>[] | undefined;
        lightingColor?: readonly string[] | csstype.Property.LightingColor | readonly csstype.Property.LightingColor[] | undefined;
        marker?: readonly string[] | csstype.Property.Marker | readonly csstype.Property.Marker[] | undefined;
        markerEnd?: readonly string[] | csstype.Property.MarkerEnd | readonly csstype.Property.MarkerEnd[] | undefined;
        markerMid?: readonly string[] | csstype.Property.MarkerMid | readonly csstype.Property.MarkerMid[] | undefined;
        markerStart?: readonly string[] | csstype.Property.MarkerStart | readonly csstype.Property.MarkerStart[] | undefined;
        shapeRendering?: csstype.Property.ShapeRendering | readonly NonNullable<csstype.Property.ShapeRendering | undefined>[] | readonly csstype.Property.ShapeRendering[] | undefined;
        stopColor?: readonly string[] | csstype.Property.StopColor | readonly csstype.Property.StopColor[] | undefined;
        stopOpacity?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.StopOpacity | readonly NonNullable<csstype.Property.StopOpacity | undefined>[] | undefined;
        stroke?: readonly string[] | csstype.Property.Stroke | readonly csstype.Property.Stroke[] | undefined;
        strokeDasharray?: readonly (string | (string & {}))[] | csstype.Property.StrokeDasharray<string | number> | readonly NonNullable<csstype.Property.StrokeDasharray<string | number> | undefined>[] | undefined;
        strokeDashoffset?: readonly (string | (string & {}))[] | csstype.Property.StrokeDashoffset<string | number> | readonly NonNullable<csstype.Property.StrokeDashoffset<string | number> | undefined>[] | undefined;
        strokeLinecap?: csstype.Property.StrokeLinecap | readonly NonNullable<csstype.Property.StrokeLinecap | undefined>[] | readonly csstype.Property.StrokeLinecap[] | undefined;
        strokeLinejoin?: csstype.Property.StrokeLinejoin | readonly NonNullable<csstype.Property.StrokeLinejoin | undefined>[] | readonly csstype.Property.StrokeLinejoin[] | undefined;
        strokeMiterlimit?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.StrokeMiterlimit | readonly NonNullable<csstype.Property.StrokeMiterlimit | undefined>[] | undefined;
        strokeOpacity?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.StrokeOpacity | readonly NonNullable<csstype.Property.StrokeOpacity | undefined>[] | undefined;
        strokeWidth?: readonly (string | (string & {}))[] | csstype.Property.StrokeWidth<string | number> | readonly NonNullable<csstype.Property.StrokeWidth<string | number> | undefined>[] | undefined;
        textAnchor?: csstype.Property.TextAnchor | readonly NonNullable<csstype.Property.TextAnchor | undefined>[] | readonly csstype.Property.TextAnchor[] | undefined;
        vectorEffect?: csstype.Property.VectorEffect | readonly NonNullable<csstype.Property.VectorEffect | undefined>[] | readonly csstype.Property.VectorEffect[] | undefined;
        ":-moz-any()"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-dir"?: _emotion_serialize.CSSObject | undefined;
        ":-webkit-any()"?: _emotion_serialize.CSSObject | undefined;
        "::cue"?: _emotion_serialize.CSSObject | undefined;
        "::cue-region"?: _emotion_serialize.CSSObject | undefined;
        "::part"?: _emotion_serialize.CSSObject | undefined;
        "::slotted"?: _emotion_serialize.CSSObject | undefined;
        "::view-transition-group"?: _emotion_serialize.CSSObject | undefined;
        "::view-transition-image-pair"?: _emotion_serialize.CSSObject | undefined;
        "::view-transition-new"?: _emotion_serialize.CSSObject | undefined;
        "::view-transition-old"?: _emotion_serialize.CSSObject | undefined;
        ":dir"?: _emotion_serialize.CSSObject | undefined;
        ":has"?: _emotion_serialize.CSSObject | undefined;
        ":host"?: _emotion_serialize.CSSObject | undefined;
        ":host-context"?: _emotion_serialize.CSSObject | undefined;
        ":is"?: _emotion_serialize.CSSObject | undefined;
        ":lang"?: _emotion_serialize.CSSObject | undefined;
        ":matches()"?: _emotion_serialize.CSSObject | undefined;
        ":not"?: _emotion_serialize.CSSObject | undefined;
        ":nth-child"?: _emotion_serialize.CSSObject | undefined;
        ":nth-last-child"?: _emotion_serialize.CSSObject | undefined;
        ":nth-last-of-type"?: _emotion_serialize.CSSObject | undefined;
        ":nth-of-type"?: _emotion_serialize.CSSObject | undefined;
        ":where"?: _emotion_serialize.CSSObject | undefined;
        ":-khtml-any-link"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-any-link"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-focusring"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-full-screen"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-placeholder"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-read-only"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-read-write"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-ui-invalid"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-ui-valid"?: _emotion_serialize.CSSObject | undefined;
        ":-ms-fullscreen"?: _emotion_serialize.CSSObject | undefined;
        ":-ms-input-placeholder"?: _emotion_serialize.CSSObject | undefined;
        ":-webkit-any-link"?: _emotion_serialize.CSSObject | undefined;
        ":-webkit-full-screen"?: _emotion_serialize.CSSObject | undefined;
        "::-moz-placeholder"?: _emotion_serialize.CSSObject | undefined;
        "::-moz-progress-bar"?: _emotion_serialize.CSSObject | undefined;
        "::-moz-range-progress"?: _emotion_serialize.CSSObject | undefined;
        "::-moz-range-thumb"?: _emotion_serialize.CSSObject | undefined;
        "::-moz-range-track"?: _emotion_serialize.CSSObject | undefined;
        "::-moz-selection"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-backdrop"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-browse"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-check"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-clear"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-expand"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-fill"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-fill-lower"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-fill-upper"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-input-placeholder"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-reveal"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-thumb"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-ticks-after"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-ticks-before"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-tooltip"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-track"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-value"?: _emotion_serialize.CSSObject | undefined;
        "::-webkit-backdrop"?: _emotion_serialize.CSSObject | undefined;
        "::-webkit-input-placeholder"?: _emotion_serialize.CSSObject | undefined;
        "::-webkit-progress-bar"?: _emotion_serialize.CSSObject | undefined;
        "::-webkit-progress-inner-value"?: _emotion_serialize.CSSObject | undefined;
        "::-webkit-progress-value"?: _emotion_serialize.CSSObject | undefined;
        "::-webkit-slider-runnable-track"?: _emotion_serialize.CSSObject | undefined;
        "::-webkit-slider-thumb"?: _emotion_serialize.CSSObject | undefined;
        "::after"?: _emotion_serialize.CSSObject | undefined;
        "::backdrop"?: _emotion_serialize.CSSObject | undefined;
        "::before"?: _emotion_serialize.CSSObject | undefined;
        "::first-letter"?: _emotion_serialize.CSSObject | undefined;
        "::first-line"?: _emotion_serialize.CSSObject | undefined;
        "::grammar-error"?: _emotion_serialize.CSSObject | undefined;
        "::marker"?: _emotion_serialize.CSSObject | undefined;
        "::placeholder"?: _emotion_serialize.CSSObject | undefined;
        "::selection"?: _emotion_serialize.CSSObject | undefined;
        "::spelling-error"?: _emotion_serialize.CSSObject | undefined;
        "::target-text"?: _emotion_serialize.CSSObject | undefined;
        "::view-transition"?: _emotion_serialize.CSSObject | undefined;
        ":active"?: _emotion_serialize.CSSObject | undefined;
        ":after"?: _emotion_serialize.CSSObject | undefined;
        ":any-link"?: _emotion_serialize.CSSObject | undefined;
        ":before"?: _emotion_serialize.CSSObject | undefined;
        ":blank"?: _emotion_serialize.CSSObject | undefined;
        ":checked"?: _emotion_serialize.CSSObject | undefined;
        ":current"?: _emotion_serialize.CSSObject | undefined;
        ":default"?: _emotion_serialize.CSSObject | undefined;
        ":defined"?: _emotion_serialize.CSSObject | undefined;
        ":disabled"?: _emotion_serialize.CSSObject | undefined;
        ":empty"?: _emotion_serialize.CSSObject | undefined;
        ":enabled"?: _emotion_serialize.CSSObject | undefined;
        ":first"?: _emotion_serialize.CSSObject | undefined;
        ":first-child"?: _emotion_serialize.CSSObject | undefined;
        ":first-letter"?: _emotion_serialize.CSSObject | undefined;
        ":first-line"?: _emotion_serialize.CSSObject | undefined;
        ":first-of-type"?: _emotion_serialize.CSSObject | undefined;
        ":focus"?: _emotion_serialize.CSSObject | undefined;
        ":focus-visible"?: _emotion_serialize.CSSObject | undefined;
        ":focus-within"?: _emotion_serialize.CSSObject | undefined;
        ":fullscreen"?: _emotion_serialize.CSSObject | undefined;
        ":future"?: _emotion_serialize.CSSObject | undefined;
        ":hover"?: _emotion_serialize.CSSObject | undefined;
        ":in-range"?: _emotion_serialize.CSSObject | undefined;
        ":indeterminate"?: _emotion_serialize.CSSObject | undefined;
        ":invalid"?: _emotion_serialize.CSSObject | undefined;
        ":last-child"?: _emotion_serialize.CSSObject | undefined;
        ":last-of-type"?: _emotion_serialize.CSSObject | undefined;
        ":left"?: _emotion_serialize.CSSObject | undefined;
        ":link"?: _emotion_serialize.CSSObject | undefined;
        ":local-link"?: _emotion_serialize.CSSObject | undefined;
        ":nth-col"?: _emotion_serialize.CSSObject | undefined;
        ":nth-last-col"?: _emotion_serialize.CSSObject | undefined;
        ":only-child"?: _emotion_serialize.CSSObject | undefined;
        ":only-of-type"?: _emotion_serialize.CSSObject | undefined;
        ":optional"?: _emotion_serialize.CSSObject | undefined;
        ":out-of-range"?: _emotion_serialize.CSSObject | undefined;
        ":past"?: _emotion_serialize.CSSObject | undefined;
        ":paused"?: _emotion_serialize.CSSObject | undefined;
        ":picture-in-picture"?: _emotion_serialize.CSSObject | undefined;
        ":placeholder-shown"?: _emotion_serialize.CSSObject | undefined;
        ":playing"?: _emotion_serialize.CSSObject | undefined;
        ":read-only"?: _emotion_serialize.CSSObject | undefined;
        ":read-write"?: _emotion_serialize.CSSObject | undefined;
        ":required"?: _emotion_serialize.CSSObject | undefined;
        ":right"?: _emotion_serialize.CSSObject | undefined;
        ":root"?: _emotion_serialize.CSSObject | undefined;
        ":scope"?: _emotion_serialize.CSSObject | undefined;
        ":target"?: _emotion_serialize.CSSObject | undefined;
        ":target-within"?: _emotion_serialize.CSSObject | undefined;
        ":user-invalid"?: _emotion_serialize.CSSObject | undefined;
        ":user-valid"?: _emotion_serialize.CSSObject | undefined;
        ":valid"?: _emotion_serialize.CSSObject | undefined;
        ":visited"?: _emotion_serialize.CSSObject | undefined;
        label?: string | undefined;
    };
    loadingIndicator: () => {};
    loadingMessage: () => {};
    menu: () => {};
    menuList: ({ maxHeight }: {
        maxHeight: number;
    }) => {
        maxHeight: number;
    };
    multiValue: () => {};
    multiValueLabel: () => {
        overflow: string;
        textOverflow: string;
    };
    multiValueRemove: () => {};
    noOptionsMessage: () => {};
    option: () => {};
    placeholder: (originalStyles: CSSObjectWithLabel) => {
        color: string;
        accentColor?: readonly string[] | csstype.Property.AccentColor | readonly csstype.Property.AccentColor[] | undefined;
        alignContent?: readonly string[] | csstype.Property.AlignContent | readonly csstype.Property.AlignContent[] | undefined;
        alignItems?: readonly string[] | csstype.Property.AlignItems | readonly csstype.Property.AlignItems[] | undefined;
        alignSelf?: readonly string[] | csstype.Property.AlignSelf | readonly csstype.Property.AlignSelf[] | undefined;
        alignTracks?: readonly string[] | csstype.Property.AlignTracks | readonly csstype.Property.AlignTracks[] | undefined;
        animationComposition?: readonly string[] | csstype.Property.AnimationComposition | readonly csstype.Property.AnimationComposition[] | undefined;
        animationDelay?: readonly string[] | csstype.Property.AnimationDelay<string & {}> | readonly csstype.Property.AnimationDelay<string & {}>[] | undefined;
        animationDirection?: readonly string[] | csstype.Property.AnimationDirection | readonly csstype.Property.AnimationDirection[] | undefined;
        animationDuration?: readonly string[] | csstype.Property.AnimationDuration<string & {}> | readonly csstype.Property.AnimationDuration<string & {}>[] | undefined;
        animationFillMode?: readonly string[] | csstype.Property.AnimationFillMode | readonly csstype.Property.AnimationFillMode[] | undefined;
        animationIterationCount?: csstype.Property.AnimationIterationCount | readonly NonNullable<csstype.Property.AnimationIterationCount | undefined>[] | readonly ((string & {}) | csstype.Globals | "infinite")[] | undefined;
        animationName?: readonly string[] | csstype.Property.AnimationName | readonly csstype.Property.AnimationName[] | undefined;
        animationPlayState?: readonly string[] | csstype.Property.AnimationPlayState | readonly csstype.Property.AnimationPlayState[] | undefined;
        animationRangeEnd?: readonly (string | (string & {}))[] | csstype.Property.AnimationRangeEnd<string | number> | readonly NonNullable<csstype.Property.AnimationRangeEnd<string | number> | undefined>[] | undefined;
        animationRangeStart?: readonly (string | (string & {}))[] | csstype.Property.AnimationRangeStart<string | number> | readonly NonNullable<csstype.Property.AnimationRangeStart<string | number> | undefined>[] | undefined;
        animationTimeline?: readonly string[] | csstype.Property.AnimationTimeline | readonly csstype.Property.AnimationTimeline[] | undefined;
        animationTimingFunction?: readonly string[] | csstype.Property.AnimationTimingFunction | readonly csstype.Property.AnimationTimingFunction[] | undefined;
        appearance?: csstype.Property.Appearance | readonly NonNullable<csstype.Property.Appearance | undefined>[] | readonly csstype.Property.Appearance[] | undefined;
        aspectRatio?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.AspectRatio | readonly NonNullable<csstype.Property.AspectRatio | undefined>[] | undefined;
        backdropFilter?: readonly string[] | csstype.Property.BackdropFilter | readonly csstype.Property.BackdropFilter[] | undefined;
        backfaceVisibility?: csstype.Property.BackfaceVisibility | readonly NonNullable<csstype.Property.BackfaceVisibility | undefined>[] | readonly csstype.Property.BackfaceVisibility[] | undefined;
        backgroundAttachment?: readonly string[] | csstype.Property.BackgroundAttachment | readonly csstype.Property.BackgroundAttachment[] | undefined;
        backgroundBlendMode?: readonly string[] | csstype.Property.BackgroundBlendMode | readonly csstype.Property.BackgroundBlendMode[] | undefined;
        backgroundClip?: readonly string[] | csstype.Property.BackgroundClip | readonly csstype.Property.BackgroundClip[] | undefined;
        backgroundColor?: readonly string[] | csstype.Property.BackgroundColor | readonly csstype.Property.BackgroundColor[] | undefined;
        backgroundImage?: readonly string[] | csstype.Property.BackgroundImage | readonly csstype.Property.BackgroundImage[] | undefined;
        backgroundOrigin?: readonly string[] | csstype.Property.BackgroundOrigin | readonly csstype.Property.BackgroundOrigin[] | undefined;
        backgroundPositionX?: readonly (string | (string & {}))[] | csstype.Property.BackgroundPositionX<string | number> | readonly NonNullable<csstype.Property.BackgroundPositionX<string | number> | undefined>[] | undefined;
        backgroundPositionY?: readonly (string | (string & {}))[] | csstype.Property.BackgroundPositionY<string | number> | readonly NonNullable<csstype.Property.BackgroundPositionY<string | number> | undefined>[] | undefined;
        backgroundRepeat?: readonly string[] | csstype.Property.BackgroundRepeat | readonly csstype.Property.BackgroundRepeat[] | undefined;
        backgroundSize?: readonly (string | (string & {}))[] | csstype.Property.BackgroundSize<string | number> | readonly NonNullable<csstype.Property.BackgroundSize<string | number> | undefined>[] | undefined;
        blockOverflow?: readonly string[] | csstype.Property.BlockOverflow | readonly csstype.Property.BlockOverflow[] | undefined;
        blockSize?: readonly (string | (string & {}))[] | csstype.Property.BlockSize<string | number> | readonly NonNullable<csstype.Property.BlockSize<string | number> | undefined>[] | undefined;
        borderBlockColor?: readonly string[] | csstype.Property.BorderBlockColor | readonly csstype.Property.BorderBlockColor[] | undefined;
        borderBlockEndColor?: readonly string[] | csstype.Property.BorderBlockEndColor | readonly csstype.Property.BorderBlockEndColor[] | undefined;
        borderBlockEndStyle?: csstype.Property.BorderBlockEndStyle | readonly NonNullable<csstype.Property.BorderBlockEndStyle | undefined>[] | readonly csstype.Property.BorderBlockEndStyle[] | undefined;
        borderBlockEndWidth?: readonly string[] | csstype.Property.BorderBlockEndWidth<string | number> | readonly NonNullable<csstype.Property.BorderBlockEndWidth<string | number> | undefined>[] | undefined;
        borderBlockStartColor?: readonly string[] | csstype.Property.BorderBlockStartColor | readonly csstype.Property.BorderBlockStartColor[] | undefined;
        borderBlockStartStyle?: csstype.Property.BorderBlockStartStyle | readonly NonNullable<csstype.Property.BorderBlockStartStyle | undefined>[] | readonly csstype.Property.BorderBlockStartStyle[] | undefined;
        borderBlockStartWidth?: readonly string[] | csstype.Property.BorderBlockStartWidth<string | number> | readonly NonNullable<csstype.Property.BorderBlockStartWidth<string | number> | undefined>[] | undefined;
        borderBlockStyle?: csstype.Property.BorderBlockStyle | readonly NonNullable<csstype.Property.BorderBlockStyle | undefined>[] | readonly csstype.Property.BorderBlockStyle[] | undefined;
        borderBlockWidth?: readonly string[] | csstype.Property.BorderBlockWidth<string | number> | readonly NonNullable<csstype.Property.BorderBlockWidth<string | number> | undefined>[] | undefined;
        borderBottomColor?: readonly string[] | csstype.Property.BorderBottomColor | readonly csstype.Property.BorderBottomColor[] | undefined;
        borderBottomLeftRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderBottomLeftRadius<string | number> | readonly NonNullable<csstype.Property.BorderBottomLeftRadius<string | number> | undefined>[] | undefined;
        borderBottomRightRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderBottomRightRadius<string | number> | readonly NonNullable<csstype.Property.BorderBottomRightRadius<string | number> | undefined>[] | undefined;
        borderBottomStyle?: csstype.Property.BorderBottomStyle | readonly NonNullable<csstype.Property.BorderBottomStyle | undefined>[] | readonly csstype.Property.BorderBottomStyle[] | undefined;
        borderBottomWidth?: readonly string[] | csstype.Property.BorderBottomWidth<string | number> | readonly NonNullable<csstype.Property.BorderBottomWidth<string | number> | undefined>[] | undefined;
        borderCollapse?: csstype.Property.BorderCollapse | readonly NonNullable<csstype.Property.BorderCollapse | undefined>[] | readonly csstype.Property.BorderCollapse[] | undefined;
        borderEndEndRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderEndEndRadius<string | number> | readonly NonNullable<csstype.Property.BorderEndEndRadius<string | number> | undefined>[] | undefined;
        borderEndStartRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderEndStartRadius<string | number> | readonly NonNullable<csstype.Property.BorderEndStartRadius<string | number> | undefined>[] | undefined;
        borderImageOutset?: readonly (string | (string & {}))[] | csstype.Property.BorderImageOutset<string | number> | readonly NonNullable<csstype.Property.BorderImageOutset<string | number> | undefined>[] | undefined;
        borderImageRepeat?: readonly string[] | csstype.Property.BorderImageRepeat | readonly csstype.Property.BorderImageRepeat[] | undefined;
        borderImageSlice?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BorderImageSlice | readonly NonNullable<csstype.Property.BorderImageSlice | undefined>[] | undefined;
        borderImageSource?: readonly string[] | csstype.Property.BorderImageSource | readonly csstype.Property.BorderImageSource[] | undefined;
        borderImageWidth?: readonly (string | (string & {}))[] | csstype.Property.BorderImageWidth<string | number> | readonly NonNullable<csstype.Property.BorderImageWidth<string | number> | undefined>[] | undefined;
        borderInlineColor?: readonly string[] | csstype.Property.BorderInlineColor | readonly csstype.Property.BorderInlineColor[] | undefined;
        borderInlineEndColor?: readonly string[] | csstype.Property.BorderInlineEndColor | readonly csstype.Property.BorderInlineEndColor[] | undefined;
        borderInlineEndStyle?: csstype.Property.BorderInlineEndStyle | readonly NonNullable<csstype.Property.BorderInlineEndStyle | undefined>[] | readonly csstype.Property.BorderInlineEndStyle[] | undefined;
        borderInlineEndWidth?: readonly string[] | csstype.Property.BorderInlineEndWidth<string | number> | readonly NonNullable<csstype.Property.BorderInlineEndWidth<string | number> | undefined>[] | undefined;
        borderInlineStartColor?: readonly string[] | csstype.Property.BorderInlineStartColor | readonly csstype.Property.BorderInlineStartColor[] | undefined;
        borderInlineStartStyle?: csstype.Property.BorderInlineStartStyle | readonly NonNullable<csstype.Property.BorderInlineStartStyle | undefined>[] | readonly csstype.Property.BorderInlineStartStyle[] | undefined;
        borderInlineStartWidth?: readonly string[] | csstype.Property.BorderInlineStartWidth<string | number> | readonly NonNullable<csstype.Property.BorderInlineStartWidth<string | number> | undefined>[] | undefined;
        borderInlineStyle?: csstype.Property.BorderInlineStyle | readonly NonNullable<csstype.Property.BorderInlineStyle | undefined>[] | readonly csstype.Property.BorderInlineStyle[] | undefined;
        borderInlineWidth?: readonly string[] | csstype.Property.BorderInlineWidth<string | number> | readonly NonNullable<csstype.Property.BorderInlineWidth<string | number> | undefined>[] | undefined;
        borderLeftColor?: readonly string[] | csstype.Property.BorderLeftColor | readonly csstype.Property.BorderLeftColor[] | undefined;
        borderLeftStyle?: csstype.Property.BorderLeftStyle | readonly NonNullable<csstype.Property.BorderLeftStyle | undefined>[] | readonly csstype.Property.BorderLeftStyle[] | undefined;
        borderLeftWidth?: readonly string[] | csstype.Property.BorderLeftWidth<string | number> | readonly NonNullable<csstype.Property.BorderLeftWidth<string | number> | undefined>[] | undefined;
        borderRightColor?: readonly string[] | csstype.Property.BorderRightColor | readonly csstype.Property.BorderRightColor[] | undefined;
        borderRightStyle?: csstype.Property.BorderRightStyle | readonly NonNullable<csstype.Property.BorderRightStyle | undefined>[] | readonly csstype.Property.BorderRightStyle[] | undefined;
        borderRightWidth?: readonly string[] | csstype.Property.BorderRightWidth<string | number> | readonly NonNullable<csstype.Property.BorderRightWidth<string | number> | undefined>[] | undefined;
        borderSpacing?: readonly (string | (string & {}))[] | csstype.Property.BorderSpacing<string | number> | readonly NonNullable<csstype.Property.BorderSpacing<string | number> | undefined>[] | undefined;
        borderStartEndRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderStartEndRadius<string | number> | readonly NonNullable<csstype.Property.BorderStartEndRadius<string | number> | undefined>[] | undefined;
        borderStartStartRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderStartStartRadius<string | number> | readonly NonNullable<csstype.Property.BorderStartStartRadius<string | number> | undefined>[] | undefined;
        borderTopColor?: readonly string[] | csstype.Property.BorderTopColor | readonly csstype.Property.BorderTopColor[] | undefined;
        borderTopLeftRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderTopLeftRadius<string | number> | readonly NonNullable<csstype.Property.BorderTopLeftRadius<string | number> | undefined>[] | undefined;
        borderTopRightRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderTopRightRadius<string | number> | readonly NonNullable<csstype.Property.BorderTopRightRadius<string | number> | undefined>[] | undefined;
        borderTopStyle?: csstype.Property.BorderTopStyle | readonly NonNullable<csstype.Property.BorderTopStyle | undefined>[] | readonly csstype.Property.BorderTopStyle[] | undefined;
        borderTopWidth?: readonly string[] | csstype.Property.BorderTopWidth<string | number> | readonly NonNullable<csstype.Property.BorderTopWidth<string | number> | undefined>[] | undefined;
        bottom?: readonly (string | (string & {}))[] | csstype.Property.Bottom<string | number> | readonly NonNullable<csstype.Property.Bottom<string | number> | undefined>[] | undefined;
        boxDecorationBreak?: csstype.Property.BoxDecorationBreak | readonly NonNullable<csstype.Property.BoxDecorationBreak | undefined>[] | readonly csstype.Property.BoxDecorationBreak[] | undefined;
        boxShadow?: readonly string[] | csstype.Property.BoxShadow | readonly csstype.Property.BoxShadow[] | undefined;
        boxSizing?: csstype.Property.BoxSizing | readonly NonNullable<csstype.Property.BoxSizing | undefined>[] | readonly csstype.Property.BoxSizing[] | undefined;
        breakAfter?: csstype.Property.BreakAfter | readonly NonNullable<csstype.Property.BreakAfter | undefined>[] | readonly csstype.Property.BreakAfter[] | undefined;
        breakBefore?: csstype.Property.BreakBefore | readonly NonNullable<csstype.Property.BreakBefore | undefined>[] | readonly csstype.Property.BreakBefore[] | undefined;
        breakInside?: csstype.Property.BreakInside | readonly NonNullable<csstype.Property.BreakInside | undefined>[] | readonly csstype.Property.BreakInside[] | undefined;
        captionSide?: csstype.Property.CaptionSide | readonly NonNullable<csstype.Property.CaptionSide | undefined>[] | readonly csstype.Property.CaptionSide[] | undefined;
        caretColor?: readonly string[] | csstype.Property.CaretColor | readonly csstype.Property.CaretColor[] | undefined;
        caretShape?: csstype.Property.CaretShape | readonly NonNullable<csstype.Property.CaretShape | undefined>[] | readonly csstype.Property.CaretShape[] | undefined;
        clear?: csstype.Property.Clear | readonly NonNullable<csstype.Property.Clear | undefined>[] | readonly csstype.Property.Clear[] | undefined;
        clipPath?: readonly string[] | csstype.Property.ClipPath | readonly csstype.Property.ClipPath[] | undefined;
        colorAdjust?: csstype.Property.PrintColorAdjust | readonly NonNullable<csstype.Property.PrintColorAdjust | undefined>[] | readonly csstype.Property.PrintColorAdjust[] | undefined;
        colorScheme?: readonly string[] | csstype.Property.ColorScheme | readonly csstype.Property.ColorScheme[] | undefined;
        columnCount?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.ColumnCount | readonly NonNullable<csstype.Property.ColumnCount | undefined>[] | undefined;
        columnFill?: csstype.Property.ColumnFill | readonly NonNullable<csstype.Property.ColumnFill | undefined>[] | readonly csstype.Property.ColumnFill[] | undefined;
        columnGap?: readonly (string | (string & {}))[] | csstype.Property.ColumnGap<string | number> | readonly NonNullable<csstype.Property.ColumnGap<string | number> | undefined>[] | undefined;
        columnRuleColor?: readonly string[] | csstype.Property.ColumnRuleColor | readonly csstype.Property.ColumnRuleColor[] | undefined;
        columnRuleStyle?: readonly string[] | csstype.Property.ColumnRuleStyle | readonly csstype.Property.ColumnRuleStyle[] | undefined;
        columnRuleWidth?: readonly (string | (string & {}))[] | csstype.Property.ColumnRuleWidth<string | number> | readonly NonNullable<csstype.Property.ColumnRuleWidth<string | number> | undefined>[] | undefined;
        columnSpan?: csstype.Property.ColumnSpan | readonly NonNullable<csstype.Property.ColumnSpan | undefined>[] | readonly csstype.Property.ColumnSpan[] | undefined;
        columnWidth?: readonly string[] | csstype.Property.ColumnWidth<string | number> | readonly NonNullable<csstype.Property.ColumnWidth<string | number> | undefined>[] | undefined;
        contain?: readonly string[] | csstype.Property.Contain | readonly csstype.Property.Contain[] | undefined;
        containIntrinsicBlockSize?: readonly (string | (string & {}))[] | csstype.Property.ContainIntrinsicBlockSize<string | number> | readonly NonNullable<csstype.Property.ContainIntrinsicBlockSize<string | number> | undefined>[] | undefined;
        containIntrinsicHeight?: readonly (string | (string & {}))[] | csstype.Property.ContainIntrinsicHeight<string | number> | readonly NonNullable<csstype.Property.ContainIntrinsicHeight<string | number> | undefined>[] | undefined;
        containIntrinsicInlineSize?: readonly (string | (string & {}))[] | csstype.Property.ContainIntrinsicInlineSize<string | number> | readonly NonNullable<csstype.Property.ContainIntrinsicInlineSize<string | number> | undefined>[] | undefined;
        containIntrinsicWidth?: readonly (string | (string & {}))[] | csstype.Property.ContainIntrinsicWidth<string | number> | readonly NonNullable<csstype.Property.ContainIntrinsicWidth<string | number> | undefined>[] | undefined;
        containerName?: readonly string[] | csstype.Property.ContainerName | readonly csstype.Property.ContainerName[] | undefined;
        containerType?: csstype.Property.ContainerType | readonly NonNullable<csstype.Property.ContainerType | undefined>[] | readonly csstype.Property.ContainerType[] | undefined;
        content?: readonly string[] | csstype.Property.Content | readonly csstype.Property.Content[] | undefined;
        contentVisibility?: csstype.Property.ContentVisibility | readonly NonNullable<csstype.Property.ContentVisibility | undefined>[] | readonly csstype.Property.ContentVisibility[] | undefined;
        counterIncrement?: readonly string[] | csstype.Property.CounterIncrement | readonly csstype.Property.CounterIncrement[] | undefined;
        counterReset?: readonly string[] | csstype.Property.CounterReset | readonly csstype.Property.CounterReset[] | undefined;
        counterSet?: readonly string[] | csstype.Property.CounterSet | readonly csstype.Property.CounterSet[] | undefined;
        cursor?: readonly string[] | csstype.Property.Cursor | readonly csstype.Property.Cursor[] | undefined;
        direction?: csstype.Property.Direction | readonly NonNullable<csstype.Property.Direction | undefined>[] | readonly csstype.Property.Direction[] | undefined;
        display?: readonly string[] | csstype.Property.Display | readonly csstype.Property.Display[] | undefined;
        emptyCells?: csstype.Property.EmptyCells | readonly NonNullable<csstype.Property.EmptyCells | undefined>[] | readonly csstype.Property.EmptyCells[] | undefined;
        filter?: readonly string[] | csstype.Property.Filter | readonly csstype.Property.Filter[] | undefined;
        flexBasis?: readonly (string | (string & {}))[] | csstype.Property.FlexBasis<string | number> | readonly NonNullable<csstype.Property.FlexBasis<string | number> | undefined>[] | undefined;
        flexDirection?: csstype.Property.FlexDirection | readonly NonNullable<csstype.Property.FlexDirection | undefined>[] | readonly csstype.Property.FlexDirection[] | undefined;
        flexGrow?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.FlexGrow | readonly NonNullable<csstype.Property.FlexGrow | undefined>[] | undefined;
        flexShrink?: csstype.Property.FlexShrink | readonly NonNullable<csstype.Property.FlexShrink | undefined>[] | readonly ((string & {}) | csstype.Globals)[] | undefined;
        flexWrap?: csstype.Property.FlexWrap | readonly NonNullable<csstype.Property.FlexWrap | undefined>[] | readonly csstype.Property.FlexWrap[] | undefined;
        float?: csstype.Property.Float | readonly NonNullable<csstype.Property.Float | undefined>[] | readonly csstype.Property.Float[] | undefined;
        fontFamily?: readonly string[] | csstype.Property.FontFamily | readonly csstype.Property.FontFamily[] | undefined;
        fontFeatureSettings?: readonly string[] | csstype.Property.FontFeatureSettings | readonly csstype.Property.FontFeatureSettings[] | undefined;
        fontKerning?: csstype.Property.FontKerning | readonly NonNullable<csstype.Property.FontKerning | undefined>[] | readonly csstype.Property.FontKerning[] | undefined;
        fontLanguageOverride?: readonly string[] | csstype.Property.FontLanguageOverride | readonly csstype.Property.FontLanguageOverride[] | undefined;
        fontOpticalSizing?: csstype.Property.FontOpticalSizing | readonly NonNullable<csstype.Property.FontOpticalSizing | undefined>[] | readonly csstype.Property.FontOpticalSizing[] | undefined;
        fontPalette?: readonly string[] | csstype.Property.FontPalette | readonly csstype.Property.FontPalette[] | undefined;
        fontSize?: readonly (string | (string & {}))[] | csstype.Property.FontSize<string | number> | readonly NonNullable<csstype.Property.FontSize<string | number> | undefined>[] | undefined;
        fontSizeAdjust?: csstype.Property.FontSizeAdjust | readonly NonNullable<csstype.Property.FontSizeAdjust | undefined>[] | readonly ("none" | (string & {}) | csstype.Globals | "from-font")[] | undefined;
        fontSmooth?: readonly string[] | csstype.Property.FontSmooth<string | number> | readonly NonNullable<csstype.Property.FontSmooth<string | number> | undefined>[] | undefined;
        fontStretch?: readonly string[] | csstype.Property.FontStretch | readonly csstype.Property.FontStretch[] | undefined;
        fontStyle?: readonly string[] | csstype.Property.FontStyle | readonly csstype.Property.FontStyle[] | undefined;
        fontSynthesis?: readonly string[] | csstype.Property.FontSynthesis | readonly csstype.Property.FontSynthesis[] | undefined;
        fontSynthesisPosition?: csstype.Property.FontSynthesisPosition | readonly NonNullable<csstype.Property.FontSynthesisPosition | undefined>[] | readonly csstype.Property.FontSynthesisPosition[] | undefined;
        fontSynthesisSmallCaps?: csstype.Property.FontSynthesisSmallCaps | readonly NonNullable<csstype.Property.FontSynthesisSmallCaps | undefined>[] | readonly csstype.Property.FontSynthesisSmallCaps[] | undefined;
        fontSynthesisStyle?: csstype.Property.FontSynthesisStyle | readonly NonNullable<csstype.Property.FontSynthesisStyle | undefined>[] | readonly csstype.Property.FontSynthesisStyle[] | undefined;
        fontSynthesisWeight?: csstype.Property.FontSynthesisWeight | readonly NonNullable<csstype.Property.FontSynthesisWeight | undefined>[] | readonly csstype.Property.FontSynthesisWeight[] | undefined;
        fontVariant?: readonly string[] | csstype.Property.FontVariant | readonly csstype.Property.FontVariant[] | undefined;
        fontVariantAlternates?: readonly string[] | csstype.Property.FontVariantAlternates | readonly csstype.Property.FontVariantAlternates[] | undefined;
        fontVariantCaps?: csstype.Property.FontVariantCaps | readonly NonNullable<csstype.Property.FontVariantCaps | undefined>[] | readonly csstype.Property.FontVariantCaps[] | undefined;
        fontVariantEastAsian?: readonly string[] | csstype.Property.FontVariantEastAsian | readonly csstype.Property.FontVariantEastAsian[] | undefined;
        fontVariantEmoji?: csstype.Property.FontVariantEmoji | readonly NonNullable<csstype.Property.FontVariantEmoji | undefined>[] | readonly csstype.Property.FontVariantEmoji[] | undefined;
        fontVariantLigatures?: readonly string[] | csstype.Property.FontVariantLigatures | readonly csstype.Property.FontVariantLigatures[] | undefined;
        fontVariantNumeric?: readonly string[] | csstype.Property.FontVariantNumeric | readonly csstype.Property.FontVariantNumeric[] | undefined;
        fontVariantPosition?: csstype.Property.FontVariantPosition | readonly NonNullable<csstype.Property.FontVariantPosition | undefined>[] | readonly csstype.Property.FontVariantPosition[] | undefined;
        fontVariationSettings?: readonly string[] | csstype.Property.FontVariationSettings | readonly csstype.Property.FontVariationSettings[] | undefined;
        fontWeight?: csstype.Property.FontWeight | readonly NonNullable<csstype.Property.FontWeight | undefined>[] | readonly ("normal" | "bold" | (string & {}) | csstype.Globals | "bolder" | "lighter")[] | undefined;
        forcedColorAdjust?: csstype.Property.ForcedColorAdjust | readonly NonNullable<csstype.Property.ForcedColorAdjust | undefined>[] | readonly csstype.Property.ForcedColorAdjust[] | undefined;
        gridAutoColumns?: readonly (string | (string & {}))[] | csstype.Property.GridAutoColumns<string | number> | readonly NonNullable<csstype.Property.GridAutoColumns<string | number> | undefined>[] | undefined;
        gridAutoFlow?: readonly string[] | csstype.Property.GridAutoFlow | readonly csstype.Property.GridAutoFlow[] | undefined;
        gridAutoRows?: readonly (string | (string & {}))[] | csstype.Property.GridAutoRows<string | number> | readonly NonNullable<csstype.Property.GridAutoRows<string | number> | undefined>[] | undefined;
        gridColumnEnd?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GridColumnEnd | readonly NonNullable<csstype.Property.GridColumnEnd | undefined>[] | undefined;
        gridColumnStart?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GridColumnStart | readonly NonNullable<csstype.Property.GridColumnStart | undefined>[] | undefined;
        gridRowEnd?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GridRowEnd | readonly NonNullable<csstype.Property.GridRowEnd | undefined>[] | undefined;
        gridRowStart?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GridRowStart | readonly NonNullable<csstype.Property.GridRowStart | undefined>[] | undefined;
        gridTemplateAreas?: readonly string[] | csstype.Property.GridTemplateAreas | readonly csstype.Property.GridTemplateAreas[] | undefined;
        gridTemplateColumns?: readonly (string | (string & {}))[] | csstype.Property.GridTemplateColumns<string | number> | readonly NonNullable<csstype.Property.GridTemplateColumns<string | number> | undefined>[] | undefined;
        gridTemplateRows?: readonly (string | (string & {}))[] | csstype.Property.GridTemplateRows<string | number> | readonly NonNullable<csstype.Property.GridTemplateRows<string | number> | undefined>[] | undefined;
        hangingPunctuation?: readonly string[] | csstype.Property.HangingPunctuation | readonly csstype.Property.HangingPunctuation[] | undefined;
        height?: readonly (string | (string & {}))[] | csstype.Property.Height<string | number> | readonly NonNullable<csstype.Property.Height<string | number> | undefined>[] | undefined;
        hyphenateCharacter?: readonly string[] | csstype.Property.HyphenateCharacter | readonly csstype.Property.HyphenateCharacter[] | undefined;
        hyphenateLimitChars?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.HyphenateLimitChars | readonly NonNullable<csstype.Property.HyphenateLimitChars | undefined>[] | undefined;
        hyphens?: csstype.Property.Hyphens | readonly NonNullable<csstype.Property.Hyphens | undefined>[] | readonly csstype.Property.Hyphens[] | undefined;
        imageOrientation?: readonly string[] | csstype.Property.ImageOrientation | readonly csstype.Property.ImageOrientation[] | undefined;
        imageRendering?: csstype.Property.ImageRendering | readonly NonNullable<csstype.Property.ImageRendering | undefined>[] | readonly csstype.Property.ImageRendering[] | undefined;
        imageResolution?: readonly string[] | csstype.Property.ImageResolution | readonly csstype.Property.ImageResolution[] | undefined;
        initialLetter?: csstype.Property.InitialLetter | readonly NonNullable<csstype.Property.InitialLetter | undefined>[] | readonly ("normal" | (string & {}) | csstype.Globals)[] | undefined;
        inlineSize?: readonly (string | (string & {}))[] | csstype.Property.InlineSize<string | number> | readonly NonNullable<csstype.Property.InlineSize<string | number> | undefined>[] | undefined;
        inputSecurity?: csstype.Property.InputSecurity | readonly NonNullable<csstype.Property.InputSecurity | undefined>[] | readonly csstype.Property.InputSecurity[] | undefined;
        insetBlockEnd?: readonly (string | (string & {}))[] | csstype.Property.InsetBlockEnd<string | number> | readonly NonNullable<csstype.Property.InsetBlockEnd<string | number> | undefined>[] | undefined;
        insetBlockStart?: readonly (string | (string & {}))[] | csstype.Property.InsetBlockStart<string | number> | readonly NonNullable<csstype.Property.InsetBlockStart<string | number> | undefined>[] | undefined;
        insetInlineEnd?: readonly (string | (string & {}))[] | csstype.Property.InsetInlineEnd<string | number> | readonly NonNullable<csstype.Property.InsetInlineEnd<string | number> | undefined>[] | undefined;
        insetInlineStart?: readonly (string | (string & {}))[] | csstype.Property.InsetInlineStart<string | number> | readonly NonNullable<csstype.Property.InsetInlineStart<string | number> | undefined>[] | undefined;
        isolation?: csstype.Property.Isolation | readonly NonNullable<csstype.Property.Isolation | undefined>[] | readonly csstype.Property.Isolation[] | undefined;
        justifyContent?: readonly string[] | csstype.Property.JustifyContent | readonly csstype.Property.JustifyContent[] | undefined;
        justifyItems?: readonly string[] | csstype.Property.JustifyItems | readonly csstype.Property.JustifyItems[] | undefined;
        justifySelf?: readonly string[] | csstype.Property.JustifySelf | readonly csstype.Property.JustifySelf[] | undefined;
        justifyTracks?: readonly string[] | csstype.Property.JustifyTracks | readonly csstype.Property.JustifyTracks[] | undefined;
        left?: readonly (string | (string & {}))[] | csstype.Property.Left<string | number> | readonly NonNullable<csstype.Property.Left<string | number> | undefined>[] | undefined;
        letterSpacing?: readonly string[] | csstype.Property.LetterSpacing<string | number> | readonly NonNullable<csstype.Property.LetterSpacing<string | number> | undefined>[] | undefined;
        lineBreak?: csstype.Property.LineBreak | readonly NonNullable<csstype.Property.LineBreak | undefined>[] | readonly csstype.Property.LineBreak[] | undefined;
        lineHeight?: csstype.Property.LineHeight<string | number> | readonly NonNullable<csstype.Property.LineHeight<string | number> | undefined>[] | readonly (string | (string & {}))[] | undefined;
        lineHeightStep?: readonly string[] | csstype.Property.LineHeightStep<string | number> | readonly NonNullable<csstype.Property.LineHeightStep<string | number> | undefined>[] | undefined;
        listStyleImage?: readonly string[] | csstype.Property.ListStyleImage | readonly csstype.Property.ListStyleImage[] | undefined;
        listStylePosition?: csstype.Property.ListStylePosition | readonly NonNullable<csstype.Property.ListStylePosition | undefined>[] | readonly csstype.Property.ListStylePosition[] | undefined;
        listStyleType?: readonly string[] | csstype.Property.ListStyleType | readonly csstype.Property.ListStyleType[] | undefined;
        marginBlockEnd?: readonly (string | (string & {}))[] | csstype.Property.MarginBlockEnd<string | number> | readonly NonNullable<csstype.Property.MarginBlockEnd<string | number> | undefined>[] | undefined;
        marginBlockStart?: readonly (string | (string & {}))[] | csstype.Property.MarginBlockStart<string | number> | readonly NonNullable<csstype.Property.MarginBlockStart<string | number> | undefined>[] | undefined;
        marginBottom?: readonly (string | (string & {}))[] | csstype.Property.MarginBottom<string | number> | readonly NonNullable<csstype.Property.MarginBottom<string | number> | undefined>[] | undefined;
        marginInlineEnd?: readonly (string | (string & {}))[] | csstype.Property.MarginInlineEnd<string | number> | readonly NonNullable<csstype.Property.MarginInlineEnd<string | number> | undefined>[] | undefined;
        marginInlineStart?: readonly (string | (string & {}))[] | csstype.Property.MarginInlineStart<string | number> | readonly NonNullable<csstype.Property.MarginInlineStart<string | number> | undefined>[] | undefined;
        marginLeft?: readonly (string | (string & {}))[] | csstype.Property.MarginLeft<string | number> | readonly NonNullable<csstype.Property.MarginLeft<string | number> | undefined>[] | undefined;
        marginRight?: readonly (string | (string & {}))[] | csstype.Property.MarginRight<string | number> | readonly NonNullable<csstype.Property.MarginRight<string | number> | undefined>[] | undefined;
        marginTop?: readonly (string | (string & {}))[] | csstype.Property.MarginTop<string | number> | readonly NonNullable<csstype.Property.MarginTop<string | number> | undefined>[] | undefined;
        marginTrim?: csstype.Property.MarginTrim | readonly NonNullable<csstype.Property.MarginTrim | undefined>[] | readonly csstype.Property.MarginTrim[] | undefined;
        maskBorderMode?: csstype.Property.MaskBorderMode | readonly NonNullable<csstype.Property.MaskBorderMode | undefined>[] | readonly csstype.Property.MaskBorderMode[] | undefined;
        maskBorderOutset?: readonly (string | (string & {}))[] | csstype.Property.MaskBorderOutset<string | number> | readonly NonNullable<csstype.Property.MaskBorderOutset<string | number> | undefined>[] | undefined;
        maskBorderRepeat?: readonly string[] | csstype.Property.MaskBorderRepeat | readonly csstype.Property.MaskBorderRepeat[] | undefined;
        maskBorderSlice?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.MaskBorderSlice | readonly NonNullable<csstype.Property.MaskBorderSlice | undefined>[] | undefined;
        maskBorderSource?: readonly string[] | csstype.Property.MaskBorderSource | readonly csstype.Property.MaskBorderSource[] | undefined;
        maskBorderWidth?: readonly (string | (string & {}))[] | csstype.Property.MaskBorderWidth<string | number> | readonly NonNullable<csstype.Property.MaskBorderWidth<string | number> | undefined>[] | undefined;
        maskClip?: readonly string[] | csstype.Property.MaskClip | readonly csstype.Property.MaskClip[] | undefined;
        maskComposite?: readonly string[] | csstype.Property.MaskComposite | readonly csstype.Property.MaskComposite[] | undefined;
        maskImage?: readonly string[] | csstype.Property.MaskImage | readonly csstype.Property.MaskImage[] | undefined;
        maskMode?: readonly string[] | csstype.Property.MaskMode | readonly csstype.Property.MaskMode[] | undefined;
        maskOrigin?: readonly string[] | csstype.Property.MaskOrigin | readonly csstype.Property.MaskOrigin[] | undefined;
        maskPosition?: readonly (string | (string & {}))[] | csstype.Property.MaskPosition<string | number> | readonly NonNullable<csstype.Property.MaskPosition<string | number> | undefined>[] | undefined;
        maskRepeat?: readonly string[] | csstype.Property.MaskRepeat | readonly csstype.Property.MaskRepeat[] | undefined;
        maskSize?: readonly (string | (string & {}))[] | csstype.Property.MaskSize<string | number> | readonly NonNullable<csstype.Property.MaskSize<string | number> | undefined>[] | undefined;
        maskType?: csstype.Property.MaskType | readonly NonNullable<csstype.Property.MaskType | undefined>[] | readonly csstype.Property.MaskType[] | undefined;
        masonryAutoFlow?: readonly string[] | csstype.Property.MasonryAutoFlow | readonly csstype.Property.MasonryAutoFlow[] | undefined;
        mathDepth?: csstype.Property.MathDepth | readonly NonNullable<csstype.Property.MathDepth | undefined>[] | readonly ((string & {}) | csstype.Globals | "auto-add")[] | undefined;
        mathShift?: csstype.Property.MathShift | readonly NonNullable<csstype.Property.MathShift | undefined>[] | readonly csstype.Property.MathShift[] | undefined;
        mathStyle?: csstype.Property.MathStyle | readonly NonNullable<csstype.Property.MathStyle | undefined>[] | readonly csstype.Property.MathStyle[] | undefined;
        maxBlockSize?: readonly (string | (string & {}))[] | csstype.Property.MaxBlockSize<string | number> | readonly NonNullable<csstype.Property.MaxBlockSize<string | number> | undefined>[] | undefined;
        maxHeight?: readonly (string | (string & {}))[] | csstype.Property.MaxHeight<string | number> | readonly NonNullable<csstype.Property.MaxHeight<string | number> | undefined>[] | undefined;
        maxInlineSize?: readonly (string | (string & {}))[] | csstype.Property.MaxInlineSize<string | number> | readonly NonNullable<csstype.Property.MaxInlineSize<string | number> | undefined>[] | undefined;
        maxLines?: csstype.Property.MaxLines | readonly NonNullable<csstype.Property.MaxLines | undefined>[] | readonly ("none" | (string & {}) | csstype.Globals)[] | undefined;
        maxWidth?: readonly (string | (string & {}))[] | csstype.Property.MaxWidth<string | number> | readonly NonNullable<csstype.Property.MaxWidth<string | number> | undefined>[] | undefined;
        minBlockSize?: readonly (string | (string & {}))[] | csstype.Property.MinBlockSize<string | number> | readonly NonNullable<csstype.Property.MinBlockSize<string | number> | undefined>[] | undefined;
        minHeight?: readonly (string | (string & {}))[] | csstype.Property.MinHeight<string | number> | readonly NonNullable<csstype.Property.MinHeight<string | number> | undefined>[] | undefined;
        minInlineSize?: readonly (string | (string & {}))[] | csstype.Property.MinInlineSize<string | number> | readonly NonNullable<csstype.Property.MinInlineSize<string | number> | undefined>[] | undefined;
        minWidth?: readonly (string | (string & {}))[] | csstype.Property.MinWidth<string | number> | readonly NonNullable<csstype.Property.MinWidth<string | number> | undefined>[] | undefined;
        mixBlendMode?: csstype.Property.MixBlendMode | readonly NonNullable<csstype.Property.MixBlendMode | undefined>[] | readonly csstype.Property.MixBlendMode[] | undefined;
        motionDistance?: readonly (string | (string & {}))[] | csstype.Property.OffsetDistance<string | number> | readonly NonNullable<csstype.Property.OffsetDistance<string | number> | undefined>[] | undefined;
        motionPath?: readonly string[] | csstype.Property.OffsetPath | readonly csstype.Property.OffsetPath[] | undefined;
        motionRotation?: readonly string[] | csstype.Property.OffsetRotate | readonly csstype.Property.OffsetRotate[] | undefined;
        objectFit?: csstype.Property.ObjectFit | readonly NonNullable<csstype.Property.ObjectFit | undefined>[] | readonly csstype.Property.ObjectFit[] | undefined;
        objectPosition?: readonly (string | (string & {}))[] | csstype.Property.ObjectPosition<string | number> | readonly NonNullable<csstype.Property.ObjectPosition<string | number> | undefined>[] | undefined;
        offsetAnchor?: readonly (string | (string & {}))[] | csstype.Property.OffsetAnchor<string | number> | readonly NonNullable<csstype.Property.OffsetAnchor<string | number> | undefined>[] | undefined;
        offsetDistance?: readonly (string | (string & {}))[] | csstype.Property.OffsetDistance<string | number> | readonly NonNullable<csstype.Property.OffsetDistance<string | number> | undefined>[] | undefined;
        offsetPath?: readonly string[] | csstype.Property.OffsetPath | readonly csstype.Property.OffsetPath[] | undefined;
        offsetPosition?: readonly (string | (string & {}))[] | csstype.Property.OffsetPosition<string | number> | readonly NonNullable<csstype.Property.OffsetPosition<string | number> | undefined>[] | undefined;
        offsetRotate?: readonly string[] | csstype.Property.OffsetRotate | readonly csstype.Property.OffsetRotate[] | undefined;
        offsetRotation?: readonly string[] | csstype.Property.OffsetRotate | readonly csstype.Property.OffsetRotate[] | undefined;
        opacity?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Opacity | readonly NonNullable<csstype.Property.Opacity | undefined>[] | undefined;
        order?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Order | readonly NonNullable<csstype.Property.Order | undefined>[] | undefined;
        orphans?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Orphans | readonly NonNullable<csstype.Property.Orphans | undefined>[] | undefined;
        outlineColor?: readonly string[] | csstype.Property.OutlineColor | readonly csstype.Property.OutlineColor[] | undefined;
        outlineOffset?: readonly string[] | csstype.Property.OutlineOffset<string | number> | readonly NonNullable<csstype.Property.OutlineOffset<string | number> | undefined>[] | undefined;
        outlineStyle?: readonly string[] | csstype.Property.OutlineStyle | readonly csstype.Property.OutlineStyle[] | undefined;
        outlineWidth?: readonly string[] | csstype.Property.OutlineWidth<string | number> | readonly NonNullable<csstype.Property.OutlineWidth<string | number> | undefined>[] | undefined;
        overflowAnchor?: csstype.Property.OverflowAnchor | readonly NonNullable<csstype.Property.OverflowAnchor | undefined>[] | readonly csstype.Property.OverflowAnchor[] | undefined;
        overflowBlock?: csstype.Property.OverflowBlock | readonly NonNullable<csstype.Property.OverflowBlock | undefined>[] | readonly csstype.Property.OverflowBlock[] | undefined;
        overflowClipBox?: csstype.Property.OverflowClipBox | readonly NonNullable<csstype.Property.OverflowClipBox | undefined>[] | readonly csstype.Property.OverflowClipBox[] | undefined;
        overflowClipMargin?: readonly (string | (string & {}))[] | csstype.Property.OverflowClipMargin<string | number> | readonly NonNullable<csstype.Property.OverflowClipMargin<string | number> | undefined>[] | undefined;
        overflowInline?: csstype.Property.OverflowInline | readonly NonNullable<csstype.Property.OverflowInline | undefined>[] | readonly csstype.Property.OverflowInline[] | undefined;
        overflowWrap?: csstype.Property.OverflowWrap | readonly NonNullable<csstype.Property.OverflowWrap | undefined>[] | readonly csstype.Property.OverflowWrap[] | undefined;
        overflowX?: csstype.Property.OverflowX | readonly NonNullable<csstype.Property.OverflowX | undefined>[] | readonly csstype.Property.OverflowX[] | undefined;
        overflowY?: csstype.Property.OverflowY | readonly NonNullable<csstype.Property.OverflowY | undefined>[] | readonly csstype.Property.OverflowY[] | undefined;
        overlay?: csstype.Property.Overlay | readonly NonNullable<csstype.Property.Overlay | undefined>[] | readonly csstype.Property.Overlay[] | undefined;
        overscrollBehaviorBlock?: csstype.Property.OverscrollBehaviorBlock | readonly NonNullable<csstype.Property.OverscrollBehaviorBlock | undefined>[] | readonly csstype.Property.OverscrollBehaviorBlock[] | undefined;
        overscrollBehaviorInline?: csstype.Property.OverscrollBehaviorInline | readonly NonNullable<csstype.Property.OverscrollBehaviorInline | undefined>[] | readonly csstype.Property.OverscrollBehaviorInline[] | undefined;
        overscrollBehaviorX?: csstype.Property.OverscrollBehaviorX | readonly NonNullable<csstype.Property.OverscrollBehaviorX | undefined>[] | readonly csstype.Property.OverscrollBehaviorX[] | undefined;
        overscrollBehaviorY?: csstype.Property.OverscrollBehaviorY | readonly NonNullable<csstype.Property.OverscrollBehaviorY | undefined>[] | readonly csstype.Property.OverscrollBehaviorY[] | undefined;
        paddingBlockEnd?: readonly (string | (string & {}))[] | csstype.Property.PaddingBlockEnd<string | number> | readonly NonNullable<csstype.Property.PaddingBlockEnd<string | number> | undefined>[] | undefined;
        paddingBlockStart?: readonly (string | (string & {}))[] | csstype.Property.PaddingBlockStart<string | number> | readonly NonNullable<csstype.Property.PaddingBlockStart<string | number> | undefined>[] | undefined;
        paddingBottom?: readonly (string | (string & {}))[] | csstype.Property.PaddingBottom<string | number> | readonly NonNullable<csstype.Property.PaddingBottom<string | number> | undefined>[] | undefined;
        paddingInlineEnd?: readonly (string | (string & {}))[] | csstype.Property.PaddingInlineEnd<string | number> | readonly NonNullable<csstype.Property.PaddingInlineEnd<string | number> | undefined>[] | undefined;
        paddingInlineStart?: readonly (string | (string & {}))[] | csstype.Property.PaddingInlineStart<string | number> | readonly NonNullable<csstype.Property.PaddingInlineStart<string | number> | undefined>[] | undefined;
        paddingLeft?: readonly (string | (string & {}))[] | csstype.Property.PaddingLeft<string | number> | readonly NonNullable<csstype.Property.PaddingLeft<string | number> | undefined>[] | undefined;
        paddingRight?: readonly (string | (string & {}))[] | csstype.Property.PaddingRight<string | number> | readonly NonNullable<csstype.Property.PaddingRight<string | number> | undefined>[] | undefined;
        paddingTop?: readonly (string | (string & {}))[] | csstype.Property.PaddingTop<string | number> | readonly NonNullable<csstype.Property.PaddingTop<string | number> | undefined>[] | undefined;
        page?: readonly string[] | csstype.Property.Page | readonly csstype.Property.Page[] | undefined;
        pageBreakAfter?: csstype.Property.PageBreakAfter | readonly NonNullable<csstype.Property.PageBreakAfter | undefined>[] | readonly csstype.Property.PageBreakAfter[] | undefined;
        pageBreakBefore?: csstype.Property.PageBreakBefore | readonly NonNullable<csstype.Property.PageBreakBefore | undefined>[] | readonly csstype.Property.PageBreakBefore[] | undefined;
        pageBreakInside?: csstype.Property.PageBreakInside | readonly NonNullable<csstype.Property.PageBreakInside | undefined>[] | readonly csstype.Property.PageBreakInside[] | undefined;
        paintOrder?: readonly string[] | csstype.Property.PaintOrder | readonly csstype.Property.PaintOrder[] | undefined;
        perspective?: readonly string[] | csstype.Property.Perspective<string | number> | readonly NonNullable<csstype.Property.Perspective<string | number> | undefined>[] | undefined;
        perspectiveOrigin?: readonly (string | (string & {}))[] | csstype.Property.PerspectiveOrigin<string | number> | readonly NonNullable<csstype.Property.PerspectiveOrigin<string | number> | undefined>[] | undefined;
        pointerEvents?: csstype.Property.PointerEvents | readonly NonNullable<csstype.Property.PointerEvents | undefined>[] | readonly csstype.Property.PointerEvents[] | undefined;
        position?: csstype.Property.Position | readonly NonNullable<csstype.Property.Position | undefined>[] | readonly csstype.Property.Position[] | undefined;
        printColorAdjust?: csstype.Property.PrintColorAdjust | readonly NonNullable<csstype.Property.PrintColorAdjust | undefined>[] | readonly csstype.Property.PrintColorAdjust[] | undefined;
        quotes?: readonly string[] | csstype.Property.Quotes | readonly csstype.Property.Quotes[] | undefined;
        resize?: csstype.Property.Resize | readonly NonNullable<csstype.Property.Resize | undefined>[] | readonly csstype.Property.Resize[] | undefined;
        right?: readonly (string | (string & {}))[] | csstype.Property.Right<string | number> | readonly NonNullable<csstype.Property.Right<string | number> | undefined>[] | undefined;
        rotate?: readonly string[] | csstype.Property.Rotate | readonly csstype.Property.Rotate[] | undefined;
        rowGap?: readonly (string | (string & {}))[] | csstype.Property.RowGap<string | number> | readonly NonNullable<csstype.Property.RowGap<string | number> | undefined>[] | undefined;
        rubyAlign?: csstype.Property.RubyAlign | readonly NonNullable<csstype.Property.RubyAlign | undefined>[] | readonly csstype.Property.RubyAlign[] | undefined;
        rubyMerge?: csstype.Property.RubyMerge | readonly NonNullable<csstype.Property.RubyMerge | undefined>[] | readonly csstype.Property.RubyMerge[] | undefined;
        rubyPosition?: readonly string[] | csstype.Property.RubyPosition | readonly csstype.Property.RubyPosition[] | undefined;
        scale?: readonly ("none" | (string & {}) | csstype.Globals)[] | csstype.Property.Scale | readonly NonNullable<csstype.Property.Scale | undefined>[] | undefined;
        scrollBehavior?: csstype.Property.ScrollBehavior | readonly NonNullable<csstype.Property.ScrollBehavior | undefined>[] | readonly csstype.Property.ScrollBehavior[] | undefined;
        scrollMarginBlockEnd?: readonly string[] | csstype.Property.ScrollMarginBlockEnd<string | number> | readonly NonNullable<csstype.Property.ScrollMarginBlockEnd<string | number> | undefined>[] | undefined;
        scrollMarginBlockStart?: readonly string[] | csstype.Property.ScrollMarginBlockStart<string | number> | readonly NonNullable<csstype.Property.ScrollMarginBlockStart<string | number> | undefined>[] | undefined;
        scrollMarginBottom?: readonly string[] | csstype.Property.ScrollMarginBottom<string | number> | readonly NonNullable<csstype.Property.ScrollMarginBottom<string | number> | undefined>[] | undefined;
        scrollMarginInlineEnd?: readonly string[] | csstype.Property.ScrollMarginInlineEnd<string | number> | readonly NonNullable<csstype.Property.ScrollMarginInlineEnd<string | number> | undefined>[] | undefined;
        scrollMarginInlineStart?: readonly string[] | csstype.Property.ScrollMarginInlineStart<string | number> | readonly NonNullable<csstype.Property.ScrollMarginInlineStart<string | number> | undefined>[] | undefined;
        scrollMarginLeft?: readonly string[] | csstype.Property.ScrollMarginLeft<string | number> | readonly NonNullable<csstype.Property.ScrollMarginLeft<string | number> | undefined>[] | undefined;
        scrollMarginRight?: readonly string[] | csstype.Property.ScrollMarginRight<string | number> | readonly NonNullable<csstype.Property.ScrollMarginRight<string | number> | undefined>[] | undefined;
        scrollMarginTop?: readonly string[] | csstype.Property.ScrollMarginTop<string | number> | readonly NonNullable<csstype.Property.ScrollMarginTop<string | number> | undefined>[] | undefined;
        scrollPaddingBlockEnd?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingBlockEnd<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingBlockEnd<string | number> | undefined>[] | undefined;
        scrollPaddingBlockStart?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingBlockStart<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingBlockStart<string | number> | undefined>[] | undefined;
        scrollPaddingBottom?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingBottom<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingBottom<string | number> | undefined>[] | undefined;
        scrollPaddingInlineEnd?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingInlineEnd<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingInlineEnd<string | number> | undefined>[] | undefined;
        scrollPaddingInlineStart?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingInlineStart<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingInlineStart<string | number> | undefined>[] | undefined;
        scrollPaddingLeft?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingLeft<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingLeft<string | number> | undefined>[] | undefined;
        scrollPaddingRight?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingRight<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingRight<string | number> | undefined>[] | undefined;
        scrollPaddingTop?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingTop<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingTop<string | number> | undefined>[] | undefined;
        scrollSnapAlign?: readonly string[] | csstype.Property.ScrollSnapAlign | readonly csstype.Property.ScrollSnapAlign[] | undefined;
        scrollSnapMarginBottom?: readonly string[] | csstype.Property.ScrollMarginBottom<string | number> | readonly NonNullable<csstype.Property.ScrollMarginBottom<string | number> | undefined>[] | undefined;
        scrollSnapMarginLeft?: readonly string[] | csstype.Property.ScrollMarginLeft<string | number> | readonly NonNullable<csstype.Property.ScrollMarginLeft<string | number> | undefined>[] | undefined;
        scrollSnapMarginRight?: readonly string[] | csstype.Property.ScrollMarginRight<string | number> | readonly NonNullable<csstype.Property.ScrollMarginRight<string | number> | undefined>[] | undefined;
        scrollSnapMarginTop?: readonly string[] | csstype.Property.ScrollMarginTop<string | number> | readonly NonNullable<csstype.Property.ScrollMarginTop<string | number> | undefined>[] | undefined;
        scrollSnapStop?: csstype.Property.ScrollSnapStop | readonly NonNullable<csstype.Property.ScrollSnapStop | undefined>[] | readonly csstype.Property.ScrollSnapStop[] | undefined;
        scrollSnapType?: readonly string[] | csstype.Property.ScrollSnapType | readonly csstype.Property.ScrollSnapType[] | undefined;
        scrollTimelineAxis?: readonly string[] | csstype.Property.ScrollTimelineAxis | readonly csstype.Property.ScrollTimelineAxis[] | undefined;
        scrollTimelineName?: readonly string[] | csstype.Property.ScrollTimelineName | readonly csstype.Property.ScrollTimelineName[] | undefined;
        scrollbarColor?: readonly string[] | csstype.Property.ScrollbarColor | readonly csstype.Property.ScrollbarColor[] | undefined;
        scrollbarGutter?: readonly string[] | csstype.Property.ScrollbarGutter | readonly csstype.Property.ScrollbarGutter[] | undefined;
        scrollbarWidth?: csstype.Property.ScrollbarWidth | readonly NonNullable<csstype.Property.ScrollbarWidth | undefined>[] | readonly csstype.Property.ScrollbarWidth[] | undefined;
        shapeImageThreshold?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.ShapeImageThreshold | readonly NonNullable<csstype.Property.ShapeImageThreshold | undefined>[] | undefined;
        shapeMargin?: readonly (string | (string & {}))[] | csstype.Property.ShapeMargin<string | number> | readonly NonNullable<csstype.Property.ShapeMargin<string | number> | undefined>[] | undefined;
        shapeOutside?: readonly string[] | csstype.Property.ShapeOutside | readonly csstype.Property.ShapeOutside[] | undefined;
        tabSize?: readonly (string | (string & {}))[] | csstype.Property.TabSize<string | number> | readonly NonNullable<csstype.Property.TabSize<string | number> | undefined>[] | undefined;
        tableLayout?: csstype.Property.TableLayout | readonly NonNullable<csstype.Property.TableLayout | undefined>[] | readonly csstype.Property.TableLayout[] | undefined;
        textAlign?: csstype.Property.TextAlign | readonly NonNullable<csstype.Property.TextAlign | undefined>[] | readonly csstype.Property.TextAlign[] | undefined;
        textAlignLast?: csstype.Property.TextAlignLast | readonly NonNullable<csstype.Property.TextAlignLast | undefined>[] | readonly csstype.Property.TextAlignLast[] | undefined;
        textCombineUpright?: readonly string[] | csstype.Property.TextCombineUpright | readonly csstype.Property.TextCombineUpright[] | undefined;
        textDecorationColor?: readonly string[] | csstype.Property.TextDecorationColor | readonly csstype.Property.TextDecorationColor[] | undefined;
        textDecorationLine?: readonly string[] | csstype.Property.TextDecorationLine | readonly csstype.Property.TextDecorationLine[] | undefined;
        textDecorationSkip?: readonly string[] | csstype.Property.TextDecorationSkip | readonly csstype.Property.TextDecorationSkip[] | undefined;
        textDecorationSkipInk?: csstype.Property.TextDecorationSkipInk | readonly NonNullable<csstype.Property.TextDecorationSkipInk | undefined>[] | readonly csstype.Property.TextDecorationSkipInk[] | undefined;
        textDecorationStyle?: csstype.Property.TextDecorationStyle | readonly NonNullable<csstype.Property.TextDecorationStyle | undefined>[] | readonly csstype.Property.TextDecorationStyle[] | undefined;
        textDecorationThickness?: readonly (string | (string & {}))[] | csstype.Property.TextDecorationThickness<string | number> | readonly NonNullable<csstype.Property.TextDecorationThickness<string | number> | undefined>[] | undefined;
        textEmphasisColor?: readonly string[] | csstype.Property.TextEmphasisColor | readonly csstype.Property.TextEmphasisColor[] | undefined;
        textEmphasisPosition?: readonly string[] | csstype.Property.TextEmphasisPosition | readonly csstype.Property.TextEmphasisPosition[] | undefined;
        textEmphasisStyle?: readonly string[] | csstype.Property.TextEmphasisStyle | readonly csstype.Property.TextEmphasisStyle[] | undefined;
        textIndent?: readonly (string | (string & {}))[] | csstype.Property.TextIndent<string | number> | readonly NonNullable<csstype.Property.TextIndent<string | number> | undefined>[] | undefined;
        textJustify?: csstype.Property.TextJustify | readonly NonNullable<csstype.Property.TextJustify | undefined>[] | readonly csstype.Property.TextJustify[] | undefined;
        textOrientation?: csstype.Property.TextOrientation | readonly NonNullable<csstype.Property.TextOrientation | undefined>[] | readonly csstype.Property.TextOrientation[] | undefined;
        textOverflow?: readonly string[] | csstype.Property.TextOverflow | readonly csstype.Property.TextOverflow[] | undefined;
        textRendering?: csstype.Property.TextRendering | readonly NonNullable<csstype.Property.TextRendering | undefined>[] | readonly csstype.Property.TextRendering[] | undefined;
        textShadow?: readonly string[] | csstype.Property.TextShadow | readonly csstype.Property.TextShadow[] | undefined;
        textSizeAdjust?: readonly string[] | csstype.Property.TextSizeAdjust | readonly csstype.Property.TextSizeAdjust[] | undefined;
        textTransform?: csstype.Property.TextTransform | readonly NonNullable<csstype.Property.TextTransform | undefined>[] | readonly csstype.Property.TextTransform[] | undefined;
        textUnderlineOffset?: readonly (string | (string & {}))[] | csstype.Property.TextUnderlineOffset<string | number> | readonly NonNullable<csstype.Property.TextUnderlineOffset<string | number> | undefined>[] | undefined;
        textUnderlinePosition?: readonly string[] | csstype.Property.TextUnderlinePosition | readonly csstype.Property.TextUnderlinePosition[] | undefined;
        textWrap?: csstype.Property.TextWrap | readonly NonNullable<csstype.Property.TextWrap | undefined>[] | readonly csstype.Property.TextWrap[] | undefined;
        timelineScope?: readonly string[] | csstype.Property.TimelineScope | readonly csstype.Property.TimelineScope[] | undefined;
        top?: readonly (string | (string & {}))[] | csstype.Property.Top<string | number> | readonly NonNullable<csstype.Property.Top<string | number> | undefined>[] | undefined;
        touchAction?: readonly string[] | csstype.Property.TouchAction | readonly csstype.Property.TouchAction[] | undefined;
        transform?: readonly string[] | csstype.Property.Transform | readonly csstype.Property.Transform[] | undefined;
        transformBox?: csstype.Property.TransformBox | readonly NonNullable<csstype.Property.TransformBox | undefined>[] | readonly csstype.Property.TransformBox[] | undefined;
        transformOrigin?: readonly (string | (string & {}))[] | csstype.Property.TransformOrigin<string | number> | readonly NonNullable<csstype.Property.TransformOrigin<string | number> | undefined>[] | undefined;
        transformStyle?: csstype.Property.TransformStyle | readonly NonNullable<csstype.Property.TransformStyle | undefined>[] | readonly csstype.Property.TransformStyle[] | undefined;
        transitionBehavior?: readonly string[] | csstype.Property.TransitionBehavior | readonly csstype.Property.TransitionBehavior[] | undefined;
        transitionDelay?: readonly string[] | csstype.Property.TransitionDelay<string & {}> | readonly csstype.Property.TransitionDelay<string & {}>[] | undefined;
        transitionDuration?: readonly string[] | csstype.Property.TransitionDuration<string & {}> | readonly csstype.Property.TransitionDuration<string & {}>[] | undefined;
        transitionProperty?: readonly string[] | csstype.Property.TransitionProperty | readonly csstype.Property.TransitionProperty[] | undefined;
        transitionTimingFunction?: readonly string[] | csstype.Property.TransitionTimingFunction | readonly csstype.Property.TransitionTimingFunction[] | undefined;
        translate?: readonly (string | (string & {}))[] | csstype.Property.Translate<string | number> | readonly NonNullable<csstype.Property.Translate<string | number> | undefined>[] | undefined;
        unicodeBidi?: csstype.Property.UnicodeBidi | readonly NonNullable<csstype.Property.UnicodeBidi | undefined>[] | readonly csstype.Property.UnicodeBidi[] | undefined;
        userSelect?: csstype.Property.UserSelect | readonly NonNullable<csstype.Property.UserSelect | undefined>[] | readonly csstype.Property.UserSelect[] | undefined;
        verticalAlign?: readonly (string | (string & {}))[] | csstype.Property.VerticalAlign<string | number> | readonly NonNullable<csstype.Property.VerticalAlign<string | number> | undefined>[] | undefined;
        viewTimelineAxis?: readonly string[] | csstype.Property.ViewTimelineAxis | readonly csstype.Property.ViewTimelineAxis[] | undefined;
        viewTimelineInset?: readonly (string | (string & {}))[] | csstype.Property.ViewTimelineInset<string | number> | readonly NonNullable<csstype.Property.ViewTimelineInset<string | number> | undefined>[] | undefined;
        viewTimelineName?: readonly string[] | csstype.Property.ViewTimelineName | readonly csstype.Property.ViewTimelineName[] | undefined;
        viewTransitionName?: readonly string[] | csstype.Property.ViewTransitionName | readonly csstype.Property.ViewTransitionName[] | undefined;
        visibility?: csstype.Property.Visibility | readonly NonNullable<csstype.Property.Visibility | undefined>[] | readonly csstype.Property.Visibility[] | undefined;
        whiteSpace?: readonly string[] | csstype.Property.WhiteSpace | readonly csstype.Property.WhiteSpace[] | undefined;
        whiteSpaceCollapse?: csstype.Property.WhiteSpaceCollapse | readonly NonNullable<csstype.Property.WhiteSpaceCollapse | undefined>[] | readonly csstype.Property.WhiteSpaceCollapse[] | undefined;
        whiteSpaceTrim?: readonly string[] | csstype.Property.WhiteSpaceTrim | readonly csstype.Property.WhiteSpaceTrim[] | undefined;
        widows?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Widows | readonly NonNullable<csstype.Property.Widows | undefined>[] | undefined;
        width?: readonly (string | (string & {}))[] | csstype.Property.Width<string | number> | readonly NonNullable<csstype.Property.Width<string | number> | undefined>[] | undefined;
        willChange?: readonly string[] | csstype.Property.WillChange | readonly csstype.Property.WillChange[] | undefined;
        wordBreak?: csstype.Property.WordBreak | readonly NonNullable<csstype.Property.WordBreak | undefined>[] | readonly csstype.Property.WordBreak[] | undefined;
        wordSpacing?: readonly string[] | csstype.Property.WordSpacing<string | number> | readonly NonNullable<csstype.Property.WordSpacing<string | number> | undefined>[] | undefined;
        wordWrap?: csstype.Property.WordWrap | readonly NonNullable<csstype.Property.WordWrap | undefined>[] | readonly csstype.Property.WordWrap[] | undefined;
        writingMode?: csstype.Property.WritingMode | readonly NonNullable<csstype.Property.WritingMode | undefined>[] | readonly csstype.Property.WritingMode[] | undefined;
        zIndex?: csstype.Property.ZIndex | readonly NonNullable<csstype.Property.ZIndex | undefined>[] | readonly ("auto" | (string & {}) | csstype.Globals)[] | undefined;
        zoom?: csstype.Property.Zoom | readonly NonNullable<csstype.Property.Zoom | undefined>[] | readonly ("normal" | (string & {}) | csstype.Globals | "reset")[] | undefined;
        all?: csstype.Globals | readonly NonNullable<csstype.Globals | undefined>[] | readonly csstype.Globals[] | undefined;
        animation?: csstype.Property.Animation<string & {}> | readonly NonNullable<csstype.Property.Animation<string & {}> | undefined>[] | readonly ("linear" | "auto" | "none" | "normal" | "reverse" | "paused" | (string & {}) | csstype.Globals | "both" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-end" | "step-start" | "backwards" | "forwards" | "alternate" | "alternate-reverse" | "infinite" | "running")[] | undefined;
        animationRange?: readonly (string | (string & {}))[] | csstype.Property.AnimationRange<string | number> | readonly NonNullable<csstype.Property.AnimationRange<string | number> | undefined>[] | undefined;
        background?: readonly (string | (string & {}))[] | csstype.Property.Background<string | number> | readonly NonNullable<csstype.Property.Background<string | number> | undefined>[] | undefined;
        backgroundPosition?: readonly (string | (string & {}))[] | csstype.Property.BackgroundPosition<string | number> | readonly NonNullable<csstype.Property.BackgroundPosition<string | number> | undefined>[] | undefined;
        border?: readonly (string | (string & {}))[] | csstype.Property.Border<string | number> | readonly NonNullable<csstype.Property.Border<string | number> | undefined>[] | undefined;
        borderBlock?: readonly (string | (string & {}))[] | csstype.Property.BorderBlock<string | number> | readonly NonNullable<csstype.Property.BorderBlock<string | number> | undefined>[] | undefined;
        borderBlockEnd?: readonly (string | (string & {}))[] | csstype.Property.BorderBlockEnd<string | number> | readonly NonNullable<csstype.Property.BorderBlockEnd<string | number> | undefined>[] | undefined;
        borderBlockStart?: readonly (string | (string & {}))[] | csstype.Property.BorderBlockStart<string | number> | readonly NonNullable<csstype.Property.BorderBlockStart<string | number> | undefined>[] | undefined;
        borderBottom?: readonly (string | (string & {}))[] | csstype.Property.BorderBottom<string | number> | readonly NonNullable<csstype.Property.BorderBottom<string | number> | undefined>[] | undefined;
        borderColor?: readonly string[] | csstype.Property.BorderColor | readonly csstype.Property.BorderColor[] | undefined;
        borderImage?: csstype.Property.BorderImage | readonly NonNullable<csstype.Property.BorderImage | undefined>[] | readonly ("none" | "repeat" | (string & {}) | csstype.Globals | "round" | "space" | "stretch")[] | undefined;
        borderInline?: readonly (string | (string & {}))[] | csstype.Property.BorderInline<string | number> | readonly NonNullable<csstype.Property.BorderInline<string | number> | undefined>[] | undefined;
        borderInlineEnd?: readonly (string | (string & {}))[] | csstype.Property.BorderInlineEnd<string | number> | readonly NonNullable<csstype.Property.BorderInlineEnd<string | number> | undefined>[] | undefined;
        borderInlineStart?: readonly (string | (string & {}))[] | csstype.Property.BorderInlineStart<string | number> | readonly NonNullable<csstype.Property.BorderInlineStart<string | number> | undefined>[] | undefined;
        borderLeft?: readonly (string | (string & {}))[] | csstype.Property.BorderLeft<string | number> | readonly NonNullable<csstype.Property.BorderLeft<string | number> | undefined>[] | undefined;
        borderRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderRadius<string | number> | readonly NonNullable<csstype.Property.BorderRadius<string | number> | undefined>[] | undefined;
        borderRight?: readonly (string | (string & {}))[] | csstype.Property.BorderRight<string | number> | readonly NonNullable<csstype.Property.BorderRight<string | number> | undefined>[] | undefined;
        borderStyle?: readonly string[] | csstype.Property.BorderStyle | readonly csstype.Property.BorderStyle[] | undefined;
        borderTop?: readonly (string | (string & {}))[] | csstype.Property.BorderTop<string | number> | readonly NonNullable<csstype.Property.BorderTop<string | number> | undefined>[] | undefined;
        borderWidth?: readonly (string | (string & {}))[] | csstype.Property.BorderWidth<string | number> | readonly NonNullable<csstype.Property.BorderWidth<string | number> | undefined>[] | undefined;
        caret?: readonly string[] | csstype.Property.Caret | readonly csstype.Property.Caret[] | undefined;
        columnRule?: readonly (string | (string & {}))[] | csstype.Property.ColumnRule<string | number> | readonly NonNullable<csstype.Property.ColumnRule<string | number> | undefined>[] | undefined;
        columns?: readonly (string | (string & {}))[] | csstype.Property.Columns<string | number> | readonly NonNullable<csstype.Property.Columns<string | number> | undefined>[] | undefined;
        containIntrinsicSize?: readonly (string | (string & {}))[] | csstype.Property.ContainIntrinsicSize<string | number> | readonly NonNullable<csstype.Property.ContainIntrinsicSize<string | number> | undefined>[] | undefined;
        container?: readonly string[] | csstype.Property.Container | readonly csstype.Property.Container[] | undefined;
        flex?: readonly (string | (string & {}))[] | csstype.Property.Flex<string | number> | readonly NonNullable<csstype.Property.Flex<string | number> | undefined>[] | undefined;
        flexFlow?: readonly string[] | csstype.Property.FlexFlow | readonly csstype.Property.FlexFlow[] | undefined;
        font?: readonly string[] | csstype.Property.Font | readonly csstype.Property.Font[] | undefined;
        gap?: readonly (string | (string & {}))[] | csstype.Property.Gap<string | number> | readonly NonNullable<csstype.Property.Gap<string | number> | undefined>[] | undefined;
        grid?: readonly string[] | csstype.Property.Grid | readonly csstype.Property.Grid[] | undefined;
        gridArea?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GridArea | readonly NonNullable<csstype.Property.GridArea | undefined>[] | undefined;
        gridColumn?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GridColumn | readonly NonNullable<csstype.Property.GridColumn | undefined>[] | undefined;
        gridRow?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GridRow | readonly NonNullable<csstype.Property.GridRow | undefined>[] | undefined;
        gridTemplate?: readonly string[] | csstype.Property.GridTemplate | readonly csstype.Property.GridTemplate[] | undefined;
        inset?: readonly (string | (string & {}))[] | csstype.Property.Inset<string | number> | readonly NonNullable<csstype.Property.Inset<string | number> | undefined>[] | undefined;
        insetBlock?: readonly (string | (string & {}))[] | csstype.Property.InsetBlock<string | number> | readonly NonNullable<csstype.Property.InsetBlock<string | number> | undefined>[] | undefined;
        insetInline?: readonly (string | (string & {}))[] | csstype.Property.InsetInline<string | number> | readonly NonNullable<csstype.Property.InsetInline<string | number> | undefined>[] | undefined;
        lineClamp?: readonly ("none" | (string & {}) | csstype.Globals)[] | csstype.Property.LineClamp | readonly NonNullable<csstype.Property.LineClamp | undefined>[] | undefined;
        listStyle?: readonly string[] | csstype.Property.ListStyle | readonly csstype.Property.ListStyle[] | undefined;
        margin?: readonly (string | (string & {}))[] | csstype.Property.Margin<string | number> | readonly NonNullable<csstype.Property.Margin<string | number> | undefined>[] | undefined;
        marginBlock?: readonly (string | (string & {}))[] | csstype.Property.MarginBlock<string | number> | readonly NonNullable<csstype.Property.MarginBlock<string | number> | undefined>[] | undefined;
        marginInline?: readonly (string | (string & {}))[] | csstype.Property.MarginInline<string | number> | readonly NonNullable<csstype.Property.MarginInline<string | number> | undefined>[] | undefined;
        mask?: readonly (string | (string & {}))[] | csstype.Property.Mask<string | number> | readonly NonNullable<csstype.Property.Mask<string | number> | undefined>[] | undefined;
        maskBorder?: csstype.Property.MaskBorder | readonly NonNullable<csstype.Property.MaskBorder | undefined>[] | readonly ("none" | "repeat" | "alpha" | (string & {}) | csstype.Globals | "round" | "space" | "stretch" | "luminance")[] | undefined;
        motion?: readonly (string | (string & {}))[] | csstype.Property.Offset<string | number> | readonly NonNullable<csstype.Property.Offset<string | number> | undefined>[] | undefined;
        offset?: readonly (string | (string & {}))[] | csstype.Property.Offset<string | number> | readonly NonNullable<csstype.Property.Offset<string | number> | undefined>[] | undefined;
        outline?: readonly (string | (string & {}))[] | csstype.Property.Outline<string | number> | readonly NonNullable<csstype.Property.Outline<string | number> | undefined>[] | undefined;
        overflow?: readonly string[] | csstype.Property.Overflow | readonly csstype.Property.Overflow[] | undefined;
        overscrollBehavior?: readonly string[] | csstype.Property.OverscrollBehavior | readonly csstype.Property.OverscrollBehavior[] | undefined;
        padding?: readonly (string | (string & {}))[] | csstype.Property.Padding<string | number> | readonly NonNullable<csstype.Property.Padding<string | number> | undefined>[] | undefined;
        paddingBlock?: readonly (string | (string & {}))[] | csstype.Property.PaddingBlock<string | number> | readonly NonNullable<csstype.Property.PaddingBlock<string | number> | undefined>[] | undefined;
        paddingInline?: readonly (string | (string & {}))[] | csstype.Property.PaddingInline<string | number> | readonly NonNullable<csstype.Property.PaddingInline<string | number> | undefined>[] | undefined;
        placeContent?: readonly string[] | csstype.Property.PlaceContent | readonly csstype.Property.PlaceContent[] | undefined;
        placeItems?: readonly string[] | csstype.Property.PlaceItems | readonly csstype.Property.PlaceItems[] | undefined;
        placeSelf?: readonly string[] | csstype.Property.PlaceSelf | readonly csstype.Property.PlaceSelf[] | undefined;
        scrollMargin?: readonly (string | (string & {}))[] | csstype.Property.ScrollMargin<string | number> | readonly NonNullable<csstype.Property.ScrollMargin<string | number> | undefined>[] | undefined;
        scrollMarginBlock?: readonly (string | (string & {}))[] | csstype.Property.ScrollMarginBlock<string | number> | readonly NonNullable<csstype.Property.ScrollMarginBlock<string | number> | undefined>[] | undefined;
        scrollMarginInline?: readonly (string | (string & {}))[] | csstype.Property.ScrollMarginInline<string | number> | readonly NonNullable<csstype.Property.ScrollMarginInline<string | number> | undefined>[] | undefined;
        scrollPadding?: readonly (string | (string & {}))[] | csstype.Property.ScrollPadding<string | number> | readonly NonNullable<csstype.Property.ScrollPadding<string | number> | undefined>[] | undefined;
        scrollPaddingBlock?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingBlock<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingBlock<string | number> | undefined>[] | undefined;
        scrollPaddingInline?: readonly (string | (string & {}))[] | csstype.Property.ScrollPaddingInline<string | number> | readonly NonNullable<csstype.Property.ScrollPaddingInline<string | number> | undefined>[] | undefined;
        scrollSnapMargin?: readonly (string | (string & {}))[] | csstype.Property.ScrollMargin<string | number> | readonly NonNullable<csstype.Property.ScrollMargin<string | number> | undefined>[] | undefined;
        scrollTimeline?: readonly string[] | csstype.Property.ScrollTimeline | readonly csstype.Property.ScrollTimeline[] | undefined;
        textDecoration?: readonly (string | (string & {}))[] | csstype.Property.TextDecoration<string | number> | readonly NonNullable<csstype.Property.TextDecoration<string | number> | undefined>[] | undefined;
        textEmphasis?: readonly string[] | csstype.Property.TextEmphasis | readonly csstype.Property.TextEmphasis[] | undefined;
        transition?: readonly string[] | csstype.Property.Transition<string & {}> | readonly csstype.Property.Transition<string & {}>[] | undefined;
        viewTimeline?: readonly string[] | csstype.Property.ViewTimeline | readonly csstype.Property.ViewTimeline[] | undefined;
        MozAnimationDelay?: readonly string[] | csstype.Property.AnimationDelay<string & {}> | readonly csstype.Property.AnimationDelay<string & {}>[] | undefined;
        MozAnimationDirection?: readonly string[] | csstype.Property.AnimationDirection | readonly csstype.Property.AnimationDirection[] | undefined;
        MozAnimationDuration?: readonly string[] | csstype.Property.AnimationDuration<string & {}> | readonly csstype.Property.AnimationDuration<string & {}>[] | undefined;
        MozAnimationFillMode?: readonly string[] | csstype.Property.AnimationFillMode | readonly csstype.Property.AnimationFillMode[] | undefined;
        MozAnimationIterationCount?: csstype.Property.AnimationIterationCount | readonly NonNullable<csstype.Property.AnimationIterationCount | undefined>[] | readonly ((string & {}) | csstype.Globals | "infinite")[] | undefined;
        MozAnimationName?: readonly string[] | csstype.Property.AnimationName | readonly csstype.Property.AnimationName[] | undefined;
        MozAnimationPlayState?: readonly string[] | csstype.Property.AnimationPlayState | readonly csstype.Property.AnimationPlayState[] | undefined;
        MozAnimationTimingFunction?: readonly string[] | csstype.Property.AnimationTimingFunction | readonly csstype.Property.AnimationTimingFunction[] | undefined;
        MozAppearance?: csstype.Property.MozAppearance | readonly NonNullable<csstype.Property.MozAppearance | undefined>[] | readonly csstype.Property.MozAppearance[] | undefined;
        MozBinding?: readonly string[] | csstype.Property.MozBinding | readonly csstype.Property.MozBinding[] | undefined;
        MozBorderBottomColors?: readonly string[] | csstype.Property.MozBorderBottomColors | readonly csstype.Property.MozBorderBottomColors[] | undefined;
        MozBorderEndColor?: readonly string[] | csstype.Property.BorderInlineEndColor | readonly csstype.Property.BorderInlineEndColor[] | undefined;
        MozBorderEndStyle?: csstype.Property.BorderInlineEndStyle | readonly NonNullable<csstype.Property.BorderInlineEndStyle | undefined>[] | readonly csstype.Property.BorderInlineEndStyle[] | undefined;
        MozBorderEndWidth?: readonly string[] | csstype.Property.BorderInlineEndWidth<string | number> | readonly NonNullable<csstype.Property.BorderInlineEndWidth<string | number> | undefined>[] | undefined;
        MozBorderLeftColors?: readonly string[] | csstype.Property.MozBorderLeftColors | readonly csstype.Property.MozBorderLeftColors[] | undefined;
        MozBorderRightColors?: readonly string[] | csstype.Property.MozBorderRightColors | readonly csstype.Property.MozBorderRightColors[] | undefined;
        MozBorderStartColor?: readonly string[] | csstype.Property.BorderInlineStartColor | readonly csstype.Property.BorderInlineStartColor[] | undefined;
        MozBorderStartStyle?: csstype.Property.BorderInlineStartStyle | readonly NonNullable<csstype.Property.BorderInlineStartStyle | undefined>[] | readonly csstype.Property.BorderInlineStartStyle[] | undefined;
        MozBorderTopColors?: readonly string[] | csstype.Property.MozBorderTopColors | readonly csstype.Property.MozBorderTopColors[] | undefined;
        MozBoxSizing?: csstype.Property.BoxSizing | readonly NonNullable<csstype.Property.BoxSizing | undefined>[] | readonly csstype.Property.BoxSizing[] | undefined;
        MozColumnCount?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.ColumnCount | readonly NonNullable<csstype.Property.ColumnCount | undefined>[] | undefined;
        MozColumnFill?: csstype.Property.ColumnFill | readonly NonNullable<csstype.Property.ColumnFill | undefined>[] | readonly csstype.Property.ColumnFill[] | undefined;
        MozColumnRuleColor?: readonly string[] | csstype.Property.ColumnRuleColor | readonly csstype.Property.ColumnRuleColor[] | undefined;
        MozColumnRuleStyle?: readonly string[] | csstype.Property.ColumnRuleStyle | readonly csstype.Property.ColumnRuleStyle[] | undefined;
        MozColumnRuleWidth?: readonly (string | (string & {}))[] | csstype.Property.ColumnRuleWidth<string | number> | readonly NonNullable<csstype.Property.ColumnRuleWidth<string | number> | undefined>[] | undefined;
        MozColumnWidth?: readonly string[] | csstype.Property.ColumnWidth<string | number> | readonly NonNullable<csstype.Property.ColumnWidth<string | number> | undefined>[] | undefined;
        MozContextProperties?: readonly string[] | csstype.Property.MozContextProperties | readonly csstype.Property.MozContextProperties[] | undefined;
        MozFontFeatureSettings?: readonly string[] | csstype.Property.FontFeatureSettings | readonly csstype.Property.FontFeatureSettings[] | undefined;
        MozFontLanguageOverride?: readonly string[] | csstype.Property.FontLanguageOverride | readonly csstype.Property.FontLanguageOverride[] | undefined;
        MozHyphens?: csstype.Property.Hyphens | readonly NonNullable<csstype.Property.Hyphens | undefined>[] | readonly csstype.Property.Hyphens[] | undefined;
        MozImageRegion?: readonly string[] | csstype.Property.MozImageRegion | readonly csstype.Property.MozImageRegion[] | undefined;
        MozMarginEnd?: readonly (string | (string & {}))[] | csstype.Property.MarginInlineEnd<string | number> | readonly NonNullable<csstype.Property.MarginInlineEnd<string | number> | undefined>[] | undefined;
        MozMarginStart?: readonly (string | (string & {}))[] | csstype.Property.MarginInlineStart<string | number> | readonly NonNullable<csstype.Property.MarginInlineStart<string | number> | undefined>[] | undefined;
        MozOrient?: csstype.Property.MozOrient | readonly NonNullable<csstype.Property.MozOrient | undefined>[] | readonly csstype.Property.MozOrient[] | undefined;
        MozOsxFontSmoothing?: readonly string[] | csstype.Property.FontSmooth<string | number> | readonly NonNullable<csstype.Property.FontSmooth<string | number> | undefined>[] | undefined;
        MozOutlineRadiusBottomleft?: readonly (string | (string & {}))[] | csstype.Property.MozOutlineRadiusBottomleft<string | number> | readonly NonNullable<csstype.Property.MozOutlineRadiusBottomleft<string | number> | undefined>[] | undefined;
        MozOutlineRadiusBottomright?: readonly (string | (string & {}))[] | csstype.Property.MozOutlineRadiusBottomright<string | number> | readonly NonNullable<csstype.Property.MozOutlineRadiusBottomright<string | number> | undefined>[] | undefined;
        MozOutlineRadiusTopleft?: readonly (string | (string & {}))[] | csstype.Property.MozOutlineRadiusTopleft<string | number> | readonly NonNullable<csstype.Property.MozOutlineRadiusTopleft<string | number> | undefined>[] | undefined;
        MozOutlineRadiusTopright?: readonly (string | (string & {}))[] | csstype.Property.MozOutlineRadiusTopright<string | number> | readonly NonNullable<csstype.Property.MozOutlineRadiusTopright<string | number> | undefined>[] | undefined;
        MozPaddingEnd?: readonly (string | (string & {}))[] | csstype.Property.PaddingInlineEnd<string | number> | readonly NonNullable<csstype.Property.PaddingInlineEnd<string | number> | undefined>[] | undefined;
        MozPaddingStart?: readonly (string | (string & {}))[] | csstype.Property.PaddingInlineStart<string | number> | readonly NonNullable<csstype.Property.PaddingInlineStart<string | number> | undefined>[] | undefined;
        MozStackSizing?: csstype.Property.MozStackSizing | readonly NonNullable<csstype.Property.MozStackSizing | undefined>[] | readonly csstype.Property.MozStackSizing[] | undefined;
        MozTabSize?: readonly (string | (string & {}))[] | csstype.Property.TabSize<string | number> | readonly NonNullable<csstype.Property.TabSize<string | number> | undefined>[] | undefined;
        MozTextBlink?: csstype.Property.MozTextBlink | readonly NonNullable<csstype.Property.MozTextBlink | undefined>[] | readonly csstype.Property.MozTextBlink[] | undefined;
        MozTextSizeAdjust?: readonly string[] | csstype.Property.TextSizeAdjust | readonly csstype.Property.TextSizeAdjust[] | undefined;
        MozUserFocus?: csstype.Property.MozUserFocus | readonly NonNullable<csstype.Property.MozUserFocus | undefined>[] | readonly csstype.Property.MozUserFocus[] | undefined;
        MozUserModify?: csstype.Property.MozUserModify | readonly NonNullable<csstype.Property.MozUserModify | undefined>[] | readonly csstype.Property.MozUserModify[] | undefined;
        MozUserSelect?: csstype.Property.UserSelect | readonly NonNullable<csstype.Property.UserSelect | undefined>[] | readonly csstype.Property.UserSelect[] | undefined;
        MozWindowDragging?: csstype.Property.MozWindowDragging | readonly NonNullable<csstype.Property.MozWindowDragging | undefined>[] | readonly csstype.Property.MozWindowDragging[] | undefined;
        MozWindowShadow?: csstype.Property.MozWindowShadow | readonly NonNullable<csstype.Property.MozWindowShadow | undefined>[] | readonly csstype.Property.MozWindowShadow[] | undefined;
        msAccelerator?: csstype.Property.MsAccelerator | readonly NonNullable<csstype.Property.MsAccelerator | undefined>[] | readonly csstype.Property.MsAccelerator[] | undefined;
        msBlockProgression?: csstype.Property.MsBlockProgression | readonly NonNullable<csstype.Property.MsBlockProgression | undefined>[] | readonly csstype.Property.MsBlockProgression[] | undefined;
        msContentZoomChaining?: csstype.Property.MsContentZoomChaining | readonly NonNullable<csstype.Property.MsContentZoomChaining | undefined>[] | readonly csstype.Property.MsContentZoomChaining[] | undefined;
        msContentZoomLimitMax?: readonly string[] | csstype.Property.MsContentZoomLimitMax | readonly csstype.Property.MsContentZoomLimitMax[] | undefined;
        msContentZoomLimitMin?: readonly string[] | csstype.Property.MsContentZoomLimitMin | readonly csstype.Property.MsContentZoomLimitMin[] | undefined;
        msContentZoomSnapPoints?: readonly string[] | csstype.Property.MsContentZoomSnapPoints | readonly csstype.Property.MsContentZoomSnapPoints[] | undefined;
        msContentZoomSnapType?: csstype.Property.MsContentZoomSnapType | readonly NonNullable<csstype.Property.MsContentZoomSnapType | undefined>[] | readonly csstype.Property.MsContentZoomSnapType[] | undefined;
        msContentZooming?: csstype.Property.MsContentZooming | readonly NonNullable<csstype.Property.MsContentZooming | undefined>[] | readonly csstype.Property.MsContentZooming[] | undefined;
        msFilter?: readonly string[] | csstype.Property.MsFilter | readonly csstype.Property.MsFilter[] | undefined;
        msFlexDirection?: csstype.Property.FlexDirection | readonly NonNullable<csstype.Property.FlexDirection | undefined>[] | readonly csstype.Property.FlexDirection[] | undefined;
        msFlexPositive?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.FlexGrow | readonly NonNullable<csstype.Property.FlexGrow | undefined>[] | undefined;
        msFlowFrom?: readonly string[] | csstype.Property.MsFlowFrom | readonly csstype.Property.MsFlowFrom[] | undefined;
        msFlowInto?: readonly string[] | csstype.Property.MsFlowInto | readonly csstype.Property.MsFlowInto[] | undefined;
        msGridColumns?: readonly (string | (string & {}))[] | csstype.Property.MsGridColumns<string | number> | readonly NonNullable<csstype.Property.MsGridColumns<string | number> | undefined>[] | undefined;
        msGridRows?: readonly (string | (string & {}))[] | csstype.Property.MsGridRows<string | number> | readonly NonNullable<csstype.Property.MsGridRows<string | number> | undefined>[] | undefined;
        msHighContrastAdjust?: csstype.Property.MsHighContrastAdjust | readonly NonNullable<csstype.Property.MsHighContrastAdjust | undefined>[] | readonly csstype.Property.MsHighContrastAdjust[] | undefined;
        msHyphenateLimitChars?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.MsHyphenateLimitChars | readonly NonNullable<csstype.Property.MsHyphenateLimitChars | undefined>[] | undefined;
        msHyphenateLimitLines?: csstype.Property.MsHyphenateLimitLines | readonly NonNullable<csstype.Property.MsHyphenateLimitLines | undefined>[] | readonly ((string & {}) | csstype.Globals | "no-limit")[] | undefined;
        msHyphenateLimitZone?: readonly (string | (string & {}))[] | csstype.Property.MsHyphenateLimitZone<string | number> | readonly NonNullable<csstype.Property.MsHyphenateLimitZone<string | number> | undefined>[] | undefined;
        msHyphens?: csstype.Property.Hyphens | readonly NonNullable<csstype.Property.Hyphens | undefined>[] | readonly csstype.Property.Hyphens[] | undefined;
        msImeAlign?: csstype.Property.MsImeAlign | readonly NonNullable<csstype.Property.MsImeAlign | undefined>[] | readonly csstype.Property.MsImeAlign[] | undefined;
        msLineBreak?: csstype.Property.LineBreak | readonly NonNullable<csstype.Property.LineBreak | undefined>[] | readonly csstype.Property.LineBreak[] | undefined;
        msOrder?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Order | readonly NonNullable<csstype.Property.Order | undefined>[] | undefined;
        msOverflowStyle?: csstype.Property.MsOverflowStyle | readonly NonNullable<csstype.Property.MsOverflowStyle | undefined>[] | readonly csstype.Property.MsOverflowStyle[] | undefined;
        msOverflowX?: csstype.Property.OverflowX | readonly NonNullable<csstype.Property.OverflowX | undefined>[] | readonly csstype.Property.OverflowX[] | undefined;
        msOverflowY?: csstype.Property.OverflowY | readonly NonNullable<csstype.Property.OverflowY | undefined>[] | readonly csstype.Property.OverflowY[] | undefined;
        msScrollChaining?: csstype.Property.MsScrollChaining | readonly NonNullable<csstype.Property.MsScrollChaining | undefined>[] | readonly csstype.Property.MsScrollChaining[] | undefined;
        msScrollLimitXMax?: readonly string[] | csstype.Property.MsScrollLimitXMax<string | number> | readonly NonNullable<csstype.Property.MsScrollLimitXMax<string | number> | undefined>[] | undefined;
        msScrollLimitXMin?: readonly string[] | csstype.Property.MsScrollLimitXMin<string | number> | readonly NonNullable<csstype.Property.MsScrollLimitXMin<string | number> | undefined>[] | undefined;
        msScrollLimitYMax?: readonly string[] | csstype.Property.MsScrollLimitYMax<string | number> | readonly NonNullable<csstype.Property.MsScrollLimitYMax<string | number> | undefined>[] | undefined;
        msScrollLimitYMin?: readonly string[] | csstype.Property.MsScrollLimitYMin<string | number> | readonly NonNullable<csstype.Property.MsScrollLimitYMin<string | number> | undefined>[] | undefined;
        msScrollRails?: csstype.Property.MsScrollRails | readonly NonNullable<csstype.Property.MsScrollRails | undefined>[] | readonly csstype.Property.MsScrollRails[] | undefined;
        msScrollSnapPointsX?: readonly string[] | csstype.Property.MsScrollSnapPointsX | readonly csstype.Property.MsScrollSnapPointsX[] | undefined;
        msScrollSnapPointsY?: readonly string[] | csstype.Property.MsScrollSnapPointsY | readonly csstype.Property.MsScrollSnapPointsY[] | undefined;
        msScrollSnapType?: csstype.Property.MsScrollSnapType | readonly NonNullable<csstype.Property.MsScrollSnapType | undefined>[] | readonly csstype.Property.MsScrollSnapType[] | undefined;
        msScrollTranslation?: csstype.Property.MsScrollTranslation | readonly NonNullable<csstype.Property.MsScrollTranslation | undefined>[] | readonly csstype.Property.MsScrollTranslation[] | undefined;
        msScrollbar3dlightColor?: readonly string[] | csstype.Property.MsScrollbar3dlightColor | readonly csstype.Property.MsScrollbar3dlightColor[] | undefined;
        msScrollbarArrowColor?: readonly string[] | csstype.Property.MsScrollbarArrowColor | readonly csstype.Property.MsScrollbarArrowColor[] | undefined;
        msScrollbarBaseColor?: readonly string[] | csstype.Property.MsScrollbarBaseColor | readonly csstype.Property.MsScrollbarBaseColor[] | undefined;
        msScrollbarDarkshadowColor?: readonly string[] | csstype.Property.MsScrollbarDarkshadowColor | readonly csstype.Property.MsScrollbarDarkshadowColor[] | undefined;
        msScrollbarFaceColor?: readonly string[] | csstype.Property.MsScrollbarFaceColor | readonly csstype.Property.MsScrollbarFaceColor[] | undefined;
        msScrollbarHighlightColor?: readonly string[] | csstype.Property.MsScrollbarHighlightColor | readonly csstype.Property.MsScrollbarHighlightColor[] | undefined;
        msScrollbarShadowColor?: readonly string[] | csstype.Property.MsScrollbarShadowColor | readonly csstype.Property.MsScrollbarShadowColor[] | undefined;
        msScrollbarTrackColor?: readonly string[] | csstype.Property.MsScrollbarTrackColor | readonly csstype.Property.MsScrollbarTrackColor[] | undefined;
        msTextAutospace?: csstype.Property.MsTextAutospace | readonly NonNullable<csstype.Property.MsTextAutospace | undefined>[] | readonly csstype.Property.MsTextAutospace[] | undefined;
        msTextCombineHorizontal?: readonly string[] | csstype.Property.TextCombineUpright | readonly csstype.Property.TextCombineUpright[] | undefined;
        msTextOverflow?: readonly string[] | csstype.Property.TextOverflow | readonly csstype.Property.TextOverflow[] | undefined;
        msTouchAction?: readonly string[] | csstype.Property.TouchAction | readonly csstype.Property.TouchAction[] | undefined;
        msTouchSelect?: csstype.Property.MsTouchSelect | readonly NonNullable<csstype.Property.MsTouchSelect | undefined>[] | readonly csstype.Property.MsTouchSelect[] | undefined;
        msTransform?: readonly string[] | csstype.Property.Transform | readonly csstype.Property.Transform[] | undefined;
        msTransformOrigin?: readonly (string | (string & {}))[] | csstype.Property.TransformOrigin<string | number> | readonly NonNullable<csstype.Property.TransformOrigin<string | number> | undefined>[] | undefined;
        msTransitionDelay?: readonly string[] | csstype.Property.TransitionDelay<string & {}> | readonly csstype.Property.TransitionDelay<string & {}>[] | undefined;
        msTransitionDuration?: readonly string[] | csstype.Property.TransitionDuration<string & {}> | readonly csstype.Property.TransitionDuration<string & {}>[] | undefined;
        msTransitionProperty?: readonly string[] | csstype.Property.TransitionProperty | readonly csstype.Property.TransitionProperty[] | undefined;
        msTransitionTimingFunction?: readonly string[] | csstype.Property.TransitionTimingFunction | readonly csstype.Property.TransitionTimingFunction[] | undefined;
        msUserSelect?: csstype.Property.MsUserSelect | readonly NonNullable<csstype.Property.MsUserSelect | undefined>[] | readonly csstype.Property.MsUserSelect[] | undefined;
        msWordBreak?: csstype.Property.WordBreak | readonly NonNullable<csstype.Property.WordBreak | undefined>[] | readonly csstype.Property.WordBreak[] | undefined;
        msWrapFlow?: csstype.Property.MsWrapFlow | readonly NonNullable<csstype.Property.MsWrapFlow | undefined>[] | readonly csstype.Property.MsWrapFlow[] | undefined;
        msWrapMargin?: readonly string[] | csstype.Property.MsWrapMargin<string | number> | readonly NonNullable<csstype.Property.MsWrapMargin<string | number> | undefined>[] | undefined;
        msWrapThrough?: csstype.Property.MsWrapThrough | readonly NonNullable<csstype.Property.MsWrapThrough | undefined>[] | readonly csstype.Property.MsWrapThrough[] | undefined;
        msWritingMode?: csstype.Property.WritingMode | readonly NonNullable<csstype.Property.WritingMode | undefined>[] | readonly csstype.Property.WritingMode[] | undefined;
        WebkitAlignContent?: readonly string[] | csstype.Property.AlignContent | readonly csstype.Property.AlignContent[] | undefined;
        WebkitAlignItems?: readonly string[] | csstype.Property.AlignItems | readonly csstype.Property.AlignItems[] | undefined;
        WebkitAlignSelf?: readonly string[] | csstype.Property.AlignSelf | readonly csstype.Property.AlignSelf[] | undefined;
        WebkitAnimationDelay?: readonly string[] | csstype.Property.AnimationDelay<string & {}> | readonly csstype.Property.AnimationDelay<string & {}>[] | undefined;
        WebkitAnimationDirection?: readonly string[] | csstype.Property.AnimationDirection | readonly csstype.Property.AnimationDirection[] | undefined;
        WebkitAnimationDuration?: readonly string[] | csstype.Property.AnimationDuration<string & {}> | readonly csstype.Property.AnimationDuration<string & {}>[] | undefined;
        WebkitAnimationFillMode?: readonly string[] | csstype.Property.AnimationFillMode | readonly csstype.Property.AnimationFillMode[] | undefined;
        WebkitAnimationIterationCount?: csstype.Property.AnimationIterationCount | readonly NonNullable<csstype.Property.AnimationIterationCount | undefined>[] | readonly ((string & {}) | csstype.Globals | "infinite")[] | undefined;
        WebkitAnimationName?: readonly string[] | csstype.Property.AnimationName | readonly csstype.Property.AnimationName[] | undefined;
        WebkitAnimationPlayState?: readonly string[] | csstype.Property.AnimationPlayState | readonly csstype.Property.AnimationPlayState[] | undefined;
        WebkitAnimationTimingFunction?: readonly string[] | csstype.Property.AnimationTimingFunction | readonly csstype.Property.AnimationTimingFunction[] | undefined;
        WebkitAppearance?: csstype.Property.WebkitAppearance | readonly NonNullable<csstype.Property.WebkitAppearance | undefined>[] | readonly csstype.Property.WebkitAppearance[] | undefined;
        WebkitBackdropFilter?: readonly string[] | csstype.Property.BackdropFilter | readonly csstype.Property.BackdropFilter[] | undefined;
        WebkitBackfaceVisibility?: csstype.Property.BackfaceVisibility | readonly NonNullable<csstype.Property.BackfaceVisibility | undefined>[] | readonly csstype.Property.BackfaceVisibility[] | undefined;
        WebkitBackgroundClip?: readonly string[] | csstype.Property.BackgroundClip | readonly csstype.Property.BackgroundClip[] | undefined;
        WebkitBackgroundOrigin?: readonly string[] | csstype.Property.BackgroundOrigin | readonly csstype.Property.BackgroundOrigin[] | undefined;
        WebkitBackgroundSize?: readonly (string | (string & {}))[] | csstype.Property.BackgroundSize<string | number> | readonly NonNullable<csstype.Property.BackgroundSize<string | number> | undefined>[] | undefined;
        WebkitBorderBeforeColor?: readonly string[] | csstype.Property.WebkitBorderBeforeColor | readonly csstype.Property.WebkitBorderBeforeColor[] | undefined;
        WebkitBorderBeforeStyle?: readonly string[] | csstype.Property.WebkitBorderBeforeStyle | readonly csstype.Property.WebkitBorderBeforeStyle[] | undefined;
        WebkitBorderBeforeWidth?: readonly (string | (string & {}))[] | csstype.Property.WebkitBorderBeforeWidth<string | number> | readonly NonNullable<csstype.Property.WebkitBorderBeforeWidth<string | number> | undefined>[] | undefined;
        WebkitBorderBottomLeftRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderBottomLeftRadius<string | number> | readonly NonNullable<csstype.Property.BorderBottomLeftRadius<string | number> | undefined>[] | undefined;
        WebkitBorderBottomRightRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderBottomRightRadius<string | number> | readonly NonNullable<csstype.Property.BorderBottomRightRadius<string | number> | undefined>[] | undefined;
        WebkitBorderImageSlice?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BorderImageSlice | readonly NonNullable<csstype.Property.BorderImageSlice | undefined>[] | undefined;
        WebkitBorderTopLeftRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderTopLeftRadius<string | number> | readonly NonNullable<csstype.Property.BorderTopLeftRadius<string | number> | undefined>[] | undefined;
        WebkitBorderTopRightRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderTopRightRadius<string | number> | readonly NonNullable<csstype.Property.BorderTopRightRadius<string | number> | undefined>[] | undefined;
        WebkitBoxDecorationBreak?: csstype.Property.BoxDecorationBreak | readonly NonNullable<csstype.Property.BoxDecorationBreak | undefined>[] | readonly csstype.Property.BoxDecorationBreak[] | undefined;
        WebkitBoxReflect?: readonly (string | (string & {}))[] | csstype.Property.WebkitBoxReflect<string | number> | readonly NonNullable<csstype.Property.WebkitBoxReflect<string | number> | undefined>[] | undefined;
        WebkitBoxShadow?: readonly string[] | csstype.Property.BoxShadow | readonly csstype.Property.BoxShadow[] | undefined;
        WebkitBoxSizing?: csstype.Property.BoxSizing | readonly NonNullable<csstype.Property.BoxSizing | undefined>[] | readonly csstype.Property.BoxSizing[] | undefined;
        WebkitClipPath?: readonly string[] | csstype.Property.ClipPath | readonly csstype.Property.ClipPath[] | undefined;
        WebkitColumnCount?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.ColumnCount | readonly NonNullable<csstype.Property.ColumnCount | undefined>[] | undefined;
        WebkitColumnFill?: csstype.Property.ColumnFill | readonly NonNullable<csstype.Property.ColumnFill | undefined>[] | readonly csstype.Property.ColumnFill[] | undefined;
        WebkitColumnRuleColor?: readonly string[] | csstype.Property.ColumnRuleColor | readonly csstype.Property.ColumnRuleColor[] | undefined;
        WebkitColumnRuleStyle?: readonly string[] | csstype.Property.ColumnRuleStyle | readonly csstype.Property.ColumnRuleStyle[] | undefined;
        WebkitColumnRuleWidth?: readonly (string | (string & {}))[] | csstype.Property.ColumnRuleWidth<string | number> | readonly NonNullable<csstype.Property.ColumnRuleWidth<string | number> | undefined>[] | undefined;
        WebkitColumnSpan?: csstype.Property.ColumnSpan | readonly NonNullable<csstype.Property.ColumnSpan | undefined>[] | readonly csstype.Property.ColumnSpan[] | undefined;
        WebkitColumnWidth?: readonly string[] | csstype.Property.ColumnWidth<string | number> | readonly NonNullable<csstype.Property.ColumnWidth<string | number> | undefined>[] | undefined;
        WebkitFilter?: readonly string[] | csstype.Property.Filter | readonly csstype.Property.Filter[] | undefined;
        WebkitFlexBasis?: readonly (string | (string & {}))[] | csstype.Property.FlexBasis<string | number> | readonly NonNullable<csstype.Property.FlexBasis<string | number> | undefined>[] | undefined;
        WebkitFlexDirection?: csstype.Property.FlexDirection | readonly NonNullable<csstype.Property.FlexDirection | undefined>[] | readonly csstype.Property.FlexDirection[] | undefined;
        WebkitFlexGrow?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.FlexGrow | readonly NonNullable<csstype.Property.FlexGrow | undefined>[] | undefined;
        WebkitFlexShrink?: csstype.Property.FlexShrink | readonly NonNullable<csstype.Property.FlexShrink | undefined>[] | readonly ((string & {}) | csstype.Globals)[] | undefined;
        WebkitFlexWrap?: csstype.Property.FlexWrap | readonly NonNullable<csstype.Property.FlexWrap | undefined>[] | readonly csstype.Property.FlexWrap[] | undefined;
        WebkitFontFeatureSettings?: readonly string[] | csstype.Property.FontFeatureSettings | readonly csstype.Property.FontFeatureSettings[] | undefined;
        WebkitFontKerning?: csstype.Property.FontKerning | readonly NonNullable<csstype.Property.FontKerning | undefined>[] | readonly csstype.Property.FontKerning[] | undefined;
        WebkitFontSmoothing?: readonly string[] | csstype.Property.FontSmooth<string | number> | readonly NonNullable<csstype.Property.FontSmooth<string | number> | undefined>[] | undefined;
        WebkitFontVariantLigatures?: readonly string[] | csstype.Property.FontVariantLigatures | readonly csstype.Property.FontVariantLigatures[] | undefined;
        WebkitHyphenateCharacter?: readonly string[] | csstype.Property.HyphenateCharacter | readonly csstype.Property.HyphenateCharacter[] | undefined;
        WebkitHyphens?: csstype.Property.Hyphens | readonly NonNullable<csstype.Property.Hyphens | undefined>[] | readonly csstype.Property.Hyphens[] | undefined;
        WebkitInitialLetter?: csstype.Property.InitialLetter | readonly NonNullable<csstype.Property.InitialLetter | undefined>[] | readonly ("normal" | (string & {}) | csstype.Globals)[] | undefined;
        WebkitJustifyContent?: readonly string[] | csstype.Property.JustifyContent | readonly csstype.Property.JustifyContent[] | undefined;
        WebkitLineBreak?: csstype.Property.LineBreak | readonly NonNullable<csstype.Property.LineBreak | undefined>[] | readonly csstype.Property.LineBreak[] | undefined;
        WebkitLineClamp?: readonly ("none" | (string & {}) | csstype.Globals)[] | csstype.Property.WebkitLineClamp | readonly NonNullable<csstype.Property.WebkitLineClamp | undefined>[] | undefined;
        WebkitMarginEnd?: readonly (string | (string & {}))[] | csstype.Property.MarginInlineEnd<string | number> | readonly NonNullable<csstype.Property.MarginInlineEnd<string | number> | undefined>[] | undefined;
        WebkitMarginStart?: readonly (string | (string & {}))[] | csstype.Property.MarginInlineStart<string | number> | readonly NonNullable<csstype.Property.MarginInlineStart<string | number> | undefined>[] | undefined;
        WebkitMaskAttachment?: readonly string[] | csstype.Property.WebkitMaskAttachment | readonly csstype.Property.WebkitMaskAttachment[] | undefined;
        WebkitMaskBoxImageOutset?: readonly (string | (string & {}))[] | csstype.Property.MaskBorderOutset<string | number> | readonly NonNullable<csstype.Property.MaskBorderOutset<string | number> | undefined>[] | undefined;
        WebkitMaskBoxImageRepeat?: readonly string[] | csstype.Property.MaskBorderRepeat | readonly csstype.Property.MaskBorderRepeat[] | undefined;
        WebkitMaskBoxImageSlice?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.MaskBorderSlice | readonly NonNullable<csstype.Property.MaskBorderSlice | undefined>[] | undefined;
        WebkitMaskBoxImageSource?: readonly string[] | csstype.Property.MaskBorderSource | readonly csstype.Property.MaskBorderSource[] | undefined;
        WebkitMaskBoxImageWidth?: readonly (string | (string & {}))[] | csstype.Property.MaskBorderWidth<string | number> | readonly NonNullable<csstype.Property.MaskBorderWidth<string | number> | undefined>[] | undefined;
        WebkitMaskClip?: readonly string[] | csstype.Property.WebkitMaskClip | readonly csstype.Property.WebkitMaskClip[] | undefined;
        WebkitMaskComposite?: readonly string[] | csstype.Property.WebkitMaskComposite | readonly csstype.Property.WebkitMaskComposite[] | undefined;
        WebkitMaskImage?: readonly string[] | csstype.Property.WebkitMaskImage | readonly csstype.Property.WebkitMaskImage[] | undefined;
        WebkitMaskOrigin?: readonly string[] | csstype.Property.WebkitMaskOrigin | readonly csstype.Property.WebkitMaskOrigin[] | undefined;
        WebkitMaskPosition?: readonly (string | (string & {}))[] | csstype.Property.WebkitMaskPosition<string | number> | readonly NonNullable<csstype.Property.WebkitMaskPosition<string | number> | undefined>[] | undefined;
        WebkitMaskPositionX?: readonly (string | (string & {}))[] | csstype.Property.WebkitMaskPositionX<string | number> | readonly NonNullable<csstype.Property.WebkitMaskPositionX<string | number> | undefined>[] | undefined;
        WebkitMaskPositionY?: readonly (string | (string & {}))[] | csstype.Property.WebkitMaskPositionY<string | number> | readonly NonNullable<csstype.Property.WebkitMaskPositionY<string | number> | undefined>[] | undefined;
        WebkitMaskRepeat?: readonly string[] | csstype.Property.WebkitMaskRepeat | readonly csstype.Property.WebkitMaskRepeat[] | undefined;
        WebkitMaskRepeatX?: csstype.Property.WebkitMaskRepeatX | readonly NonNullable<csstype.Property.WebkitMaskRepeatX | undefined>[] | readonly csstype.Property.WebkitMaskRepeatX[] | undefined;
        WebkitMaskRepeatY?: csstype.Property.WebkitMaskRepeatY | readonly NonNullable<csstype.Property.WebkitMaskRepeatY | undefined>[] | readonly csstype.Property.WebkitMaskRepeatY[] | undefined;
        WebkitMaskSize?: readonly (string | (string & {}))[] | csstype.Property.WebkitMaskSize<string | number> | readonly NonNullable<csstype.Property.WebkitMaskSize<string | number> | undefined>[] | undefined;
        WebkitMaxInlineSize?: readonly (string | (string & {}))[] | csstype.Property.MaxInlineSize<string | number> | readonly NonNullable<csstype.Property.MaxInlineSize<string | number> | undefined>[] | undefined;
        WebkitOrder?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Order | readonly NonNullable<csstype.Property.Order | undefined>[] | undefined;
        WebkitOverflowScrolling?: csstype.Property.WebkitOverflowScrolling | readonly NonNullable<csstype.Property.WebkitOverflowScrolling | undefined>[] | readonly csstype.Property.WebkitOverflowScrolling[] | undefined;
        WebkitPaddingEnd?: readonly (string | (string & {}))[] | csstype.Property.PaddingInlineEnd<string | number> | readonly NonNullable<csstype.Property.PaddingInlineEnd<string | number> | undefined>[] | undefined;
        WebkitPaddingStart?: readonly (string | (string & {}))[] | csstype.Property.PaddingInlineStart<string | number> | readonly NonNullable<csstype.Property.PaddingInlineStart<string | number> | undefined>[] | undefined;
        WebkitPerspective?: readonly string[] | csstype.Property.Perspective<string | number> | readonly NonNullable<csstype.Property.Perspective<string | number> | undefined>[] | undefined;
        WebkitPerspectiveOrigin?: readonly (string | (string & {}))[] | csstype.Property.PerspectiveOrigin<string | number> | readonly NonNullable<csstype.Property.PerspectiveOrigin<string | number> | undefined>[] | undefined;
        WebkitPrintColorAdjust?: csstype.Property.PrintColorAdjust | readonly NonNullable<csstype.Property.PrintColorAdjust | undefined>[] | readonly csstype.Property.PrintColorAdjust[] | undefined;
        WebkitRubyPosition?: readonly string[] | csstype.Property.RubyPosition | readonly csstype.Property.RubyPosition[] | undefined;
        WebkitScrollSnapType?: readonly string[] | csstype.Property.ScrollSnapType | readonly csstype.Property.ScrollSnapType[] | undefined;
        WebkitShapeMargin?: readonly (string | (string & {}))[] | csstype.Property.ShapeMargin<string | number> | readonly NonNullable<csstype.Property.ShapeMargin<string | number> | undefined>[] | undefined;
        WebkitTapHighlightColor?: readonly string[] | csstype.Property.WebkitTapHighlightColor | readonly csstype.Property.WebkitTapHighlightColor[] | undefined;
        WebkitTextCombine?: readonly string[] | csstype.Property.TextCombineUpright | readonly csstype.Property.TextCombineUpright[] | undefined;
        WebkitTextDecorationColor?: readonly string[] | csstype.Property.TextDecorationColor | readonly csstype.Property.TextDecorationColor[] | undefined;
        WebkitTextDecorationLine?: readonly string[] | csstype.Property.TextDecorationLine | readonly csstype.Property.TextDecorationLine[] | undefined;
        WebkitTextDecorationSkip?: readonly string[] | csstype.Property.TextDecorationSkip | readonly csstype.Property.TextDecorationSkip[] | undefined;
        WebkitTextDecorationStyle?: csstype.Property.TextDecorationStyle | readonly NonNullable<csstype.Property.TextDecorationStyle | undefined>[] | readonly csstype.Property.TextDecorationStyle[] | undefined;
        WebkitTextEmphasisColor?: readonly string[] | csstype.Property.TextEmphasisColor | readonly csstype.Property.TextEmphasisColor[] | undefined;
        WebkitTextEmphasisPosition?: readonly string[] | csstype.Property.TextEmphasisPosition | readonly csstype.Property.TextEmphasisPosition[] | undefined;
        WebkitTextEmphasisStyle?: readonly string[] | csstype.Property.TextEmphasisStyle | readonly csstype.Property.TextEmphasisStyle[] | undefined;
        WebkitTextFillColor?: readonly string[] | csstype.Property.WebkitTextFillColor | readonly csstype.Property.WebkitTextFillColor[] | undefined;
        WebkitTextOrientation?: csstype.Property.TextOrientation | readonly NonNullable<csstype.Property.TextOrientation | undefined>[] | readonly csstype.Property.TextOrientation[] | undefined;
        WebkitTextSizeAdjust?: readonly string[] | csstype.Property.TextSizeAdjust | readonly csstype.Property.TextSizeAdjust[] | undefined;
        WebkitTextStrokeColor?: readonly string[] | csstype.Property.WebkitTextStrokeColor | readonly csstype.Property.WebkitTextStrokeColor[] | undefined;
        WebkitTextStrokeWidth?: readonly string[] | csstype.Property.WebkitTextStrokeWidth<string | number> | readonly NonNullable<csstype.Property.WebkitTextStrokeWidth<string | number> | undefined>[] | undefined;
        WebkitTextUnderlinePosition?: readonly string[] | csstype.Property.TextUnderlinePosition | readonly csstype.Property.TextUnderlinePosition[] | undefined;
        WebkitTouchCallout?: csstype.Property.WebkitTouchCallout | readonly NonNullable<csstype.Property.WebkitTouchCallout | undefined>[] | readonly csstype.Property.WebkitTouchCallout[] | undefined;
        WebkitTransform?: readonly string[] | csstype.Property.Transform | readonly csstype.Property.Transform[] | undefined;
        WebkitTransformOrigin?: readonly (string | (string & {}))[] | csstype.Property.TransformOrigin<string | number> | readonly NonNullable<csstype.Property.TransformOrigin<string | number> | undefined>[] | undefined;
        WebkitTransformStyle?: csstype.Property.TransformStyle | readonly NonNullable<csstype.Property.TransformStyle | undefined>[] | readonly csstype.Property.TransformStyle[] | undefined;
        WebkitTransitionDelay?: readonly string[] | csstype.Property.TransitionDelay<string & {}> | readonly csstype.Property.TransitionDelay<string & {}>[] | undefined;
        WebkitTransitionDuration?: readonly string[] | csstype.Property.TransitionDuration<string & {}> | readonly csstype.Property.TransitionDuration<string & {}>[] | undefined;
        WebkitTransitionProperty?: readonly string[] | csstype.Property.TransitionProperty | readonly csstype.Property.TransitionProperty[] | undefined;
        WebkitTransitionTimingFunction?: readonly string[] | csstype.Property.TransitionTimingFunction | readonly csstype.Property.TransitionTimingFunction[] | undefined;
        WebkitUserModify?: csstype.Property.WebkitUserModify | readonly NonNullable<csstype.Property.WebkitUserModify | undefined>[] | readonly csstype.Property.WebkitUserModify[] | undefined;
        WebkitUserSelect?: csstype.Property.UserSelect | readonly NonNullable<csstype.Property.UserSelect | undefined>[] | readonly csstype.Property.UserSelect[] | undefined;
        WebkitWritingMode?: csstype.Property.WritingMode | readonly NonNullable<csstype.Property.WritingMode | undefined>[] | readonly csstype.Property.WritingMode[] | undefined;
        MozAnimation?: csstype.Property.Animation<string & {}> | readonly NonNullable<csstype.Property.Animation<string & {}> | undefined>[] | readonly ("linear" | "auto" | "none" | "normal" | "reverse" | "paused" | (string & {}) | csstype.Globals | "both" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-end" | "step-start" | "backwards" | "forwards" | "alternate" | "alternate-reverse" | "infinite" | "running")[] | undefined;
        MozBorderImage?: csstype.Property.BorderImage | readonly NonNullable<csstype.Property.BorderImage | undefined>[] | readonly ("none" | "repeat" | (string & {}) | csstype.Globals | "round" | "space" | "stretch")[] | undefined;
        MozColumnRule?: readonly (string | (string & {}))[] | csstype.Property.ColumnRule<string | number> | readonly NonNullable<csstype.Property.ColumnRule<string | number> | undefined>[] | undefined;
        MozColumns?: readonly (string | (string & {}))[] | csstype.Property.Columns<string | number> | readonly NonNullable<csstype.Property.Columns<string | number> | undefined>[] | undefined;
        MozOutlineRadius?: readonly (string | (string & {}))[] | csstype.Property.MozOutlineRadius<string | number> | readonly NonNullable<csstype.Property.MozOutlineRadius<string | number> | undefined>[] | undefined;
        msContentZoomLimit?: readonly string[] | csstype.Property.MsContentZoomLimit | readonly csstype.Property.MsContentZoomLimit[] | undefined;
        msContentZoomSnap?: readonly string[] | csstype.Property.MsContentZoomSnap | readonly csstype.Property.MsContentZoomSnap[] | undefined;
        msFlex?: readonly (string | (string & {}))[] | csstype.Property.Flex<string | number> | readonly NonNullable<csstype.Property.Flex<string | number> | undefined>[] | undefined;
        msScrollLimit?: readonly string[] | csstype.Property.MsScrollLimit | readonly csstype.Property.MsScrollLimit[] | undefined;
        msScrollSnapX?: readonly string[] | csstype.Property.MsScrollSnapX | readonly csstype.Property.MsScrollSnapX[] | undefined;
        msScrollSnapY?: readonly string[] | csstype.Property.MsScrollSnapY | readonly csstype.Property.MsScrollSnapY[] | undefined;
        msTransition?: readonly string[] | csstype.Property.Transition<string & {}> | readonly csstype.Property.Transition<string & {}>[] | undefined;
        WebkitAnimation?: csstype.Property.Animation<string & {}> | readonly NonNullable<csstype.Property.Animation<string & {}> | undefined>[] | readonly ("linear" | "auto" | "none" | "normal" | "reverse" | "paused" | (string & {}) | csstype.Globals | "both" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-end" | "step-start" | "backwards" | "forwards" | "alternate" | "alternate-reverse" | "infinite" | "running")[] | undefined;
        WebkitBorderBefore?: readonly (string | (string & {}))[] | csstype.Property.WebkitBorderBefore<string | number> | readonly NonNullable<csstype.Property.WebkitBorderBefore<string | number> | undefined>[] | undefined;
        WebkitBorderImage?: csstype.Property.BorderImage | readonly NonNullable<csstype.Property.BorderImage | undefined>[] | readonly ("none" | "repeat" | (string & {}) | csstype.Globals | "round" | "space" | "stretch")[] | undefined;
        WebkitBorderRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderRadius<string | number> | readonly NonNullable<csstype.Property.BorderRadius<string | number> | undefined>[] | undefined;
        WebkitColumnRule?: readonly (string | (string & {}))[] | csstype.Property.ColumnRule<string | number> | readonly NonNullable<csstype.Property.ColumnRule<string | number> | undefined>[] | undefined;
        WebkitColumns?: readonly (string | (string & {}))[] | csstype.Property.Columns<string | number> | readonly NonNullable<csstype.Property.Columns<string | number> | undefined>[] | undefined;
        WebkitFlex?: readonly (string | (string & {}))[] | csstype.Property.Flex<string | number> | readonly NonNullable<csstype.Property.Flex<string | number> | undefined>[] | undefined;
        WebkitFlexFlow?: readonly string[] | csstype.Property.FlexFlow | readonly csstype.Property.FlexFlow[] | undefined;
        WebkitMask?: readonly (string | (string & {}))[] | csstype.Property.WebkitMask<string | number> | readonly NonNullable<csstype.Property.WebkitMask<string | number> | undefined>[] | undefined;
        WebkitMaskBoxImage?: csstype.Property.MaskBorder | readonly NonNullable<csstype.Property.MaskBorder | undefined>[] | readonly ("none" | "repeat" | "alpha" | (string & {}) | csstype.Globals | "round" | "space" | "stretch" | "luminance")[] | undefined;
        WebkitTextEmphasis?: readonly string[] | csstype.Property.TextEmphasis | readonly csstype.Property.TextEmphasis[] | undefined;
        WebkitTextStroke?: readonly (string | (string & {}))[] | csstype.Property.WebkitTextStroke<string | number> | readonly NonNullable<csstype.Property.WebkitTextStroke<string | number> | undefined>[] | undefined;
        WebkitTransition?: readonly string[] | csstype.Property.Transition<string & {}> | readonly csstype.Property.Transition<string & {}>[] | undefined;
        azimuth?: readonly string[] | csstype.Property.Azimuth | readonly csstype.Property.Azimuth[] | undefined;
        boxAlign?: csstype.Property.BoxAlign | readonly NonNullable<csstype.Property.BoxAlign | undefined>[] | readonly csstype.Property.BoxAlign[] | undefined;
        boxDirection?: csstype.Property.BoxDirection | readonly NonNullable<csstype.Property.BoxDirection | undefined>[] | readonly csstype.Property.BoxDirection[] | undefined;
        boxFlex?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxFlex | readonly NonNullable<csstype.Property.BoxFlex | undefined>[] | undefined;
        boxFlexGroup?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxFlexGroup | readonly NonNullable<csstype.Property.BoxFlexGroup | undefined>[] | undefined;
        boxLines?: csstype.Property.BoxLines | readonly NonNullable<csstype.Property.BoxLines | undefined>[] | readonly csstype.Property.BoxLines[] | undefined;
        boxOrdinalGroup?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxOrdinalGroup | readonly NonNullable<csstype.Property.BoxOrdinalGroup | undefined>[] | undefined;
        boxOrient?: csstype.Property.BoxOrient | readonly NonNullable<csstype.Property.BoxOrient | undefined>[] | readonly csstype.Property.BoxOrient[] | undefined;
        boxPack?: csstype.Property.BoxPack | readonly NonNullable<csstype.Property.BoxPack | undefined>[] | readonly csstype.Property.BoxPack[] | undefined;
        clip?: readonly string[] | csstype.Property.Clip | readonly csstype.Property.Clip[] | undefined;
        gridColumnGap?: readonly (string | (string & {}))[] | csstype.Property.GridColumnGap<string | number> | readonly NonNullable<csstype.Property.GridColumnGap<string | number> | undefined>[] | undefined;
        gridGap?: readonly (string | (string & {}))[] | csstype.Property.GridGap<string | number> | readonly NonNullable<csstype.Property.GridGap<string | number> | undefined>[] | undefined;
        gridRowGap?: readonly (string | (string & {}))[] | csstype.Property.GridRowGap<string | number> | readonly NonNullable<csstype.Property.GridRowGap<string | number> | undefined>[] | undefined;
        imeMode?: csstype.Property.ImeMode | readonly NonNullable<csstype.Property.ImeMode | undefined>[] | readonly csstype.Property.ImeMode[] | undefined;
        offsetBlock?: readonly (string | (string & {}))[] | csstype.Property.InsetBlock<string | number> | readonly NonNullable<csstype.Property.InsetBlock<string | number> | undefined>[] | undefined;
        offsetBlockEnd?: readonly (string | (string & {}))[] | csstype.Property.InsetBlockEnd<string | number> | readonly NonNullable<csstype.Property.InsetBlockEnd<string | number> | undefined>[] | undefined;
        offsetBlockStart?: readonly (string | (string & {}))[] | csstype.Property.InsetBlockStart<string | number> | readonly NonNullable<csstype.Property.InsetBlockStart<string | number> | undefined>[] | undefined;
        offsetInline?: readonly (string | (string & {}))[] | csstype.Property.InsetInline<string | number> | readonly NonNullable<csstype.Property.InsetInline<string | number> | undefined>[] | undefined;
        offsetInlineEnd?: readonly (string | (string & {}))[] | csstype.Property.InsetInlineEnd<string | number> | readonly NonNullable<csstype.Property.InsetInlineEnd<string | number> | undefined>[] | undefined;
        offsetInlineStart?: readonly (string | (string & {}))[] | csstype.Property.InsetInlineStart<string | number> | readonly NonNullable<csstype.Property.InsetInlineStart<string | number> | undefined>[] | undefined;
        scrollSnapCoordinate?: readonly (string | (string & {}))[] | csstype.Property.ScrollSnapCoordinate<string | number> | readonly NonNullable<csstype.Property.ScrollSnapCoordinate<string | number> | undefined>[] | undefined;
        scrollSnapDestination?: readonly (string | (string & {}))[] | csstype.Property.ScrollSnapDestination<string | number> | readonly NonNullable<csstype.Property.ScrollSnapDestination<string | number> | undefined>[] | undefined;
        scrollSnapPointsX?: readonly string[] | csstype.Property.ScrollSnapPointsX | readonly csstype.Property.ScrollSnapPointsX[] | undefined;
        scrollSnapPointsY?: readonly string[] | csstype.Property.ScrollSnapPointsY | readonly csstype.Property.ScrollSnapPointsY[] | undefined;
        scrollSnapTypeX?: csstype.Property.ScrollSnapTypeX | readonly NonNullable<csstype.Property.ScrollSnapTypeX | undefined>[] | readonly csstype.Property.ScrollSnapTypeX[] | undefined;
        scrollSnapTypeY?: csstype.Property.ScrollSnapTypeY | readonly NonNullable<csstype.Property.ScrollSnapTypeY | undefined>[] | readonly csstype.Property.ScrollSnapTypeY[] | undefined;
        KhtmlBoxAlign?: csstype.Property.BoxAlign | readonly NonNullable<csstype.Property.BoxAlign | undefined>[] | readonly csstype.Property.BoxAlign[] | undefined;
        KhtmlBoxDirection?: csstype.Property.BoxDirection | readonly NonNullable<csstype.Property.BoxDirection | undefined>[] | readonly csstype.Property.BoxDirection[] | undefined;
        KhtmlBoxFlex?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxFlex | readonly NonNullable<csstype.Property.BoxFlex | undefined>[] | undefined;
        KhtmlBoxFlexGroup?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxFlexGroup | readonly NonNullable<csstype.Property.BoxFlexGroup | undefined>[] | undefined;
        KhtmlBoxLines?: csstype.Property.BoxLines | readonly NonNullable<csstype.Property.BoxLines | undefined>[] | readonly csstype.Property.BoxLines[] | undefined;
        KhtmlBoxOrdinalGroup?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxOrdinalGroup | readonly NonNullable<csstype.Property.BoxOrdinalGroup | undefined>[] | undefined;
        KhtmlBoxOrient?: csstype.Property.BoxOrient | readonly NonNullable<csstype.Property.BoxOrient | undefined>[] | readonly csstype.Property.BoxOrient[] | undefined;
        KhtmlBoxPack?: csstype.Property.BoxPack | readonly NonNullable<csstype.Property.BoxPack | undefined>[] | readonly csstype.Property.BoxPack[] | undefined;
        KhtmlLineBreak?: csstype.Property.LineBreak | readonly NonNullable<csstype.Property.LineBreak | undefined>[] | readonly csstype.Property.LineBreak[] | undefined;
        KhtmlOpacity?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Opacity | readonly NonNullable<csstype.Property.Opacity | undefined>[] | undefined;
        KhtmlUserSelect?: csstype.Property.UserSelect | readonly NonNullable<csstype.Property.UserSelect | undefined>[] | readonly csstype.Property.UserSelect[] | undefined;
        MozBackfaceVisibility?: csstype.Property.BackfaceVisibility | readonly NonNullable<csstype.Property.BackfaceVisibility | undefined>[] | readonly csstype.Property.BackfaceVisibility[] | undefined;
        MozBackgroundClip?: readonly string[] | csstype.Property.BackgroundClip | readonly csstype.Property.BackgroundClip[] | undefined;
        MozBackgroundInlinePolicy?: csstype.Property.BoxDecorationBreak | readonly NonNullable<csstype.Property.BoxDecorationBreak | undefined>[] | readonly csstype.Property.BoxDecorationBreak[] | undefined;
        MozBackgroundOrigin?: readonly string[] | csstype.Property.BackgroundOrigin | readonly csstype.Property.BackgroundOrigin[] | undefined;
        MozBackgroundSize?: readonly (string | (string & {}))[] | csstype.Property.BackgroundSize<string | number> | readonly NonNullable<csstype.Property.BackgroundSize<string | number> | undefined>[] | undefined;
        MozBorderRadius?: readonly (string | (string & {}))[] | csstype.Property.BorderRadius<string | number> | readonly NonNullable<csstype.Property.BorderRadius<string | number> | undefined>[] | undefined;
        MozBorderRadiusBottomleft?: readonly (string | (string & {}))[] | csstype.Property.BorderBottomLeftRadius<string | number> | readonly NonNullable<csstype.Property.BorderBottomLeftRadius<string | number> | undefined>[] | undefined;
        MozBorderRadiusBottomright?: readonly (string | (string & {}))[] | csstype.Property.BorderBottomRightRadius<string | number> | readonly NonNullable<csstype.Property.BorderBottomRightRadius<string | number> | undefined>[] | undefined;
        MozBorderRadiusTopleft?: readonly (string | (string & {}))[] | csstype.Property.BorderTopLeftRadius<string | number> | readonly NonNullable<csstype.Property.BorderTopLeftRadius<string | number> | undefined>[] | undefined;
        MozBorderRadiusTopright?: readonly (string | (string & {}))[] | csstype.Property.BorderTopRightRadius<string | number> | readonly NonNullable<csstype.Property.BorderTopRightRadius<string | number> | undefined>[] | undefined;
        MozBoxAlign?: csstype.Property.BoxAlign | readonly NonNullable<csstype.Property.BoxAlign | undefined>[] | readonly csstype.Property.BoxAlign[] | undefined;
        MozBoxDirection?: csstype.Property.BoxDirection | readonly NonNullable<csstype.Property.BoxDirection | undefined>[] | readonly csstype.Property.BoxDirection[] | undefined;
        MozBoxFlex?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxFlex | readonly NonNullable<csstype.Property.BoxFlex | undefined>[] | undefined;
        MozBoxOrdinalGroup?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxOrdinalGroup | readonly NonNullable<csstype.Property.BoxOrdinalGroup | undefined>[] | undefined;
        MozBoxOrient?: csstype.Property.BoxOrient | readonly NonNullable<csstype.Property.BoxOrient | undefined>[] | readonly csstype.Property.BoxOrient[] | undefined;
        MozBoxPack?: csstype.Property.BoxPack | readonly NonNullable<csstype.Property.BoxPack | undefined>[] | readonly csstype.Property.BoxPack[] | undefined;
        MozBoxShadow?: readonly string[] | csstype.Property.BoxShadow | readonly csstype.Property.BoxShadow[] | undefined;
        MozFloatEdge?: csstype.Property.MozFloatEdge | readonly NonNullable<csstype.Property.MozFloatEdge | undefined>[] | readonly csstype.Property.MozFloatEdge[] | undefined;
        MozForceBrokenImageIcon?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.MozForceBrokenImageIcon | readonly NonNullable<csstype.Property.MozForceBrokenImageIcon | undefined>[] | undefined;
        MozOpacity?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.Opacity | readonly NonNullable<csstype.Property.Opacity | undefined>[] | undefined;
        MozOutline?: readonly (string | (string & {}))[] | csstype.Property.Outline<string | number> | readonly NonNullable<csstype.Property.Outline<string | number> | undefined>[] | undefined;
        MozOutlineColor?: readonly string[] | csstype.Property.OutlineColor | readonly csstype.Property.OutlineColor[] | undefined;
        MozOutlineStyle?: readonly string[] | csstype.Property.OutlineStyle | readonly csstype.Property.OutlineStyle[] | undefined;
        MozOutlineWidth?: readonly string[] | csstype.Property.OutlineWidth<string | number> | readonly NonNullable<csstype.Property.OutlineWidth<string | number> | undefined>[] | undefined;
        MozPerspective?: readonly string[] | csstype.Property.Perspective<string | number> | readonly NonNullable<csstype.Property.Perspective<string | number> | undefined>[] | undefined;
        MozPerspectiveOrigin?: readonly (string | (string & {}))[] | csstype.Property.PerspectiveOrigin<string | number> | readonly NonNullable<csstype.Property.PerspectiveOrigin<string | number> | undefined>[] | undefined;
        MozTextAlignLast?: csstype.Property.TextAlignLast | readonly NonNullable<csstype.Property.TextAlignLast | undefined>[] | readonly csstype.Property.TextAlignLast[] | undefined;
        MozTextDecorationColor?: readonly string[] | csstype.Property.TextDecorationColor | readonly csstype.Property.TextDecorationColor[] | undefined;
        MozTextDecorationLine?: readonly string[] | csstype.Property.TextDecorationLine | readonly csstype.Property.TextDecorationLine[] | undefined;
        MozTextDecorationStyle?: csstype.Property.TextDecorationStyle | readonly NonNullable<csstype.Property.TextDecorationStyle | undefined>[] | readonly csstype.Property.TextDecorationStyle[] | undefined;
        MozTransform?: readonly string[] | csstype.Property.Transform | readonly csstype.Property.Transform[] | undefined;
        MozTransformOrigin?: readonly (string | (string & {}))[] | csstype.Property.TransformOrigin<string | number> | readonly NonNullable<csstype.Property.TransformOrigin<string | number> | undefined>[] | undefined;
        MozTransformStyle?: csstype.Property.TransformStyle | readonly NonNullable<csstype.Property.TransformStyle | undefined>[] | readonly csstype.Property.TransformStyle[] | undefined;
        MozTransition?: readonly string[] | csstype.Property.Transition<string & {}> | readonly csstype.Property.Transition<string & {}>[] | undefined;
        MozTransitionDelay?: readonly string[] | csstype.Property.TransitionDelay<string & {}> | readonly csstype.Property.TransitionDelay<string & {}>[] | undefined;
        MozTransitionDuration?: readonly string[] | csstype.Property.TransitionDuration<string & {}> | readonly csstype.Property.TransitionDuration<string & {}>[] | undefined;
        MozTransitionProperty?: readonly string[] | csstype.Property.TransitionProperty | readonly csstype.Property.TransitionProperty[] | undefined;
        MozTransitionTimingFunction?: readonly string[] | csstype.Property.TransitionTimingFunction | readonly csstype.Property.TransitionTimingFunction[] | undefined;
        MozUserInput?: csstype.Property.MozUserInput | readonly NonNullable<csstype.Property.MozUserInput | undefined>[] | readonly csstype.Property.MozUserInput[] | undefined;
        msImeMode?: csstype.Property.ImeMode | readonly NonNullable<csstype.Property.ImeMode | undefined>[] | readonly csstype.Property.ImeMode[] | undefined;
        OAnimation?: csstype.Property.Animation<string & {}> | readonly NonNullable<csstype.Property.Animation<string & {}> | undefined>[] | readonly ("linear" | "auto" | "none" | "normal" | "reverse" | "paused" | (string & {}) | csstype.Globals | "both" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-end" | "step-start" | "backwards" | "forwards" | "alternate" | "alternate-reverse" | "infinite" | "running")[] | undefined;
        OAnimationDelay?: readonly string[] | csstype.Property.AnimationDelay<string & {}> | readonly csstype.Property.AnimationDelay<string & {}>[] | undefined;
        OAnimationDirection?: readonly string[] | csstype.Property.AnimationDirection | readonly csstype.Property.AnimationDirection[] | undefined;
        OAnimationDuration?: readonly string[] | csstype.Property.AnimationDuration<string & {}> | readonly csstype.Property.AnimationDuration<string & {}>[] | undefined;
        OAnimationFillMode?: readonly string[] | csstype.Property.AnimationFillMode | readonly csstype.Property.AnimationFillMode[] | undefined;
        OAnimationIterationCount?: csstype.Property.AnimationIterationCount | readonly NonNullable<csstype.Property.AnimationIterationCount | undefined>[] | readonly ((string & {}) | csstype.Globals | "infinite")[] | undefined;
        OAnimationName?: readonly string[] | csstype.Property.AnimationName | readonly csstype.Property.AnimationName[] | undefined;
        OAnimationPlayState?: readonly string[] | csstype.Property.AnimationPlayState | readonly csstype.Property.AnimationPlayState[] | undefined;
        OAnimationTimingFunction?: readonly string[] | csstype.Property.AnimationTimingFunction | readonly csstype.Property.AnimationTimingFunction[] | undefined;
        OBackgroundSize?: readonly (string | (string & {}))[] | csstype.Property.BackgroundSize<string | number> | readonly NonNullable<csstype.Property.BackgroundSize<string | number> | undefined>[] | undefined;
        OBorderImage?: csstype.Property.BorderImage | readonly NonNullable<csstype.Property.BorderImage | undefined>[] | readonly ("none" | "repeat" | (string & {}) | csstype.Globals | "round" | "space" | "stretch")[] | undefined;
        OObjectFit?: csstype.Property.ObjectFit | readonly NonNullable<csstype.Property.ObjectFit | undefined>[] | readonly csstype.Property.ObjectFit[] | undefined;
        OObjectPosition?: readonly (string | (string & {}))[] | csstype.Property.ObjectPosition<string | number> | readonly NonNullable<csstype.Property.ObjectPosition<string | number> | undefined>[] | undefined;
        OTabSize?: readonly (string | (string & {}))[] | csstype.Property.TabSize<string | number> | readonly NonNullable<csstype.Property.TabSize<string | number> | undefined>[] | undefined;
        OTextOverflow?: readonly string[] | csstype.Property.TextOverflow | readonly csstype.Property.TextOverflow[] | undefined;
        OTransform?: readonly string[] | csstype.Property.Transform | readonly csstype.Property.Transform[] | undefined;
        OTransformOrigin?: readonly (string | (string & {}))[] | csstype.Property.TransformOrigin<string | number> | readonly NonNullable<csstype.Property.TransformOrigin<string | number> | undefined>[] | undefined;
        OTransition?: readonly string[] | csstype.Property.Transition<string & {}> | readonly csstype.Property.Transition<string & {}>[] | undefined;
        OTransitionDelay?: readonly string[] | csstype.Property.TransitionDelay<string & {}> | readonly csstype.Property.TransitionDelay<string & {}>[] | undefined;
        OTransitionDuration?: readonly string[] | csstype.Property.TransitionDuration<string & {}> | readonly csstype.Property.TransitionDuration<string & {}>[] | undefined;
        OTransitionProperty?: readonly string[] | csstype.Property.TransitionProperty | readonly csstype.Property.TransitionProperty[] | undefined;
        OTransitionTimingFunction?: readonly string[] | csstype.Property.TransitionTimingFunction | readonly csstype.Property.TransitionTimingFunction[] | undefined;
        WebkitBoxAlign?: csstype.Property.BoxAlign | readonly NonNullable<csstype.Property.BoxAlign | undefined>[] | readonly csstype.Property.BoxAlign[] | undefined;
        WebkitBoxDirection?: csstype.Property.BoxDirection | readonly NonNullable<csstype.Property.BoxDirection | undefined>[] | readonly csstype.Property.BoxDirection[] | undefined;
        WebkitBoxFlex?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxFlex | readonly NonNullable<csstype.Property.BoxFlex | undefined>[] | undefined;
        WebkitBoxFlexGroup?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxFlexGroup | readonly NonNullable<csstype.Property.BoxFlexGroup | undefined>[] | undefined;
        WebkitBoxLines?: csstype.Property.BoxLines | readonly NonNullable<csstype.Property.BoxLines | undefined>[] | readonly csstype.Property.BoxLines[] | undefined;
        WebkitBoxOrdinalGroup?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.BoxOrdinalGroup | readonly NonNullable<csstype.Property.BoxOrdinalGroup | undefined>[] | undefined;
        WebkitBoxOrient?: csstype.Property.BoxOrient | readonly NonNullable<csstype.Property.BoxOrient | undefined>[] | readonly csstype.Property.BoxOrient[] | undefined;
        WebkitBoxPack?: csstype.Property.BoxPack | readonly NonNullable<csstype.Property.BoxPack | undefined>[] | readonly csstype.Property.BoxPack[] | undefined;
        alignmentBaseline?: csstype.Property.AlignmentBaseline | readonly NonNullable<csstype.Property.AlignmentBaseline | undefined>[] | readonly csstype.Property.AlignmentBaseline[] | undefined;
        baselineShift?: readonly (string | (string & {}))[] | csstype.Property.BaselineShift<string | number> | readonly NonNullable<csstype.Property.BaselineShift<string | number> | undefined>[] | undefined;
        clipRule?: csstype.Property.ClipRule | readonly NonNullable<csstype.Property.ClipRule | undefined>[] | readonly csstype.Property.ClipRule[] | undefined;
        colorInterpolation?: csstype.Property.ColorInterpolation | readonly NonNullable<csstype.Property.ColorInterpolation | undefined>[] | readonly csstype.Property.ColorInterpolation[] | undefined;
        colorRendering?: csstype.Property.ColorRendering | readonly NonNullable<csstype.Property.ColorRendering | undefined>[] | readonly csstype.Property.ColorRendering[] | undefined;
        dominantBaseline?: csstype.Property.DominantBaseline | readonly NonNullable<csstype.Property.DominantBaseline | undefined>[] | readonly csstype.Property.DominantBaseline[] | undefined;
        fill?: readonly string[] | csstype.Property.Fill | readonly csstype.Property.Fill[] | undefined;
        fillOpacity?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.FillOpacity | readonly NonNullable<csstype.Property.FillOpacity | undefined>[] | undefined;
        fillRule?: csstype.Property.FillRule | readonly NonNullable<csstype.Property.FillRule | undefined>[] | readonly csstype.Property.FillRule[] | undefined;
        floodColor?: readonly string[] | csstype.Property.FloodColor | readonly csstype.Property.FloodColor[] | undefined;
        floodOpacity?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.FloodOpacity | readonly NonNullable<csstype.Property.FloodOpacity | undefined>[] | undefined;
        glyphOrientationVertical?: readonly ("auto" | (string & {}) | csstype.Globals)[] | csstype.Property.GlyphOrientationVertical | readonly NonNullable<csstype.Property.GlyphOrientationVertical | undefined>[] | undefined;
        lightingColor?: readonly string[] | csstype.Property.LightingColor | readonly csstype.Property.LightingColor[] | undefined;
        marker?: readonly string[] | csstype.Property.Marker | readonly csstype.Property.Marker[] | undefined;
        markerEnd?: readonly string[] | csstype.Property.MarkerEnd | readonly csstype.Property.MarkerEnd[] | undefined;
        markerMid?: readonly string[] | csstype.Property.MarkerMid | readonly csstype.Property.MarkerMid[] | undefined;
        markerStart?: readonly string[] | csstype.Property.MarkerStart | readonly csstype.Property.MarkerStart[] | undefined;
        shapeRendering?: csstype.Property.ShapeRendering | readonly NonNullable<csstype.Property.ShapeRendering | undefined>[] | readonly csstype.Property.ShapeRendering[] | undefined;
        stopColor?: readonly string[] | csstype.Property.StopColor | readonly csstype.Property.StopColor[] | undefined;
        stopOpacity?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.StopOpacity | readonly NonNullable<csstype.Property.StopOpacity | undefined>[] | undefined;
        stroke?: readonly string[] | csstype.Property.Stroke | readonly csstype.Property.Stroke[] | undefined;
        strokeDasharray?: readonly (string | (string & {}))[] | csstype.Property.StrokeDasharray<string | number> | readonly NonNullable<csstype.Property.StrokeDasharray<string | number> | undefined>[] | undefined;
        strokeDashoffset?: readonly (string | (string & {}))[] | csstype.Property.StrokeDashoffset<string | number> | readonly NonNullable<csstype.Property.StrokeDashoffset<string | number> | undefined>[] | undefined;
        strokeLinecap?: csstype.Property.StrokeLinecap | readonly NonNullable<csstype.Property.StrokeLinecap | undefined>[] | readonly csstype.Property.StrokeLinecap[] | undefined;
        strokeLinejoin?: csstype.Property.StrokeLinejoin | readonly NonNullable<csstype.Property.StrokeLinejoin | undefined>[] | readonly csstype.Property.StrokeLinejoin[] | undefined;
        strokeMiterlimit?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.StrokeMiterlimit | readonly NonNullable<csstype.Property.StrokeMiterlimit | undefined>[] | undefined;
        strokeOpacity?: readonly ((string & {}) | csstype.Globals)[] | csstype.Property.StrokeOpacity | readonly NonNullable<csstype.Property.StrokeOpacity | undefined>[] | undefined;
        strokeWidth?: readonly (string | (string & {}))[] | csstype.Property.StrokeWidth<string | number> | readonly NonNullable<csstype.Property.StrokeWidth<string | number> | undefined>[] | undefined;
        textAnchor?: csstype.Property.TextAnchor | readonly NonNullable<csstype.Property.TextAnchor | undefined>[] | readonly csstype.Property.TextAnchor[] | undefined;
        vectorEffect?: csstype.Property.VectorEffect | readonly NonNullable<csstype.Property.VectorEffect | undefined>[] | readonly csstype.Property.VectorEffect[] | undefined;
        ":-moz-any()"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-dir"?: _emotion_serialize.CSSObject | undefined;
        ":-webkit-any()"?: _emotion_serialize.CSSObject | undefined;
        "::cue"?: _emotion_serialize.CSSObject | undefined;
        "::cue-region"?: _emotion_serialize.CSSObject | undefined;
        "::part"?: _emotion_serialize.CSSObject | undefined;
        "::slotted"?: _emotion_serialize.CSSObject | undefined;
        "::view-transition-group"?: _emotion_serialize.CSSObject | undefined;
        "::view-transition-image-pair"?: _emotion_serialize.CSSObject | undefined;
        "::view-transition-new"?: _emotion_serialize.CSSObject | undefined;
        "::view-transition-old"?: _emotion_serialize.CSSObject | undefined;
        ":dir"?: _emotion_serialize.CSSObject | undefined;
        ":has"?: _emotion_serialize.CSSObject | undefined;
        ":host"?: _emotion_serialize.CSSObject | undefined;
        ":host-context"?: _emotion_serialize.CSSObject | undefined;
        ":is"?: _emotion_serialize.CSSObject | undefined;
        ":lang"?: _emotion_serialize.CSSObject | undefined;
        ":matches()"?: _emotion_serialize.CSSObject | undefined;
        ":not"?: _emotion_serialize.CSSObject | undefined;
        ":nth-child"?: _emotion_serialize.CSSObject | undefined;
        ":nth-last-child"?: _emotion_serialize.CSSObject | undefined;
        ":nth-last-of-type"?: _emotion_serialize.CSSObject | undefined;
        ":nth-of-type"?: _emotion_serialize.CSSObject | undefined;
        ":where"?: _emotion_serialize.CSSObject | undefined;
        ":-khtml-any-link"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-any-link"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-focusring"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-full-screen"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-placeholder"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-read-only"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-read-write"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-ui-invalid"?: _emotion_serialize.CSSObject | undefined;
        ":-moz-ui-valid"?: _emotion_serialize.CSSObject | undefined;
        ":-ms-fullscreen"?: _emotion_serialize.CSSObject | undefined;
        ":-ms-input-placeholder"?: _emotion_serialize.CSSObject | undefined;
        ":-webkit-any-link"?: _emotion_serialize.CSSObject | undefined;
        ":-webkit-full-screen"?: _emotion_serialize.CSSObject | undefined;
        "::-moz-placeholder"?: _emotion_serialize.CSSObject | undefined;
        "::-moz-progress-bar"?: _emotion_serialize.CSSObject | undefined;
        "::-moz-range-progress"?: _emotion_serialize.CSSObject | undefined;
        "::-moz-range-thumb"?: _emotion_serialize.CSSObject | undefined;
        "::-moz-range-track"?: _emotion_serialize.CSSObject | undefined;
        "::-moz-selection"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-backdrop"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-browse"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-check"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-clear"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-expand"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-fill"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-fill-lower"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-fill-upper"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-input-placeholder"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-reveal"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-thumb"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-ticks-after"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-ticks-before"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-tooltip"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-track"?: _emotion_serialize.CSSObject | undefined;
        "::-ms-value"?: _emotion_serialize.CSSObject | undefined;
        "::-webkit-backdrop"?: _emotion_serialize.CSSObject | undefined;
        "::-webkit-input-placeholder"?: _emotion_serialize.CSSObject | undefined;
        "::-webkit-progress-bar"?: _emotion_serialize.CSSObject | undefined;
        "::-webkit-progress-inner-value"?: _emotion_serialize.CSSObject | undefined;
        "::-webkit-progress-value"?: _emotion_serialize.CSSObject | undefined;
        "::-webkit-slider-runnable-track"?: _emotion_serialize.CSSObject | undefined;
        "::-webkit-slider-thumb"?: _emotion_serialize.CSSObject | undefined;
        "::after"?: _emotion_serialize.CSSObject | undefined;
        "::backdrop"?: _emotion_serialize.CSSObject | undefined;
        "::before"?: _emotion_serialize.CSSObject | undefined;
        "::first-letter"?: _emotion_serialize.CSSObject | undefined;
        "::first-line"?: _emotion_serialize.CSSObject | undefined;
        "::grammar-error"?: _emotion_serialize.CSSObject | undefined;
        "::marker"?: _emotion_serialize.CSSObject | undefined;
        "::placeholder"?: _emotion_serialize.CSSObject | undefined;
        "::selection"?: _emotion_serialize.CSSObject | undefined;
        "::spelling-error"?: _emotion_serialize.CSSObject | undefined;
        "::target-text"?: _emotion_serialize.CSSObject | undefined;
        "::view-transition"?: _emotion_serialize.CSSObject | undefined;
        ":active"?: _emotion_serialize.CSSObject | undefined;
        ":after"?: _emotion_serialize.CSSObject | undefined;
        ":any-link"?: _emotion_serialize.CSSObject | undefined;
        ":before"?: _emotion_serialize.CSSObject | undefined;
        ":blank"?: _emotion_serialize.CSSObject | undefined;
        ":checked"?: _emotion_serialize.CSSObject | undefined;
        ":current"?: _emotion_serialize.CSSObject | undefined;
        ":default"?: _emotion_serialize.CSSObject | undefined;
        ":defined"?: _emotion_serialize.CSSObject | undefined;
        ":disabled"?: _emotion_serialize.CSSObject | undefined;
        ":empty"?: _emotion_serialize.CSSObject | undefined;
        ":enabled"?: _emotion_serialize.CSSObject | undefined;
        ":first"?: _emotion_serialize.CSSObject | undefined;
        ":first-child"?: _emotion_serialize.CSSObject | undefined;
        ":first-letter"?: _emotion_serialize.CSSObject | undefined;
        ":first-line"?: _emotion_serialize.CSSObject | undefined;
        ":first-of-type"?: _emotion_serialize.CSSObject | undefined;
        ":focus"?: _emotion_serialize.CSSObject | undefined;
        ":focus-visible"?: _emotion_serialize.CSSObject | undefined;
        ":focus-within"?: _emotion_serialize.CSSObject | undefined;
        ":fullscreen"?: _emotion_serialize.CSSObject | undefined;
        ":future"?: _emotion_serialize.CSSObject | undefined;
        ":hover"?: _emotion_serialize.CSSObject | undefined;
        ":in-range"?: _emotion_serialize.CSSObject | undefined;
        ":indeterminate"?: _emotion_serialize.CSSObject | undefined;
        ":invalid"?: _emotion_serialize.CSSObject | undefined;
        ":last-child"?: _emotion_serialize.CSSObject | undefined;
        ":last-of-type"?: _emotion_serialize.CSSObject | undefined;
        ":left"?: _emotion_serialize.CSSObject | undefined;
        ":link"?: _emotion_serialize.CSSObject | undefined;
        ":local-link"?: _emotion_serialize.CSSObject | undefined;
        ":nth-col"?: _emotion_serialize.CSSObject | undefined;
        ":nth-last-col"?: _emotion_serialize.CSSObject | undefined;
        ":only-child"?: _emotion_serialize.CSSObject | undefined;
        ":only-of-type"?: _emotion_serialize.CSSObject | undefined;
        ":optional"?: _emotion_serialize.CSSObject | undefined;
        ":out-of-range"?: _emotion_serialize.CSSObject | undefined;
        ":past"?: _emotion_serialize.CSSObject | undefined;
        ":paused"?: _emotion_serialize.CSSObject | undefined;
        ":picture-in-picture"?: _emotion_serialize.CSSObject | undefined;
        ":placeholder-shown"?: _emotion_serialize.CSSObject | undefined;
        ":playing"?: _emotion_serialize.CSSObject | undefined;
        ":read-only"?: _emotion_serialize.CSSObject | undefined;
        ":read-write"?: _emotion_serialize.CSSObject | undefined;
        ":required"?: _emotion_serialize.CSSObject | undefined;
        ":right"?: _emotion_serialize.CSSObject | undefined;
        ":root"?: _emotion_serialize.CSSObject | undefined;
        ":scope"?: _emotion_serialize.CSSObject | undefined;
        ":target"?: _emotion_serialize.CSSObject | undefined;
        ":target-within"?: _emotion_serialize.CSSObject | undefined;
        ":user-invalid"?: _emotion_serialize.CSSObject | undefined;
        ":user-valid"?: _emotion_serialize.CSSObject | undefined;
        ":valid"?: _emotion_serialize.CSSObject | undefined;
        ":visited"?: _emotion_serialize.CSSObject | undefined;
        label?: string | undefined;
    };
    singleValue: () => {};
    valueContainer: () => {};
};

type SelectContainerProps<Option, isMulti extends boolean, Group extends GroupBase<Option>> = ContainerProps$1<Option, isMulti, Group> & CustomComponentProps<Option, isMulti, Group>;
declare const SelectContainer: <Option, isMulti extends boolean, Group extends GroupBase<Option>>(props: SelectContainerProps<Option, isMulti, Group>) => React__default.JSX.Element;

declare function Select<T, Rest = {}>(props: SelectCommonProps<T> & Rest): React__default.JSX.Element;
declare function MultiSelect<T, Rest = {}>(props: MultiSelectCommonProps<T> & Rest): React__default.JSX.Element;
interface AsyncSelectProps<T> extends Omit<SelectCommonProps<T>, 'options'>, SelectAsyncProps<T> {
    value?: T | SelectableValue<T> | null;
}
declare function AsyncSelect<T, Rest = {}>(props: AsyncSelectProps<T> & Rest): React__default.JSX.Element;
declare function VirtualizedSelect<T, Rest = {}>(props: VirtualizedSelectProps<T> & Rest): React__default.JSX.Element;
declare function AsyncVirtualizedSelect<T, Rest = {}>(props: VirtualizedSelectAsyncProps<T> & Rest): React__default.JSX.Element;
interface AsyncMultiSelectProps<T> extends Omit<MultiSelectCommonProps<T>, 'options'>, SelectAsyncProps<T> {
    value?: Array<SelectableValue<T>>;
}
declare function AsyncMultiSelect<T, Rest = {}>(props: AsyncMultiSelectProps<T> & Rest): React__default.JSX.Element;

declare const getSelectStyles: micro_memoize.Memoized<(theme: GrafanaTheme2) => {
    menu: string;
    option: string;
    optionIcon: string;
    optionImage: string;
    optionDescription: string;
    optionBody: string;
    optionFocused: string;
    optionSelected: string;
    optionDisabled: string;
    singleValue: string;
    valueContainer: string;
    valueContainerMulti: string;
    valueContainerMultiNoWrap: string;
    loadingMessage: string;
    multiValueContainer: string;
    multiValueRemove: string;
    singleValueRemove: string;
}>;

declare enum Orientation {
    Horizontal = 0,
    Vertical = 1
}
type Spacing = 'none' | 'xs' | 'sm' | 'md' | 'lg';
type Justify = 'flex-start' | 'flex-end' | 'space-between' | 'center';
type Align = 'normal' | 'flex-start' | 'flex-end' | 'center';
interface LayoutProps extends Omit<HTMLProps<HTMLDivElement>, 'align' | 'children' | 'wrap'> {
    children: React__default.ReactNode[] | React__default.ReactNode;
    orientation?: Orientation;
    spacing?: Spacing;
    justify?: Justify;
    align?: Align;
    width?: string;
    wrap?: boolean;
}
interface ContainerProps {
    padding?: Spacing;
    margin?: Spacing;
    grow?: number;
    shrink?: number;
}
/**
 * @deprecated use Stack component instead
 */
declare const HorizontalGroup: ({ children, spacing, justify, align, wrap, width, height, }: Omit<LayoutProps, 'orientation'>) => React__default.JSX.Element;
/**
 * @deprecated use Stack component with the "column" direction instead
 */
declare const VerticalGroup: ({ children, spacing, justify, align, width, height, }: Omit<LayoutProps, 'orientation' | 'wrap'>) => React__default.JSX.Element;
declare const Container: ({ children, padding, margin, grow, shrink }: React__default.PropsWithChildren<ContainerProps>) => React__default.JSX.Element;

type BadgeColor = 'blue' | 'red' | 'green' | 'orange' | 'purple';
interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    text: React__default.ReactNode;
    color: BadgeColor;
    icon?: IconName;
    tooltip?: string;
}
declare const Badge: React__default.NamedExoticComponent<BadgeProps> & {
    Skeleton: (props: unknown) => React__default.JSX.Element;
};

type RadioButtonSize = 'sm' | 'md';

interface RadioButtonGroupProps<T> {
    value?: T;
    id?: string;
    disabled?: boolean;
    disabledOptions?: T[];
    options: Array<SelectableValue<T>>;
    onChange?: (value: T) => void;
    onClick?: (value: T) => void;
    size?: RadioButtonSize;
    fullWidth?: boolean;
    className?: string;
    autoFocus?: boolean;
    ['aria-label']?: string;
    invalid?: boolean;
}
declare function RadioButtonGroup<T>({ options, value, onChange, onClick, disabled, disabledOptions, size, id, className, fullWidth, autoFocus, 'aria-label': ariaLabel, invalid, }: RadioButtonGroupProps<T>): React__default.JSX.Element;
declare namespace RadioButtonGroup {
    var displayName: string;
}

interface RadioButtonListProps<T> {
    /** A name of a radio group. Used to group multiple radio inputs into a single group */
    name: string;
    id?: string;
    /** An array of available options */
    options: Array<SelectableValue<T>>;
    value?: T;
    onChange?: (value: T) => void;
    /** Disables all elements in the list */
    disabled?: boolean;
    /** Disables subset of elements in the list. Compares values using the === operator */
    disabledOptions?: T[];
    className?: string;
}
declare function RadioButtonList<T extends string | number | readonly string[]>({ name, id, options, value, onChange, className, disabled, disabledOptions, }: RadioButtonListProps<T>): React__default.JSX.Element;

interface Props$d extends Props$13 {
    /** Sets the min-width to a multiple of 8px. Default value is 10*/
    minWidth?: number;
    /** Sets the max-width to a multiple of 8px.*/
    maxWidth?: number;
    /** onChange function that will be run on onBlur and onKeyPress with enter*/
    onCommitChange?: (event: React__default.FormEvent<HTMLInputElement>) => void;
}
declare const AutoSizeInput: React__default.ForwardRefExoticComponent<Omit<Props$d, "ref"> & React__default.RefAttributes<HTMLInputElement>>;

interface Props$c extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
    value: string | undefined;
    width?: number;
    onChange: (value: string) => void;
    escapeRegex?: boolean;
}
declare const FilterInput: React__default.ForwardRefExoticComponent<Omit<Props$c, "ref"> & React__default.RefAttributes<HTMLInputElement>>;

type Props$b = React$1.ComponentProps<typeof Input> & {
    /** TRUE if the secret was already configured. (It is needed as often the backend doesn't send back the actual secret, only the information that it was configured) */
    isConfigured: boolean;
    /** Called when the user clicks on the "Reset" button in order to clear the secret */
    onReset: () => void;
};
declare const SecretInput: ({ isConfigured, onReset, ...props }: Props$b) => React$1.JSX.Element;

interface Props$a extends Omit<HTMLProps<HTMLTextAreaElement>, 'size'> {
    /** Show an invalid state around the input */
    invalid?: boolean;
}
declare const TextArea: React__default.ForwardRefExoticComponent<Omit<Props$a, "ref"> & React__default.RefAttributes<HTMLTextAreaElement>>;

type Props$9 = React$1.ComponentProps<typeof TextArea> & {
    /** TRUE if the secret was already configured. (It is needed as often the backend doesn't send back the actual secret, only the information that it was configured) */
    isConfigured: boolean;
    /** Called when the user clicks on the "Reset" button in order to clear the secret */
    onReset: () => void;
};
/**
 * Text area that does not disclose an already configured value but lets the user reset the current value and enter a new one.
 * Typically useful for asymmetric cryptography keys.
 */
declare const SecretTextArea: ({ isConfigured, onReset, ...props }: Props$9) => React$1.JSX.Element;

interface Props$8 extends Omit<HTMLProps<HTMLInputElement>, 'value'> {
    value?: boolean;
    /** Make inline switch's background and border transparent */
    transparent?: boolean;
    /** Show an invalid state around the input */
    invalid?: boolean;
}
declare const Switch: React__default.ForwardRefExoticComponent<Omit<Props$8, "ref"> & React__default.RefAttributes<HTMLInputElement>>;
interface InlineSwitchProps extends Props$8 {
    showLabel?: boolean;
}
declare const InlineSwitch: React__default.ForwardRefExoticComponent<Omit<InlineSwitchProps, "ref"> & React__default.RefAttributes<HTMLInputElement>>;

interface CheckboxProps extends Omit<HTMLProps<HTMLInputElement>, 'value'> {
    /** Label to display next to checkbox */
    label?: string;
    /** Description to display under the label */
    description?: string | React__default.ReactElement;
    /** Current value of the checkbox */
    value?: boolean;
    /** htmlValue allows to specify the input "value" attribute */
    htmlValue?: string | number;
    /** Sets the checkbox into a "mixed" state. This is only a visual change and does not affect the value. */
    indeterminate?: boolean;
    /** Show an invalid state around the input */
    invalid?: boolean;
}
declare const Checkbox: React__default.ForwardRefExoticComponent<Omit<CheckboxProps, "ref"> & React__default.RefAttributes<HTMLInputElement>>;

interface Props$7 {
    /** Callback function to handle uploaded file  */
    onFileUpload: (event: FormEvent<HTMLInputElement>) => void;
    /** Accepted file extensions */
    accept?: string;
    /** Overwrite or add to style */
    className?: string;
    /** Button size */
    size?: ComponentSize;
    /** Show the file name */
    showFileName?: boolean;
}
declare const FileUpload: ({ onFileUpload, className, children, accept, size, showFileName, }: React__default.PropsWithChildren<Props$7>) => React__default.JSX.Element;

type BackwardsCompatibleDropzoneOptions = Omit<DropzoneOptions, 'accept'> & {
    accept?: string | string[] | Accept;
};
interface FileDropzoneProps {
    /**
     * Use the children property to have custom dropzone view.
     */
    children?: ReactNode;
    /**
     * Use this property to override the default behaviour for the react-dropzone options.
     * @default {
     *  maxSize: Infinity,
     *  minSize: 0,
     *  multiple: true,
     *  useFsAccessApi: false,
     *  maxFiles: 0,
     * }
     */
    options?: BackwardsCompatibleDropzoneOptions;
    /**
     * Use this to change the FileReader's read.
     */
    readAs?: 'readAsArrayBuffer' | 'readAsText' | 'readAsBinaryString' | 'readAsDataURL';
    /**
     * Use the onLoad function to get the result from FileReader.
     */
    onLoad?: (result: string | ArrayBuffer | null) => void;
    /**
     * The fileListRenderer property can be used to overwrite the list of files. To not to show
     * any list return null in the function.
     */
    fileListRenderer?: (file: DropzoneFile, removeFile: (file: DropzoneFile) => void) => ReactNode;
    onFileRemove?: (file: DropzoneFile) => void;
}
interface DropzoneFile {
    file: File;
    id: string;
    error: DOMException | null;
    progress?: number;
    abortUpload?: () => void;
    retryUpload?: () => void;
}
declare function FileDropzone({ options, children, readAs, onLoad, fileListRenderer, onFileRemove }: FileDropzoneProps): React__default.JSX.Element;
declare function FileDropzoneDefaultChildren({ primaryText, secondaryText }: {
    primaryText?: string | undefined;
    secondaryText?: string | undefined;
}): React__default.JSX.Element;

interface FileListItemProps {
    file: DropzoneFile;
    removeFile?: (file: DropzoneFile) => void;
}
declare function FileListItem({ file: customFile, removeFile }: FileListItemProps): React__default.JSX.Element;

interface TimeRangeInputProps {
    value: TimeRange;
    timeZone?: TimeZone;
    onChange: (timeRange: TimeRange) => void;
    onChangeTimeZone?: (timeZone: TimeZone) => void;
    hideTimeZone?: boolean;
    placeholder?: string;
    clearable?: boolean;
    /** Controls horizontal alignment of the picker menu */
    isReversed?: boolean;
    /** Controls visibility of the preset time ranges (e.g. **Last 5 minutes**) in the picker menu */
    hideQuickRanges?: boolean;
    disabled?: boolean;
    showIcon?: boolean;
}
declare const TimeRangeInput: ({ value, onChange, onChangeTimeZone, clearable, hideTimeZone, timeZone, placeholder, isReversed, hideQuickRanges, disabled, showIcon, }: TimeRangeInputProps) => React__default.JSX.Element;

/**
 * @internal
 */
interface RelativeTimeRangePickerProps {
    timeRange: RelativeTimeRange;
    onChange: (timeRange: RelativeTimeRange) => void;
}
/**
 * @internal
 */
declare function RelativeTimeRangePicker(props: RelativeTimeRangePickerProps): React__default.JSX.Element;

/**
 * @public
 */
interface CardInnerProps {
    href?: string;
    children?: React__default.ReactNode;
}
/**
 * @public
 */
interface CardContainerProps extends HTMLAttributes<HTMLOrSVGElement>, CardInnerProps {
    /** Disable pointer events for the Card, e.g. click events */
    disableEvents?: boolean;
    /** No style change on hover */
    disableHover?: boolean;
    /** Makes the card selectable, set to "true" to apply selected styles */
    isSelected?: boolean;
    /** Custom container styles */
    className?: string;
}
/** @deprecated Using `CardContainer` directly is discouraged and should be replaced with `Card` */
declare const CardContainer: ({ children, disableEvents, disableHover, isSelected, className, href, ...props }: CardContainerProps) => React__default.JSX.Element;

/**
 * @public
 */
interface Props$6 extends Omit<CardContainerProps, 'disableEvents' | 'disableHover'> {
    /** Indicates if the card and all its actions can be interacted with */
    disabled?: boolean;
    /** Link to redirect to on card click. If provided, the Card inner content will be rendered inside `a` */
    href?: string;
    /** On click handler for the Card */
    onClick?: (e: React__default.MouseEvent<HTMLElement>) => void;
    /** @deprecated Use `Card.Heading` instead */
    heading?: ReactNode;
    /** @deprecated Use `Card.Description` instead */
    description?: string;
    isSelected?: boolean;
    /** If true, the padding of the Card will be smaller */
    isCompact?: boolean;
}
interface CardInterface extends FC<Props$6> {
    Heading: typeof Heading;
    Tags: typeof Tags;
    Figure: typeof Figure;
    Meta: typeof Meta;
    Actions: typeof Actions;
    SecondaryActions: typeof SecondaryActions;
    Description: typeof Description;
}
/**
 * Generic card component
 *
 * @public
 */
declare const Card: CardInterface;
interface ChildProps {
    className?: string;
    disabled?: boolean;
    children?: React__default.ReactNode;
}
/** Main heading for the card */
declare const Heading: {
    ({ children, className, "aria-label": ariaLabel }: ChildProps & {
        'aria-label'?: string;
    }): React__default.JSX.Element;
    displayName: string;
};
declare const Tags: {
    ({ children, className }: ChildProps): React__default.JSX.Element;
    displayName: string;
};
/** Card description text */
declare const Description: {
    ({ children, className }: ChildProps): React__default.JSX.Element;
    displayName: string;
};
declare const Figure: {
    ({ children, align, className }: ChildProps & {
        align?: "center" | "start" | undefined;
    }): React__default.JSX.Element;
    displayName: string;
};
declare const Meta: React__default.MemoExoticComponent<({ children, className, separator }: ChildProps & {
    separator?: string | undefined;
}) => React__default.JSX.Element | null>;
declare const Actions: {
    ({ children, disabled, className }: ChildProps): React__default.JSX.Element;
    displayName: string;
};
declare const SecondaryActions: {
    ({ children, disabled, className }: ChildProps): React__default.JSX.Element;
    displayName: string;
};
/**
 * @public
 * @deprecated Use `className` on respective components to modify styles
 */
declare const getCardStyles: (theme: GrafanaTheme2) => {
    tagList: string;
    actions: string;
    secondaryActions: string;
    media: string;
    description: string;
    metadata: string;
    metadataItem: string;
    separator: string;
    heading: string;
    linkHack: string;
    inner: string;
};

interface Props$5 extends Omit<HTMLProps<HTMLDivElement>, 'className' | 'value' | 'style'> {
    value: FormattedValue;
    className?: string;
    style?: CSSProperties;
}
declare const FormattedValueDisplay: {
    ({ value, className, style, ...htmlProps }: Props$5): React__default.JSX.Element;
    displayName: string;
};

interface Props$4<T> extends HTMLAttributes<HTMLButtonElement> {
    className?: string;
    options: Array<SelectableValue<T>>;
    value?: SelectableValue<T>;
    onChange: (item: SelectableValue<T>) => void;
    /** @deprecated use tooltip instead, tooltipContent is not being processed in ToolbarButton*/
    tooltipContent?: PopoverContent;
    narrow?: boolean;
    variant?: ToolbarButtonVariant;
    tooltip?: string;
}
declare const ButtonSelect: {
    <T>(props: Props$4<T>): React__default.JSX.Element;
    displayName: string;
};

interface Props$3 {
    overlay: React__default.ReactElement | (() => React__default.ReactElement);
    placement?: TooltipPlacement;
    children: React__default.ReactElement;
    /** Amount in pixels to nudge the dropdown vertically and horizontally, respectively. */
    offset?: [number, number];
    onVisibleChange?: (state: boolean) => void;
}
declare const Dropdown: React__default.MemoExoticComponent<({ children, overlay, placement, offset, onVisibleChange }: Props$3) => React__default.JSX.Element>;

/**
 * @public
 */
interface PluginSignatureBadgeProps extends HTMLAttributes<HTMLDivElement> {
    status?: PluginSignatureStatus;
}
/**
 * @public
 */
declare const PluginSignatureBadge: {
    ({ status, color, ...otherProps }: PluginSignatureBadgeProps): React__default.JSX.Element;
    displayName: string;
};

interface UserView {
    user: {
        /** User's name, containing first + last name */
        name: string;
        /** URL to the user's avatar */
        avatarUrl?: string;
    };
    /** Datetime string when the user was last active */
    lastActiveAt: DateTimeInput;
}

interface UserIconProps {
    /** An object that contains the user's details and 'lastActiveAt' status */
    userView: UserView;
    /** A boolean value that determines whether the tooltip should be shown or not */
    showTooltip?: boolean;
    /** An optional class name to be added to the icon element */
    className?: string;
    /** onClick handler to be called when the icon is clicked */
    onClick?: () => void;
}
declare const UserIcon: ({ userView, className, children, onClick, showTooltip, }: PropsWithChildren<UserIconProps>) => React__default.JSX.Element;

interface AvatarProps {
    src: string;
    alt: string;
    width?: ResponsiveProp<ThemeSpacingTokens>;
    height?: ResponsiveProp<ThemeSpacingTokens>;
}
declare const Avatar: ({ src, alt, width, height }: AvatarProps) => React__default.JSX.Element;

interface Props$2 {
    children: ReactNode;
    className?: string;
    htmlFor?: string;
    isFocused?: boolean;
    isInvalid?: boolean;
    tooltip?: PopoverContent;
    width?: number | 'auto';
    /** Make tooltip interactive */
    interactive?: boolean;
}
declare const InlineFormLabel: ({ children, isFocused, isInvalid, className, htmlFor, tooltip, width, interactive, ...rest }: Props$2) => React__default.JSX.Element;

interface DividerProps {
    direction?: 'vertical' | 'horizontal';
    spacing?: ThemeSpacingTokens;
}
declare const Divider: {
    ({ direction, spacing }: DividerProps): React__default.JSX.Element;
    displayName: string;
};

type DragHandlePosition = 'middle' | 'start' | 'end';
declare const getDragStyles: (theme: GrafanaTheme2, handlePosition?: DragHandlePosition) => {
    dragHandleVertical: string;
    dragHandleHorizontal: string;
};

interface UseSplitterOptions {
    /**
     * The initial size of the primary pane between 0-1, defaults to 0.5
     */
    initialSize?: number;
    direction: 'row' | 'column';
    dragPosition?: DragHandlePosition;
    /**
     * Called when ever the size of the primary pane changes
     * @param flexSize (float from 0-1)
     */
    onSizeChanged?: (flexSize: number, pixelSize: number) => void;
    onResizing?: (flexSize: number, pixelSize: number) => void;
}
declare function useSplitter(options: UseSplitterOptions): {
    containerProps: {
        ref: React__default.MutableRefObject<HTMLDivElement | null>;
        className: string;
    };
    primaryProps: {
        ref: React__default.MutableRefObject<HTMLDivElement | null>;
        className: string;
        style: {
            [x: string]: string | number;
            flexGrow: number;
        };
    };
    secondaryProps: {
        ref: React__default.MutableRefObject<HTMLDivElement | null>;
        className: string;
        style: {
            [x: string]: string | number;
            flexGrow: number;
        };
    };
    splitterProps: {
        onPointerUp: (e: React__default.PointerEvent<HTMLDivElement>) => void;
        onPointerDown: (e: React__default.PointerEvent<HTMLDivElement>) => void;
        onPointerMove: (e: React__default.PointerEvent<HTMLDivElement>) => void;
        onKeyDown: (e: React__default.KeyboardEvent<HTMLDivElement>) => void;
        onKeyUp: (e: React__default.KeyboardEvent<HTMLDivElement>) => void;
        onDoubleClick: () => void;
        onBlur: () => void;
        ref: React__default.MutableRefObject<HTMLDivElement | null>;
        style: {
            [x: string]: string;
        };
        role: string;
        'aria-valuemin': number;
        'aria-valuemax': number;
        'aria-valuenow': number;
        'aria-controls': string;
        'aria-label': string;
        tabIndex: number;
        className: string;
    };
};

interface LayoutItemContextProps {
    boostZIndex(): () => void;
}
/**
 * Provides an API for downstream components (e.g. within panels) to inform the layout
 * that anchored tooltips or context menus could overflow the panel bounds. The layout
 * system can then boost the z-index of items with any anchored contents to prevent the overflown
 * content from rendering underneath adjacent layout items (e.g. other panels) that naturally
 * render later/higher in the stacking order
 *
 * This is used by VizTooltips and Annotations, which anchor to data points or time range within
 * the viz drawing area
 *
 * @internal
 */
declare const LayoutItemContext: React$1.Context<LayoutItemContextProps>;

/**
 * @alpha
 */
declare const graphFieldOptions: {
    drawStyle: Array<SelectableValue<GraphDrawStyle>>;
    lineInterpolation: Array<SelectableValue<LineInterpolation>>;
    barAlignment: Array<SelectableValue<BarAlignment>>;
    showPoints: Array<SelectableValue<VisibilityMode>>;
    axisPlacement: Array<SelectableValue<AxisPlacement>>;
    fillGradient: Array<SelectableValue<GraphGradientMode>>;
    stacking: Array<SelectableValue<StackingMode>>;
    thresholdsDisplayModes: Array<SelectableValue<GraphThresholdsStyleMode>>;
};

type UPlotChartState = {
    plot: uPlot | null;
};
/**
 * @internal
 * uPlot abstraction responsible for plot initialisation, setup and refresh
 * Receives a data frame that is x-axis aligned, as of https://github.com/leeoniya/uPlot/tree/master/docs#data-format
 * Exposes context for uPlot instance access
 */
declare class UPlotChart extends Component<PlotProps, UPlotChartState> {
    plotContainer: React__default.RefObject<HTMLDivElement>;
    plotCanvasBBox: React__default.RefObject<DOMRect>;
    constructor(props: PlotProps);
    reinitPlot(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: PlotProps): void;
    render(): React__default.JSX.Element;
}

interface PlotLegendProps extends VizLegendOptions, Omit<VizLayoutLegendProps, 'children'> {
    data: DataFrame[];
    config: UPlotConfigBuilder;
}
declare const PlotLegend: React__default.MemoExoticComponent<({ data, config, placement, calcs, displayMode, ...vizLayoutLegendProps }: PlotLegendProps) => React__default.JSX.Element>;

interface EventsCanvasProps {
    id: string;
    config: UPlotConfigBuilder;
    events: DataFrame[];
    renderEventMarker: (dataFrame: DataFrame, dataFrameFieldIndex: DataFrameFieldIndex) => React__default.ReactNode;
    mapEventToXYCoords: (dataFrame: DataFrame, dataFrameFieldIndex: DataFrameFieldIndex) => {
        x: number;
        y: number;
    } | undefined;
}
declare function EventsCanvas({ id, events, renderEventMarker, mapEventToXYCoords, config }: EventsCanvasProps): React__default.JSX.Element | null;

interface MarkerProps {
    /** x position relative to plotting area bounding box*/
    x: number;
    /** y position relative to plotting area bounding box*/
    y: number;
}
declare const Marker: ({ x, y, children }: React__default.PropsWithChildren<MarkerProps>) => React__default.JSX.Element;

interface XYCanvasProps {
    top: number;
    left: number;
}
/**
 * Renders absolutely positioned element on top of the uPlot's plotting area (axes are not included!).
 * Useful when you want to render some overlay with canvas-independent elements on top of the plot.
 */
declare const XYCanvas: ({ children, left, top }: React__default.PropsWithChildren<XYCanvasProps>) => React__default.JSX.Element;

interface ZoomPluginProps {
    onZoom: (range: {
        from: number;
        to: number;
    }) => void;
    withZoomY?: boolean;
    config: UPlotConfigBuilder;
}
/**
 * @alpha
 */
declare const ZoomPlugin: ({ onZoom, config, withZoomY }: ZoomPluginProps) => null;

interface TooltipPluginProps {
    timeZone: TimeZone;
    data: DataFrame;
    frames?: DataFrame[];
    config: UPlotConfigBuilder;
    mode?: TooltipDisplayMode;
    sortOrder?: SortOrder;
    sync?: () => DashboardCursorSync;
    renderTooltip?: (alignedFrame: DataFrame, seriesIdx: number | null, datapointIdx: number | null) => React__default.ReactNode;
}
/**
 * @alpha
 */
declare const TooltipPlugin: ({ mode, sortOrder, sync, timeZone, config, renderTooltip, ...otherProps }: TooltipPluginProps) => React__default.JSX.Element | null;

declare const enum TooltipHoverMode {
    xOne = 0,
    xAll = 1,
    xyOne = 2
}
interface TooltipPlugin2Props {
    config: UPlotConfigBuilder;
    hoverMode: TooltipHoverMode;
    queryZoom?: (range: {
        from: number;
        to: number;
    }) => void;
    clientZoom?: boolean;
    render: (u: uPlot, dataIdxs: Array<number | null>, seriesIdx: number | null, isPinned: boolean, dismiss: () => void, timeRange: TimeRange2 | null, viaSync: boolean) => React__default.ReactNode;
    maxWidth?: number;
    maxHeight?: number;
}
interface TimeRange2 {
    from: number;
    to: number;
}
/**
 * @alpha
 */
declare const TooltipPlugin2: ({ config, hoverMode, render, clientZoom, queryZoom, maxWidth, maxHeight, }: TooltipPlugin2Props) => React__default.ReactPortal | null;

interface KeyboardPluginProps {
    config: UPlotConfigBuilder;
}
/**
 * @alpha
 */
declare const KeyboardPlugin: ({ config }: KeyboardPluginProps) => null;

type OnLabelClick = (name: string, value: string | undefined, event: React__default.MouseEvent<HTMLElement>) => void;
interface Props$1 extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
    name: string;
    active?: boolean;
    loading?: boolean;
    searchTerm?: string;
    value?: string;
    facets?: number;
    title?: string;
    highlightParts?: HighlightPart[];
    onClick?: OnLabelClick;
}
/**
 * @internal
 */
declare const Label: React__default.ForwardRefExoticComponent<Props$1 & React__default.RefAttributes<HTMLButtonElement>>;

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
declare const PanelContainer: ({ children, className, ...props }: Props) => React__default.JSX.Element;

/** @deprecated */
interface FlotItem<T> {
    datapoint: [number, number];
    dataIndex: number;
    series: T;
    seriesIndex: number;
    pageX: number;
    pageY: number;
}

/** @deprecated */
interface GraphProps {
    ariaLabel?: string;
    children?: JSX.Element | JSX.Element[];
    series: GraphSeriesXY[];
    timeRange: TimeRange;
    timeZone?: TimeZone;
    showLines?: boolean;
    showPoints?: boolean;
    showBars?: boolean;
    width: number;
    height: number;
    isStacked?: boolean;
    lineWidth?: number;
    onHorizontalRegionSelected?: (from: number, to: number) => void;
}
/** @deprecated */
interface GraphState {
    pos?: FlotPosition;
    contextPos?: FlotPosition;
    isTooltipVisible: boolean;
    isContextVisible: boolean;
    activeItem?: FlotItem<GraphSeriesXY>;
    contextItem?: FlotItem<GraphSeriesXY>;
}
/**
 * This is a react wrapper for the angular, flot based graph visualization.
 * Rather than using this component, you should use the `<PanelRender .../> with
 * timeseries panel configs.
 *
 * @deprecated
 */
declare class Graph extends PureComponent<GraphProps, GraphState> {
    static defaultProps: {
        showLines: boolean;
        showPoints: boolean;
        showBars: boolean;
        isStacked: boolean;
        lineWidth: number;
    };
    state: GraphState;
    element: HTMLElement | null;
    $element: JQuery<HTMLElement> | null;
    componentDidUpdate(prevProps: GraphProps, prevState: GraphState): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onPlotSelected: (event: JQuery.Event, ranges: {
        xaxis: {
            from: number;
            to: number;
        };
    }) => void;
    onPlotHover: (event: JQuery.Event, pos: FlotPosition, item?: FlotItem<GraphSeriesXY>) => void;
    onPlotClick: (event: JQuery.Event, contextPos: FlotPosition, item?: FlotItem<GraphSeriesXY>) => void;
    getYAxes(series: GraphSeriesXY[]): {
        show: boolean;
        index: number;
        position: string;
        min: number | null;
        tickDecimals: number | null;
    }[] | {
        show: boolean;
        min: number;
        max: number;
    }[];
    renderTooltip: () => React__default.ReactElement<VizTooltipProps, string | React__default.JSXElementConstructor<any>> | null;
    renderContextMenu: () => React__default.JSX.Element | null;
    getBarWidth: () => number;
    draw(): void;
    render(): React__default.JSX.Element;
}

interface GraphWithLegendProps extends GraphProps {
    legendDisplayMode: LegendDisplayMode;
    legendVisibility: boolean;
    placement: LegendPlacement;
    hideEmpty?: boolean;
    hideZero?: boolean;
    sortLegendBy?: string;
    sortLegendDesc?: boolean;
    onSeriesToggle?: (label: string, event: React__default.MouseEvent<HTMLElement>) => void;
    onToggleSort: (sortBy: string) => void;
}
declare const GraphWithLegend: (props: GraphWithLegendProps) => React__default.JSX.Element;

/** @deprecated */
interface GraphDimensions extends Dimensions {
    xAxis: Dimension<number>;
    yAxis: Dimension<number>;
}

/** @deprecated */
type ContextDimensions<T extends Dimensions = any> = {
    [key in keyof T]: [number, number | undefined] | null;
};
/** @deprecated */
type GraphContextMenuProps = ContextMenuProps & {
    getContextMenuSource: () => FlotDataPoint | null;
    timeZone?: TimeZone;
    itemsGroup?: MenuGroupProps[];
    dimensions?: GraphDimensions;
    contextDimensions?: ContextDimensions;
};
/** @internal */
declare const GraphContextMenu: ({ getContextMenuSource, timeZone, itemsGroup, dimensions, contextDimensions, ...otherProps }: GraphContextMenuProps) => React__default.JSX.Element;
/** @internal */
declare const GraphContextMenuHeader: ({ timestamp, seriesColor, displayName, displayValue, }: {
    timestamp: string;
    seriesColor: string;
    displayName: string;
    displayValue: FormattedValue;
}) => React__default.JSX.Element;

/** @deprecated */
declare const graphTickFormatter: (epoch: number, axis: any) => string;
/** @deprecated */
declare const graphTimeFormat: (ticks: number | null, min: number | null, max: number | null) => string;

/**
 * Event being triggered when the user interact with the Graph legend.
 * @deprecated
 */
interface GraphNGLegendEvent {
    fieldIndex: DataFrameFieldIndex;
    mode: SeriesVisibilityChangeMode;
}
/** @deprecated */
interface XYFieldMatchers {
    x: FieldMatcher;
    y: FieldMatcher;
}

/**
 * @deprecated
 * @internal -- not a public API
 */
type PropDiffFn<T extends any = any> = (prev: T, next: T) => boolean;
/** @deprecated */
interface GraphNGProps extends Themeable2 {
    frames: DataFrame[];
    structureRev?: number;
    width: number;
    height: number;
    timeRange: TimeRange;
    timeZone: TimeZone[] | TimeZone;
    legend: VizLegendOptions;
    fields?: XYFieldMatchers;
    renderers?: Renderers;
    tweakScale?: (opts: ScaleProps, forField: Field$1) => ScaleProps;
    tweakAxis?: (opts: AxisProps, forField: Field$1) => AxisProps;
    onLegendClick?: (event: GraphNGLegendEvent) => void;
    children?: (builder: UPlotConfigBuilder, alignedFrame: DataFrame) => React__default.ReactNode;
    prepConfig: (alignedFrame: DataFrame, allFrames: DataFrame[], getTimeRange: () => TimeRange) => UPlotConfigBuilder;
    propsToDiff?: Array<string | PropDiffFn>;
    preparePlotFrame?: (frames: DataFrame[], dimFields: XYFieldMatchers) => DataFrame | null;
    renderLegend: (config: UPlotConfigBuilder) => React__default.ReactElement | null;
    /**
     * needed for propsToDiff to re-init the plot & config
     * this is a generic approach to plot re-init, without having to specify which panel-level options
     * should cause invalidation. we can drop this in favor of something like panelOptionsRev that gets passed in
     * similar to structureRev. then we can drop propsToDiff entirely.
     */
    options?: Record<string, any>;
}
/**
 * @internal -- not a public API
 * @deprecated
 */
interface GraphNGState {
    alignedFrame: DataFrame;
    alignedData?: AlignedData;
    config?: UPlotConfigBuilder;
}
/**
 * "Time as X" core component, expects ascending x
 * @deprecated
 */
declare class GraphNG extends Component<GraphNGProps, GraphNGState> {
    static contextType: React__default.Context<PanelContext>;
    panelContext: PanelContext;
    private plotInstance;
    private subscription;
    constructor(props: GraphNGProps);
    getTimeRange: () => TimeRange;
    prepState(props: GraphNGProps, withConfig?: boolean): GraphNGState;
    handleCursorUpdate(evt: DataHoverEvent | LegacyGraphHoverEvent): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: GraphNGProps): void;
    componentWillUnmount(): void;
    render(): React__default.JSX.Element | null;
}

declare const TimeSeries: React__default.FunctionComponent<{
    fields?: XYFieldMatchers | undefined;
    width: number;
    options?: Record<string, any> | undefined;
    timeZone: string | string[];
    structureRev?: number | undefined;
    legend: schema.VizLegendOptions;
    children?: ((builder: UPlotConfigBuilder, alignedFrame: DataFrame) => React__default.ReactNode) | undefined;
    height: number;
    timeRange: TimeRange;
    frames: DataFrame[];
    renderers?: Renderers | undefined;
    tweakScale?: ((opts: ScaleProps, forField: _grafana_data.Field<any, _grafana_data.Vector<any>>) => ScaleProps) | undefined;
    tweakAxis?: ((opts: AxisProps, forField: _grafana_data.Field<any, _grafana_data.Vector<any>>) => AxisProps) | undefined;
    onLegendClick?: ((event: GraphNGLegendEvent) => void) | undefined;
    preparePlotFrame?: ((frames: DataFrame[], dimFields: XYFieldMatchers) => DataFrame | null) | undefined;
}>;

/** @deprecated */
declare const useGraphNGContext: () => {
    dimFields: XYFieldMatchers;
    mapSeriesIndexToDataFrameFieldIndex: (index: number) => DataFrameFieldIndex;
    getXAxisField: () => Field$1<any, _grafana_data.Vector<any>> | null;
    alignedData: DataFrame;
};

declare function preparePlotFrame(frames: DataFrame[], dimFields: XYFieldMatchers, timeRange?: TimeRange | null): DataFrame | null;
declare function buildScaleKey(config: FieldConfig<GraphFieldConfig>, fieldType: FieldType): string;

/** @deprecated Please use non-legacy versions of these components */
declare const LegacyForms: {
    SecretFormField: {
        ({ label, labelWidth, inputWidth, onReset, isConfigured, tooltip, placeholder, interactive, ...inputProps }: Props$1d): React$1.JSX.Element;
        displayName: string;
    };
    FormField: {
        ({ label, tooltip, labelWidth, inputWidth, inputEl, className, interactive, ...inputProps }: Props$1e): React$1.JSX.Element;
        displayName: string;
        defaultProps: {
            labelWidth: number;
            inputWidth: number;
        };
    };
    Select: typeof Select$1;
    AsyncSelect: typeof AsyncSelect$1;
    IndicatorsContainer: (props: react_select.IndicatorsContainerProps<unknown, boolean, react_select.GroupBase<unknown>>) => React$1.JSX.Element;
    NoOptionsMessage: <T extends unknown>(props: Props$1g<T>) => React$1.JSX.Element;
    Input: typeof Input$1;
    Switch: typeof Switch$1;
};

type Omit$1<T, K> = Pick<T, Exclude<keyof T, K>>;
type Subtract<T, K> = Omit$1<T, keyof K>;
/** @deprecated use withTheme2 */
/** @public */
declare const withTheme: <P extends Themeable, S extends {} = {}>(Component: React__default.ComponentType<P>) => React__default.FunctionComponent<Subtract<P, Themeable>> & S;
/** @alpha */
declare const withTheme2: <P extends Themeable2, S extends {} = {}>(Component: React__default.ComponentType<P>) => React__default.FunctionComponent<Subtract<P, Themeable2>> & S;
/** @deprecated use useTheme2 */
/** @public */
declare function useTheme(): GrafanaTheme;
/** @public */
declare function useTheme2(): GrafanaTheme2;
/**
 * Hook for using memoized styles with access to the theme.
 *
 * NOTE: For memoization to work, you need to ensure that the function
 * you pass in doesn't change, or only if it needs to. (i.e. declare
 * your style creator outside of a function component or use `useCallback()`.)
 * */
/** @deprecated use useStyles2 */
/** @public */
declare function useStyles<T>(getStyles: (theme: GrafanaTheme) => T): T;
/**
 * Hook for using memoized styles with access to the theme. Pass additional
 * arguments to the getStyles function as additional arguments to this hook.
 *
 * Prefer using primitive values (boolean, number, string, etc) for
 * additional arguments for better performance
 *
 * ```
 * const getStyles = (theme, isDisabled, isOdd) => {css(...)}
 * [...]
 * const styles = useStyles2(getStyles, true, Boolean(index % 2))
 * ```
 *
 * NOTE: For memoization to work, ensure that all arguments don't change
 * across renders (or only change if they need to)
 *
 * @public
 * */
declare function useStyles2<T extends unknown[], CSSReturnValue>(getStyles: (theme: GrafanaTheme2, ...args: T) => CSSReturnValue, ...additionalArguments: T): CSSReturnValue;
/**
 * Enables theme context mocking
 */
/** @public */
declare const mockThemeContext: (theme: Partial<GrafanaTheme2>) => () => void;

/** @public */
declare const getTheme: (mode?: 'dark' | 'light') => GrafanaTheme;
/** @public */
declare const mockTheme: (mock: (name?: string) => GrafanaTheme) => () => void;

/**
 * @public
 * @deprecated use useStyles hook
 *  Creates memoized version of styles creator
 * @param stylesCreator function accepting dependencies based on which styles are created
 */
declare function stylesFactory<ResultFn extends (this: any, ...newArgs: any[]) => ReturnType<ResultFn>>(stylesCreator: ResultFn): micro_memoize.Memoized<ResultFn>;

/** @internal */
declare function GlobalStyles(): React__default.JSX.Element;

declare function cardChrome(theme: GrafanaTheme2): string;
declare function hoverColor(color: string, theme: GrafanaTheme2): string;
declare function listItem(theme: GrafanaTheme2): string;
declare function listItemSelected(theme: GrafanaTheme2): string;
declare function mediaUp(breakpoint: string): string;
declare const focusCss: (theme: GrafanaTheme | GrafanaTheme2) => string;
declare function getMouseFocusStyles(theme: GrafanaTheme | GrafanaTheme2): {
    outline: string;
    boxShadow: string;
};
declare function getFocusStyles(theme: GrafanaTheme2): {
    outline: string;
    outlineOffset: string;
    boxShadow: string;
    transitionTimingFunction: string;
    transitionDuration: string;
    transitionProperty: string;
};
declare const getTooltipContainerStyles: (theme: GrafanaTheme2) => {
    overflow: string;
    background: string;
    boxShadow: string;
    maxWidth: string;
    padding: string;
    borderRadius: string;
    zIndex: number;
};

declare const mixins_d_cardChrome: typeof cardChrome;
declare const mixins_d_hoverColor: typeof hoverColor;
declare const mixins_d_listItem: typeof listItem;
declare const mixins_d_listItemSelected: typeof listItemSelected;
declare const mixins_d_mediaUp: typeof mediaUp;
declare const mixins_d_focusCss: typeof focusCss;
declare const mixins_d_getMouseFocusStyles: typeof getMouseFocusStyles;
declare const mixins_d_getFocusStyles: typeof getFocusStyles;
declare const mixins_d_getTooltipContainerStyles: typeof getTooltipContainerStyles;
declare namespace mixins_d {
  export {
    mixins_d_cardChrome as cardChrome,
    mixins_d_hoverColor as hoverColor,
    mixins_d_listItem as listItem,
    mixins_d_listItemSelected as listItemSelected,
    mixins_d_mediaUp as mediaUp,
    mixins_d_focusCss as focusCss,
    mixins_d_getMouseFocusStyles as getMouseFocusStyles,
    mixins_d_getFocusStyles as getFocusStyles,
    mixins_d_getTooltipContainerStyles as getTooltipContainerStyles,
  };
}

/**
 * @alpha
 */
declare function addAxisConfig(builder: FieldConfigEditorBuilder<AxisConfig>, defaultConfig: AxisConfig, hideScale?: boolean): void;
/**
 * @internal
 */
declare const ScaleDistributionEditor: ({ value, onChange }: StandardEditorProps<ScaleDistributionConfig>) => React__default.JSX.Element;

/**
 * @alpha
 */
declare function addHideFrom(builder: FieldConfigEditorBuilder<HideableFieldConfig>): void;

/**
 * @alpha
 */
declare function addLegendOptions<T extends OptionsWithLegend>(builder: PanelOptionsEditorBuilder<T>, includeLegendCalcs?: boolean): void;

declare function addTooltipOptions<T extends OptionsWithTooltip>(builder: PanelOptionsEditorBuilder<T>, singleOnly?: boolean, setProximity?: boolean, defaultOptions?: Partial<OptionsWithTooltip>): void;

/**
 * Adds common text control options to a visualization options
 * @param builder
 * @param withTitle
 * @public
 */
declare function addTextSizeOptions<T extends OptionsWithTextFormatting>(builder: PanelOptionsEditorBuilder<T>, withTitle?: boolean): void;

declare const StackingEditor: ({ value, context, onChange, item, }: StandardEditorProps<StackingConfig, {
    options: Array<SelectableValue<StackingMode>>;
}>) => React__default.JSX.Element;
declare function addStackingConfig(builder: FieldConfigEditorBuilder<GraphFieldConfig>, defaultConfig?: StackingConfig, category?: string[]): void;

declare const index_d_addAxisConfig: typeof addAxisConfig;
declare const index_d_ScaleDistributionEditor: typeof ScaleDistributionEditor;
declare const index_d_addHideFrom: typeof addHideFrom;
declare const index_d_addLegendOptions: typeof addLegendOptions;
declare const index_d_addTooltipOptions: typeof addTooltipOptions;
declare const index_d_addTextSizeOptions: typeof addTextSizeOptions;
declare const index_d_StackingEditor: typeof StackingEditor;
declare const index_d_addStackingConfig: typeof addStackingConfig;
declare namespace index_d {
  export {
    index_d_addAxisConfig as addAxisConfig,
    index_d_ScaleDistributionEditor as ScaleDistributionEditor,
    index_d_addHideFrom as addHideFrom,
    index_d_addLegendOptions as addLegendOptions,
    index_d_addTooltipOptions as addTooltipOptions,
    index_d_addTextSizeOptions as addTextSizeOptions,
    index_d_StackingEditor as StackingEditor,
    index_d_addStackingConfig as addStackingConfig,
  };
}

declare function BracesPlugin(): Plugin;

declare function ClearPlugin(): Plugin;

declare function ClipboardPlugin(): Plugin;

declare function IndentationPlugin(): Plugin;

declare function NewlinePlugin(): Plugin;

declare function RunnerPlugin({ handler }: {
    handler?: (e: React__default.KeyboardEvent) => void;
}): Plugin;

declare function SelectionShortcutsPlugin(): Plugin;

interface OptionsFormat {
    onlyIn?: (node: Node) => boolean;
    getSyntax?: (node: Node) => string;
    renderMark?: ({ mark, children }: {
        mark: Mark;
        children: React__default.ReactNode;
    }) => void | React__default.ReactNode;
}

interface Token {
    content: string;
    offsets?: {
        start: number;
        end: number;
    };
    types: string[];
    aliases: string[];
    prev?: Token | null;
    next?: Token | null;
}
/**
 * A Slate plugin to highlight code syntax.
 */
declare function SlatePrism(optsParam?: OptionsFormat, prismLanguages?: Prism.LanguageMap): Plugin;

declare global {
    interface Window {
        grafanaBootData?: BootData;
    }
}
declare function SuggestionsPlugin({ onTypeahead, cleanText, onWillApplySuggestion, portalOrigin, }: {
    onTypeahead?: (typeahead: TypeaheadInput) => Promise<TypeaheadOutput>;
    cleanText?: (text: string) => string;
    onWillApplySuggestion?: (suggestion: string, state: SuggestionsState) => string;
    portalOrigin: string;
}): Plugin;

export { ALERTING_COLOR, ActionMeta, AdHocFilterItem, Alert, AlertVariant, AlertingSettings, AsyncMultiSelect, AsyncSelect, AsyncSelectProps, AsyncVirtualizedSelect, AutoSaveField, AutoSizeInput, Avatar, Badge, BadgeColor, BadgeProps, BarGauge, BigValue, BigValueColorMode, BigValueGraphMode, BigValueJustifyMode, BigValueTextMode, Box, BracesPlugin, Label as BrowserLabel, Button, ButtonCascader, ButtonGroup, ButtonProps, ButtonSelect, ButtonVariant, CallToActionCard, Card, CardContainer, CardContainerProps, Props$6 as CardProps, Cascader, CascaderOption, CertificationKey, Checkbox, ClearPlugin, ClickOutsideWrapper, ClipboardButton, ClipboardPlugin, CodeEditor, MonacoOptions as CodeEditorMonacoOptions, CodeEditorSuggestionItem, CodeEditorSuggestionItemKind, CollapsableSection, Collapse, ColorPicker, ColorPickerInput, Column, CompletionItem, CompletionItemGroup, CompletionItemKind, ComponentSize, ConfirmButton, ConfirmModal, ConfirmModalProps, Container, ContextMenu, ContextMenuProps, ControlComponent, ControlledCollapse, Counter, CustomCellRendererProps, CustomComponentProps, CustomControlProps, CustomHeadersSettings, CustomScrollbar, DEFAULT_ANNOTATION_COLOR, dom_d as DOMUtil, DataLinkButton, DataLinkInput, DataLinksContextMenu, DataLinksContextMenuApi, DataLinksContextMenuProps, DataLinksInlineEditor, DataSourceHttpSettings, DatePicker, DatePickerProps, DatePickerWithInput, DatePickerWithInputProps, DateTimePicker, DeleteButton, Divider, DragHandlePosition, Drawer, Dropdown, DropzoneFile, EmptySearchResult, ErrorBoundary, ErrorBoundaryAlert, ErrorBoundaryAlertProps, ErrorWithStack, EventsCanvas, EventsWithValidation, FIXED_UNIT, FadeTransition, FeatureBadge, FeatureInfoBox, FetchDataArgs, FetchDataFunc, Field, FieldArray, FieldArrayApi, FieldLinkList, FieldProps, FieldSet, FieldValidationMessage, FileDropzone, FileDropzoneDefaultChildren, FileDropzoneProps, FileListItem, FileListItemProps, FileUpload, FilterInput, FilterPill, Form, FormAPI, FormInputSize, FormatOptionLabelMeta, FormattedValueDisplay, FullWidthButtonContainer, Gauge, GlobalStyles, Graph, GraphContextMenu, GraphContextMenuHeader, GraphNG, GraphNGLegendEvent, GraphNGProps, GraphSeriesToggler, GraphSeriesTogglerAPI, GraphWithLegend, Grid, HighlightPart, HorizontalGroup, Icon, IconButton, IconButtonVariant, IconSize, IconType, IndentationPlugin, InfoBox, InlineField, InlineFieldRow, InlineFormLabel, InlineLabel, InlineSegmentGroup, InlineSwitch, InlineToast, Input, InputActionMeta, InputControl, InteractiveTable, JSONFormatter, JsonExplorer, KeyboardPlugin, Label$1 as Label, LayoutItemContext, LayoutItemContextProps, LegacyForms, LegacyInputStatus, Legend, Link, LinkButton, List, LoadOptionsCallback, LoadingBar, LoadingBarProps, LoadingPlaceholder, LoadingPlaceholderProps, Marker, Menu, MenuGroup, MenuGroupProps, MenuItem, MenuItemProps, MenuItemsGroup, MenuProps, Modal, ModalHeader, Props$Q as ModalProps, ModalRoot, ModalTabContent, ModalTabsHeader, ModalsContext, ModalsController, ModalsProvider, Monaco, MonacoEditor, MultiSelect, MultiSelectCommonProps, NO_DATA_COLOR, NewlinePlugin, NodeGraphDataFrameFieldNames, OK_COLOR, OnTagClick, PENDING_COLOR, PageToolbar, Pagination, PanelChrome, LoadingIndicator as PanelChromeLoadingIndicator, LoadingIndicatorProps as PanelChromeLoadingIndicatorProps, PanelChromeProps, PanelChromeType, PanelContainer, PanelContext, PanelContextProvider, PanelContextRoot, PanelPadding, PlotLegend, PlotSelection, PlotTooltipInterpolator, PluginSignatureBadge, PluginSignatureBadgeProps, Popover, PopoverContent, PopoverController, Portal, PortalContainer, QueryField, QueryFieldProps, REGION_FILL_ALPHA, RadioButtonGroup, RadioButtonList, RangeSlider, ReactMonacoEditorLazy as ReactMonacoEditor, ReactSelectProps, reactUtils_d as ReactUtils, RefreshPicker, RelativeTimeRangePicker, RenderUserContentAsHTML, RunnerPlugin, SCHEMA, ScrollbarPosition, SearchFunction, SearchFunctionType, SecretInput, SecretTextArea, SecureSocksProxySettings, Segment, SegmentAsync, SegmentInput, SegmentSection, SegmentSelect, Select, SelectAsyncProps, SelectBaseProps, SelectCommonProps, SelectContainer, SelectContainerProps, SelectOptions, SelectValue, SelectableOptGroup, SelectionShortcutsPlugin, SeriesColorPicker, SeriesColorPickerPopover, SeriesColorPickerPopoverWithTheme, SeriesIcon, SeriesTable, SeriesTableProps, SeriesTableRow, SeriesTableRowProps, SeriesVisibilityChangeBehavior, SeriesVisibilityChangeMode, SetInterval, SingleStatBaseOptions, SlatePrism, SlideOutTransition, Slider, Space, Sparkline, Spinner, Stack, StatsPicker, SuggestionsPlugin, SuggestionsState, Switch, TLSAuthSettings, Tab, TabConfig, TabContent, TabProps, TabbedContainer, Table, TableCustomCellOptions, TableFieldOptions, TableFooterCalc, TableInputCSV, TableSortByFieldState, TabsBar, Tag, TagList, TagsInput, Text, TextArea, TextLink, Themeable, Themeable2, TimeOfDayPicker, TimePickerTooltip, TimeRangeInput, TimeRangeLabel, TimeRangePicker, TimeRangePickerProps, TimeSeries, TimeZonePicker, Toggletip, Token, ToolbarButton, ToolbarButtonRow, Tooltip, TooltipPlugin, TooltipPlugin2, TypeaheadInput, TypeaheadOutput, UPLOT_AXIS_FONT_SIZE, UPlotChart, UPlotConfigBuilder, UPlotConfigPrepFn, UnitPicker, UserIcon, UserIconProps, UserView, ValidationEvents, ValidationRule, ValuePicker, VerticalGroup, VerticalTab, VirtualizedSelect, VirtualizedSelectAsyncProps, VirtualizedSelectProps, VizLayout, VizLayoutComponentType, VizLayoutLegendProps, VizLayoutProps, VizLegend, VizLegendItem, VizLegendListItem, VizRepeater, VizRepeaterRenderValueProps, VizTooltip, VizTooltipContainer, WeekStartPicker, WithContextMenu, XYCanvas, ZoomPlugin, attachDebugger, buildScaleKey, calculateFontSize, clearButtonStyles, colors, index_d as commonOptionsBuilder, convertOldAngularValueMapping, createLogger, defaultIntervals, fieldMatchersUI, fuzzyMatch, getAvailableIcons, getCanvasContext, getCardStyles, getCellLinks, getDragStyles, getFieldTypeIcon, getFieldTypeIconName, getInputStyles, getPortalContainer, getScrollbarWidth, getSelectStyles, getTagColor, getTagColorIndexFromName, getTagColorsFromName, getTextColorForAlphaBackground, getTextColorForBackground, getTheme, graphFieldOptions, graphTickFormatter, graphTimeFormat, hasValidationEvent, isCompactUrl, isIconSize, linkModelToContextMenuItems, makeFragment, makeValue, measureText, mockTheme, mockThemeContext, preparePlotFrame, regexValidation, resetSelectStyles, sharedInputStyle, sharedSingleStatMigrationHandler, sharedSingleStatPanelChangedHandler, sortedColors, mixins_d as styleMixins, stylesFactory, useForceUpdate, useGraphNGContext, usePanelContext, useSplitter, useStyles, useStyles2, useTheme, useTheme2, validate, variableSuggestionToCodeEditorSuggestion, withErrorBoundary, withTheme, withTheme2 };
