import { GrafanaTheme2 } from '@grafana/data';
export declare const getStyles: (theme: GrafanaTheme2, isHorizontal: boolean) => {
    container: string;
    slider: string;
    /** Global component from @emotion/core doesn't accept computed classname string returned from css from emotion.
     * It accepts object containing the computed name and flattened styles returned from css from @emotion/core
     * */
    tooltip: import("@emotion/react").SerializedStyles;
    sliderInput: string;
    sliderInputVertical: string;
    sliderInputField: string;
    sliderInputFieldVertical: string;
};
