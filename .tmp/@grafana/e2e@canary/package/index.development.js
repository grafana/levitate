'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var e2eSelectors = require('@grafana/e2e-selectors');

var e2eScenario = function (_a) {
    var describeName = _a.describeName, itName = _a.itName, scenario = _a.scenario, _b = _a.skipScenario, skipScenario = _b === void 0 ? false : _b, _c = _a.addScenarioDataSource, addScenarioDataSource = _c === void 0 ? false : _c, _d = _a.addScenarioDashBoard, addScenarioDashBoard = _d === void 0 ? false : _d;
    describe(describeName, function () {
        if (skipScenario) {
            it.skip(itName, function () { return scenario(); });
        }
        else {
            before(function () { return e2e.flows.login(e2e.env('USERNAME'), e2e.env('PASSWORD')); });
            beforeEach(function () {
                Cypress.Cookies.preserveOnce('grafana_session');
                if (addScenarioDataSource) {
                    e2e.flows.addDataSource();
                }
                if (addScenarioDashBoard) {
                    e2e.flows.addDashboard();
                }
            });
            afterEach(function () { return e2e.flows.revertAllChanges(); });
            after(function () { return e2e().clearCookies(); });
            it(itName, function () { return scenario(); });
            // @todo remove when possible: https://github.com/cypress-io/cypress/issues/2831
            it('temporary', function () { });
        }
    });
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var scenarioContext = {
    addedDashboards: [],
    addedDataSources: [],
    get lastAddedDashboard() {
        return lastProperty(this.addedDashboards, 'title');
    },
    get lastAddedDashboardUid() {
        return lastProperty(this.addedDashboards, 'uid');
    },
    get lastAddedDataSource() {
        return lastProperty(this.addedDataSources, 'name');
    },
    get lastAddedDataSourceId() {
        return lastProperty(this.addedDataSources, 'id');
    },
};
var lastProperty = function (items, key) { var _a, _b; return (_b = (_a = items[items.length - 1]) === null || _a === void 0 ? void 0 : _a[key]) !== null && _b !== void 0 ? _b : ''; };
// @todo this actually returns type `Cypress.Chainable`
var getScenarioContext = function () {
    return e2e()
        .wrap({
        getScenarioContext: function () { return (__assign({}, scenarioContext)); },
    }, { log: false })
        .invoke({ log: false }, 'getScenarioContext');
};
// @todo this actually returns type `Cypress.Chainable`
var setScenarioContext = function (newContext) {
    return e2e()
        .wrap({
        setScenarioContext: function () {
            Object.entries(newContext).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                scenarioContext[key] = value;
            });
        },
    }, { log: false })
        .invoke({ log: false }, 'setScenarioContext');
};

var Selector = {
    fromAriaLabel: function (selector) { return "[aria-label=\"" + selector + "\"]"; },
    fromDataTestId: function (selector) { return "[data-testid=\"" + selector + "\"]"; },
    fromSelector: function (selector) { return selector; },
};

var getBaseUrl = function () { return e2e.env('BASE_URL') || e2e.config().baseUrl || 'http://localhost:3000'; };
var fromBaseUrl = function (url) {
    if (url === void 0) { url = ''; }
    return new URL(url, getBaseUrl()).href;
};
var getDashboardUid = function (url) {
    var matches = new URL(url).pathname.match(/\/d\/([^/]+)/);
    if (!matches) {
        throw new Error("Couldn't parse uid from " + url);
    }
    else {
        return matches[1];
    }
};

