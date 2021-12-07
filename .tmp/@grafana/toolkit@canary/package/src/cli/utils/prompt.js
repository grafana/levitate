"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptConfirm = exports.promptList = exports.promptInput = exports.answerRequired = void 0;
var tslib_1 = require("tslib");
var answerRequired = function (question) {
    return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, question), { validate: function (answer) { return answer.trim() !== '' || question.name + " is required"; } });
};
exports.answerRequired = answerRequired;
var promptInput = function (name, message, required, def, when) {
    if (required === void 0) { required = false; }
    if (def === void 0) { def = undefined; }
    if (when === void 0) { when = true; }
    var model = {
        type: 'input',
        name: name,
        message: message,
        default: def,
        when: when,
    };
    return required ? (0, exports.answerRequired)(model) : model;
};
exports.promptInput = promptInput;
var promptList = function (name, message, choices, def, when) {
    if (def === void 0) { def = undefined; }
    if (when === void 0) { when = true; }
    var model = {
        type: 'list',
        name: name,
        message: message,
        choices: choices,
        default: def,
        when: when,
    };
    return model;
};
exports.promptList = promptList;
var promptConfirm = function (name, message, def, when) {
    if (def === void 0) { def = undefined; }
    if (when === void 0) { when = true; }
    var model = {
        type: 'confirm',
        name: name,
        message: message,
        default: def,
        when: when,
    };
    return model;
};
exports.promptConfirm = promptConfirm;
//# sourceMappingURL=prompt.js.map