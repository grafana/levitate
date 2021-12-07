import { FieldConfigSource, GrafanaPlugin, PanelEditorProps, PanelMigrationHandler, PanelPluginMeta, PanelProps, PanelTypeChangedHandler, FieldConfigProperty, PanelPluginDataSupport, VisualizationSuggestionsSupplier } from '../types';
import { FieldConfigEditorBuilder, PanelOptionsEditorBuilder } from '../utils/OptionsUIBuilders';
import { ComponentClass, ComponentType } from 'react';
import { FieldConfigOptionsRegistry, StandardEditorContext } from '../field';
/** @beta */
export declare type StandardOptionConfig = {
    defaultValue?: any;
    settings?: any;
};
/** @beta */
export interface SetFieldConfigOptionsArgs<TFieldConfigOptions = any> {
    /**
     * Configuration object of the standard field config properites
     *
     * @example
     * ```typescript
     * {
     *   standardOptions: {
     *     [FieldConfigProperty.Decimals]: {
     *       defaultValue: 3
     *     }
     *   }
     * }
     * ```
     */
    standardOptions?: Partial<Record<FieldConfigProperty, StandardOptionConfig>>;
    /**
     * Array of standard field config properties that should not be available in the panel
     * @example
     * ```typescript
     * {
     *   disableStandardOptions: [FieldConfigProperty.Min, FieldConfigProperty.Max, FieldConfigProperty.Unit]
     * }
     * ```
     */
    disableStandardOptions?: FieldConfigProperty[];
    /**
     * Function that allows custom field config properties definition.
     *
     * @param builder
     *
     * @example
     * ```typescript
     * useCustomConfig: builder => {
     *   builder
     *    .addNumberInput({
     *      id: 'shapeBorderWidth',
     *      name: 'Border width',
     *      description: 'Border width of the shape',
     *      settings: {
     *        min: 1,
     *        max: 5,
     *      },
     *    })
     *    .addSelect({
     *      id: 'displayMode',
     *      name: 'Display mode',
     *      description: 'How the shape shout be rendered'
     *      settings: {
     *      options: [{value: 'fill', label: 'Fill' }, {value: 'transparent', label: 'Transparent }]
     *    },
     *  })
     * }
     * ```
     */
    useCustomConfig?: (builder: FieldConfigEditorBuilder<TFieldConfigOptions>) => void;
}
export declare type PanelOptionsSupplier<TOptions> = (builder: PanelOptionsEditorBuilder<TOptions>, context: StandardEditorContext<TOptions>) => void;
export declare class PanelPlugin<TOptions = any, TFieldConfigOptions extends object = any> extends GrafanaPlugin<PanelPluginMeta> {
    private _defaults?;
    private _fieldConfigDefaults;
    private _fieldConfigRegistry?;
    private _initConfigRegistry;
    private optionsSupplier?;
    private suggestionsSupplier?;
    panel: ComponentType<PanelProps<TOptions>> | null;
    editor?: ComponentClass<PanelEditorProps<TOptions>>;
    onPanelMigration?: PanelMigrationHandler<TOptions>;
    onPanelTypeChanged?: PanelTypeChangedHandler<TOptions>;
    noPadding?: boolean;
    dataSupport: PanelPluginDataSupport;
    /**
     * Legacy angular ctrl.  If this exists it will be used instead of the panel
     */
    angularPanelCtrl?: any;
    constructor(panel: ComponentType<PanelProps<TOptions>> | null);
    get defaults(): {};
    get fieldConfigDefaults(): FieldConfigSource<TFieldConfigOptions>;
    /**
     * @deprecated setDefaults is deprecated in favor of setPanelOptions
     */
    setDefaults(defaults: TOptions): this;
    get fieldConfigRegistry(): FieldConfigOptionsRegistry;
    /**
     * @deprecated setEditor is deprecated in favor of setPanelOptions
     */
    setEditor(editor: ComponentClass<PanelEditorProps<TOptions>>): this;
    setNoPadding(): this;
    /**
     * This function is called before the panel first loads if
     * the current version is different than the version that was saved.
     *
     * This is a good place to support any changes to the options model
     */
    setMigrationHandler(handler: PanelMigrationHandler<TOptions>): this;
    /**
     * This function is called when the visualization was changed. This
     * passes in the panel model for previous visualisation options inspection
     * and panel model updates.
     *
     * This is useful for supporting PanelModel API updates when changing
     * between Angular and React panels.
     */
    setPanelChangeHandler(handler: PanelTypeChangedHandler): this;
    /**
     * Enables panel options editor creation
     *
     * @example
     * ```typescript
     *
     * import { ShapePanel } from './ShapePanel';
     *
     * interface ShapePanelOptions {}
     *
     * export const plugin = new PanelPlugin<ShapePanelOptions>(ShapePanel)
     *   .setPanelOptions(builder => {
     *     builder
     *       .addSelect({
     *         id: 'shape',
     *         name: 'Shape',
     *         description: 'Select shape to render'
     *         settings: {
     *           options: [
     *             {value: 'circle', label: 'Circle' },
     *             {value: 'square', label: 'Square },
     *             {value: 'triangle', label: 'Triangle }
     *            ]
     *         },
     *       })
     *   })
     * ```
     *
     * @public
     **/
    setPanelOptions(builder: PanelOptionsSupplier<TOptions>): this;
    /**
     * This is used while building the panel options editor.
     *
     * @internal
     */
    getPanelOptionsSupplier(): PanelOptionsSupplier<TOptions>;
    /**
     * Tells Grafana if the plugin should subscribe to annotation and alertState results.
     *
     * @example
     * ```typescript
     *
     * import { ShapePanel } from './ShapePanel';
     *
     * interface ShapePanelOptions {}
     *
     * export const plugin = new PanelPlugin<ShapePanelOptions>(ShapePanel)
     *     .useFieldConfig({})
     *     ...
     *     ...
     *     .setDataSupport({
     *       annotations: true,
     *       alertStates: true,
     *     });
     * ```
     *
     * @public
     **/
    setDataSupport(support: Partial<PanelPluginDataSupport>): this;
    /**
     * Allows specifying which standard field config options panel should use and defining default values
     *
     * @example
     * ```typescript
     *
     * import { ShapePanel } from './ShapePanel';
     *
     * interface ShapePanelOptions {}
     *
     * // when plugin should use all standard options
     * export const plugin = new PanelPlugin<ShapePanelOptions>(ShapePanel)
     *  .useFieldConfig();
     *
     * // when plugin should only display specific standard options
     * // note, that options will be displayed in the order they are provided
     * export const plugin = new PanelPlugin<ShapePanelOptions>(ShapePanel)
     *  .useFieldConfig({
     *    standardOptions: [FieldConfigProperty.Min, FieldConfigProperty.Max]
     *   });
     *
     * // when standard option's default value needs to be provided
     * export const plugin = new PanelPlugin<ShapePanelOptions>(ShapePanel)
     *  .useFieldConfig({
     *    standardOptions: [FieldConfigProperty.Min, FieldConfigProperty.Max],
     *    standardOptionsDefaults: {
     *      [FieldConfigProperty.Min]: 20,
     *      [FieldConfigProperty.Max]: 100
     *    }
     *  });
     *
     * // when custom field config options needs to be provided
     * export const plugin = new PanelPlugin<ShapePanelOptions>(ShapePanel)
     *  .useFieldConfig({
     *    useCustomConfig: builder => {
     *      builder
     *       .addNumberInput({
     *         id: 'shapeBorderWidth',
     *         name: 'Border width',
     *         description: 'Border width of the shape',
     *         settings: {
     *           min: 1,
     *           max: 5,
     *         },
     *       })
     *       .addSelect({
     *         id: 'displayMode',
     *         name: 'Display mode',
     *         description: 'How the shape shout be rendered'
     *         settings: {
     *         options: [{value: 'fill', label: 'Fill' }, {value: 'transparent', label: 'Transparent }]
     *       },
     *     })
     *   },
     *  });
     *
     * ```
     *
     * @public
     */
    useFieldConfig(config?: SetFieldConfigOptionsArgs<TFieldConfigOptions>): this;
    /**
     * Sets function that can return visualization examples and suggestions.
     * @alpha
     */
    setSuggestionsSupplier(supplier: VisualizationSuggestionsSupplier): this;
    /**
     * Returns the suggestions supplier
     * @alpha
     */
    getSuggestionsSupplier(): VisualizationSuggestionsSupplier | undefined;
}