var processSelectors = function (e2eObjects, selectors) {
    var logOutput = function (data) { return e2e().logToConsole('Retrieving Selector:', data); };
    var keys = Object.keys(selectors);
    var _loop_1 = function (index) {
        var key = keys[index];
        var value = selectors[key];
        if (key === 'url') {
            // @ts-ignore
            e2eObjects['visit'] = function (args, queryParams) {
                var parsedUrl = '';
                if (typeof value === 'string') {
                    parsedUrl = fromBaseUrl(value);
                }
                if (typeof value === 'function' && args) {
                    parsedUrl = fromBaseUrl(value(args));
                }
                e2e().logToConsole('Visiting', parsedUrl);
                if (queryParams) {
                    return e2e().visit({ url: parsedUrl, qs: queryParams });
                }
                else {
                    return e2e().visit(parsedUrl);
                }
            };
            return "continue";
        }
        if (typeof value === 'string') {
            // @ts-ignore
            e2eObjects[key] = function (options) {
                logOutput(value);
                var selector = value.startsWith('data-testid')
                    ? Selector.fromDataTestId(value)
                    : Selector.fromAriaLabel(value);
                return e2e().get(selector, options);
            };
            return "continue";
        }
        if (typeof value === 'function') {
            // @ts-ignore
            e2eObjects[key] = function (textOrOptions, options) {
                // the input can only be ()
                if (arguments.length === 0) {
                    var selector = value(undefined);
                    logOutput(selector);
                    return e2e().get(selector);
                }
                // the input can be (text) or (options)
                if (arguments.length === 1) {
                    if (typeof textOrOptions === 'string') {
                        var selectorText = value(textOrOptions);
                        var selector_1 = selectorText.startsWith('data-testid')
                            ? Selector.fromDataTestId(selectorText)
                            : Selector.fromAriaLabel(selectorText);
                        logOutput(selector_1);
                        return e2e().get(selector_1);
                    }
                    var selector = value(undefined);
                    logOutput(selector);
                    return e2e().get(selector, textOrOptions);
                }
                // the input can only be (text, options)
                if (arguments.length === 2 && typeof textOrOptions === 'string') {
                    var text = textOrOptions;
                    var selectorText = value(text);
                    var selector = text.startsWith('data-testid')
                        ? Selector.fromDataTestId(selectorText)
                        : Selector.fromAriaLabel(selectorText);
                    logOutput(selector);
                    return e2e().get(selector, options);
                }
            };
            return "continue";
        }
        if (typeof value === 'object') {
            // @ts-ignore
            e2eObjects[key] = processSelectors({}, value);
        }
    };
    for (var index = 0; index < keys.length; index++) {
        _loop_1(index);
    }
    return e2eObjects;
};
var e2eFactory = function (_a) {
    var selectors = _a.selectors;
    var e2eObjects = {};
    processSelectors(e2eObjects, selectors);
    return __assign({}, e2eObjects);
};

// @todo this actually returns type `Cypress.Chainable`
var selectOption = function (config) {
    var fullConfig = __assign({ clickToOpen: true, forceClickOption: false }, config);
    var clickToOpen = fullConfig.clickToOpen, container = fullConfig.container, forceClickOption = fullConfig.forceClickOption, optionText = fullConfig.optionText;
    container.within(function () {
        if (clickToOpen) {
            e2e().get('[class$="-input-suffix"]').click();
        }
    });
    return e2e.components.Select.option()
        .filter(function (_, _a) {
        var textContent = _a.textContent;
        if (textContent === null) {
            return false;
        }
        else if (typeof optionText === 'string') {
            return textContent.includes(optionText);
        }
        else {
            return optionText.test(textContent);
        }
    })
        .scrollIntoView()
        .click({ force: forceClickOption });
};

var setTimeRange = function (_a) {
    var from = _a.from, to = _a.to, zone = _a.zone;
    e2e.components.TimePicker.openButton().click();
    if (zone) {
        e2e().contains('button', 'Change time settings').click();
        if (e2e.components.TimeZonePicker.containerV2) {
            selectOption({
                clickToOpen: true,
                container: e2e.components.TimeZonePicker.containerV2(),
                optionText: zone,
            });
        }
        else {
            selectOption({
                clickToOpen: true,
                container: e2e.components.TimeZonePicker.container(),
                optionText: zone,
            });
        }
    }
    // For smaller screens
    e2e.components.TimePicker.absoluteTimeRangeTitle().click();
    e2e.components.TimePicker.fromField().clear().type(from);
    e2e.components.TimePicker.toField().clear().type(to);
    e2e.components.TimePicker.applyTimeRange().click();
};

