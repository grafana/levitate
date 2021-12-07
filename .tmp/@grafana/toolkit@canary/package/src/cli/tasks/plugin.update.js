"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginUpdateTask = void 0;
var tslib_1 = require("tslib");
var task_1 = require("./task");
var useSpinner_1 = require("../utils/useSpinner");
var fs = require("fs");
var path = require("path");
var updateCiConfig = function () {
    return (0, useSpinner_1.useSpinner)('Updating CircleCI config', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var ciConfigPath, sourceFile, destFile;
        return (0, tslib_1.__generator)(this, function (_a) {
            ciConfigPath = path.join(process.cwd(), '.circleci');
            if (!fs.existsSync(ciConfigPath)) {
                fs.mkdirSync(ciConfigPath);
            }
            sourceFile = require.resolve('@grafana/toolkit/config/circleci/config.yml');
            destFile = path.join(ciConfigPath, 'config.yml');
            fs.copyFileSync(sourceFile, destFile);
            return [2 /*return*/];
        });
    }); });
};
var pluginUpdateRunner = function () { return updateCiConfig(); };
exports.pluginUpdateTask = new task_1.Task('Update Plugin', pluginUpdateRunner);
//# sourceMappingURL=plugin.update.js.map