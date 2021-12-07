"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPluginId = void 0;
var tslib_1 = require("tslib");
var path_1 = (0, tslib_1.__importDefault)(require("path"));
var PLUGIN_ID;
var getPluginId = function () {
    if (!PLUGIN_ID) {
        var pluginJson = require(path_1.default.resolve(process.cwd(), 'src/plugin.json'));
        PLUGIN_ID = pluginJson.id;
    }
    return PLUGIN_ID;
};
exports.getPluginId = getPluginId;
//# sourceMappingURL=getPluginId.js.map