"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateTask = void 0;
var tslib_1 = require("tslib");
var task_1 = require("./task");
var templateRunner = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    return (0, tslib_1.__generator)(this, function (_a) {
        console.log('Template task');
        return [2 /*return*/];
    });
}); };
exports.templateTask = new task_1.Task('Template task', templateRunner);
//# sourceMappingURL=template.js.map