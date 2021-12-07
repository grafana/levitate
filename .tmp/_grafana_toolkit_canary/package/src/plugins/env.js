"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCircleDownloadBaseURL = exports.writeJobStats = exports.getCiFolder = exports.getJobFolder = exports.getPullRequestNumber = exports.getBuildNumber = exports.getPluginBuildInfo = exports.job = void 0;
var tslib_1 = require("tslib");
var execa_1 = (0, tslib_1.__importDefault)(require("execa"));
var path_1 = (0, tslib_1.__importDefault)(require("path"));
var fs_1 = (0, tslib_1.__importDefault)(require("fs"));
var getJobFromProcessArgv = function () {
    var arg = process.argv[2];
    if (arg && arg.startsWith('plugin:ci-')) {
        var task = arg.substring('plugin:ci-'.length);
        if ('build' === task) {
            if ('--backend' === process.argv[3] && process.argv[4]) {
                return task + '_' + process.argv[4];
            }
            return 'build_plugin';
        }
        return task;
    }
    return 'unknown_job';
};
exports.job = (process.env.DRONE_STEP_NAME ? process.env.DRONE_STEP_NAME : process.env.CIRCLE_JOB) || getJobFromProcessArgv();
var getPluginBuildInfo = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var repo, branch_1, hash_1, build, pr, url, idx, info, branch, hash;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (process.env.CI === 'true') {
                    repo = void 0;
                    build = void 0;
                    pr = void 0;
                    if (process.env.DRONE === 'true') {
                        repo = process.env.DRONE_REPO_LINK;
                        branch_1 = process.env.DRONE_BRANCH;
                        hash_1 = process.env.DRONE_COMMIT_SHA;
                        build = parseInt(process.env.DRONE_BUILD_NUMBER || '', 10);
                        pr = parseInt(process.env.DRONE_PULL_REQUEST || '', 10);
                    }
                    else if (process.env.CIRCLECI === 'true') {
                        repo = process.env.CIRCLE_REPOSITORY_URL;
                        branch_1 = process.env.CIRCLE_BRANCH;
                        hash_1 = process.env.CIRCLE_SHA1;
                        build = parseInt(process.env.CIRCLE_BUILD_NUM || '', 10);
                        url = process.env.CIRCLE_PULL_REQUEST || '';
                        idx = url.lastIndexOf('/') + 1;
                        pr = parseInt(url.substring(idx), 10);
                    }
                    info = {
                        time: Date.now(),
                        repo: repo,
                        branch: branch_1,
                        hash: hash_1,
                    };
                    if (pr) {
                        info.pr = pr;
                    }
                    if (build) {
                        info.number = build;
                    }
                    return [2 /*return*/, info];
                }
                return [4 /*yield*/, (0, execa_1.default)('git', ['rev-parse', '--abbrev-ref', 'HEAD'])];
            case 1:
                branch = _a.sent();
                return [4 /*yield*/, (0, execa_1.default)('git', ['rev-parse', 'HEAD'])];
            case 2:
                hash = _a.sent();
                return [2 /*return*/, {
                        time: Date.now(),
                        branch: branch.stdout,
                        hash: hash.stdout,
                    }];
        }
    });
}); };
exports.getPluginBuildInfo = getPluginBuildInfo;
var getBuildNumber = function () {
    if (process.env.DRONE === 'true') {
        return parseInt(process.env.DRONE_BUILD_NUMBER || '', 10);
    }
    else if (process.env.CIRCLECI === 'true') {
        return parseInt(process.env.CIRCLE_BUILD_NUM || '', 10);
    }
    return undefined;
};
exports.getBuildNumber = getBuildNumber;
var getPullRequestNumber = function () {
    if (process.env.DRONE === 'true') {
        return parseInt(process.env.DRONE_PULL_REQUEST || '', 10);
    }
    else if (process.env.CIRCLECI === 'true') {
        var url = process.env.CIRCLE_PULL_REQUEST || '';
        var idx = url.lastIndexOf('/') + 1;
        return parseInt(url.substring(idx), 10);
    }
    return undefined;
};
exports.getPullRequestNumber = getPullRequestNumber;
var getJobFolder = function () {
    var dir = path_1.default.resolve(process.cwd(), 'ci', 'jobs', exports.job);
    if (!fs_1.default.existsSync(dir)) {
        fs_1.default.mkdirSync(dir, { recursive: true });
    }
    return dir;
};
exports.getJobFolder = getJobFolder;
var getCiFolder = function () {
    var dir = path_1.default.resolve(process.cwd(), 'ci');
    if (!fs_1.default.existsSync(dir)) {
        fs_1.default.mkdirSync(dir, { recursive: true });
    }
    return dir;
};
exports.getCiFolder = getCiFolder;
var writeJobStats = function (startTime, workDir) {
    var endTime = Date.now();
    var stats = {
        job: exports.job,
        startTime: startTime,
        endTime: endTime,
        elapsed: endTime - startTime,
        buildNumber: (0, exports.getBuildNumber)(),
    };
    var f = path_1.default.resolve(workDir, 'job.json');
    fs_1.default.writeFile(f, JSON.stringify(stats, null, 2), function (err) {
        if (err) {
            throw new Error('Unable to stats: ' + f);
        }
    });
};
exports.writeJobStats = writeJobStats;
// https://circleci.com/api/v1.1/project/github/NatelEnergy/grafana-discrete-panel/latest/artifacts
function getCircleDownloadBaseURL() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
        var axios, repo, user, url, rsp, _a, _b, s, path_2, url_1, e_1;
        var e_2, _c;
        return (0, tslib_1.__generator)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 3]);
                    axios = require('axios');
                    repo = process.env.CIRCLE_PROJECT_REPONAME;
                    user = process.env.CIRCLE_PROJECT_USERNAME;
                    url = "https://circleci.com/api/v1.1/project/github/" + user + "/" + repo + "/latest/artifacts";
                    return [4 /*yield*/, axios.get(url)];
                case 1:
                    rsp = _d.sent();
                    try {
                        for (_a = (0, tslib_1.__values)(rsp.data), _b = _a.next(); !_b.done; _b = _a.next()) {
                            s = _b.value;
                            path_2 = s.path, url_1 = s.url;
                            if (url_1 && path_2 && path_2.endsWith('report.json')) {
                                return [2 /*return*/, url_1.substring(url_1.length - 'report.json'.length)];
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _d.sent();
                    console.log('Error reading CircleCI artifact URL', e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/, undefined];
            }
        });
    });
}
exports.getCircleDownloadBaseURL = getCircleDownloadBaseURL;
//# sourceMappingURL=env.js.map