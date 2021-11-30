"use strict";
exports.__esModule = true;
exports.createProgram = void 0;
var ts = require("typescript");
function createProgram(fileName) {
    var program = ts.createProgram([fileName], {
        target: ts.ScriptTarget.ES5,
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.React,
        allowJs: true,
        esModuleInterop: true
    });
    program.getTypeChecker();
    return program;
}
exports.createProgram = createProgram;
