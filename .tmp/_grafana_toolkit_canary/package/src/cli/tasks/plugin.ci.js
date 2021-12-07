"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ciPluginReportTask = exports.ciPackagePluginTask = exports.ciBuildPluginTask = void 0;
var tslib_1 = require("tslib");
var task_1 = require("./task");
var plugin_build_1 = require("./plugin.build");
var pluginValidation_1 = require("../../config/utils/pluginValidation");
var getPluginId_1 = require("../../config/utils/getPluginId");
var execa = require("execa");
var path = require("path");
var fs_extra_1 = (0, tslib_1.__importDefault)(require("fs-extra"));
var utils_1 = require("../../plugins/utils");
var manifest_1 = require("../../plugins/manifest");
var env_1 = require("../../plugins/env");
var workflow_1 = require("../../plugins/workflow");
var rimraf_1 = (0, tslib_1.__importDefault)(require("rimraf"));
var util_1 = require("util");
var rimraf = (0, util_1.promisify)(rimraf_1.default);
/**
 * 1. BUILD
 *
 *  when platform exists it is building backend, otherwise frontend
 *
 *  Each build writes data:
 *   ~/ci/jobs/build_xxx/
 *
 *  Anything that should be put into the final zip file should be put in:
 *   ~/ci/jobs/build_xxx/dist
 *
 * @deprecated -- this task was written with a specific circle-ci build in mind.  That system
 * has been replaced with Drone, and this is no longer the best practice.  Any new work
 * should be defined in the grafana build pipeline tool or drone configs directly.
 */
