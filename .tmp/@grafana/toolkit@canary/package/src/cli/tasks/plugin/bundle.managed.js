"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bundleManagedTask = void 0;
var tslib_1 = require("tslib");
var fs_1 = require("fs");
var task_1 = require("../task");
var execa = require("execa");
var MANAGED_PLUGINS_PATH = process.cwd() + "/plugins-bundled";
var MANAGED_PLUGINS_SCOPES = ['internal', 'external'];
var bundleManagedPluginsRunner = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all(MANAGED_PLUGINS_SCOPES.map(function (scope) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
                    var plugins, plugins_1, plugins_1_1, plugin, e_1, e_2_1, e_3;
                    var e_2, _a;
                    return (0, tslib_1.__generator)(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 12, , 13]);
                                return [4 /*yield*/, fs_1.promises.readdir(MANAGED_PLUGINS_PATH + "/" + scope)];
                            case 1:
                                plugins = _b.sent();
                                if (!(plugins.length > 0)) return [3 /*break*/, 11];
                                _b.label = 2;
                            case 2:
                                _b.trys.push([2, 9, 10, 11]);
                                plugins_1 = (0, tslib_1.__values)(plugins), plugins_1_1 = plugins_1.next();
                                _b.label = 3;
                            case 3:
                                if (!!plugins_1_1.done) return [3 /*break*/, 8];
                                plugin = plugins_1_1.value;
                                _b.label = 4;
                            case 4:
                                _b.trys.push([4, 6, , 7]);
                                console.log("[" + scope + "]: " + plugin + " building...");
                                return [4 /*yield*/, execa('yarn', ['build'], { cwd: MANAGED_PLUGINS_PATH + "/" + scope + "/" + plugin })];
                            case 5:
                                _b.sent();
                                console.log("[" + scope + "]: " + plugin + " bundled");
                                return [3 /*break*/, 7];
                            case 6:
                                e_1 = _b.sent();
                                console.log(e_1.stdout);
                                return [3 /*break*/, 7];
                            case 7:
                                plugins_1_1 = plugins_1.next();
                                return [3 /*break*/, 3];
                            case 8: return [3 /*break*/, 11];
                            case 9:
                                e_2_1 = _b.sent();
                                e_2 = { error: e_2_1 };
                                return [3 /*break*/, 11];
                            case 10:
                                try {
                                    if (plugins_1_1 && !plugins_1_1.done && (_a = plugins_1.return)) _a.call(plugins_1);
                                }
                                finally { if (e_2) throw e_2.error; }
                                return [7 /*endfinally*/];
                            case 11: return [3 /*break*/, 13];
                            case 12:
                                e_3 = _b.sent();
                                console.log(e_3);
                                return [3 /*break*/, 13];
                            case 13: return [2 /*return*/];
                        }
                    });
                }); }))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.bundleManagedTask = new task_1.Task('Bundle managed plugins', bundleManagedPluginsRunner);
//# sourceMappingURL=bundle.managed.js.map