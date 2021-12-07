/// <reference types="cypress" />
/**
 * A library for writing end-to-end tests for Grafana and its ecosystem.
 *
 * @packageDocumentation
 */
import { ScenarioArguments } from './support/scenario';
import { E2ESelectors, Selectors } from '@grafana/e2e-selectors';
import * as flows from './flows';
import * as typings from './typings';
declare const e2eObject: {
    env: (args: string) => any;
    config: () => Cypress.Config;
    blobToBase64String: (blob: any) => Promise<string>;
    imgSrcToBlob: (url: string) => Promise<Blob>;
    scenario: (args: ScenarioArguments) => void;
    pages: import("./support").E2EFunctions<E2ESelectors<{
        Login: {
            url: string;
            username: string;
            password: string;
            submit: string;
            skip: string;
        };
        Home: {
            url: string;
        };
        DataSource: {
            name: string;
            delete: string;
            readOnly: string;
            saveAndTest: string;
            alert: string;
        };
        DataSources: {
            url: string;
            dataSources: (dataSourceName: string) => string;
        };
        AddDataSource: {
            url: string;
            dataSourcePlugins: (pluginName: string) => string;
        };
        ConfirmModal: {
            delete: string;
        };
        AddDashboard: {
            url: string;
            addNewPanel: string;
            addNewRow: string;
            addNewPanelLibrary: string;
        };
        Dashboard: {
            url: (uid: string) => string;
            DashNav: {
                nav: string;
                navV2: string;
            };
            SubMenu: {
                submenu: string;
                submenuItem: string;
                submenuItemLabels: (item: string) => string;
                submenuItemValueDropDownValueLinkTexts: (item: string) => string;
                submenuItemValueDropDownDropDown: string;
                submenuItemValueDropDownOptionTexts: (item: string) => string;
            };
            Settings: {
                General: {
                    deleteDashBoard: string;
                    sectionItems: (item: string) => string;
                    saveDashBoard: string;
                    saveAsDashBoard: string;
                    timezone: string;
                    title: string;
                };
                Annotations: {
                    List: {
                        addAnnotationCTA: string;
                        addAnnotationCTAV2: string;
                    };
                    Settings: {
                        name: string;
                    };
                };
                Variables: {
                    List: {
                        addVariableCTA: string;
                        addVariableCTAV2: string;
                        newButton: string;
                        table: string;
                        tableRowNameFields: (variableName: string) => string;
                        tableRowDefinitionFields: (variableName: string) => string;
                        tableRowArrowUpButtons: (variableName: string) => string;
                        tableRowArrowDownButtons: (variableName: string) => string;
                        tableRowDuplicateButtons: (variableName: string) => string;
                        tableRowRemoveButtons: (variableName: string) => string;
                    };
                    Edit: {
                        General: {
                            headerLink: string;
                            modeLabelNew: string;
                            modeLabelEdit: string;
                            generalNameInput: string;
                            generalTypeSelect: string;
                            generalLabelInput: string;
                            generalHideSelect: string;
                            selectionOptionsMultiSwitch: string;
                            selectionOptionsIncludeAllSwitch: string;
                            selectionOptionsCustomAllInput: string;
                            previewOfValuesOption: string;
                            submitButton: string;
                        };
                        QueryVariable: {
                            queryOptionsDataSourceSelect: string;
                            queryOptionsRefreshSelect: string;
                            queryOptionsRegExInput: string;
                            queryOptionsSortSelect: string;
                            queryOptionsQueryInput: string;
                            valueGroupsTagsEnabledSwitch: string;
                            valueGroupsTagsTagsQueryInput: string;
                            valueGroupsTagsTagsValuesQueryInput: string;
                        };
                        ConstantVariable: {
                            constantOptionsQueryInput: string;
                        };
                        TextBoxVariable: {
                            textBoxOptionsQueryInput: string;
                        };
                    };
                };
            };
        };
        Dashboards: {
            url: string;
            dashboards: (title: string) => string;
        };
        SaveDashboardAsModal: {
            newName: string;
            save: string;
        };
        SaveDashboardModal: {
            save: string;
            saveVariables: string;
            saveTimerange: string;
        };
        SharePanelModal: {
            linkToRenderedImage: string;
        };
        Explore: {
            url: string;
            General: {
                container: string;
                graph: string;
                table: string;
                scrollBar: () => string;
            };
        };
        SoloPanel: {
            url: (page: string) => string;
        };
        PluginsList: {
            page: string;
            list: string;
            listItem: string;
            signatureErrorNotice: string;
        };
        PluginPage: {
            page: string;
            signatureInfo: string;
            disabledInfo: string;
        };
        PlaylistForm: {
            name: string;
            interval: string;
            itemRow: string;
            itemIdType: string;
            itemTagType: string;
            itemMoveUp: string;
            itemMoveDown: string;
            itemDelete: string;
        };
    }>>;
    typings: typeof typings;
    components: import("./support").E2EFunctions<E2ESelectors<{
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
            runButton: string;
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
            container: string;
            containerV2: string;
            input: string;
        };
        ReadonlyFolderPicker: {
            container: string;
        };
        DataSourcePicker: {
            container: string;
            input: () => string;
            inputV2: string;
        };
        TimeZonePicker: {
            container: string;
            containerV2: string;
        };
        WeekStartPicker: {
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
            section: string;
            sectionV2: string;
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
    }>>;
    flows: typeof flows;
    getScenarioContext: () => any;
    setScenarioContext: (newContext: Partial<import("./support").ScenarioContext>) => any;
    getSelectors: <T extends Selectors>(selectors: E2ESelectors<T>) => import("./support").E2EFunctions<E2ESelectors<T>>;
};
export declare const e2e: (() => Cypress.cy) & typeof e2eObject;
export {};
