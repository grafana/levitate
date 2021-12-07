export declare enum MatcherID {
    anyMatch = "anyMatch",
    allMatch = "allMatch",
    invertMatch = "invertMatch",
    alwaysMatch = "alwaysMatch",
    neverMatch = "neverMatch"
}
export declare enum FieldMatcherID {
    numeric = "numeric",
    time = "time",
    first = "first",
    firstTimeField = "firstTimeField",
    byType = "byType",
    byName = "byName",
    byNames = "byNames",
    byRegexp = "byRegexp",
    byRegexpOrNames = "byRegexpOrNames",
    byFrameRefID = "byFrameRefID"
}
/**
 * Field name matchers
 */
export declare enum FrameMatcherID {
    byName = "byName",
    byRefId = "byRefId",
    byIndex = "byIndex",
    byLabel = "byLabel"
}
/**
 * @public
 */
export declare enum ValueMatcherID {
    regex = "regex",
    isNull = "isNull",
    isNotNull = "isNotNull",
    greater = "greater",
    greaterOrEqual = "greaterOrEqual",
    lower = "lower",
    lowerOrEqual = "lowerOrEqual",
    equal = "equal",
    notEqual = "notEqual",
    between = "between"
}
