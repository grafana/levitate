/**
 * Option to specify a plugin css that should be applied for the dark
 * and the light theme.
 *
 * @public
 */
export interface PluginCssOptions {
    light: string;
    dark: string;
}
/**
 * @internal
 */
export declare const SystemJS: any;
/**
 * Use this to load css for a Grafana plugin by specifying a {@link PluginCssOptions}
 * containing styling for the dark and the light theme.
 *
 * @param options - plugin styling for light and dark theme.
 * @public
 */
export declare function loadPluginCss(options: PluginCssOptions): Promise<any>;
