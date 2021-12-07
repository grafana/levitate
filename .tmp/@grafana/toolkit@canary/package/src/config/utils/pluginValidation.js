"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPluginJson = exports.validatePluginJson = void 0;
var validatePluginJson = function (pluginJson) {
    if (!pluginJson.id) {
        throw new Error('Plugin id is missing in plugin.json');
    }
    if (!pluginJson.info) {
        throw new Error('Plugin info node is missing in plugin.json');
    }
    if (!pluginJson.info.version) {
        throw new Error('Plugin info.version is missing in plugin.json');
    }
    var types = ['panel', 'datasource', 'app'];
    var type = pluginJson.type;
    if (!types.includes(type)) {
        throw new Error('Invalid plugin type in plugin.json: ' + type);
    }
    if (!pluginJson.id.endsWith('-' + type)) {
        throw new Error('[plugin.json] id should end with: -' + type);
    }
};
exports.validatePluginJson = validatePluginJson;
var getPluginJson = function (path) {
    var pluginJson;
    try {
        pluginJson = require(path);
    }
    catch (e) {
        throw new Error('Unable to find: ' + path);
    }
    (0, exports.validatePluginJson)(pluginJson);
    return pluginJson;
};
exports.getPluginJson = getPluginJson;
//# sourceMappingURL=pluginValidation.js.map