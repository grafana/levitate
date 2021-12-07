"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testPlugin = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@jest/core");
var useSpinner_1 = require("../../utils/useSpinner");
var jest_plugin_config_1 = require("../../../config/jest.plugin.config");
var testPlugin = function (_a) {
    var updateSnapshot = _a.updateSnapshot, coverage = _a.coverage, watch = _a.watch, testPathPattern = _a.testPathPattern, testNamePattern = _a.testNamePattern, maxWorkers = _a.maxWorkers;
    return (0, useSpinner_1.useSpinner)('Running tests', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var testConfig, cliConfig, runJest, results;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testConfig = (0, jest_plugin_config_1.loadJestPluginConfig)();
                    cliConfig = {
                        config: JSON.stringify(testConfig),
                        updateSnapshot: updateSnapshot,
                        coverage: coverage,
                        watch: watch,
                        testPathPattern: testPathPattern ? [testPathPattern] : [],
                        testNamePattern: testNamePattern ? [testNamePattern] : [],
                        passWithNoTests: true,
                        maxWorkers: maxWorkers,
                    };
                    runJest = function () { return (0, core_1.runCLI)(cliConfig, [process.cwd()]); };
                    if (!watch) return [3 /*break*/, 1];
                    runJest();
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, runJest()];
                case 2:
                    results = _a.sent();
                    if (results.results.numFailedTests > 0 || results.results.numFailedTestSuites > 0) {
                        throw new Error('Tests failed');
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); });
};
exports.testPlugin = testPlugin;
//# sourceMappingURL=tests.js.map