var setDashboardTimeRange = function (config) { return setTimeRange(config); };

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var addDashboard = function (config) {
    var fullConfig = __assign(__assign({ annotations: [], title: "e2e-" + v4(), variables: [] }, config), { timeRange: __assign({ from: '2020-01-01 00:00:00', to: '2020-01-01 06:00:00', zone: 'Coordinated Universal Time' }, config === null || config === void 0 ? void 0 : config.timeRange) });
    var annotations = fullConfig.annotations, timeRange = fullConfig.timeRange, title = fullConfig.title, variables = fullConfig.variables;
    e2e().logToConsole('Adding dashboard with title:', title);
    e2e.pages.AddDashboard.visit();
    if (annotations.length > 0 || variables.length > 0) {
        e2e.components.PageToolbar.item('Dashboard settings').click();
        addAnnotations(annotations);
        fullConfig.variables = addVariables(variables);
        e2e.components.BackButton.backArrow().should('be.visible').click({ force: true });
    }
    setDashboardTimeRange(timeRange);
    e2e.components.PageToolbar.item('Save dashboard').click();
    e2e.pages.SaveDashboardAsModal.newName().clear().type(title);
    e2e.pages.SaveDashboardAsModal.save().click();
    e2e.flows.assertSuccessNotification();
    e2e().logToConsole('Added dashboard with title:', title);
    return e2e()
        .url()
        .should('contain', '/d/')
        .then(function (url) {
        var uid = getDashboardUid(url);
        e2e.getScenarioContext().then(function (_a) {
            var addedDashboards = _a.addedDashboards;
            e2e.setScenarioContext({
                addedDashboards: __spreadArray(__spreadArray([], __read(addedDashboards), false), [{ title: title, uid: uid }], false),
            });
        });
        // @todo remove `wrap` when possible
        return e2e().wrap({
            config: fullConfig,
            uid: uid,
        }, { log: false });
    });
};
var addAnnotation = function (config, isFirst) {
    if (isFirst) {
        if (e2e.pages.Dashboard.Settings.Annotations.List.addAnnotationCTAV2) {
            e2e.pages.Dashboard.Settings.Annotations.List.addAnnotationCTAV2().click();
        }
        else {
            e2e.pages.Dashboard.Settings.Annotations.List.addAnnotationCTA().click();
        }
    }
    else {
        cy.contains('New query').click();
    }
    var dataSource = config.dataSource, dataSourceForm = config.dataSourceForm, name = config.name;
    selectOption({
        container: e2e.components.DataSourcePicker.container(),
        optionText: dataSource,
    });
    e2e.pages.Dashboard.Settings.Annotations.Settings.name().clear().type(name);
    if (dataSourceForm) {
        dataSourceForm();
    }
};
var addAnnotations = function (configs) {
    if (configs.length > 0) {
        e2e.pages.Dashboard.Settings.General.sectionItems('Annotations').click();
    }
    return configs.forEach(function (config, i) { return addAnnotation(config, i === 0); });
};
var VARIABLE_HIDE_LABEL = 'Label';
var VARIABLE_HIDE_NOTHING = '';
var VARIABLE_HIDE_VARIABLE = 'Variable';
var VARIABLE_TYPE_AD_HOC_FILTERS = 'Ad hoc filters';
var VARIABLE_TYPE_CONSTANT = 'Constant';
var VARIABLE_TYPE_DATASOURCE = 'Datasource';
var VARIABLE_TYPE_QUERY = 'Query';
var addVariable = function (config, isFirst) {
    var fullConfig = __assign({ hide: VARIABLE_HIDE_NOTHING, type: VARIABLE_TYPE_QUERY }, config);
    if (isFirst) {
        if (e2e.pages.Dashboard.Settings.Variables.List.addVariableCTAV2) {
            e2e.pages.Dashboard.Settings.Variables.List.addVariableCTAV2().click();
        }
        else {
            e2e.pages.Dashboard.Settings.Variables.List.addVariableCTA().click();
        }
    }
    else {
        e2e.pages.Dashboard.Settings.Variables.List.newButton().click();
    }
    var constantValue = fullConfig.constantValue, dataSource = fullConfig.dataSource, label = fullConfig.label, name = fullConfig.name, query = fullConfig.query, regex = fullConfig.regex, type = fullConfig.type;
    // This field is key to many reactive changes
    if (type !== VARIABLE_TYPE_QUERY) {
        e2e.pages.Dashboard.Settings.Variables.Edit.General.generalTypeSelect()
            .should('be.visible')
            .within(function () {
            e2e.components.Select.singleValue().should('have.text', 'Query').click();
        });
        e2e.components.Select.option().should('be.visible').contains(type).click();
    }
    if (label) {
        e2e.pages.Dashboard.Settings.Variables.Edit.General.generalLabelInput().type(label);
    }
    e2e.pages.Dashboard.Settings.Variables.Edit.General.generalNameInput().clear().type(name);
    if (dataSource &&
        (type === VARIABLE_TYPE_AD_HOC_FILTERS || type === VARIABLE_TYPE_DATASOURCE || type === VARIABLE_TYPE_QUERY)) {
        e2e.pages.Dashboard.Settings.Variables.Edit.QueryVariable.queryOptionsDataSourceSelect()
            .should('be.visible')
            .within(function () {
            e2e.components.Select.input().should('be.visible').type(dataSource + "{enter}");
        });
    }
    if (constantValue && type === VARIABLE_TYPE_CONSTANT) {
        e2e.pages.Dashboard.Settings.Variables.Edit.ConstantVariable.constantOptionsQueryInput().type(constantValue);
    }
    if (type === VARIABLE_TYPE_QUERY) {
        if (query) {
            e2e.pages.Dashboard.Settings.Variables.Edit.QueryVariable.queryOptionsQueryInput().type(query);
        }
        if (regex) {
            e2e.pages.Dashboard.Settings.Variables.Edit.QueryVariable.queryOptionsRegExInput().type(regex);
        }
    }
    // Avoid flakiness
    e2e().focused().blur();
    e2e.pages.Dashboard.Settings.Variables.Edit.General.previewOfValuesOption()
        .should('exist')
        .within(function (previewOfValues) {
        if (type === VARIABLE_TYPE_CONSTANT) {
            expect(previewOfValues.text()).equals(constantValue);
        }
    });
    e2e.pages.Dashboard.Settings.Variables.Edit.General.submitButton().click();
    return fullConfig;
};
var addVariables = function (configs) {
    if (configs.length > 0) {
        e2e.pages.Dashboard.Settings.General.sectionItems('Variables').click();
    }
    return configs.map(function (config, i) { return addVariable(config, i === 0); });
};

