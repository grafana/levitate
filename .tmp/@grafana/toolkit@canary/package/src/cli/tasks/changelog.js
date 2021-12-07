"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changelogTask = void 0;
var tslib_1 = require("tslib");
var lodash_1 = require("lodash");
var task_1 = require("./task");
var githubClient_1 = (0, tslib_1.__importDefault)(require("../utils/githubClient"));
var chalk_1 = (0, tslib_1.__importDefault)(require("chalk"));
var useSpinner_1 = require("../utils/useSpinner");
var filterBugs = function (item) {
    if (item.title.match(/fix|fixes/i)) {
        return true;
    }
    if (item.labels.find(function (label) { return label.name === 'type/bug'; })) {
        return true;
    }
    return false;
};
var getPackageChangelog = function (packageName, issues) {
    var e_1, _a, e_2, _b;
    if (issues.length === 0) {
        return '';
    }
    var markdown = chalk_1.default.bold.yellow("\n\n/*** " + packageName + " changelog  ***/\n\n");
    var bugs = (0, lodash_1.sortBy)(issues.filter(filterBugs), 'title');
    var notBugs = (0, lodash_1.sortBy)((0, lodash_1.difference)(issues, bugs), 'title');
    if (notBugs.length > 0) {
        markdown += '### Features / Enhancements\n';
        try {
            for (var notBugs_1 = (0, tslib_1.__values)(notBugs), notBugs_1_1 = notBugs_1.next(); !notBugs_1_1.done; notBugs_1_1 = notBugs_1.next()) {
                var item = notBugs_1_1.value;
                markdown += getMarkdownLineForIssue(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (notBugs_1_1 && !notBugs_1_1.done && (_a = notBugs_1.return)) _a.call(notBugs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    if (bugs.length > 0) {
        markdown += '\n### Bug Fixes\n';
        try {
            for (var bugs_1 = (0, tslib_1.__values)(bugs), bugs_1_1 = bugs_1.next(); !bugs_1_1.done; bugs_1_1 = bugs_1.next()) {
                var item = bugs_1_1.value;
                markdown += getMarkdownLineForIssue(item);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (bugs_1_1 && !bugs_1_1.done && (_b = bugs_1.return)) _b.call(bugs_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    return markdown;
};
var changelogTaskRunner = function (_a) {
    var milestone = _a.milestone;
    return (0, useSpinner_1.useSpinner)('Generating changelog', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var githubClient, client, res, data, links, mergedIssues, data_1, data_1_1, item, isMerged, e_3_1, issues, toolkitIssues, grafanaUiIssues, markdown;
        var e_3, _a;
        return (0, tslib_1.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    githubClient = new githubClient_1.default();
                    client = githubClient.client;
                    if (!/^\d+$/.test(milestone)) {
                        console.log('Use milestone number not title, find number in milestone url');
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, client.get('/issues', {
                            params: {
                                state: 'closed',
                                per_page: 100,
                                labels: 'add to changelog',
                                milestone: milestone,
                            },
                        })];
                case 1:
                    res = _b.sent();
                    data = res.data;
                    _b.label = 2;
                case 2:
                    if (!res.headers.link) return [3 /*break*/, 6];
                    links = parseLink(res.headers.link);
                    if (!links.next) return [3 /*break*/, 4];
                    return [4 /*yield*/, client.get(links.next)];
                case 3:
                    res = _b.sent();
                    data.push.apply(data, (0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(res.data), false));
                    return [3 /*break*/, 5];
                case 4: return [3 /*break*/, 6];
                case 5: return [3 /*break*/, 2];
                case 6:
                    mergedIssues = [];
                    _b.label = 7;
                case 7:
                    _b.trys.push([7, 12, 13, 14]);
                    data_1 = (0, tslib_1.__values)(data), data_1_1 = data_1.next();
                    _b.label = 8;
                case 8:
                    if (!!data_1_1.done) return [3 /*break*/, 11];
                    item = data_1_1.value;
                    if (!item.pull_request) {
                        // it's an issue, not pull request
                        mergedIssues.push(item);
                        return [3 /*break*/, 10];
                    }
                    return [4 /*yield*/, client.get(item.pull_request.url + '/merge')];
                case 9:
                    isMerged = _b.sent();
                    if (isMerged.status === 204) {
                        mergedIssues.push(item);
                    }
                    _b.label = 10;
                case 10:
                    data_1_1 = data_1.next();
                    return [3 /*break*/, 8];
                case 11: return [3 /*break*/, 14];
                case 12:
                    e_3_1 = _b.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 14];
                case 13:
                    try {
                        if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 14:
                    issues = (0, lodash_1.sortBy)(mergedIssues, 'title');
                    toolkitIssues = issues.filter(function (item) {
                        return item.labels.find(function (label) { return label.name === 'area/grafana/toolkit'; });
                    });
                    grafanaUiIssues = issues.filter(function (item) {
                        return item.labels.find(function (label) { return label.name === 'area/grafana/ui'; });
                    });
                    markdown = '';
                    markdown += getPackageChangelog('Grafana', issues);
                    markdown += getPackageChangelog('grafana-toolkit', toolkitIssues);
                    markdown += getPackageChangelog('grafana-ui', grafanaUiIssues);
                    console.log(markdown);
                    return [2 /*return*/];
            }
        });
    }); });
};
function getMarkdownLineForIssue(item) {
    var githubGrafanaUrl = 'https://github.com/grafana/grafana';
    var markdown = '';
    var title = item.title.replace(/^([^:]*)/, function (_match, g1) {
        return "**" + g1 + "**";
    });
    title = title.trim();
    if (title[title.length - 1] === '.') {
        title = title.slice(0, -1);
    }
    if (!item.pull_request) {
        markdown += '* ' + title + '.';
        markdown += " [#" + item.number + "](" + githubGrafanaUrl + "/issues/" + item.number + ")";
    }
    else {
        markdown += '* ' + title + '.';
        markdown += " [#" + item.number + "](" + githubGrafanaUrl + "/pull/" + item.number + ")";
        markdown += ", [@" + item.user.login + "](" + item.user.html_url + ")";
    }
    markdown += '\n';
    return markdown;
}
function parseLink(s) {
    var output = {};
    var regex = /<([^>]+)>; rel="([^"]+)"/g;
    var m;
    while ((m = regex.exec(s))) {
        var _a = (0, tslib_1.__read)(m, 3), v = _a[1], k = _a[2];
        output[k] = v;
    }
    return output;
}
exports.changelogTask = new task_1.Task('Changelog generator task', changelogTaskRunner);
//# sourceMappingURL=changelog.js.map