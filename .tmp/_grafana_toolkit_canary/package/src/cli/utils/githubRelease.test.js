"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var githubRelease_1 = require("./githubRelease");
describe('GithubRelease', function () {
    it('should initialise a GithubRelease', function () {
        process.env.GITHUB_ACCESS_TOKEN = '12345';
        process.env.GITHUB_USERNAME = 'test@grafana.com';
        var github = new githubRelease_1.GitHubRelease('A token', 'A username', 'A repo', 'Some release notes');
        expect(github).toBeInstanceOf(githubRelease_1.GitHubRelease);
    });
});
//# sourceMappingURL=githubRelease.test.js.map