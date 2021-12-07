export interface SelectorApi {
    fromAriaLabel: (selector: string) => string;
    fromDataTestId: (selector: string) => string;
    fromSelector: (selector: string) => string;
}
export declare const Selector: SelectorApi;
