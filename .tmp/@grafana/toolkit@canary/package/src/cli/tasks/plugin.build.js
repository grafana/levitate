"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginBuildTask = exports.pluginBuildRunner = exports.lintPlugin = exports.versions = exports.prepare = void 0;
var tslib_1 = require("tslib");
var useSpinner_1 = require("../utils/useSpinner");
var tests_1 = require("./plugin/tests");
var task_1 = require("./task");
var rimraf_1 = (0, tslib_1.__importDefault)(require("rimraf"));
var path_1 = require("path");
var util_1 = require("util");
var globby_1 = (0, tslib_1.__importDefault)(require("globby"));
var execa_1 = (0, tslib_1.__importDefault)(require("execa"));
var fs_1 = require("fs");
var eslint_1 = require("eslint");
var bundle_1 = require("./plugin/bundle");
var access = fs_1.promises.access, copyFile = fs_1.promises.copyFile;
var COPYFILE_EXCL = fs_1.constants.COPYFILE_EXCL;
var rimraf = (0, util_1.promisify)(rimraf_1.default);
var bundlePlugin = function (options) { return (0, useSpinner_1.useSpinner)('Compiling...', function () { return (0, bundle_1.bundlePlugin)(options); }); };
// @ts-ignore
var clean = function () { return (0, useSpinner_1.useSpinner)('Cleaning', function () { return rimraf(process.cwd() + "/dist"); }); };
var copyIfNonExistent = function (srcPath, destPath) {
    return copyFile(srcPath, destPath, COPYFILE_EXCL)
        .then(function () { return console.log("Created: " + destPath); })
        .catch(function (error) {
        if (error.code !== 'EEXIST') {
            throw error;
        }
    });
};
var prepare = function () {
    return (0, useSpinner_1.useSpinner)('Preparing', function () {
        return Promise.all([
            // Remove local dependencies for @grafana/data/node_modules
            // See: https://github.com/grafana/grafana/issues/26748
            rimraf((0, path_1.resolve)(__dirname, 'node_modules/@grafana/data/node_modules')),
            // Copy only if local tsconfig does not exist.  Otherwise this will work, but have odd behavior
            copyIfNonExistent((0, path_1.resolve)(__dirname, '../../config/tsconfig.plugin.local.json'), (0, path_1.resolve)(process.cwd(), 'tsconfig.json')),
            // Copy only if local prettierrc does not exist.  Otherwise this will work, but have odd behavior
            copyIfNonExistent((0, path_1.resolve)(__dirname, '../../config/prettier.plugin.rc.js'), (0, path_1.resolve)(process.cwd(), '.prettierrc.js')),
        ]);
    });
};
exports.prepare = prepare;
var versions = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var nodeVersion, toolkitVersion, err_1;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, (0, execa_1.default)('node', ['--version'])];
            case 1:
                nodeVersion = _a.sent();
                console.log("Using Node.js " + nodeVersion.stdout);
                return [4 /*yield*/, (0, execa_1.default)('grafana-toolkit', ['--version'])];
            case 2:
                toolkitVersion = _a.sent();
                console.log("Using @grafana/toolkit " + toolkitVersion.stdout);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.log("Error reading versions", err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.versions = versions;
// @ts-ignore
var typecheckPlugin = function () { return (0, useSpinner_1.useSpinner)('Typechecking', function () { return (0, execa_1.default)('tsc', ['--noEmit']); }); };
var getTypescriptSources = function () { return (0, globby_1.default)((0, path_1.resolve)(process.cwd(), 'src/**/*.+(ts|tsx)')); };
// @ts-ignore
var getStylesSources = function () { return (0, globby_1.default)((0, path_1.resolve)(process.cwd(), 'src/**/*.+(scss|css)')); };
var lintPlugin = function (_a) {
    var _b = _a === void 0 ? {} : _a, fix = _b.fix;
    return (0, useSpinner_1.useSpinner)('Linting', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var _a, configFile, cli, report, _b, _c, errorCount, results, warningCount, formatter;
        return (0, tslib_1.__generator)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 3]);
                    // Show a warning if the tslint file exists
                    return [4 /*yield*/, access((0, path_1.resolve)(process.cwd(), 'tslint.json'))];
                case 1:
                    // Show a warning if the tslint file exists
                    _d.sent();
                    console.log('\n');
                    console.log('--------------------------------------------------------------');
                    console.log('NOTE: @grafana/toolkit has migrated to use eslint');
                    console.log('Update your configs to use .eslintrc rather than tslint.json');
                    console.log('--------------------------------------------------------------');
                    return [3 /*break*/, 3];
                case 2:
                    _a = _d.sent();
                    return [3 /*break*/, 3];
                case 3: return [4 /*yield*/, (0, globby_1.default)((0, path_1.resolve)(process.cwd(), '.eslintrc?(.cjs|.js|.json|.yaml|.yml)')).then(function (filePaths) {
                        if (filePaths.length > 0) {
                            return filePaths[0];
                        }
                        else {
                            return (0, path_1.resolve)(__dirname, '../../config/eslint.plugin.js');
                        }
                    })];
                case 4:
                    configFile = _d.sent();
                    cli = new eslint_1.CLIEngine({
                        configFile: configFile,
                        fix: fix,
                        useEslintrc: false,
                    });
                    _c = (_b = cli).executeOnFiles;
                    return [4 /*yield*/, getTypescriptSources()];
                case 5:
                    report = _c.apply(_b, [_d.sent()]);
                    if (fix) {
                        eslint_1.CLIEngine.outputFixes(report);
                    }
                    errorCount = report.errorCount, results = report.results, warningCount = report.warningCount;
                    formatter = cli.getFormatter();
                    if (errorCount > 0 || warningCount > 0) {
                        console.log('\n');
                        console.log(formatter(results));
                        console.log('\n');
                    }
                    if (errorCount > 0) {
                        throw new Error(errorCount + " linting errors found in " + results.length + " files");
                    }
                    return [2 /*return*/];
            }
        });
    }); });
};
exports.lintPlugin = lintPlugin;
var pluginBuildRunner = function (_a) {
    var coverage = _a.coverage, maxJestWorkers = _a.maxJestWorkers, preserveConsole = _a.preserveConsole, skipTest = _a.skipTest, skipLint = _a.skipLint;
    return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.versions)()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, (0, exports.prepare)()];
                case 2:
                    _b.sent();
                    if (!!skipLint) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, exports.lintPlugin)({ fix: false })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    if (!!skipTest) return [3 /*break*/, 6];
                    return [4 /*yield*/, (0, tests_1.testPlugin)({ updateSnapshot: false, coverage: coverage, maxWorkers: maxJestWorkers, watch: false })];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6: return [4 /*yield*/, bundlePlugin({ watch: false, production: true, preserveConsole: preserveConsole })];
                case 7:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
exports.pluginBuildRunner = pluginBuildRunner;
exports.pluginBuildTask = new task_1.Task('Build plugin', exports.pluginBuildRunner);
//# sourceMappingURL=plugin.build.js.map