// @todo this actually returns type `Cypress.Chainable<AddDaaSourceConfig>`
var addDataSource = function (config) {
    var fullConfig = __assign({ basicAuth: false, basicAuthPassword: '', basicAuthUser: '', checkHealth: false, expectedAlertMessage: 'Data source is working', form: function () { }, name: "e2e-" + v4(), skipTlsVerify: false, type: 'TestData DB' }, config);
    var basicAuth = fullConfig.basicAuth, basicAuthPassword = fullConfig.basicAuthPassword, basicAuthUser = fullConfig.basicAuthUser, expectedAlertMessage = fullConfig.expectedAlertMessage, form = fullConfig.form, name = fullConfig.name, skipTlsVerify = fullConfig.skipTlsVerify, type = fullConfig.type, timeout = fullConfig.timeout;
    e2e().logToConsole('Adding data source with name:', name);
    e2e.pages.AddDataSource.visit();
    e2e.pages.AddDataSource.dataSourcePlugins(type)
        .scrollIntoView()
        .should('be.visible') // prevents flakiness
        .click();
    e2e.pages.DataSource.name().clear();
    e2e.pages.DataSource.name().type(name);
    if (basicAuth) {
        e2e().contains('label', 'Basic auth').scrollIntoView().click();
        e2e()
            .contains('.gf-form-group', 'Basic Auth Details')
            .should('be.visible')
            .scrollIntoView()
            .within(function () {
            if (basicAuthUser) {
                e2e().get('[placeholder=user]').type(basicAuthUser);
            }
            if (basicAuthPassword) {
                e2e().get('[placeholder=Password]').type(basicAuthPassword);
            }
        });
    }
    if (skipTlsVerify) {
        e2e().contains('label', 'Skip TLS Verify').scrollIntoView().click();
    }
    form();
    e2e.pages.DataSource.saveAndTest().click();
    // use the timeout passed in if it exists, otherwise, continue to use the default
    e2e.pages.DataSource.alert()
        .should('exist')
        .contains(expectedAlertMessage, {
        timeout: timeout !== null && timeout !== void 0 ? timeout : e2e.config().defaultCommandTimeout,
    });
    e2e().logToConsole('Added data source with name:', name);
    return e2e()
        .url()
        .then(function () {
        e2e.getScenarioContext().then(function (_a) {
            var addedDataSources = _a.addedDataSources;
            e2e.setScenarioContext({
                addedDataSources: __spreadArray(__spreadArray([], __read(addedDataSources), false), [{ name: name }], false),
            });
        });
        // @todo remove `wrap` when possible
        return e2e().wrap({
            config: fullConfig,
        }, { log: false });
    });
};

