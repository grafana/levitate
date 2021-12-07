/**
 * Selectors grouped/defined in Components
 *
 * @alpha
 */
export declare const Components: {
    TimePicker: {
        openButton: string;
        fromField: string;
        toField: string;
        applyTimeRange: string;
        calendar: {
            label: string;
            openButton: string;
            closeButton: string;
        };
        absoluteTimeRangeTitle: string;
    };
    DataSource: {
        TestData: {
            QueryTab: {
                scenarioSelectContainer: string;
                scenarioSelect: string;
                max: string;
                min: string;
                noise: string;
                seriesCount: string;
                spread: string;
                startValue: string;
            };
        };
        Jaeger: {
            traceIDInput: string;
        };
        Prometheus: {
            configPage: {
                exemplarsAddButton: string;
                internalLinkSwitch: string;
            };
            exemplarMarker: string;
        };
    };
    Menu: {
        MenuComponent: (title: string) => string;
        MenuGroup: (title: string) => string;
        MenuItem: (title: string) => string;
        SubMenu: {
            container: string;
            icon: string;
        };
    };
    Panels: {
        Panel: {
            title: (title: string) => string;
            headerItems: (item: string) => string;
            containerByTitle: (title: string) => string;
            headerCornerInfo: (mode: string) => string;
        };
        Visualization: {
            Graph: {
                VisualizationTab: {
                    legendSection: string;
                };
                Legend: {
                    legendItemAlias: (name: string) => string;
                    showLegendSwitch: string;
                };
                xAxis: {
                    labels: () => string;
                };
            };
            BarGauge: {
                /**
                 * @deprecated use valueV2 from Grafana 8.3 instead
                 */
                value: string;
                valueV2: string;
            };
            PieChart: {
                svgSlice: string;
            };
            Text: {
                container: () => string;
            };
            Table: {
                header: string;
                footer: string;
            };
        };
    };
    VizLegend: {
        seriesName: (name: string) => string;
    };
    Drawer: {
        General: {
            title: (title: string) => string;
            expand: string;
            contract: string;
            close: string;
            rcContentWrapper: () => string;
        };
    };
    PanelEditor: {
        General: {
            content: string;
        };
        OptionsPane: {
            content: string;
            select: string;
            fieldLabel: (type: string) => string;
        };
        DataPane: {
            content: string;
        };
        applyButton: string;
        toggleVizPicker: string;
        toggleVizOptions: string;
        toggleTableView: string;
    };
    PanelInspector: {
        Data: {
            content: string;
        };
        Stats: {
            content: string;
        };
        Json: {
            content: string;
        };
        Query: {
            content: string;
            refreshButton: string;
            jsonObjectKeys: () => string;
        };
    };
    Tab: {
        title: (title: string) => string;
        active: () => string;
    };
    RefreshPicker: {
        /**
         * @deprecated use runButtonV2 from Grafana 8.3 instead
         */
        runButton: string;
        /**
         * @deprecated use intervalButtonV2 from Grafana 8.3 instead
         */
        intervalButton: string;
        runButtonV2: string;
        intervalButtonV2: string;
    };
    QueryTab: {
        content: string;
        queryInspectorButton: string;
        addQuery: string;
    };
    QueryEditorRows: {
        rows: string;
    };
    QueryEditorRow: {
        actionButton: (title: string) => string;
        title: (refId: string) => string;
    };
    AlertTab: {
        content: string;
    };
    Alert: {
        /**
         * @deprecated use alertV2 from Grafana 8.3 instead
         */
        alert: (severity: string) => string;
        alertV2: (severity: string) => string;
    };
    TransformTab: {
        content: string;
        newTransform: (name: string) => string;
        transformationEditor: (name: string) => string;
        transformationEditorDebugger: (name: string) => string;
    };
    Transforms: {
        card: (name: string) => string;
        Reduce: {
            modeLabel: string;
            calculationsLabel: string;
        };
        searchInput: string;
    };
    PageToolbar: {
        container: () => string;
        item: (tooltip: string) => string;
    };
    QueryEditorToolbarItem: {
        button: (title: string) => string;
    };
    BackButton: {
        backArrow: string;
    };
    OptionsGroup: {
        group: (title?: string | undefined) => string;
        toggle: (title?: string | undefined) => string;
    };
    PluginVisualization: {
        item: (title: string) => string;
        current: () => string;
    };
    Select: {
        option: string;
        input: () => string;
        singleValue: () => string;
    };
    FieldConfigEditor: {
        content: string;
    };
    OverridesConfigEditor: {
        content: string;
    };
    FolderPicker: {
        /**
         * @deprecated use containerV2 from Grafana 8.3 instead
         */
        container: string;
        containerV2: string;
        input: string;
    };
    ReadonlyFolderPicker: {
        container: string;
    };
    DataSourcePicker: {
        container: string;
        /**
         * @deprecated use inputV2 instead
         */
        input: () => string;
        inputV2: string;
    };
    TimeZonePicker: {
        /**
         * @deprecated use TimeZonePicker.containerV2 from Grafana 8.3 instead
         */
        container: string;
        containerV2: string;
    };
    WeekStartPicker: {
        /**
         * @deprecated use WeekStartPicker.containerV2 from Grafana 8.3 instead
         */
        container: string;
        containerV2: string;
        placeholder: string;
    };
    TraceViewer: {
        spanBar: () => string;
    };
    QueryField: {
        container: string;
    };
    ValuePicker: {
        button: (name: string) => string;
        select: (name: string) => string;
    };
    Search: {
        /**
         * @deprecated use sectionV2 from Grafana 8.3 instead
         */
        section: string;
        sectionV2: string;
        /**
         * @deprecated use itemsV2 from Grafana 8.3 instead
         */
        items: string;
        itemsV2: string;
        collapseFolder: (sectionId: string) => string;
        expandFolder: (sectionId: string) => string;
        dashboardItem: (item: string) => string;
        dashboardItems: string;
    };
    DashboardLinks: {
        container: string;
        dropDown: string;
        link: string;
    };
    LoadingIndicator: {
        icon: string;
    };
    CallToActionCard: {
        /**
         * @deprecated use buttonV2 from Grafana 8.3 instead
         */
        button: (name: string) => string;
        buttonV2: (name: string) => string;
    };
    DataLinksContextMenu: {
        singleLink: string;
    };
    CodeEditor: {
        container: string;
    };
    DashboardImportPage: {
        textarea: string;
        submit: string;
    };
    ImportDashboardForm: {
        name: string;
        submit: string;
    };
    PanelAlertTabContent: {
        content: string;
    };
    VisualizationPreview: {
        card: (name: string) => string;
    };
};
