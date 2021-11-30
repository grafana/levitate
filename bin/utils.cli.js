"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.getListImportsCliArgs = exports.getCompareCliArgs = exports.CliError = void 0;
var CliError = /** @class */ (function (_super) {
    __extends(CliError, _super);
    function CliError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CliError;
}(Error));
exports.CliError = CliError;
// Can be used for validating CLI arguments in a more semantic way
function getCompareCliArgs(_a) {
    var prevPackage = _a.prevPackage, currentPackage = _a.currentPackage, prevPath = _a.prevPath, currentPath = _a.currentPath;
    // Using direct paths
    if (prevPath && currentPath) {
        return {
            prevPath: prevPath,
            currentPath: currentPath
        };
        // Missing direct paths
    }
    else if (prevPath || currentPath) {
        throw new CliError("Please provide both `--current-path` and `--prev-path` when using direct paths.");
        // Using package paths (will resolve to .d.ts files)
    }
    else if (prevPackage && currentPackage) {
        return {
            prevPath: prevPackage,
            currentPath: currentPackage
        };
        // Missing package paths
    }
    else if (prevPackage || currentPackage) {
        throw new CliError("Please provide both `--current-package` and `--prev-package` when using package paths.");
        // Missing options
    }
    else {
        throw new CliError("Please check how to use this command.");
    }
}
exports.getCompareCliArgs = getCompareCliArgs;
// Can be used for validating CLI arguments in a more semantic way
function getListImportsCliArgs(_a) {
    var path = _a.path, verbose = _a.verbose, json = _a.json, filters = _a.filters;
    // Missing properties
    if (!path) {
        throw new CliError("Please check how to use this command.");
    }
    return { path: path, isVerbose: verbose, isJson: json, filters: filters };
}
exports.getListImportsCliArgs = getListImportsCliArgs;
