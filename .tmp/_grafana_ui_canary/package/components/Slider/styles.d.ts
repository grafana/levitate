import { GrafanaTheme2 } from '@grafana/data';
export declare const getStyles: import("memoize-one").MemoizedFn<(this: any, theme: GrafanaTheme2, isHorizontal: boolean, hasMarks?: any) => {
    container: string;
    slider: string;
    /** Global component from @emotion/core doesn't accept computed classname string returned from css from emotion.
     * It accepts object containing the computed name and flattened styles returned from css from @emotion/core
     * */
    tooltip: import("@emotion/utils").SerializedStyles;
    sliderInput: string;
    sliderInputVertical: string;
    sliderInputField: string;
    sliderInputFieldVertical: string;
}>;
