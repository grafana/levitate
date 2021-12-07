import { GrafanaTheme, GrafanaTheme2 } from '@grafana/data';
import React from 'react';
import { Themeable, Themeable2 } from '../types/theme';
declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
declare type Subtract<T, K> = Omit<T, keyof K>;
export declare const memoizedStyleCreators: WeakMap<object, any>;
/** @public */
export declare const ThemeContext: React.Context<GrafanaTheme2>;
/** @deprecated use withTheme2 */
/** @public */
export declare const withTheme: <P extends Themeable, S extends {} = {}>(Component: React.ComponentType<P>) => React.FunctionComponent<Subtract<P, Themeable>> & S;
/** @alpha */
export declare const withTheme2: <P extends Themeable2, S extends {} = {}>(Component: React.ComponentType<P>) => React.FunctionComponent<Subtract<P, Themeable2>> & S;
/** @deprecated use useTheme2 */
/** @public */
export declare function useTheme(): GrafanaTheme;
/** @public */
export declare function useTheme2(): GrafanaTheme2;
/**
 * Hook for using memoized styles with access to the theme.
 *
 * NOTE: For memoization to work, you need to ensure that the function
 * you pass in doesn't change, or only if it needs to. (i.e. declare
 * your style creator outside of a function component or use `useCallback()`.)
 * */
/** @public */
export declare function useStyles<T>(getStyles: (theme: GrafanaTheme) => T): T;
/**
 * Hook for using memoized styles with access to the theme.
 *
 * NOTE: For memoization to work, you need to ensure that the function
 * you pass in doesn't change, or only if it needs to. (i.e. declare
 * your style creator outside of a function component or use `useCallback()`.)
 * */
/** @public */
export declare function useStyles2<T>(getStyles: (theme: GrafanaTheme2) => T): T;
/**
 * Enables theme context  mocking
 */
/** @public */
export declare const mockThemeContext: (theme: Partial<GrafanaTheme2>) => () => void;
export {};
