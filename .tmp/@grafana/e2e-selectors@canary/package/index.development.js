'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// NOTE: by default Component string selectors are set up to be aria-labels,
// however there are many cases where your component may not need an aria-label
// (a <button> with clear text, for example, does not need an aria-label as it's already labeled)
// but you still might need to select it for testing,
// in that case please add the attribute data-test-id={selector} in the component and
// prefix your selector string with 'data-test-id' so that when create the selectors we know to search for it on the right attribute
/**
 * Selectors grouped/defined in Components
 *
 * @alpha
 */
var Components = {
    TimePicker: {
        openButton: 'data-testid TimePicker Open Button',
        fromField: 'Time Range from field',
        toField: 'Time Range to field',
        applyTimeRange: 'data-testid TimePicker submit button',
        calendar: {
            label: 'Time Range calendar',
            openButton: 'Open time range calendar',
            closeButton: 'Close time range Calendar',
        },
        absoluteTimeRangeTitle: 'data-testid-absolute-time-range-narrow',
    },
    DataSource: {
        TestData: {
            QueryTab: {
                scenarioSelectContainer: 'Test Data Query scenario select container',
                scenarioSelect: 'Test Data Query scenario select',
                max: 'TestData max',
                min: 'TestData min',
                noise: 'TestData noise',
                seriesCount: 'TestData series count',
                spread: 'TestData spread',
                startValue: 'TestData start value',
            },
        },
        Jaeger: {
            traceIDInput: 'Trace ID',
        },
        Prometheus: {
            configPage: {
                exemplarsAddButton: 'Add exemplar config button',
                internalLinkSwitch: 'Internal link switch',
            },
            exemplarMarker: 'Exemplar marker',
        },
    },
    Menu: {
        MenuComponent: function (title) { return title + " menu"; },
        MenuGroup: function (title) { return title + " menu group"; },
        MenuItem: function (title) { return title + " menu item"; },
        SubMenu: {
            container: 'SubMenu container',
            icon: 'SubMenu icon',
        },
    },
    Panels: {
        Panel: {
            title: function (title) { return "data-testid Panel header " + title; },
            headerItems: function (item) { return "Panel header item " + item; },
            containerByTitle: function (title) { return title + " panel"; },
            headerCornerInfo: function (mode) { return "Panel header " + mode; },
        },
        Visualization: {
            Graph: {
                VisualizationTab: {
                    legendSection: 'Legend section',
                },
                Legend: {
                    legendItemAlias: function (name) { return "gpl alias " + name; },
                    showLegendSwitch: 'gpl show legend',
                },
                xAxis: {
                    labels: function () { return 'div.flot-x-axis > div.flot-tick-label'; },
                },
            },
            BarGauge: {
                /**
                 * @deprecated use valueV2 from Grafana 8.3 instead
                 */
                value: 'Bar gauge value',
                valueV2: 'data-testid Bar gauge value',
            },
            PieChart: {
                svgSlice: 'Pie Chart Slice',
            },
            Text: {
                container: function () { return '.markdown-html'; },
            },
            Table: {
                header: 'table header',
                footer: 'table-footer',
            },
        },
    },
    VizLegend: {
        seriesName: function (name) { return "VizLegend series " + name; },
    },
    Drawer: {
        General: {
            title: function (title) { return "Drawer title " + title; },
            expand: 'Drawer expand',
            contract: 'Drawer contract',
            close: 'Drawer close',
            rcContentWrapper: function () { return '.drawer-content-wrapper'; },
        },
    },
    PanelEditor: {
        General: {
            content: 'Panel editor content',
        },
        OptionsPane: {
            content: 'Panel editor option pane content',
            select: 'Panel editor option pane select',
            fieldLabel: function (type) { return type + " field property editor"; },
        },
        // not sure about the naming *DataPane*
        DataPane: {
            content: 'Panel editor data pane content',
        },
        applyButton: 'panel editor apply',
        toggleVizPicker: 'toggle-viz-picker',
        toggleVizOptions: 'toggle-viz-options',
        toggleTableView: 'toggle-table-view',
    },
    PanelInspector: {
        Data: {
            content: 'Panel inspector Data content',
        },
        Stats: {
            content: 'Panel inspector Stats content',
        },
        Json: {
            content: 'Panel inspector Json content',
        },
        Query: {
            content: 'Panel inspector Query content',
            refreshButton: 'Panel inspector Query refresh button',
            jsonObjectKeys: function () { return '.json-formatter-key'; },
        },
    },
    Tab: {
        title: function (title) { return "Tab " + title; },
        active: function () { return '[class*="-activeTabStyle"]'; },
    },
    RefreshPicker: {
        /**
         * @deprecated use runButtonV2 from Grafana 8.3 instead
         */
        runButton: 'RefreshPicker run button',
        /**
         * @deprecated use intervalButtonV2 from Grafana 8.3 instead
         */
        intervalButton: 'RefreshPicker interval button',
        runButtonV2: 'data-testid RefreshPicker run button',
        intervalButtonV2: 'data-testid RefreshPicker interval button',
    },
    QueryTab: {
        content: 'Query editor tab content',
        queryInspectorButton: 'Query inspector button',
        addQuery: 'Query editor add query button',
    },
    QueryEditorRows: {
        rows: 'Query editor row',
    },
    QueryEditorRow: {
        actionButton: function (title) { return title + " query operation action"; },
        title: function (refId) { return "Query editor row title " + refId; },
    },
    AlertTab: {
        content: 'Alert editor tab content',
    },
    Alert: {
        /**
         * @deprecated use alertV2 from Grafana 8.3 instead
         */
        alert: function (severity) { return "Alert " + severity; },
        alertV2: function (severity) { return "data-testid Alert " + severity; },
    },
    TransformTab: {
        content: 'Transform editor tab content',
        newTransform: function (name) { return "New transform " + name; },
        transformationEditor: function (name) { return "Transformation editor " + name; },
        transformationEditorDebugger: function (name) { return "Transformation editor debugger " + name; },
    },
    Transforms: {
        card: function (name) { return "New transform " + name; },
        Reduce: {
            modeLabel: 'Transform mode label',
            calculationsLabel: 'Transform calculations label',
        },
        searchInput: 'search transformations',
    },
    PageToolbar: {
        container: function () { return '.page-toolbar'; },
        item: function (tooltip) { return "" + tooltip; },
    },
    QueryEditorToolbarItem: {
        button: function (title) { return "QueryEditor toolbar item button " + title; },
    },
    BackButton: {
        backArrow: 'Go Back',
    },
    OptionsGroup: {
        group: function (title) { return (title ? "Options group " + title : 'Options group'); },
        toggle: function (title) { return (title ? "Options group " + title + " toggle" : 'Options group toggle'); },
    },
    PluginVisualization: {
        item: function (title) { return "Plugin visualization item " + title; },
        current: function () { return '[class*="-currentVisualizationItem"]'; },
    },
    Select: {
        option: 'Select option',
        input: function () { return 'input[id*="time-options-input"]'; },
        singleValue: function () { return 'div[class*="-singleValue"]'; },
    },
    FieldConfigEditor: {
        content: 'Field config editor content',
    },
    OverridesConfigEditor: {
        content: 'Field overrides editor content',
    },
    FolderPicker: {
        /**
         * @deprecated use containerV2 from Grafana 8.3 instead
         */
        container: 'Folder picker select container',
        containerV2: 'data-testid Folder picker select container',
        input: 'Select a folder',
    },
    ReadonlyFolderPicker: {
        container: 'data-testid Readonly folder picker select container',
    },
    DataSourcePicker: {
        container: 'Data source picker select container',
        /**
         * @deprecated use inputV2 instead
         */
        input: function () { return 'input[id="data-source-picker"]'; },
        inputV2: 'Select a data source',
    },
    TimeZonePicker: {
        /**
         * @deprecated use TimeZonePicker.containerV2 from Grafana 8.3 instead
         */
        container: 'Time zone picker select container',
        containerV2: 'data-testid Time zone picker select container',
    },
    WeekStartPicker: {
        /**
         * @deprecated use WeekStartPicker.containerV2 from Grafana 8.3 instead
         */
        container: 'Choose starting day of the week',
        containerV2: 'data-testid Choose starting day of the week',
        placeholder: 'Choose starting day of the week',
    },
    TraceViewer: {
        spanBar: function () { return '[data-test-id="SpanBar--wrapper"]'; },
    },
    QueryField: { container: 'Query field' },
    ValuePicker: {
        button: function (name) { return "Value picker button " + name; },
        select: function (name) { return "Value picker select " + name; },
    },
    Search: {
        /**
         * @deprecated use sectionV2 from Grafana 8.3 instead
         */
        section: 'Search section',
        sectionV2: 'data-testid Search section',
        /**
         * @deprecated use itemsV2 from Grafana 8.3 instead
         */
        items: 'Search items',
        itemsV2: 'data-testid Search items',
        collapseFolder: function (sectionId) { return "data-testid Collapse folder " + sectionId; },
        expandFolder: function (sectionId) { return "data-testid Expand folder " + sectionId; },
        dashboardItem: function (item) { return Components.Search.dashboardItems + " " + item; },
        dashboardItems: 'data-testid Dashboard search item',
    },
    DashboardLinks: {
        container: 'data-testid Dashboard link container',
        dropDown: 'data-testid Dashboard link dropdown',
        link: 'data-testid Dashboard link',
    },
    LoadingIndicator: {
        icon: 'Loading indicator',
    },
    CallToActionCard: {
        /**
         * @deprecated use buttonV2 from Grafana 8.3 instead
         */
        button: function (name) { return "Call to action button " + name; },
        buttonV2: function (name) { return "data-testid Call to action button " + name; },
    },
    DataLinksContextMenu: {
        singleLink: 'Data link',
    },
    CodeEditor: {
        container: 'Code editor container',
    },
    DashboardImportPage: {
        textarea: 'data-testid-import-dashboard-textarea',
        submit: 'data-testid-load-dashboard',
    },
    ImportDashboardForm: {
        name: 'data-testid-import-dashboard-title',
        submit: 'data-testid-import-dashboard-submit',
    },
    PanelAlertTabContent: {
        content: 'Unified alert editor tab content',
    },
    VisualizationPreview: {
        card: function (name) { return "data-testid suggestion-" + name; },
    },
};

