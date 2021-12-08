'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This file was autogenerated by cuetsy from all the files in this directory,
// then hand-edited for correctness. It will be fully auto-generated Soon™.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
exports.AxisPlacement = void 0;
(function (AxisPlacement) {
    AxisPlacement["Auto"] = "auto";
    AxisPlacement["Bottom"] = "bottom";
    AxisPlacement["Hidden"] = "hidden";
    AxisPlacement["Left"] = "left";
    AxisPlacement["Right"] = "right";
    AxisPlacement["Top"] = "top";
})(exports.AxisPlacement || (exports.AxisPlacement = {}));
exports.VisibilityMode = void 0;
(function (VisibilityMode) {
    VisibilityMode["Always"] = "always";
    VisibilityMode["Auto"] = "auto";
    VisibilityMode["Never"] = "never";
})(exports.VisibilityMode || (exports.VisibilityMode = {}));
exports.GraphDrawStyle = void 0;
(function (GraphDrawStyle) {
    GraphDrawStyle["Bars"] = "bars";
    GraphDrawStyle["Line"] = "line";
    GraphDrawStyle["Points"] = "points";
})(exports.GraphDrawStyle || (exports.GraphDrawStyle = {}));
exports.LineInterpolation = void 0;
(function (LineInterpolation) {
    LineInterpolation["Linear"] = "linear";
    LineInterpolation["Smooth"] = "smooth";
    LineInterpolation["StepAfter"] = "stepAfter";
    LineInterpolation["StepBefore"] = "stepBefore";
})(exports.LineInterpolation || (exports.LineInterpolation = {}));
exports.ScaleDistribution = void 0;
(function (ScaleDistribution) {
    ScaleDistribution["Linear"] = "linear";
    ScaleDistribution["Log"] = "log";
    ScaleDistribution["Ordinal"] = "ordinal";
})(exports.ScaleDistribution || (exports.ScaleDistribution = {}));
exports.GraphGradientMode = void 0;
(function (GraphGradientMode) {
    GraphGradientMode["Hue"] = "hue";
    GraphGradientMode["None"] = "none";
    GraphGradientMode["Opacity"] = "opacity";
    GraphGradientMode["Scheme"] = "scheme";
})(exports.GraphGradientMode || (exports.GraphGradientMode = {}));
exports.StackingMode = void 0;
(function (StackingMode) {
    StackingMode["None"] = "none";
    StackingMode["Normal"] = "normal";
    StackingMode["Percent"] = "percent";
})(exports.StackingMode || (exports.StackingMode = {}));
exports.BarAlignment = void 0;
(function (BarAlignment) {
    BarAlignment[BarAlignment["After"] = 1] = "After";
    BarAlignment[BarAlignment["Before"] = -1] = "Before";
    BarAlignment[BarAlignment["Center"] = 0] = "Center";
})(exports.BarAlignment || (exports.BarAlignment = {}));
exports.ScaleOrientation = void 0;
(function (ScaleOrientation) {
    ScaleOrientation[ScaleOrientation["Horizontal"] = 0] = "Horizontal";
    ScaleOrientation[ScaleOrientation["Vertical"] = 1] = "Vertical";
})(exports.ScaleOrientation || (exports.ScaleOrientation = {}));
exports.ScaleDirection = void 0;
(function (ScaleDirection) {
    ScaleDirection[ScaleDirection["Down"] = -1] = "Down";
    ScaleDirection[ScaleDirection["Left"] = -1] = "Left";
    ScaleDirection[ScaleDirection["Right"] = 1] = "Right";
    ScaleDirection[ScaleDirection["Up"] = 1] = "Up";
})(exports.ScaleDirection || (exports.ScaleDirection = {}));
exports.GraphTresholdsStyleMode = void 0;
(function (GraphTresholdsStyleMode) {
    GraphTresholdsStyleMode["Area"] = "area";
    GraphTresholdsStyleMode["Line"] = "line";
    GraphTresholdsStyleMode["LineAndArea"] = "line+area";
    GraphTresholdsStyleMode["Off"] = "off";
    GraphTresholdsStyleMode["Series"] = "series";
})(exports.GraphTresholdsStyleMode || (exports.GraphTresholdsStyleMode = {}));
exports.LegendDisplayMode = void 0;
(function (LegendDisplayMode) {
    LegendDisplayMode["Hidden"] = "hidden";
    LegendDisplayMode["List"] = "list";
    LegendDisplayMode["Table"] = "table";
})(exports.LegendDisplayMode || (exports.LegendDisplayMode = {}));
exports.VizOrientation = void 0;
(function (VizOrientation) {
    VizOrientation["Auto"] = "auto";
    VizOrientation["Horizontal"] = "horizontal";
    VizOrientation["Vertical"] = "vertical";
})(exports.VizOrientation || (exports.VizOrientation = {}));
exports.BigValueColorMode = void 0;
(function (BigValueColorMode) {
    BigValueColorMode["Background"] = "background";
    BigValueColorMode["None"] = "none";
    BigValueColorMode["Value"] = "value";
})(exports.BigValueColorMode || (exports.BigValueColorMode = {}));
exports.BigValueGraphMode = void 0;
(function (BigValueGraphMode) {
    BigValueGraphMode["Area"] = "area";
    BigValueGraphMode["Line"] = "line";
    BigValueGraphMode["None"] = "none";
})(exports.BigValueGraphMode || (exports.BigValueGraphMode = {}));
exports.BigValueJustifyMode = void 0;
(function (BigValueJustifyMode) {
    BigValueJustifyMode["Auto"] = "auto";
    BigValueJustifyMode["Center"] = "center";
})(exports.BigValueJustifyMode || (exports.BigValueJustifyMode = {}));
exports.BigValueTextMode = void 0;
(function (BigValueTextMode) {
    BigValueTextMode["Auto"] = "auto";
    BigValueTextMode["Name"] = "name";
    BigValueTextMode["None"] = "none";
    BigValueTextMode["Value"] = "value";
    BigValueTextMode["Value_and_name"] = "value_and_name";
})(exports.BigValueTextMode || (exports.BigValueTextMode = {}));
exports.TableCellDisplayMode = void 0;
(function (TableCellDisplayMode) {
    TableCellDisplayMode["Auto"] = "auto";
    TableCellDisplayMode["BasicGauge"] = "basic";
    TableCellDisplayMode["ColorBackground"] = "color-background";
    TableCellDisplayMode["ColorBackgroundSolid"] = "color-background-solid";
    TableCellDisplayMode["ColorText"] = "color-text";
    TableCellDisplayMode["GradientGauge"] = "gradient-gauge";
    TableCellDisplayMode["Image"] = "image";
    TableCellDisplayMode["JSONView"] = "json-view";
    TableCellDisplayMode["LcdGauge"] = "lcd-gauge";
})(exports.TableCellDisplayMode || (exports.TableCellDisplayMode = {}));
exports.TooltipDisplayMode = void 0;
(function (TooltipDisplayMode) {
    TooltipDisplayMode["Multi"] = "multi";
    TooltipDisplayMode["None"] = "none";
    TooltipDisplayMode["Single"] = "single";
})(exports.TooltipDisplayMode || (exports.TooltipDisplayMode = {}));
exports.BarGaugeDisplayMode = void 0;
(function (BarGaugeDisplayMode) {
    BarGaugeDisplayMode["Basic"] = "basic";
    BarGaugeDisplayMode["Gradient"] = "gradient";
    BarGaugeDisplayMode["Lcd"] = "lcd";
})(exports.BarGaugeDisplayMode || (exports.BarGaugeDisplayMode = {}));
var defaultTableFieldOptions = {
    align: 'auto',
    displayMode: exports.TableCellDisplayMode.Auto,
};

exports.defaultTableFieldOptions = defaultTableFieldOptions;
//# sourceMappingURL=index.development.js.map