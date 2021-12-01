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
exports.printExports = exports.printImports = exports.printComparison = void 0;
var colors = require("colors/safe");
var printDiff = require("print-diff");
var utils_log_1 = require("./utils.log");
var utils_compare_1 = require("./utils.compare");
function printComparison(_a) {
    var changes = _a.changes, additions = _a.additions, removals = _a.removals;
    (0, utils_log_1.debug)("Printing results...");
    var isBreaking = (0, utils_compare_1.areChangesBreaking)({ changes: changes, additions: additions, removals: removals });
    if (isBreaking) {
        console.log(colors.red("Breaking changes!\n\n"));
    }
    else {
        console.log(colors.bold("All is good.\n\n"));
    }
    console.log("ADDITIONS");
    console.log("===================================");
    Object.keys(additions).forEach(function (name) {
        console.log("\t ".concat(name));
        console.log(colors.grey("\t ".concat(additions[name].declarations[0].getText())));
        console.log("");
    });
    console.log("");
    console.log("");
    console.log("REMOVALS");
    console.log("===================================");
    if (!Object.keys(removals).length) {
        console.log("No removals.");
    }
    Object.keys(removals).forEach(function (name) {
        console.log("\t ".concat(name));
        console.log(colors.grey("\t ".concat(removals[name].declarations[0].getText())));
        console.log("");
    });
    console.log("");
    console.log("");
    console.log("CHANGES");
    console.log("===================================");
    Object.keys(changes).forEach(function (name) {
        var prevDeclaration = changes[name].prev.declarations[0].getText();
        var currentDeclaration = changes[name].current.declarations[0].getText();
        console.log("\t ".concat(name));
        console.log("");
        if (prevDeclaration === currentDeclaration) {
            console.log("\t\t No changes!");
        }
        else {
            printDiff(currentDeclaration, prevDeclaration);
        }
        console.log("");
    });
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
            console.log(packageName);
            console.log("===============================");
            // Loop through all the imports from a certain package
            importsByPackageName_1[packageName].forEach(function (i) {
                var name = i.isDefaultImport ? "default" : i.propertyName;
                console.log("\t ".concat(name, " (").concat(i.count, " occurances)"));
                if (isVerbose) {
                    i.occurances.forEach(function (ii) {
                        console.log("\t\t Filename: ".concat(ii.fileName));
                        console.log("\t\t Import statement: ".concat(ii.importStatementAsText));
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