/**
 * Selectors grouped/defined in Pages
 *
 * @alpha
 */
var Pages = {
    Login: {
        url: '/login',
        username: 'Username input field',
        password: 'Password input field',
        submit: 'Login button',
        skip: 'Skip change password button',
    },
    Home: {
        url: '/',
    },
    DataSource: {
        name: 'Data source settings page name input field',
        delete: 'Data source settings page Delete button',
        readOnly: 'Data source settings page read only message',
        saveAndTest: 'Data source settings page Save and Test button',
        alert: 'Data source settings page Alert',
    },
    DataSources: {
        url: '/datasources',
        dataSources: function (dataSourceName) { return "Data source list item " + dataSourceName; },
    },
    AddDataSource: {
        url: '/datasources/new',
        dataSourcePlugins: function (pluginName) { return "Data source plugin item " + pluginName; },
    },
    ConfirmModal: {
        delete: 'Confirm Modal Danger Button',
    },
    AddDashboard: {
        url: '/dashboard/new',
        addNewPanel: 'Add new panel',
        addNewRow: 'Add new row',
        addNewPanelLibrary: 'Add new panel from panel library',
    },
    Dashboard: {
        url: function (uid) { return "/d/" + uid; },
        DashNav: {
            /**
             * @deprecated use navV2 from Grafana 8.3 instead
             */
            nav: 'Dashboard navigation',
            navV2: 'data-testid Dashboard navigation',
        },
        SubMenu: {
            submenu: 'Dashboard submenu',
            submenuItem: 'data-testid template variable',
            submenuItemLabels: function (item) { return "data-testid Dashboard template variables submenu Label " + item; },
            submenuItemValueDropDownValueLinkTexts: function (item) {
                return "data-testid Dashboard template variables Variable Value DropDown value link text " + item;
            },
            submenuItemValueDropDownDropDown: 'Variable options',
            submenuItemValueDropDownOptionTexts: function (item) {
                return "data-testid Dashboard template variables Variable Value DropDown option text " + item;
            },
        },
        Settings: {
            General: {
                deleteDashBoard: 'Dashboard settings page delete dashboard button',
                sectionItems: function (item) { return "Dashboard settings section item " + item; },
                saveDashBoard: 'Dashboard settings aside actions Save button',
                saveAsDashBoard: 'Dashboard settings aside actions Save As button',
                /**
                 * @deprecated use components.TimeZonePicker.containerV2 from Grafana 8.3 instead
                 */
                timezone: 'Time zone picker select container',
                title: 'Dashboard settings page title',
            },
            Annotations: {
                List: {
                    /**
                     * @deprecated use addAnnotationCTAV2 from Grafana 8.3 instead
                     */
                    addAnnotationCTA: Components.CallToActionCard.button('Add annotation query'),
                    addAnnotationCTAV2: Components.CallToActionCard.buttonV2('Add annotation query'),
                },
                Settings: {
                    name: 'Annotations settings name input',
                },
            },
            Variables: {
                List: {
                    /**
                     * @deprecated use addVariableCTAV2 from Grafana 8.3 instead
                     */
                    addVariableCTA: Components.CallToActionCard.button('Add variable'),
                    addVariableCTAV2: Components.CallToActionCard.buttonV2('Add variable'),
                    newButton: 'Variable editor New variable button',
                    table: 'Variable editor Table',
                    tableRowNameFields: function (variableName) { return "Variable editor Table Name field " + variableName; },
                    tableRowDefinitionFields: function (variableName) { return "Variable editor Table Definition field " + variableName; },
                    tableRowArrowUpButtons: function (variableName) { return "Variable editor Table ArrowUp button " + variableName; },
                    tableRowArrowDownButtons: function (variableName) { return "Variable editor Table ArrowDown button " + variableName; },
                    tableRowDuplicateButtons: function (variableName) { return "Variable editor Table Duplicate button " + variableName; },
                    tableRowRemoveButtons: function (variableName) { return "Variable editor Table Remove button " + variableName; },
                },
                Edit: {
                    General: {
                        headerLink: 'Variable editor Header link',
                        modeLabelNew: 'Variable editor Header mode New',
                        /**
                         * @deprecated
                         */
                        modeLabelEdit: 'Variable editor Header mode Edit',
                        generalNameInput: 'Variable editor Form Name field',
                        generalTypeSelect: 'Variable editor Form Type select',
                        generalLabelInput: 'Variable editor Form Label field',
                        generalHideSelect: 'Variable editor Form Hide select',
                        selectionOptionsMultiSwitch: 'Variable editor Form Multi switch',
                        selectionOptionsIncludeAllSwitch: 'Variable editor Form IncludeAll switch',
                        selectionOptionsCustomAllInput: 'Variable editor Form IncludeAll field',
                        previewOfValuesOption: 'Variable editor Preview of Values option',
                        submitButton: 'Variable editor Submit button',
                    },
                    QueryVariable: {
                        queryOptionsDataSourceSelect: Components.DataSourcePicker.container,
                        queryOptionsRefreshSelect: 'Variable editor Form Query Refresh select',
                        queryOptionsRegExInput: 'Variable editor Form Query RegEx field',
                        queryOptionsSortSelect: 'Variable editor Form Query Sort select',
                        queryOptionsQueryInput: 'Variable editor Form Default Variable Query Editor textarea',
                        valueGroupsTagsEnabledSwitch: 'Variable editor Form Query UseTags switch',
                        valueGroupsTagsTagsQueryInput: 'Variable editor Form Query TagsQuery field',
                        valueGroupsTagsTagsValuesQueryInput: 'Variable editor Form Query TagsValuesQuery field',
                    },
                    ConstantVariable: {
                        constantOptionsQueryInput: 'Variable editor Form Constant Query field',
                    },
                    TextBoxVariable: {
                        textBoxOptionsQueryInput: 'Variable editor Form TextBox Query field',
                    },
                },
            },
        },
    },
    Dashboards: {
        url: '/dashboards',
        /**
         * @deprecated use components.Search.dashboardItem from Grafana 8.3 instead
         */
        dashboards: function (title) { return "Dashboard search item " + title; },
    },
    SaveDashboardAsModal: {
        newName: 'Save dashboard title field',
        save: 'Save dashboard button',
    },
    SaveDashboardModal: {
        save: 'Dashboard settings Save Dashboard Modal Save button',
        saveVariables: 'Dashboard settings Save Dashboard Modal Save variables checkbox',
        saveTimerange: 'Dashboard settings Save Dashboard Modal Save timerange checkbox',
    },
    SharePanelModal: {
        linkToRenderedImage: 'Link to rendered image',
    },
    Explore: {
        url: '/explore',
        General: {
            container: 'data-testid Explore',
            graph: 'Explore Graph',
            table: 'Explore Table',
            scrollBar: function () { return '.scrollbar-view'; },
        },
    },
    SoloPanel: {
        url: function (page) { return "/d-solo/" + page; },
    },
    PluginsList: {
        page: 'Plugins list page',
        list: 'Plugins list',
        listItem: 'Plugins list item',
        signatureErrorNotice: 'Unsigned plugins notice',
    },
    PluginPage: {
        page: 'Plugin page',
        signatureInfo: 'Plugin signature info',
        disabledInfo: 'Plugin disabled info',
    },
    PlaylistForm: {
        name: 'Playlist name',
        interval: 'Playlist interval',
        itemRow: 'Playlist item row',
        itemIdType: 'Playlist item dashboard by ID type',
        itemTagType: 'Playlist item dashboard by Tag type',
        itemMoveUp: 'Move playlist item order up',
        itemMoveDown: 'Move playlist item order down',
        itemDelete: 'Delete playlist item',
    },
};

/**
 * Exposes selectors in package for easy use in e2e tests and in production code
 *
 * @alpha
 */
var selectors = {
    pages: Pages,
    components: Components,
};

exports.Components = Components;
exports.Pages = Pages;
exports.selectors = selectors;
//# sourceMappingURL=index.development.js.map
