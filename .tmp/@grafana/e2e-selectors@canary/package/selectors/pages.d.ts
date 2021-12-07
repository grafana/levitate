/**
 * Selectors grouped/defined in Pages
 *
 * @alpha
 */
export declare const Pages: {
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
            /**
             * @deprecated use navV2 from Grafana 8.3 instead
             */
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
                /**
                 * @deprecated use components.TimeZonePicker.containerV2 from Grafana 8.3 instead
                 */
                timezone: string;
                title: string;
            };
            Annotations: {
                List: {
                    /**
                     * @deprecated use addAnnotationCTAV2 from Grafana 8.3 instead
                     */
                    addAnnotationCTA: string;
                    addAnnotationCTAV2: string;
                };
                Settings: {
                    name: string;
                };
            };
            Variables: {
                List: {
                    /**
                     * @deprecated use addVariableCTAV2 from Grafana 8.3 instead
                     */
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
                        /**
                         * @deprecated
                         */
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
        /**
         * @deprecated use components.Search.dashboardItem from Grafana 8.3 instead
         */
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
};
