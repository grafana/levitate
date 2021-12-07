"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPackageTask = void 0;
var tslib_1 = require("tslib");
var execa = require("execa");
var fs_1 = require("fs");
var path = (0, tslib_1.__importStar)(require("path"));
var chalk_1 = (0, tslib_1.__importDefault)(require("chalk"));
var useSpinner_1 = require("../utils/useSpinner");
var task_1 = require("./task");
var lodash_1 = require("lodash");
var globby_1 = (0, tslib_1.__importDefault)(require("globby"));
var clean = function (cwd) { return (0, useSpinner_1.useSpinner)('Cleaning', function () { return execa('npm', ['run', 'clean'], { cwd: cwd }); }); };
var compile = function (cwd) {
    return (0, useSpinner_1.useSpinner)('Compiling sources', function () { return execa('tsc', ['-p', './tsconfig.build.json'], { cwd: cwd }); });
};
var bundle = function (cwd) { return (0, useSpinner_1.useSpinner)('Bundling', function () { return execa('npm', ['run', 'bundle'], { cwd: cwd }); }); };
var preparePackage = function (packageDist, pkg) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var version, name, deps;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0:
                pkg = (0, lodash_1.cloneDeep)(pkg); // avoid mutations
                pkg.main = 'index.js';
                pkg.types = 'index.d.ts';
                version = pkg.version;
                name = pkg.name;
                deps = pkg.dependencies;
                // Below we are adding cross-dependencies to Grafana's packages
                // with the version being published
                if (name.endsWith('/ui')) {
                    deps['@grafana/data'] = version;
                }
                else if (name.endsWith('/runtime')) {
                    deps['@grafana/data'] = version;
                    deps['@grafana/ui'] = version;
                }
                else if (name.endsWith('/toolkit')) {
                    deps['@grafana/data'] = version;
                    deps['@grafana/ui'] = version;
                }
                return [4 /*yield*/, (0, useSpinner_1.useSpinner)('Updating package.json', function () {
                        return fs_1.promises.writeFile(packageDist + "/package.json", JSON.stringify(pkg, null, 2));
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var moveFiles = function (fromPath, toPath) {
    var files = ['README.md', 'CHANGELOG.md', 'index.js'];
    return (0, useSpinner_1.useSpinner)("Moving " + files.join(', ') + " files", function () {
        var promises = files.map(function (file) { return fs_1.promises.copyFile(fromPath + "/" + file, toPath + "/" + file); });
        return Promise.all(promises);
    });
};
var moveStaticFiles = function (packageRoot, pkg) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    return (0, tslib_1.__generator)(this, function (_a) {
        if (pkg.name.endsWith('/ui')) {
            return [2 /*return*/, (0, useSpinner_1.useSpinner)('Moving static files', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
                    var staticFiles, pathSearch, pathReplace, promises;
                    return (0, tslib_1.__generator)(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, (0, globby_1.default)(packageRoot + "/src/**/*.{png,svg,gif,jpg}")];
                            case 1:
                                staticFiles = _a.sent();
                                pathSearch = new RegExp("^" + packageRoot + "/src");
                                pathReplace = packageRoot + "/compiled";
                                promises = staticFiles.map(function (file) { return fs_1.promises.copyFile(file, file.replace(pathSearch, pathReplace)); });
                                return [4 /*yield*/, Promise.all(promises)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); })];
        }
        return [2 /*return*/];
    });
}); };
var buildTaskRunner = function (_a) {
    var scope = _a.scope;
    return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var scopes;
        return (0, tslib_1.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!scope) {
                        throw new Error('Provide packages with -s, --scope <packages>');
                    }
                    scopes = scope.split(',').map(function (s) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
                        var packageRoot, packageDist, pkg;
                        return (0, tslib_1.__generator)(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    packageRoot = path.resolve(__dirname, "../../../../grafana-" + s);
                                    packageDist = packageRoot + "/dist";
                                    pkg = require(packageRoot + "/package.json");
                                    console.log(chalk_1.default.yellow("Building " + pkg.name + " (package.json version: " + pkg.version + ")"));
                                    return [4 /*yield*/, clean(packageRoot)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, compile(packageRoot)];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, moveStaticFiles(packageRoot, pkg)];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, bundle(packageRoot)];
                                case 4:
                                    _a.sent();
                                    return [4 /*yield*/, preparePackage(packageDist, pkg)];
                                case 5:
                                    _a.sent();
                                    return [4 /*yield*/, moveFiles(packageRoot, packageDist)];
                                case 6:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(scopes)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
exports.buildPackageTask = new task_1.Task('Package build', buildTaskRunner);
//# sourceMappingURL=package.build.js.map