var buildPluginRunner = function (_a) {
    var finish = _a.finish, maxJestWorkers = _a.maxJestWorkers;
    return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var start, workDir, _b, _c, name_1, dir;
        var e_1, _d;
        return (0, tslib_1.__generator)(this, function (_e) {
            switch (_e.label) {
                case 0:
                    start = Date.now();
                    if (!finish) return [3 /*break*/, 2];
                    workDir = (0, env_1.getJobFolder)();
                    return [4 /*yield*/, rimraf(workDir)];
                case 1:
                    _e.sent();
                    fs_extra_1.default.mkdirSync(workDir);
                    try {
                        // Move local folders to the scoped job folder
                        for (_b = (0, tslib_1.__values)(['dist', 'coverage']), _c = _b.next(); !_c.done; _c = _b.next()) {
                            name_1 = _c.value;
                            dir = path.resolve(process.cwd(), name_1);
                            if (fs_extra_1.default.existsSync(dir)) {
                                fs_extra_1.default.moveSync(dir, path.resolve(workDir, name_1));
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    (0, env_1.writeJobStats)(start, workDir);
                    return [3 /*break*/, 4];
                case 2: 
                // Do regular build process with coverage
                return [4 /*yield*/, (0, plugin_build_1.pluginBuildRunner)({ coverage: true, maxJestWorkers: maxJestWorkers })];
                case 3:
                    // Do regular build process with coverage
                    _e.sent();
                    _e.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.ciBuildPluginTask = new task_1.Task('Build Plugin', buildPluginRunner);
/**
 * 2. Package
 *
 *  Take everything from `~/ci/job/{any}/dist` and
 *  1. merge it into: `~/ci/dist`
 *  2. zip it into packages in `~/ci/packages`
 *  3. prepare grafana environment in: `~/ci/grafana-test-env`
 *
 *
 * @deprecated -- this task was written with a specific circle-ci build in mind.  That system
 * has been replaced with Drone, and this is no longer the best practice.  Any new work
 * should be defined in the grafana build pipeline tool or drone configs directly.
 */
var packagePluginRunner = function (_a) {
    var signatureType = _a.signatureType, rootUrls = _a.rootUrls;
    return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var start, ciDir, packagesDir, distDir, docsDir, jobsDir, grafanaEnvDir, distContentDir, d, dirs, dirs_1, dirs_1_1, j, contents, er_1, e_2_1, pluginJsonFile, pluginInfo, _b, manifest, signedManifest, err_1, zipName, zipFile, zipStats, info, p, _c, customIniBody;
        var e_2, _d, _e;
        return (0, tslib_1.__generator)(this, function (_f) {
            switch (_f.label) {
                case 0:
                    start = Date.now();
                    ciDir = (0, env_1.getCiFolder)();
                    packagesDir = path.resolve(ciDir, 'packages');
                    distDir = path.resolve(ciDir, 'dist');
                    docsDir = path.resolve(ciDir, 'docs');
                    jobsDir = path.resolve(ciDir, 'jobs');
                    fs_extra_1.default.exists(jobsDir, function (jobsDirExists) {
                        if (!jobsDirExists) {
                            throw new Error('You must run plugin:ci-build prior to running plugin:ci-package');
                        }
                    });
                    grafanaEnvDir = path.resolve(ciDir, 'grafana-test-env');
                    return [4 /*yield*/, execa('rimraf', [packagesDir, distDir, grafanaEnvDir])];
                case 1:
                    _f.sent();
                    fs_extra_1.default.mkdirSync(packagesDir);
                    fs_extra_1.default.mkdirSync(distDir);
                    distContentDir = path.resolve(distDir, (0, getPluginId_1.getPluginId)());
                    fs_extra_1.default.mkdirSync(grafanaEnvDir);
                    console.log('Build Dist Folder');
                    d = path.resolve(process.cwd(), 'dist');
                    if (!fs_extra_1.default.existsSync(d)) return [3 /*break*/, 3];
                    return [4 /*yield*/, execa('cp', ['-rn', d + '/.', distContentDir])];
                case 2:
                    _f.sent();
                    _f.label = 3;
                case 3:
                    dirs = fs_extra_1.default.readdirSync(path.resolve(ciDir, 'jobs'));
                    _f.label = 4;
                case 4:
                    _f.trys.push([4, 11, 12, 13]);
                    dirs_1 = (0, tslib_1.__values)(dirs), dirs_1_1 = dirs_1.next();
                    _f.label = 5;
                case 5:
                    if (!!dirs_1_1.done) return [3 /*break*/, 10];
                    j = dirs_1_1.value;
                    contents = path.resolve(ciDir, 'jobs', j, 'dist');
                    if (!fs_extra_1.default.existsSync(contents)) return [3 /*break*/, 9];
                    _f.label = 6;
                case 6:
                    _f.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, execa('cp', ['-rn', contents + '/.', distContentDir])];
                case 7:
                    _f.sent();
                    return [3 /*break*/, 9];
                case 8:
                    er_1 = _f.sent();
                    throw new Error('Duplicate files found in dist folders');
                case 9:
                    dirs_1_1 = dirs_1.next();
                    return [3 /*break*/, 5];
                case 10: return [3 /*break*/, 13];
                case 11:
                    e_2_1 = _f.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 13];
                case 12:
                    try {
                        if (dirs_1_1 && !dirs_1_1.done && (_d = dirs_1.return)) _d.call(dirs_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 13:
                    console.log('Save the source info in plugin.json');
                    pluginJsonFile = path.resolve(distContentDir, 'plugin.json');
                    pluginInfo = (0, pluginValidation_1.getPluginJson)(pluginJsonFile);
                    _b = pluginInfo.info;
                    return [4 /*yield*/, (0, env_1.getPluginBuildInfo)()];
                case 14:
                    _b.build = _f.sent();
                    fs_extra_1.default.writeFileSync(pluginJsonFile, JSON.stringify(pluginInfo, null, 2), { encoding: 'utf-8' });
                    _f.label = 15;
                case 15:
                    _f.trys.push([15, 19, , 20]);
                    return [4 /*yield*/, (0, manifest_1.buildManifest)(distContentDir)];
                case 16:
                    manifest = _f.sent();
                    if (signatureType) {
                        manifest.signatureType = signatureType;
                    }
                    if (rootUrls) {
                        manifest.rootUrls = rootUrls;
                    }
                    return [4 /*yield*/, (0, manifest_1.signManifest)(manifest)];
                case 17:
                    signedManifest = _f.sent();
                    return [4 /*yield*/, (0, manifest_1.saveManifest)(distContentDir, signedManifest)];
                case 18:
                    _f.sent();
                    return [3 /*break*/, 20];
                case 19:
                    err_1 = _f.sent();
                    console.warn("Error signing manifest: " + distContentDir, err_1);
                    return [3 /*break*/, 20];
                case 20:
                    console.log('Building ZIP');
                    zipName = pluginInfo.id + '-' + pluginInfo.info.version + '.zip';
                    zipFile = path.resolve(packagesDir, zipName);
                    return [4 /*yield*/, execa('zip', ['-r', zipFile, '.'], { cwd: distDir })];
                case 21:
                    _f.sent();
                    zipStats = fs_extra_1.default.statSync(zipFile);
                    if (zipStats.size < 100) {
                        throw new Error('Invalid zip file: ' + zipFile);
                    }
                    // Make a copy so it is easy for report to read
                    return [4 /*yield*/, execa('cp', [pluginJsonFile, distDir])];
                case 22:
                    // Make a copy so it is easy for report to read
                    _f.sent();
                    _e = {};
                    return [4 /*yield*/, (0, utils_1.getPackageDetails)(zipFile, distDir)];
                case 23:
                    info = (_e.plugin = _f.sent(),
                        _e);
                    console.log('Setup Grafana Environment');
                    p = path.resolve(grafanaEnvDir, 'plugins', pluginInfo.id);
                    fs_extra_1.default.mkdirSync(p, { recursive: true });
                    return [4 /*yield*/, execa('unzip', [zipFile, '-d', p])];
                case 24:
                    _f.sent();
                    if (!fs_extra_1.default.existsSync(docsDir)) return [3 /*break*/, 27];
                    console.log('Creating documentation zip');
                    zipName = pluginInfo.id + '-' + pluginInfo.info.version + '-docs.zip';
                    zipFile = path.resolve(packagesDir, zipName);
                    return [4 /*yield*/, execa('zip', ['-r', zipFile, '.'], { cwd: docsDir })];
                case 25:
                    _f.sent();
                    _c = info;
                    return [4 /*yield*/, (0, utils_1.getPackageDetails)(zipFile, docsDir)];
                case 26:
                    _c.docs = _f.sent();
                    _f.label = 27;
                case 27:
                    p = path.resolve(packagesDir, 'info.json');
                    fs_extra_1.default.writeFileSync(p, JSON.stringify(info, null, 2), { encoding: 'utf-8' });
                    // Write the custom settings
                    p = path.resolve(grafanaEnvDir, 'custom.ini');
                    customIniBody = "# Autogenerated by @grafana/toolkit \n" +
                        "[paths] \n" +
                        ("plugins = " + path.resolve(grafanaEnvDir, 'plugins') + "\n") +
                        "\n";
                    fs_extra_1.default.writeFileSync(p, customIniBody, { encoding: 'utf-8' });
                    (0, env_1.writeJobStats)(start, (0, env_1.getJobFolder)());
                    return [2 /*return*/];
            }
        });
    });
};
exports.ciPackagePluginTask = new task_1.Task('Bundle Plugin', packagePluginRunner);
/**
 * 4. Report
 *
 *  Create a report from all the previous steps
 *
 * @deprecated -- this task was written with a specific circle-ci build in mind.  That system
 * has been replaced with Drone, and this is no longer the best practice.  Any new work
 * should be defined in the grafana build pipeline tool or drone configs directly.
 */
var pluginReportRunner = function (_a) {
    var upload = _a.upload;
    return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var ciDir, packageDir, packageInfo, pluginJsonFile, pluginMeta, report, pr, file, GRAFANA_API_KEY, url, axios, info;
        var _b;
        return (0, tslib_1.__generator)(this, function (_c) {
            switch (_c.label) {
                case 0:
                    ciDir = path.resolve(process.cwd(), 'ci');
                    packageDir = path.resolve(ciDir, 'packages');
                    packageInfo = require(path.resolve(packageDir, 'info.json'));
                    pluginJsonFile = path.resolve(ciDir, 'dist', 'plugin.json');
                    console.log('Load info from: ' + pluginJsonFile);
                    pluginMeta = (0, pluginValidation_1.getPluginJson)(pluginJsonFile);
                    _b = {
                        plugin: pluginMeta,
                        packages: packageInfo,
                        workflow: (0, workflow_1.agregateWorkflowInfo)(),
                        coverage: (0, workflow_1.agregateCoverageInfo)(),
                        tests: (0, workflow_1.agregateTestInfo)()
                    };
                    return [4 /*yield*/, (0, env_1.getCircleDownloadBaseURL)()];
                case 1:
                    _b.artifactsBaseURL = _c.sent(),
                        _b.grafanaVersion = (0, utils_1.getGrafanaVersions)();
                    return [4 /*yield*/, (0, utils_1.readGitLog)()];
                case 2:
                    report = (_b.git = _c.sent(),
                        _b);
                    pr = (0, env_1.getPullRequestNumber)();
                    if (pr) {
                        report.pullRequest = pr;
                    }
                    file = path.resolve(ciDir, 'report.json');
                    fs_extra_1.default.writeFileSync(file, JSON.stringify(report, null, 2), { encoding: 'utf-8' });
                    GRAFANA_API_KEY = process.env.GRAFANA_API_KEY;
                    if (!GRAFANA_API_KEY) {
                        console.log('Enter a GRAFANA_API_KEY to upload the plugin report');
                        return [2 /*return*/];
                    }
                    url = "https://grafana.com/api/plugins/" + report.plugin.id + "/ci";
                    console.log('Sending report to:', url);
                    axios = require('axios');
                    return [4 /*yield*/, axios.post(url, report, {
                            headers: { Authorization: 'Bearer ' + GRAFANA_API_KEY },
                        })];
                case 3:
                    info = _c.sent();
                    if (info.status === 200) {
                        console.log('OK: ', info.data);
                    }
                    else {
                        console.warn('Error: ', info);
                    }
                    return [2 /*return*/];
            }
        });
    });
};
exports.ciPluginReportTask = new task_1.Task('Generate Plugin Report', pluginReportRunner);
//# sourceMappingURL=plugin.ci.js.map