// @todo this actually returns type `Cypress.Chainable<AddPanelConfig | EditPanelConfig | ConfigurePanelConfig>`
var configurePanel = function (config) {
    return getScenarioContext().then(function (_a) {
        var lastAddedDashboardUid = _a.lastAddedDashboardUid;
        var fullConfig = __assign({ chartData: {
                method: 'POST',
                route: '/api/ds/query',
            }, dashboardUid: lastAddedDashboardUid, matchScreenshot: false, saveDashboard: true, screenshotName: 'panel-visualization', visitDashboardAtStart: true }, config);
        var chartData = fullConfig.chartData, dashboardUid = fullConfig.dashboardUid, dataSourceName = fullConfig.dataSourceName, isEdit = fullConfig.isEdit, matchScreenshot = fullConfig.matchScreenshot, panelTitle = fullConfig.panelTitle, queriesForm = fullConfig.queriesForm, screenshotName = fullConfig.screenshotName, timeRange = fullConfig.timeRange, visitDashboardAtStart = fullConfig.visitDashboardAtStart, visualizationName = fullConfig.visualizationName;
        if (visitDashboardAtStart) {
            e2e.flows.openDashboard({ uid: dashboardUid });
        }
        if (isEdit) {
            e2e.components.Panels.Panel.title(panelTitle).click();
            e2e.components.Panels.Panel.headerItems('Edit').click();
        }
        else {
            e2e.components.PageToolbar.item('Add panel').click();
            e2e.pages.AddDashboard.addNewPanel().click();
        }
        if (timeRange) {
            setDashboardTimeRange(timeRange);
        }
        // @todo alias '/**/*.js*' as '@pluginModule' when possible: https://github.com/cypress-io/cypress/issues/1296
        e2e().intercept(chartData.method, chartData.route).as('chartData');
        if (dataSourceName) {
            selectOption({
                container: e2e.components.DataSourcePicker.container(),
                optionText: dataSourceName,
            });
        }
        // @todo instead wait for '@pluginModule' if not already loaded
        e2e().wait(2000);
        // `panelTitle` is needed to edit the panel, and unlikely to have its value changed at that point
        var changeTitle = panelTitle && !isEdit;
        if (changeTitle || visualizationName) {
            if (changeTitle && panelTitle) {
                e2e.components.PanelEditor.OptionsPane.fieldLabel('Panel options Title').type("{selectall}" + panelTitle);
            }
            if (visualizationName) {
                e2e.components.PluginVisualization.item(visualizationName).scrollIntoView().click();
                // @todo wait for '@pluginModule' if not a core visualization and not already loaded
                e2e().wait(2000);
            }
        }
        else {
            // Consistently closed
            closeOptions();
        }
        if (queriesForm) {
            queriesForm(fullConfig);
            e2e().wait('@chartData');
            // Wait for a possible complex visualization to render (or something related, as this isn't necessary on the dashboard page)
            // Can't assert that its HTML changed because a new query could produce the same results
            e2e().wait(1000);
        }
        // @todo enable when plugins have this implemented
        //e2e.components.QueryEditorRow.actionButton('Disable/enable query').click();
        //e2e().wait('@chartData');
        //e2e.components.Panels.Panel.containerByTitle(panelTitle).find('.panel-content').contains('No data');
        //e2e.components.QueryEditorRow.actionButton('Disable/enable query').click();
        //e2e().wait('@chartData');
        // Avoid annotations flakiness
        e2e.components.RefreshPicker.runButton().should('be.visible').click();
        e2e().wait('@chartData');
        // Wait for RxJS
        e2e().wait(500);
        if (matchScreenshot) {
            var visualization = void 0;
            visualization = e2e.components.Panels.Panel.containerByTitle(panelTitle).find('.panel-content');
            visualization.scrollIntoView().screenshot(screenshotName);
            e2e().compareScreenshots(screenshotName);
        }
        // @todo remove `wrap` when possible
        return e2e().wrap({ config: fullConfig }, { log: false });
    });
};
// @todo this actually returns type `Cypress.Chainable`
var closeOptions = function () { return e2e.components.PanelEditor.toggleVizOptions().click(); };
var VISUALIZATION_ALERT_LIST = 'Alert list';
var VISUALIZATION_BAR_GAUGE = 'Bar gauge';
var VISUALIZATION_CLOCK = 'Clock';
var VISUALIZATION_DASHBOARD_LIST = 'Dashboard list';
var VISUALIZATION_GAUGE = 'Gauge';
var VISUALIZATION_GRAPH = 'Graph';
var VISUALIZATION_HEAT_MAP = 'Heatmap';
var VISUALIZATION_LOGS = 'Logs';
var VISUALIZATION_NEWS = 'News';
var VISUALIZATION_PIE_CHART = 'Pie Chart';
var VISUALIZATION_PLUGIN_LIST = 'Plugin list';
var VISUALIZATION_POLYSTAT = 'Polystat';
var VISUALIZATION_STAT = 'Stat';
var VISUALIZATION_TABLE = 'Table';
var VISUALIZATION_TEXT = 'Text';
var VISUALIZATION_WORLD_MAP = 'Worldmap Panel';

var addPanel = function (config) {
    return getScenarioContext().then(function (_a) {
        var lastAddedDataSource = _a.lastAddedDataSource;
        return configurePanel(__assign(__assign({ dataSourceName: lastAddedDataSource, panelTitle: "e2e-" + v4() }, config), { isEdit: false }));
    });
};

