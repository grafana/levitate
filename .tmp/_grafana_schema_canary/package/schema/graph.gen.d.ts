export declare enum AxisPlacement {
    Auto = "auto",
    Bottom = "bottom",
    Hidden = "hidden",
    Left = "left",
    Right = "right",
    Top = "top"
}
export declare enum VisibilityMode {
    Always = "always",
    Auto = "auto",
    Never = "never"
}
export declare enum GraphDrawStyle {
    Bars = "bars",
    Line = "line",
    Points = "points"
}
export declare enum LineInterpolation {
    Linear = "linear",
    Smooth = "smooth",
    StepAfter = "stepAfter",
    StepBefore = "stepBefore"
}
export declare enum ScaleDistribution {
    Linear = "linear",
    Log = "log",
    Ordinal = "ordinal"
}
export declare enum GraphGradientMode {
    Hue = "hue",
    None = "none",
    Opacity = "opacity",
    Scheme = "scheme"
}
export declare enum StackingMode {
    None = "none",
    Normal = "normal",
    Percent = "percent"
}
export declare enum BarAlignment {
    After = 1,
    Before = -1,
    Center = 0
}
export declare enum ScaleOrientation {
    Horizontal = 0,
    Vertical = 1
}
export declare enum ScaleDirection {
    Down = -1,
    Left = -1,
    Right = 1,
    Up = 1
}
export interface LineStyle {
    dash?: number[];
    fill?: 'solid' | 'dash' | 'dot' | 'square';
}
export interface LineConfig {
    lineColor?: string;
    lineInterpolation?: LineInterpolation;
    lineStyle?: LineStyle;
    lineWidth?: number;
    spanNulls?: boolean | number;
}
export interface BarConfig {
    barAlignment?: BarAlignment;
    barMaxWidth?: number;
    barWidthFactor?: number;
}
export interface FillConfig {
    fillBelowTo?: string;
    fillColor?: string;
    fillOpacity?: number;
}
export interface PointsConfig {
    pointColor?: string;
    pointSize?: number;
    pointSymbol?: string;
    showPoints?: VisibilityMode;
}
export interface ScaleDistributionConfig {
    log?: number;
    type: ScaleDistribution;
}
export interface AxisConfig {
    axisGridShow?: boolean;
    axisLabel?: string;
    axisPlacement?: AxisPlacement;
    axisSoftMax?: number;
    axisSoftMin?: number;
    axisWidth?: number;
    scaleDistribution?: ScaleDistributionConfig;
}
export interface HideSeriesConfig {
    legend: boolean;
    tooltip: boolean;
    viz: boolean;
}
export interface StackingConfig {
    group?: string;
    mode?: StackingMode;
}
export interface StackableFieldConfig {
    stacking?: StackingConfig;
}
export interface HideableFieldConfig {
    hideFrom?: HideSeriesConfig;
}
export declare enum GraphTresholdsStyleMode {
    Area = "area",
    Line = "line",
    LineAndArea = "line+area",
    Off = "off",
    Series = "series"
}
export interface GraphThresholdsStyleConfig {
    mode: GraphTresholdsStyleMode;
}
export declare type LegendPlacement = 'bottom' | 'right';
export declare enum LegendDisplayMode {
    Hidden = "hidden",
    List = "list",
    Table = "table"
}
export interface TableSortByFieldState {
    desc?: boolean;
    displayName: string;
}
export interface SingleStatBaseOptions extends OptionsWithTextFormatting {
    orientation: VizOrientation;
    reduceOptions: ReduceDataOptions;
}
export interface ReduceDataOptions {
    calcs: string[];
    fields?: string;
    limit?: number;
    values?: boolean;
}
export declare enum VizOrientation {
    Auto = "auto",
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export interface OptionsWithTooltip {
    tooltip: VizTooltipOptions;
}
export interface OptionsWithLegend {
    legend: VizLegendOptions;
}
export interface OptionsWithTextFormatting {
    text?: VizTextDisplayOptions;
}
export declare enum BigValueColorMode {
    Background = "background",
    None = "none",
    Value = "value"
}
export declare enum BigValueGraphMode {
    Area = "area",
    Line = "line",
    None = "none"
}
export declare enum BigValueJustifyMode {
    Auto = "auto",
    Center = "center"
}
export declare enum BigValueTextMode {
    Auto = "auto",
    Name = "name",
    None = "none",
    Value = "value",
    Value_and_name = "value_and_name"
}
export declare type FieldTextAlignment = 'auto' | 'left' | 'right' | 'center';
export declare enum TableCellDisplayMode {
    Auto = "auto",
    BasicGauge = "basic",
    ColorBackground = "color-background",
    ColorBackgroundSolid = "color-background-solid",
    ColorText = "color-text",
    GradientGauge = "gradient-gauge",
    Image = "image",
    JSONView = "json-view",
    LcdGauge = "lcd-gauge"
}
export interface VizTextDisplayOptions {
    titleSize?: number;
    valueSize?: number;
}
export declare enum TooltipDisplayMode {
    Multi = "multi",
    None = "none",
    Single = "single"
}
export interface GraphFieldConfig extends LineConfig, FillConfig, PointsConfig, AxisConfig, BarConfig, StackableFieldConfig, HideableFieldConfig {
    drawStyle?: GraphDrawStyle;
    gradientMode?: GraphGradientMode;
    thresholdsStyle?: GraphThresholdsStyleConfig;
}
export interface VizLegendOptions {
    asTable?: boolean;
    calcs: string[];
    displayMode: LegendDisplayMode;
    isVisible?: boolean;
    placement: LegendPlacement;
    sortBy?: string;
    sortDesc?: boolean;
}
export declare enum BarGaugeDisplayMode {
    Basic = "basic",
    Gradient = "gradient",
    Lcd = "lcd"
}
export interface TableFieldOptions {
    align: string;
    displayMode: TableCellDisplayMode;
    hidden?: boolean;
    minWidth?: number;
    width?: number;
    filterable?: boolean;
}
export declare const defaultTableFieldOptions: TableFieldOptions;
export interface VizTooltipOptions {
    mode: TooltipDisplayMode;
}
