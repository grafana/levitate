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
exports.getGroupedImports = exports.getImportPackageName = exports.isNodeADefaultImport = exports.getNamedImportsForNode = exports.getImportsForNode = exports.getImportsForFile = exports.getImportsForProgram = exports.getImportsInfo = void 0;
var ts = require("typescript");
var utils_compiler_1 = require("./utils.compiler");
function getImportsInfo(rootFile, filters) {
    var program = (0, utils_compiler_1.createProgram)(rootFile);
    var programImports = getImportsForProgram(program, filters);
    return {
        imports: programImports,
        program: program
    };
}
exports.getImportsInfo = getImportsInfo;
function getImportsForProgram(program, filters) {
    var imports = [];
    for (var _i = 0, _a = program.getSourceFiles(); _i < _a.length; _i++) {
        var sourceFile = _a[_i];
        if (!sourceFile.isDeclarationFile) {
            imports = __spreadArray(__spreadArray([], imports, true), getImportsForFile(sourceFile, filters), true);
        }
    }
    return imports;
}
exports.getImportsForProgram = getImportsForProgram;
function getImportsForFile(sourceFile, 
// A list of package names that we would like to filter for
filters) {
    var imports = [];
    ts.forEachChild(sourceFile, function (node) { return visit(node); });
    return imports;
    // Checks if an import matches any of the provided package names
    function doesMatchFilters(packageName) {
        return filters ? filters.some(function (filter) { return packageName === filter; }) : true;
    }
    function visit(node) {
        if (ts.isImportDeclaration(node) &&
            doesMatchFilters(getImportPackageName(node))) {
            imports = __spreadArray(__spreadArray([], imports, true), getImportsForNode(node, sourceFile.fileName), true);
        }
        // This is a namespace, visit its children
        if (ts.isModuleDeclaration(node)) {
            ts.forEachChild(node, function (node) { return visit(node); });
        }
    }
}
exports.getImportsForFile = getImportsForFile;
// A single import declaration can contain both named and default imports
function getImportsForNode(node, fileName) {
    var imports = [];
    var packageName = getImportPackageName(node);
    var namedImports = getNamedImportsForNode(node);
    var isDefaultImport = isNodeADefaultImport(node);
    var importStatementAsText = node.getText();
    if (namedImports.length) {
        namedImports.forEach(function (propertyName) {
            imports.push({
                packageName: packageName,
                isNamedImport: true,
                isDefaultImport: false,
                propertyName: propertyName,
                fileName: fileName,
                importStatementAsText: importStatementAsText
            });
        });
    }
    if (isDefaultImport) {
        imports.push({
            packageName: packageName,
            isNamedImport: false,
            isDefaultImport: true,
            fileName: fileName,
            importStatementAsText: importStatementAsText
        });
    }
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
function getImportPackageName(node) {
    return node.moduleSpecifier.getText().replace(/'/g, "").replace(/"/g, "");
}
exports.getImportPackageName = getImportPackageName;
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
            groupedImports.push(__assign(__assign({}, i), { occurances: [i], count: 1 }));
        }
    }
    return groupedImports;
}
exports.getGroupedImports = getGroupedImports;