var assertSuccessNotification = function () {
    if (e2e.components.Alert.alertV2) {
        e2e.components.Alert.alertV2('success').should('exist');
    }
    else {
        e2e.components.Alert.alert('success').should('exist');
    }
};

var deleteDashboard = function (_a) {
    var _b = _a.quick, quick = _b === void 0 ? false : _b, title = _a.title, uid = _a.uid;
    e2e().logToConsole('Deleting dashboard with uid:', uid);
    if (quick) {
        quickDelete$1(uid);
    }
    else {
        uiDelete$1(uid, title);
    }
    e2e().logToConsole('Deleted dashboard with uid:', uid);
    e2e.getScenarioContext().then(function (_a) {
        var addedDashboards = _a.addedDashboards;
        e2e.setScenarioContext({
            addedDashboards: addedDashboards.filter(function (dashboard) {
                return dashboard.title !== title && dashboard.uid !== uid;
            }),
        });
    });
};
var quickDelete$1 = function (uid) {
    e2e().request('DELETE', fromBaseUrl("/api/dashboards/uid/" + uid));
};
var uiDelete$1 = function (uid, title) {
    e2e.pages.Dashboard.visit(uid);
    e2e.components.PageToolbar.item('Dashboard settings').click();
    e2e.pages.Dashboard.Settings.General.deleteDashBoard().click();
    e2e.pages.ConfirmModal.delete().click();
    e2e.flows.assertSuccessNotification();
    e2e.pages.Dashboards.visit();
    // @todo replace `e2e.pages.Dashboards.dashboards` with this when argument is empty
    if (e2e.components.Search.dashboardItems) {
        e2e.components.Search.dashboardItems().each(function (item) { return e2e().wrap(item).should('not.contain', title); });
    }
    else {
        e2e()
            .get('[aria-label^="Dashboard search item "]')
            .each(function (item) { return e2e().wrap(item).should('not.contain', title); });
    }
};

var deleteDataSource = function (_a) {
    var id = _a.id, name = _a.name, _b = _a.quick, quick = _b === void 0 ? false : _b;
    e2e().logToConsole('Deleting data source with name:', name);
    if (quick) {
        quickDelete(name);
    }
    else {
        uiDelete(name);
    }
    e2e().logToConsole('Deleted data source with name:', name);
    e2e.getScenarioContext().then(function (_a) {
        var addedDataSources = _a.addedDataSources;
        e2e.setScenarioContext({
            addedDataSources: addedDataSources.filter(function (dataSource) {
                return dataSource.id !== id && dataSource.name !== name;
            }),
        });
    });
};
var quickDelete = function (name) {
    e2e().request('DELETE', fromBaseUrl("/api/datasources/name/" + name));
};
var uiDelete = function (name) {
    e2e.pages.DataSources.visit();
    e2e.pages.DataSources.dataSources(name).click();
    e2e.pages.DataSource.delete().click();
    e2e.pages.ConfirmModal.delete().click();
    e2e.pages.DataSources.visit();
    // @todo replace `e2e.pages.DataSources.dataSources` with this when argument is empty
    e2e()
        .get('[aria-label^="Data source list item "]')
        .each(function (item) { return e2e().wrap(item).should('not.contain', name); });
};

var editPanel = function (config) {
    return configurePanel(__assign(__assign({}, config), { isEdit: true }));
};

var DEFAULT_USERNAME = 'admin';
var DEFAULT_PASSWORD = 'admin';
var login = function (username, password) {
    if (username === void 0) { username = DEFAULT_USERNAME; }
    if (password === void 0) { password = DEFAULT_PASSWORD; }
    e2e().logToConsole('Logging in with username:', username);
    e2e.pages.Login.visit();
    e2e.pages.Login.username()
        .should('be.visible') // prevents flakiness
        .type(username);
    e2e.pages.Login.password().type(password);
    e2e.pages.Login.submit().click();
    // Local tests will have insecure credentials
    if (password === DEFAULT_PASSWORD) {
        e2e.pages.Login.skip().should('be.visible').click();
    }
    e2e().get('.login-page').should('not.exist');
    e2e().logToConsole('Logged in with username:', username);
};

// @todo this actually returns type `Cypress.Chainable<OpenDashboardConfig>`
var openDashboard = function (config) {
    return getScenarioContext().then(function (_a) {
        var lastAddedDashboardUid = _a.lastAddedDashboardUid;
        var fullConfig = __assign({ uid: lastAddedDashboardUid }, config);
        var timeRange = fullConfig.timeRange, uid = fullConfig.uid, queryParams = fullConfig.queryParams;
        e2e.pages.Dashboard.visit(uid, queryParams);
        if (timeRange) {
            setDashboardTimeRange(timeRange);
        }
        // @todo remove `wrap` when possible
        return e2e().wrap({ config: fullConfig }, { log: false });
    });
};

