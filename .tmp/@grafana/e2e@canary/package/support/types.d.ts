/// <reference types="cypress" />
import { CssSelector, FunctionSelector, Selectors, StringSelector, UrlSelector } from '@grafana/e2e-selectors';
export declare type VisitFunction = (args?: string, queryParams?: object) => Cypress.Chainable<Window>;
export declare type E2EVisit = {
    visit: VisitFunction;
};
export declare type E2EFunction = ((text?: string, options?: CypressOptions) => Cypress.Chainable<JQuery<HTMLElement>>) & E2EFunctionWithOnlyOptions;
export declare type E2EFunctionWithOnlyOptions = (options?: CypressOptions) => Cypress.Chainable<JQuery<HTMLElement>>;
export declare type TypeSelectors<S> = S extends StringSelector ? E2EFunctionWithOnlyOptions : S extends FunctionSelector ? E2EFunction : S extends CssSelector ? E2EFunction : S extends UrlSelector ? E2EVisit & Omit<E2EFunctions<S>, 'url'> : S extends Record<any, any> ? E2EFunctions<S> : S;
export declare type E2EFunctions<S extends Selectors> = {
    [P in keyof S]: TypeSelectors<S[P]>;
};
export declare type E2EObjects<S extends Selectors> = E2EFunctions<S>;
export declare type E2EFactoryArgs<S extends Selectors> = {
    selectors: S;
};
export declare type CypressOptions = Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow>;
export declare const e2eFactory: <S extends Selectors>({ selectors }: E2EFactoryArgs<S>) => E2EFunctions<S>;
