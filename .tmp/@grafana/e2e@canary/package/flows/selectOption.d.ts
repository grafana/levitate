export interface SelectOptionConfig {
    clickToOpen?: boolean;
    container: any;
    forceClickOption?: boolean;
    optionText: string | RegExp;
}
export declare const selectOption: (config: SelectOptionConfig) => any;