var PanelMenuItems;
(function (PanelMenuItems) {
    PanelMenuItems["Edit"] = "Edit";
    PanelMenuItems["Inspect"] = "Inspect";
})(PanelMenuItems || (PanelMenuItems = {}));
var openPanelMenuItem = function (menu, panelTitle) {
    if (panelTitle === void 0) { panelTitle = 'Panel Title'; }
    e2e.components.Panels.Panel.title(panelTitle).should('be.visible').click();
    e2e.components.Panels.Panel.headerItems(menu).should('be.visible').click();
};

var revertAllChanges = function () {
    e2e.getScenarioContext().then(function (_a) {
        var addedDashboards = _a.addedDashboards, addedDataSources = _a.addedDataSources;
        addedDashboards.forEach(function (dashboard) { return e2e.flows.deleteDashboard(__assign(__assign({}, dashboard), { quick: true })); });
        addedDataSources.forEach(function (dataSource) { return e2e.flows.deleteDataSource(__assign(__assign({}, dataSource), { quick: true })); });
    });
};

var saveDashboard = function () {
    e2e.components.PageToolbar.item('Save dashboard').click();
    e2e.pages.SaveDashboardModal.save().click();
    e2e.flows.assertSuccessNotification();
};

/**
 * Smoke test a particular dashboard by quickly importing a json file and validate that all the panels finish loading
 * @param dashboardToImport a sample dashboard
 * @param queryTimeout a number of ms to wait for the imported dashboard to finish loading
 */
var importDashboard = function (dashboardToImport, queryTimeout) {
    e2e().visit(fromBaseUrl('/dashboard/import'));
    // Note: normally we'd use 'click' and then 'type' here, but the json object is so big that using 'val' is much faster
    e2e.components.DashboardImportPage.textarea()
        .should('be.visible')
        .click()
        .invoke('val', JSON.stringify(dashboardToImport));
    e2e.components.DashboardImportPage.submit().should('be.visible').click();
    e2e.components.ImportDashboardForm.name().should('be.visible').click().clear().type(dashboardToImport.title);
    e2e.components.ImportDashboardForm.submit().should('be.visible').click();
    // wait for dashboard to load
    e2e().wait(queryTimeout || 6000);
    // save the newly imported dashboard to context so it'll get properly deleted later
    e2e()
        .url()
        .should('contain', '/d/')
        .then(function (url) {
        var uid = getDashboardUid(url);
        e2e.getScenarioContext().then(function (_a) {
            var addedDashboards = _a.addedDashboards;
            e2e.setScenarioContext({
                addedDashboards: __spreadArray(__spreadArray([], __read(addedDashboards), false), [{ title: dashboardToImport.title, uid: uid }], false),
            });
        });
        expect(dashboardToImport.uid).to.equal(uid);
    });
    dashboardToImport.panels.forEach(function (panel) {
        // Look at the json data
        e2e.components.Panels.Panel.title(panel.title).should('be.visible').click();
        e2e.components.Panels.Panel.headerItems('Inspect').should('be.visible').click();
        e2e.components.Tab.title('JSON').should('be.visible').click();
        e2e.components.PanelInspector.Json.content().should('be.visible').contains('Panel JSON').click();
        e2e.components.Select.option().should('be.visible').contains('Data').click();
        // ensures that panel has loaded without knowingly hitting an error
        // note: this does not prove that data came back as we expected it,
        // it could get `state: Done` for no data for example
        // but it ensures we didn't hit a 401 or 500 or something like that
        e2e.components.CodeEditor.container().should('be.visible').contains('"state": "Done"');
        // need to close panel
        e2e.components.Drawer.General.close().click();
    });
};

/**
 * Smoke test several dashboard json files from a test directory
 * and validate that all the panels in each import finish loading their queries
 * @param dirPath the relative path to a directory which contains json files representing dashboards,
 * for example if your dashboards live in `cypress/testDashboards` you can pass `/testDashboards`
 * @param queryTimeout a number of ms to wait for the imported dashboard to finish loading
 */
var importDashboards = function (dirPath, queryTimeout) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        e2e()
            .getJSONFilesFromDir(dirPath)
            .then(function (jsonFiles) {
            jsonFiles.forEach(function (file) {
                importDashboard(file, queryTimeout || 6000);
            });
        });
        return [2 /*return*/];
    });
}); };

