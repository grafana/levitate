"use strict";
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
exports.indentLine = exports.indentLines = exports.printExports = exports.printImports = exports.printComparison = void 0;
var colors = require("colors/safe");
var utils_log_1 = require("./utils.log");
var utils_compare_1 = require("./utils.compare");
var utils_diff_1 = require("./utils.diff");
function printComparison(_a) {
    var changes = _a.changes, additions = _a.additions, removals = _a.removals;
    (0, utils_log_1.debug)("Printing results...");
    var isBreaking = (0, utils_compare_1.areChangesBreaking)({ changes: changes, additions: additions, removals: removals });
    console.log("");
    console.log(colors.green(colors.bold(" ADDITIONS (".concat(Object.keys(additions).length, ")"))));
    console.log(" Exports that were introduced in the current version.");
    console.log("======================================================================");
    Object.keys(additions).forEach(function (name) {
        console.log("\t ".concat(colors.bold(name), " ").concat(colors.gray("(".concat(additions[name].declarations[0].getSourceFile().fileName, ")"))));
        console.log(colors.grey(indentLines(colors.bold(additions[name].declarations[0].getText()), 1)));
        console.log("");
    });
    console.log("");
    console.log("");
    console.log(colors.green(colors.bold(" REMOVALS (".concat(Object.keys(removals).length, ")"))));
    console.log(" Exports that were removed in the current version.");
    console.log("======================================================================");
    if (!Object.keys(removals).length) {
        console.log("No removals.");
    }
    Object.keys(removals).forEach(function (name) {
        console.log("\t ".concat(colors.bold(name), " ").concat(colors.gray("(".concat(removals[name].declarations[0].getSourceFile().fileName, ")"))));
        console.log(colors.grey("\t ".concat(removals[name].declarations[0].getText())));
        console.log("");
    });
    console.log("");
    console.log("");
    console.log(colors.green(colors.bold(" CHANGES (".concat(Object.keys(changes).length, ")"))));
    console.log(" Exports that have changed compared to the previous version.");
    console.log("======================================================================");
    if (!Object.keys(changes).length) {
        console.log("No changes.");
    }
    Object.keys(changes).forEach(function (name) {
        var prevDeclaration = changes[name].prev.declarations[0].getText();
        var currentDeclaration = changes[name].current.declarations[0].getText();
        console.log("\t ".concat(colors.bold(name)));
        console.log("\t ".concat(colors.gray(changes[name].current.declarations[0].getSourceFile().fileName)));
        console.log("");
        if (prevDeclaration === currentDeclaration) {
            console.log("\t\t No changes!");
        }
        else {
            console.log(indentLines((0, utils_diff_1.getDiff)(prevDeclaration, currentDeclaration), 2));
        }
        console.log("");
    });
    if (isBreaking) {
        console.log("");
        console.log(colors.bgRed(colors.bold(colors.white(" FAIL "))) +
            " " +
            colors.bold(colors.red("There were possible breaking changes, please check the differences.\n\n")));
    }
    else {
        console.log(colors.bold(colors.green("All is good!\n\n")));
    }
}
exports.printComparison = printComparison;
function printImports(_a) {
    var imports = _a.imports, _b = _a.isVerbose, isVerbose = _b === void 0 ? false : _b, _c = _a.isJson, isJson = _c === void 0 ? false : _c;
    if (isJson) {
        console.log(JSON.stringify(imports, null, 4));
    }
    else {
        // Group the imports by packages
        var importsByPackageName_1 = {};
        imports.forEach(function (i) {
            if (importsByPackageName_1[i.packageName]) {
                importsByPackageName_1[i.packageName] = __spreadArray(__spreadArray([], importsByPackageName_1[i.packageName], true), [
                    i,
                ], false);
            }
            else {
                importsByPackageName_1[i.packageName] = [i];
            }
        });
        // Loop through all the packages
        Object.keys(importsByPackageName_1).forEach(function (packageName) {
            console.log("");
            console.log(colors.bold(packageName) +
                " " +
                colors.gray("(".concat(importsByPackageName_1[packageName].length, " imports)")));
            console.log("===============================");
            // Loop through all the imports from a certain package
            importsByPackageName_1[packageName]
                .sort(function (a, b) { return b.count - a.count; })
                .forEach(function (i) {
                var name = i.isDefaultImport ? "default" : i.propertyName;
                console.log("\t ".concat(colors.green(colors.bold(name)), " ").concat(colors.gray("(".concat(i.count, " occurances)"))));
                if (isVerbose) {
                    i.occurances.forEach(function (ii) {
                        console.log("\t\t ".concat(colors.bold(colors.gray("Filename")), ": ").concat(colors.gray(ii.fileName)));
                        console.log("\t\t ".concat(colors.gray(colors.bold("Import statement")), ": ").concat(colors.gray(ii.importStatementAsText)));
                        console.log("");
                    });
                }
            });
        });
    }
}
exports.printImports = printImports;
function printExports(exports) {
    (0, utils_log_1.debug)("Printing results...");
    console.log("");
    console.log("List of exported members:");
    console.log("===================================");
    console.log(Object.keys(exports.exports).forEach(function (name) { return console.log("\t - ".concat(name)); }));
    console.log("===================================");
}
exports.printExports = printExports;
function indentLines(str, tabsCount) {
    return str
        .split("\n")
        .reduce(function (acc, line) { return "".concat(acc).concat(indentLine(line, tabsCount), "\n"); }, "");
}
exports.indentLines = indentLines;
function indentLine(str, count) {
    var tabs = "";
    for (var i = 0; i < count; i++) {
        tabs += "\t";
    }
    return "".concat(tabs).concat(str);
}
exports.indentLine = indentLine;
