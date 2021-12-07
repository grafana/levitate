"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginTestTask = void 0;
var tslib_1 = require("tslib");
var task_1 = require("./task");
var tests_1 = require("./plugin/tests");
var pluginTestRunner = function (options) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, tests_1.testPlugin)(options)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.pluginTestTask = new task_1.Task('Test plugin', pluginTestRunner);
//# sourceMappingURL=plugin.tests.js.map