var flows = /*#__PURE__*/Object.freeze({
    __proto__: null,
    VISUALIZATION_ALERT_LIST: VISUALIZATION_ALERT_LIST,
    VISUALIZATION_BAR_GAUGE: VISUALIZATION_BAR_GAUGE,
    VISUALIZATION_CLOCK: VISUALIZATION_CLOCK,
    VISUALIZATION_DASHBOARD_LIST: VISUALIZATION_DASHBOARD_LIST,
    VISUALIZATION_GAUGE: VISUALIZATION_GAUGE,
    VISUALIZATION_GRAPH: VISUALIZATION_GRAPH,
    VISUALIZATION_HEAT_MAP: VISUALIZATION_HEAT_MAP,
    VISUALIZATION_LOGS: VISUALIZATION_LOGS,
    VISUALIZATION_NEWS: VISUALIZATION_NEWS,
    VISUALIZATION_PIE_CHART: VISUALIZATION_PIE_CHART,
    VISUALIZATION_PLUGIN_LIST: VISUALIZATION_PLUGIN_LIST,
    VISUALIZATION_POLYSTAT: VISUALIZATION_POLYSTAT,
    VISUALIZATION_STAT: VISUALIZATION_STAT,
    VISUALIZATION_TABLE: VISUALIZATION_TABLE,
    VISUALIZATION_TEXT: VISUALIZATION_TEXT,
    VISUALIZATION_WORLD_MAP: VISUALIZATION_WORLD_MAP,
    addDashboard: addDashboard,
    VARIABLE_HIDE_LABEL: VARIABLE_HIDE_LABEL,
    VARIABLE_HIDE_NOTHING: VARIABLE_HIDE_NOTHING,
    VARIABLE_HIDE_VARIABLE: VARIABLE_HIDE_VARIABLE,
    VARIABLE_TYPE_AD_HOC_FILTERS: VARIABLE_TYPE_AD_HOC_FILTERS,
    VARIABLE_TYPE_CONSTANT: VARIABLE_TYPE_CONSTANT,
    VARIABLE_TYPE_DATASOURCE: VARIABLE_TYPE_DATASOURCE,
    VARIABLE_TYPE_QUERY: VARIABLE_TYPE_QUERY,
    addDataSource: addDataSource,
    addPanel: addPanel,
    assertSuccessNotification: assertSuccessNotification,
    deleteDashboard: deleteDashboard,
    deleteDataSource: deleteDataSource,
    editPanel: editPanel,
    login: login,
    openDashboard: openDashboard,
    get PanelMenuItems () { return PanelMenuItems; },
    openPanelMenuItem: openPanelMenuItem,
    revertAllChanges: revertAllChanges,
    saveDashboard: saveDashboard,
    selectOption: selectOption,
    importDashboard: importDashboard,
    importDashboards: importDashboards
});

// https://nodejs.org/api/os.html#os_os_platform
var Platform;
(function (Platform) {
    Platform["osx"] = "darwin";
    Platform["windows"] = "win32";
    Platform["linux"] = "linux";
    Platform["aix"] = "aix";
    Platform["freebsd"] = "freebsd";
    Platform["openbsd"] = "openbsd";
    Platform["sunos"] = "sunos";
})(Platform || (Platform = {}));
var undo = function () {
    switch (Cypress.platform) {
        case Platform.osx:
            return '{cmd}z';
        default:
            return '{ctrl}z';
    }
};

var typings = /*#__PURE__*/Object.freeze({
    __proto__: null,
    undo: undo
});

/**
 * A library for writing end-to-end tests for Grafana and its ecosystem.
 *
 * @packageDocumentation
 */
var e2eObject = {
    env: function (args) { return Cypress.env(args); },
    config: function () { return Cypress.config(); },
    blobToBase64String: function (blob) { return Cypress.Blob.blobToBase64String(blob); },
    imgSrcToBlob: function (url) { return Cypress.Blob.imgSrcToBlob(url); },
    scenario: function (args) { return e2eScenario(args); },
    pages: e2eFactory({ selectors: e2eSelectors.selectors.pages }),
    typings: typings,
    components: e2eFactory({ selectors: e2eSelectors.selectors.components }),
    flows: flows,
    getScenarioContext: getScenarioContext,
    setScenarioContext: setScenarioContext,
    getSelectors: function (selectors) { return e2eFactory({ selectors: selectors }); },
};
var e2e = Object.assign(function () { return cy; }, e2eObject);

exports.e2e = e2e;
//# sourceMappingURL=index.development.js.map
