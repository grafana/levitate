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
exports.printImports = exports.printComparison = void 0;
var utils_log_1 = require("./utils.log");
var utils_compare_1 = require("./utils.compare");
function printComparison(_a) {
    var changes = _a.changes, additions = _a.additions, removals = _a.removals;
    (0, utils_log_1.debug)("Printing results...");
    var objToPrint = {
        isBreaking: (0, utils_compare_1.areChangesBreaking)({ changes: changes, additions: additions, removals: removals }),
        // Show name and textual "value" of added members
        additions: Object.keys(additions).map(function (name) { return ({
            name: name,
            value: additions[name].declarations[0].getText()
        }); }),
        // Only showing the names of the changed members currently
        changes: Object.keys(changes),
        // Only showing the names of the removed members currently
        removals: Object.keys(removals)
    };
    console.log("");
    console.log("===================================");
    console.log(JSON.stringify(objToPrint, null, 4));
    console.log("===================================");
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
