"use strict";
exports.__esModule = true;
exports.createProgram = exports.COMPILER_OPTIONS = void 0;
var ts = require("typescript");
exports.COMPILER_OPTIONS = {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
    jsx: ts.JsxEmit.React,
    allowJs: true,
    esModuleInterop: true
};
function createProgram(fileName) {
    var program = ts.createProgram([fileName], exports.COMPILER_OPTIONS);
    program.getTypeChecker();
    return program;
}
exports.createProgram = createProgram;
