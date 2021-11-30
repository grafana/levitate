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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.createProgram = exports.getGroupedImports = exports.getPackageName = exports.isNodeADefaultImport = exports.getNamedImportsForNode = exports.getImportsForNode = exports.getImportsForFile = exports.getImportsForProgram = exports.getImportsInfo = exports.getExportedSymbolsForFile = exports.getExportedSymbolsForProgram = exports.getExportInfo = void 0;
var process_1 = require("process");
var ts = require("typescript");
// Returns all the exported members of a program identified by a root file (entry file)
function getExportInfo(rootFile) {
    var program = createProgram(rootFile);
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
function getImportsInfo(rootFile) {
    //   const program = createProgram(rootFile);
    var program = ts.createProgram([rootFile], {
        target: ts.ScriptTarget.ES5,
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.React,
        allowJs: true,
        esModuleInterop: true
    });
    var programImports = getImportsForProgram(program);
    return {
        imports: programImports,
        program: program
    };
}
exports.getImportsInfo = getImportsInfo;
function getImportsForProgram(program) {
    //   let imports = [];
    //   for (const sourceFile of program.getSourceFiles()) {
    //     if (!sourceFile.isDeclarationFile) {
    //       const fileImports = getImportsForFile(sourceFile);
    //       imports = [...imports];
    //     }
    //   }
    //   return imports;
    console.log("SOURCE FILES: ", program.getSourceFiles().length);
    var _loop_1 = function (sourceFile) {
        if (!sourceFile.isDeclarationFile) {
            // Walk the tree to search for classes
            //   console.log("SOURCE FILE: ", sourceFile.fileName);
            ts.forEachChild(sourceFile, function (node) { return visit(node, sourceFile.fileName); });
        }
    };
    for (var _i = 0, _a = program.getSourceFiles(); _i < _a.length; _i++) {
        var sourceFile = _a[_i];
        _loop_1(sourceFile);
    }
    function visit(node, fileName) {
        console.log(node);
        (0, process_1.exit)(1);
    }
    return [];
}
exports.getImportsForProgram = getImportsForProgram;
function getImportsForFile(sourceFile, 
// A list of package names that we would like to filter for
filters) {
    var imports = [];
    ts.forEachChild(sourceFile, visit);
    // Checks if an import matches any of the provided package names
    function doesMatchFilters(packageName) {
        return filters ? filters.some(function (filter) { return packageName === filter; }) : true;
    }
    function visit(node) {
        console.log(node.getText());
        if (ts.isImportDeclaration(node)
        //   && doesMatchFilters(getPackageName(node))
        ) {
            //   const a = getImportsForNode(node, sourceFile.fileName);
            imports = __spreadArray([], imports, true); //, ...getImportsForNode(node, sourceFile.fileName)];
            // This is a namespace, visit its children
        }
        else if (ts.isModuleDeclaration(node)) {
            ts.forEachChild(node, visit);
        }
    }
    return imports;
}
exports.getImportsForFile = getImportsForFile;
// A single import declaration can contain both named and default imports
function getImportsForNode(node, fileName) {
    var imports = [];
    console.log("");
    console.log("--------------------------");
    console.log(node.getText());
    console.log("");
    // const packageName = getPackageName(node);
    //   const namedImports = getNamedImportsForNode(node);
    //   const isDefaultImport = isNodeADefaultImport(node);
    //   const importStatementAsText = node.getText();
    //   if (namedImports.length) {
    //     namedImports.forEach((propertyName) => {
    //       imports.push({
    //         packageName,
    //         isNamedImport: true,
    //         isDefaultImport: false,
    //         propertyName,
    //         fileName,
    //         importStatementAsText,
    //       });
    //     });
    //   }
    //   if (isDefaultImport) {
    //     imports.push({
    //       packageName,
    //       isNamedImport: false,
    //       isDefaultImport: true,
    //       fileName,
    //       importStatementAsText,
    //     });
    //   }
    return imports;
}
exports.getImportsForNode = getImportsForNode;
function getNamedImportsForNode(node) {
    var namedBindings = node.importClause.namedBindings;
    if (namedBindings && namedBindings.elements) {
        return namedBindings.elements.map(function (e) { return e.getText(); });
    }
    return [];
}
exports.getNamedImportsForNode = getNamedImportsForNode;
function isNodeADefaultImport(node) {
    return Boolean(node.importClause.name);
}
exports.isNodeADefaultImport = isNodeADefaultImport;
function getPackageName(node) {
    return node.moduleSpecifier.getText().replace(/'/g, "").replace(/"/g, "");
}
exports.getPackageName = getPackageName;
// Returns a grouped list of imports
// (The list will only include each named import from a package once, but will also contain the occurances)
function getGroupedImports(imports) {
    var groupedImports = [];
    var getGroupedImport = function (i) {
        return groupedImports.find(function (gi) {
            if (i.isDefaultImport) {
                return gi.isDefaultImport === true && gi.packageName === i.packageName;
            }
            return (gi.propertyName === i.propertyName && gi.packageName === i.packageName);
        });
    };
    // Looping through all the imports
    for (var _i = 0, imports_1 = imports; _i < imports_1.length; _i++) {
        var i = imports_1[_i];
        var groupedImport = getGroupedImport(i);
        // Increment count and add occurance
        if (groupedImport) {
            groupedImport.count += 1;
            groupedImport.occurances = __spreadArray(__spreadArray([], groupedImport.occurances, true), [i], false);
            // Register the import to the grouped list
        }
        else {
            groupedImports.push(__assign(__assign({}, i), { occurances: [], count: 1 }));
        }
    }
    return groupedImports;
}
exports.getGroupedImports = getGroupedImports;
function createProgram(fileName) {
    return ts.createProgram([fileName], {
        target: ts.ScriptTarget.ES5,
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.React,
        allowJs: true,
        esModuleInterop: true
    });
}
exports.createProgram = createProgram;
