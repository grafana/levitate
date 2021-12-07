"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cherryPickTask = void 0;
var tslib_1 = require("tslib");
var task_1 = require("./task");
var githubClient_1 = (0, tslib_1.__importDefault)(require("../utils/githubClient"));
// https://github.com/lisposter/github-pagination/blob/master/lib/octopage.js
var pagingParser = function (linkStr) {
    return linkStr
        .split(',')
        .map(function (rel) {
        //@ts-ignore
        return rel.split(';').map(function (curr, idx) {
            if (idx === 0) {
                //@ts-ignore
                return /[^_]page=(\d+)/.exec(curr)[1];
            }
            if (idx === 1) {
                //@ts-ignore
                return /rel="(.+)"/.exec(curr)[1];
            }
        });
    })
        .reduce(function (obj, curr, i) {
        //@ts-ignore
        obj[curr[1]] = curr[0];
        return obj;
    }, {});
};
var getIssues = function (client, page) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var result, data, pages, nextPage;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.get('/issues', {
                    params: {
                        state: 'closed',
                        per_page: 100,
                        labels: 'cherry-pick needed',
                        sort: 'closed',
                        direction: 'asc',
                        page: page,
                    },
                })];
            case 1:
                result = _a.sent();
                data = result.data;
                if (!result.headers.link) {
                    return [2 /*return*/, data];
                }
                pages = pagingParser(result.headers.link);
                if (!pages.next) return [3 /*break*/, 3];
                return [4 /*yield*/, getIssues(client, pages.next)];
            case 2:
                nextPage = _a.sent();
                data = data.concat(nextPage);
                _a.label = 3;
            case 3: return [2 /*return*/, data];
        }
    });
}); };
var cherryPickRunner = function (_a) {
    var enterprise = _a.enterprise;
    return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var githubClient, client, results, commands, results_1, results_1_1, item, issueDetails, e_1_1;
        var e_1, _b;
        return (0, tslib_1.__generator)(this, function (_c) {
            switch (_c.label) {
                case 0:
                    githubClient = new githubClient_1.default({ enterprise: enterprise });
                    client = githubClient.client;
                    return [4 /*yield*/, getIssues(client, '1')];
                case 1:
                    results = _c.sent();
                    // sort by closed date ASC
                    results.sort(function (a, b) {
                        return new Date(a.closed_at).getTime() - new Date(b.closed_at).getTime();
                    });
                    commands = '';
                    console.log('--------------------------------------------------------------------');
                    console.log('Printing PRs with cherry-pick-needed, in ASC merge date order');
                    console.log('--------------------------------------------------------------------');
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 7, 8, 9]);
                    results_1 = (0, tslib_1.__values)(results), results_1_1 = results_1.next();
                    _c.label = 3;
                case 3:
                    if (!!results_1_1.done) return [3 /*break*/, 6];
                    item = results_1_1.value;
                    if (!item.milestone) {
                        console.log(item.number + ' missing milestone!');
                        return [3 /*break*/, 5];
                    }
                    return [4 /*yield*/, client.get(item.pull_request.url)];
                case 4:
                    issueDetails = _c.sent();
                    if (!issueDetails.data.merged) {
                        return [3 /*break*/, 5];
                    }
                    console.log("* " + item.title + ", (#" + item.number + "), merge-sha: " + issueDetails.data.merge_commit_sha);
                    commands += "git cherry-pick -x " + issueDetails.data.merge_commit_sha + "\n";
                    _c.label = 5;
                case 5:
                    results_1_1 = results_1.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_1_1 = _c.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (results_1_1 && !results_1_1.done && (_b = results_1.return)) _b.call(results_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 9:
                    console.log('--------------------------------------------------------------------');
                    console.log('Commands (in order of how they should be executed)');
                    console.log('--------------------------------------------------------------------');
                    console.log(commands);
                    return [2 /*return*/];
            }
        });
    });
};
exports.cherryPickTask = new task_1.Task('Cherry pick task', cherryPickRunner);
//# sourceMappingURL=cherrypick.js.map