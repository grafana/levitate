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
exports.resolveModuleName = exports.getExportPackageName = exports.getExportedSymbolsForFile = exports.getExportsForFile = exports.getExportedSymbolsForProgram = exports.getExportInfo = void 0;
var path = require("path");
var fs = require("fs");
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
    var rootFileNames = program.getRootFileNames();
    var programExports = {};
    for (var _i = 0, _a = program.getSourceFiles(); _i < _a.length; _i++) {
        var sourceFile = _a[_i];
        if (!rootFileNames.includes(sourceFile.fileName)) {
            continue;
        }
        var fileExports = getExportedSymbolsForFile(sourceFile, program);
        programExports = __assign(__assign({}, programExports), fileExports);
    }
    return programExports;
}
exports.getExportedSymbolsForProgram = getExportedSymbolsForProgram;
function getExportsForFile(fileName, program) {
    var sourceFile = program.getSourceFile(fileName);
    if (!sourceFile) {
        return;
    }
}
exports.getExportsForFile = getExportsForFile;
function getExportedSymbolsForFile(sourceFile, program) {
    var fileExports = {};
    var fileSymbol = program.getTypeChecker().getSymbolAtLocation(sourceFile);
    // Loop through exports
    if (fileSymbol === null || fileSymbol === void 0 ? void 0 : fileSymbol.exports) {
        fileSymbol.exports.forEach(function (exportValue, exportName) {
            // Get wildcard (`export * from`) exports
            if (exportName === "__export") {
                // Loop through all the wildcard exports
                exportValue.declarations.forEach(function (declaration) {
                    var exportDeclaration = declaration;
                    var moduleName = getExportPackageName(exportDeclaration);
                    var resolvedModuleName = resolveModuleName(moduleName, sourceFile);
                    var resolvedSourceFile = program.getSourceFile(resolvedModuleName);
                    // Find exported members recursively
                    if (resolvedSourceFile) {
                        var resolvedExports_1 = getExportedSymbolsForFile(resolvedSourceFile, program);
                        // TODO: check if it can be an issue that we can possibly override already existing exports
                        Object.keys(resolvedExports_1).forEach(function (resolvedExportName) {
                            fileExports[resolvedExportName] =
                                resolvedExports_1[resolvedExportName];
                        });
                    }
                });
            }
            // Get mamed and default exports
            else if (exportName) {
                fileExports[exportName] = exportValue;
            }
        });
    }
    return fileExports;
}
exports.getExportedSymbolsForFile = getExportedSymbolsForFile;
function getExportPackageName(node) {
    return node.moduleSpecifier.getText().replace(/'/g, "").replace(/"/g, "");
}
exports.getExportPackageName = getExportPackageName;
// TODO: there must be an easier way to do this using the compiler
function resolveModuleName(moduleName, sourceFile) {
    var resolvedPath = path.join(path.dirname(sourceFile.fileName), moduleName);
    var extension = path.extname(resolvedPath);
    // It already has an extension, let's use that
    if (extension) {
        return resolvedPath;
    }
    // Suspect it is a type definition file
    if (fs.existsSync("".concat(resolvedPath, ".d.ts"))) {
        return "".concat(resolvedPath, ".d.ts");
    }
    // Suspect it is pointing to an index.d.ts file
    if (fs.existsSync(path.join(resolvedPath, "index.d.ts"))) {
        return path.join(resolvedPath, "index.d.ts");
    }
    return undefined;
}
exports.resolveModuleName = resolveModuleName;
