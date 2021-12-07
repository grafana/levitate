"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubPublishTask = void 0;
var tslib_1 = require("tslib");
var task_1 = require("./task");
var pluginValidation_1 = require("../../config/utils/pluginValidation");
var githubRelease_1 = require("../utils/githubRelease");
var getPluginId_1 = require("../../config/utils/getPluginId");
var env_1 = require("../../plugins/env");
var useSpinner_1 = require("../utils/useSpinner");
var path = require("path");
var execa = require("execa");
var DEFAULT_EMAIL_ADDRESS = 'eng@grafana.com';
var DEFAULT_USERNAME = 'CircleCI Automation';
var releaseNotes = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var stdout;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, execa("awk 'BEGIN {FS=\"##\"; RS=\"##\"} FNR==3 {print \"##\" $1; exit}' CHANGELOG.md", {
                    shell: true,
                })];
            case 1:
                stdout = (_a.sent()).stdout;
                return [2 /*return*/, stdout];
        }
    });
}); };
var checkoutBranch = function (branchName) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var currentBranch, branchesAvailable;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, execa("git rev-parse --abbrev-ref HEAD", { shell: true })];
            case 1:
                currentBranch = _a.sent();
                return [4 /*yield*/, execa("(git branch -a | grep \"" + branchName + "$\" | grep -v remote) || echo 'No release found'", { shell: true })];
            case 2:
                branchesAvailable = _a.sent();
                if (currentBranch.stdout !== branchName) {
                    console.log('available', branchesAvailable.stdout.trim());
                    if (branchesAvailable.stdout.trim() === branchName) {
                        return [2 /*return*/, ['git', ['checkout', branchName]]];
                    }
                    else {
                        return [2 /*return*/, ['git', ['checkout', '-b', branchName]]];
                    }
                }
                return [2 /*return*/, []];
        }
    });
}); };
var gitUrlParse = function (url) {
    var matchResult = [];
    if (url.match(/^git@github.com/)) {
        // We have an ssh style url.
        matchResult = url.match(/^git@github.com:(.*?)\/(.*?)\.git/);
    }
    if (url.match(/^https:\/\/github.com\//)) {
        // We have an https style url
        matchResult = url.match(/^https:\/\/github.com\/(.*?)\/(.*?)\/.git/);
    }
    if (matchResult && matchResult.length > 2) {
        return {
            owner: matchResult[1],
            name: matchResult[2],
        };
    }
    throw "Could not find a suitable git repository. Received [" + url + "]";
};
var prepareRelease = function (_a) {
    var dryrun = _a.dryrun, verbose = _a.verbose;
    return (0, useSpinner_1.useSpinner)('Preparing release', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var ciDir, distDir, distContentDir, pluginJsonFile, pluginJson, githubPublishScript, _a, githubPublishScript_1, githubPublishScript_1_1, line, opts, command, args, stdout, ex_1, err, trueError, _b, _c, regex, e_1_1;
        var e_1, _d, e_2, _e;
        return (0, tslib_1.__generator)(this, function (_f) {
            switch (_f.label) {
                case 0:
                    ciDir = (0, env_1.getCiFolder)();
                    distDir = path.resolve(ciDir, 'dist');
                    distContentDir = path.resolve(distDir, (0, getPluginId_1.getPluginId)());
                    pluginJsonFile = path.resolve(distContentDir, 'plugin.json');
                    pluginJson = (0, pluginValidation_1.getPluginJson)(pluginJsonFile);
                    _a = [['git', ['config', 'user.email', DEFAULT_EMAIL_ADDRESS]],
                        ['git', ['config', 'user.name', DEFAULT_USERNAME]]];
                    return [4 /*yield*/, checkoutBranch("release-" + pluginJson.info.version)];
                case 1:
                    githubPublishScript = _a.concat([
                        _f.sent(),
                        ['/bin/rm', ['-rf', 'dist'], { dryrun: dryrun }],
                        ['mv', ['-v', distContentDir, 'dist']],
                        ['git', ['add', '--force', 'dist'], { dryrun: dryrun }],
                        ['/bin/rm', ['-rf', 'src'], { enterprise: true }],
                        ['git', ['rm', '-rf', 'src'], { enterprise: true }],
                        [
                            'git',
                            ['commit', '-m', "automated release " + pluginJson.info.version + " [skip ci]"],
                            {
                                dryrun: dryrun,
                                okOnError: [/nothing to commit/g, /nothing added to commit/g, /no changes added to commit/g],
                            },
                        ],
                        ['git', ['push', '-f', 'origin', "release-" + pluginJson.info.version], { dryrun: dryrun }],
                        ['git', ['tag', '-f', "v" + pluginJson.info.version]],
                        ['git', ['push', '-f', 'origin', "v" + pluginJson.info.version]]
                    ]);
                    _f.label = 2;
                case 2:
                    _f.trys.push([2, 11, 12, 13]);
                    githubPublishScript_1 = (0, tslib_1.__values)(githubPublishScript), githubPublishScript_1_1 = githubPublishScript_1.next();
                    _f.label = 3;
                case 3:
                    if (!!githubPublishScript_1_1.done) return [3 /*break*/, 10];
                    line = githubPublishScript_1_1.value;
                    opts = line.length === 3 ? line[2] : {};
                    command = line[0];
                    args = line[1];
                    _f.label = 4;
                case 4:
                    _f.trys.push([4, 8, , 9]);
                    if (verbose) {
                        console.log('executing >>', line);
                    }
                    if (!(line.length > 0 && line[0].length > 0)) return [3 /*break*/, 6];
                    if (opts['dryrun']) {
                        line[1].push('--dry-run');
                    }
                    // Exit if the plugin is NOT an enterprise plugin
                    if (pluginJson.enterprise && !opts['enterprise']) {
                        return [3 /*break*/, 9];
                    }
                    return [4 /*yield*/, execa(command, args)];
                case 5:
                    stdout = (_f.sent()).stdout;
                    if (verbose) {
                        console.log(stdout);
                    }
                    return [3 /*break*/, 7];
                case 6:
                    if (verbose) {
                        console.log('skipping empty line');
                    }
                    _f.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    ex_1 = _f.sent();
                    err = ex_1.message;
                    if (opts['okOnError'] && Array.isArray(opts['okOnError'])) {
                        trueError = true;
                        try {
                            for (_b = (e_2 = void 0, (0, tslib_1.__values)(opts['okOnError'])), _c = _b.next(); !_c.done; _c = _b.next()) {
                                regex = _c.value;
                                if (err.match(regex)) {
                                    trueError = false;
                                    break;
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_e = _b.return)) _e.call(_b);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        if (!trueError) {
                            // This is not an error
                            return [3 /*break*/, 9];
                        }
                    }
                    console.error(err);
                    process.exit(-1);
                    return [3 /*break*/, 9];
                case 9:
                    githubPublishScript_1_1 = githubPublishScript_1.next();
                    return [3 /*break*/, 3];
                case 10: return [3 /*break*/, 13];
                case 11:
                    e_1_1 = _f.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 12:
                    try {
                        if (githubPublishScript_1_1 && !githubPublishScript_1_1.done && (_d = githubPublishScript_1.return)) _d.call(githubPublishScript_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    }); });
};
var createRelease = function (_a) {
    var commitHash = _a.commitHash, githubUser = _a.githubUser, githubToken = _a.githubToken, gitRepoName = _a.gitRepoName;
    return (0, useSpinner_1.useSpinner)('Creating release', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var gitRelease, _a, _b;
        return (0, tslib_1.__generator)(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = githubRelease_1.GitHubRelease.bind;
                    _b = [void 0, githubToken, githubUser, gitRepoName];
                    return [4 /*yield*/, releaseNotes()];
                case 1:
                    gitRelease = new (_a.apply(githubRelease_1.GitHubRelease, _b.concat([_c.sent(), commitHash])))();
                    return [2 /*return*/, gitRelease.release()];
            }
        });
    }); });
};
var githubPublishRunner = function (_a) {
    var dryrun = _a.dryrun, verbose = _a.verbose, commitHash = _a.commitHash;
    return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var repoUrl, repo, parsedUrl, githubToken, githubUser;
        return (0, tslib_1.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    repoUrl = process.env.DRONE_REPO_LINK || process.env.CIRCLE_REPOSITORY_URL;
                    if (!!repoUrl) return [3 /*break*/, 2];
                    return [4 /*yield*/, execa('git', ['config', '--local', 'remote.origin.url'])];
                case 1:
                    repo = _b.sent();
                    if (repo && repo.stdout) {
                        repoUrl = repo.stdout;
                    }
                    else {
                        throw new Error('The release plugin requires you specify the repository url as environment variable DRONE_REPO_LINK or ' +
                            'CIRCLE_REPOSITORY_URL');
                    }
                    _b.label = 2;
                case 2:
                    if (!process.env['GITHUB_ACCESS_TOKEN']) {
                        // Try to use GITHUB_TOKEN, which may be set.
                        if (process.env['GITHUB_TOKEN']) {
                            process.env['GITHUB_ACCESS_TOKEN'] = process.env['GITHUB_TOKEN'];
                        }
                        else {
                            throw new Error("GitHub publish requires that you set the environment variable GITHUB_ACCESS_TOKEN to a valid github api token.\n        See: https://github.com/settings/tokens for more details.");
                        }
                    }
                    if (!process.env['GITHUB_USERNAME']) {
                        // We can default this one
                        process.env['GITHUB_USERNAME'] = DEFAULT_EMAIL_ADDRESS;
                    }
                    parsedUrl = gitUrlParse(repoUrl);
                    githubToken = process.env['GITHUB_ACCESS_TOKEN'];
                    githubUser = parsedUrl.owner;
                    return [4 /*yield*/, prepareRelease({
                            dryrun: dryrun,
                            verbose: verbose,
                        })];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, createRelease({
                            commitHash: commitHash,
                            githubUser: githubUser,
                            githubToken: githubToken,
                            gitRepoName: parsedUrl.name,
                        })];
                case 4:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
exports.githubPublishTask = new task_1.Task('GitHub Publish', githubPublishRunner);
//# sourceMappingURL=plugin.utils.js.map