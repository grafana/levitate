"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.getExportedSymbolsForFile = exports.getExportedSymbolsForProgram = exports.getExportInfo = void 0;
var utils_compiler_1 = require("./utils.compiler");
// Returns all the exported members of a program identified by a root file (entry file)
function getExportInfo(rootFile) {
    var program = (0, utils_compiler_1.createProgram)(rootFile);
    var programExports = getExportedSymbolsForProgram(program);
    return {
        exports: programExports,
        program: program
    };
}
exports.getExportInfo = getExportInfo;
function getExportedSymbolsForProgram(program) {
    var programExports = {};
    for (var _i = 0, _a = program.getSourceFiles(); _i < _a.length; _i++) {
        var sourceFile = _a[_i];
        var fileExports = getExportedSymbolsForFile(sourceFile, program);
        programExports = __assign(__assign({}, programExports), fileExports);
    }
    return programExports;
}
exports.getExportedSymbolsForProgram = getExportedSymbolsForProgram;
function getExportedSymbolsForFile(sourceFile, program) {
    var fileExports = {};
    var fileSymbol = program.getTypeChecker().getSymbolAtLocation(sourceFile);
    if (fileSymbol === null || fileSymbol === void 0 ? void 0 : fileSymbol.exports) {
        fileSymbol.exports.forEach(function (exportValue, exportName) {
            if (exportName && exportName !== "__export") {
                fileExports[exportName] = exportValue;
            }
        });
    }
    return fileExports;
}
exports.getExportedSymbolsForFile = getExportedSymbolsForFile;
