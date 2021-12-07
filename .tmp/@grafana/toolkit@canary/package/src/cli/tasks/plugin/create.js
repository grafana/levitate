"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printGrafanaTutorialsDetails = exports.formatPluginDetails = exports.removeGitFiles = exports.prepareJsonFiles = exports.fetchTemplate = exports.promptPluginDetails = exports.promptPluginType = exports.verifyGitExists = exports.getPluginKeywords = exports.getPluginId = exports.getPluginIdFromName = exports.getGitUsername = void 0;
var tslib_1 = require("tslib");
var chalk_1 = (0, tslib_1.__importDefault)(require("chalk"));
var command_exists_1 = (0, tslib_1.__importDefault)(require("command-exists"));
var fs_1 = require("fs");
var inquirer_1 = require("inquirer");
var lodash_1 = require("lodash");
var path_1 = (0, tslib_1.__importDefault)(require("path"));
var simple_git_1 = (0, tslib_1.__importDefault)(require("simple-git"));
var prompt_1 = require("../../utils/prompt");
var rmdir_1 = require("../../utils/rmdir");
var useSpinner_1 = require("../../utils/useSpinner");
var simpleGit = (0, simple_git_1.default)(process.cwd());
var PluginNames = {
    'panel-plugin': 'Grafana Panel Plugin',
    'datasource-plugin': 'Grafana Data Source Plugin',
    'backend-datasource-plugin': 'Grafana Backend Datasource Plugin',
};
var RepositoriesPaths = {
    'panel-plugin': 'https://github.com/grafana/simple-react-panel.git',
    'datasource-plugin': 'https://github.com/grafana/simple-datasource.git',
    'backend-datasource-plugin': 'https://github.com/grafana/simple-datasource-backend.git',
};
var TutorialPaths = {
    'panel-plugin': 'https://grafana.com/tutorials/build-a-panel-plugin',
    'datasource-plugin': 'https://grafana.com/tutorials/build-a-data-source-plugin',
    'backend-datasource-plugin': 'TODO',
};
var getGitUsername = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var name;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, simpleGit.raw(['config', '--global', 'user.name'])];
            case 1:
                name = _a.sent();
                return [2 /*return*/, name || ''];
        }
    });
}); };
exports.getGitUsername = getGitUsername;
var getPluginIdFromName = function (name) { return (0, lodash_1.kebabCase)(name); };
exports.getPluginIdFromName = getPluginIdFromName;
var getPluginId = function (pluginDetails) {
    return (0, lodash_1.kebabCase)(pluginDetails.org) + "-" + (0, exports.getPluginIdFromName)(pluginDetails.name);
};
exports.getPluginId = getPluginId;
var getPluginKeywords = function (pluginDetails) {
    return pluginDetails.keywords
        .split(',')
        .map(function (k) { return k.trim(); })
        .filter(function (k) { return k !== ''; });
};
exports.getPluginKeywords = getPluginKeywords;
var verifyGitExists = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                (0, command_exists_1.default)('git', function (err, exists) {
                    if (exists) {
                        resolve(true);
                    }
                    reject(new Error('git is not installed'));
                });
            })];
    });
}); };
exports.verifyGitExists = verifyGitExists;
var promptPluginType = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/, (0, inquirer_1.prompt)([
                {
                    type: 'list',
                    message: 'Select plugin type',
                    name: 'type',
                    choices: [
                        { name: 'Panel Plugin', value: 'panel-plugin' },
                        { name: 'Datasource Plugin', value: 'datasource-plugin' },
                        { name: 'Backend Datasource Plugin', value: 'backend-datasource-plugin' },
                    ],
                },
            ])];
    });
}); };
exports.promptPluginType = promptPluginType;
var promptPluginDetails = function (name) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var username, responses;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.getGitUsername)()];
            case 1:
                username = (_a.sent()).trim();
                return [4 /*yield*/, (0, inquirer_1.prompt)([
                        (0, prompt_1.promptInput)('name', 'Plugin name', true, name),
                        (0, prompt_1.promptInput)('org', 'Organization (used as part of plugin ID)', true),
                        (0, prompt_1.promptInput)('description', 'Description'),
                        (0, prompt_1.promptInput)('keywords', 'Keywords (separated by comma)'),
                        // Try using git specified username
                        (0, prompt_1.promptConfirm)('author', "Author (" + username + ")", username, username !== ''),
                        // Prompt for manual author entry if no git user.name specified
                        (0, prompt_1.promptInput)('author', "Author", true, undefined, function (answers) { return !answers.author || username === ''; }),
                        (0, prompt_1.promptInput)('url', 'Your URL (i.e. organisation url)'),
                    ])];
            case 2:
                responses = _a.sent();
                return [2 /*return*/, (0, tslib_1.__assign)((0, tslib_1.__assign)({}, responses), { author: responses.author === true ? username : responses.author })];
        }
    });
}); };
exports.promptPluginDetails = promptPluginDetails;
var fetchTemplate = function (_a) {
    var type = _a.type, dest = _a.dest;
    return (0, useSpinner_1.useSpinner)('Fetching plugin template...', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var url;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = RepositoriesPaths[type];
                    if (!url) {
                        throw new Error('Unknown plugin type');
                    }
                    return [4 /*yield*/, simpleGit.clone(url, dest)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
};
exports.fetchTemplate = fetchTemplate;
var prepareJsonFiles = function (_a) {
    var type = _a.type, pluginDetails = _a.pluginDetails, pluginPath = _a.pluginPath;
    return (0, useSpinner_1.useSpinner)('Saving package.json and plugin.json files', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var packageJsonPath, pluginJsonPath, packageJson, pluginJson, pluginId;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    packageJsonPath = path_1.default.resolve(pluginPath, 'package.json');
                    pluginJsonPath = path_1.default.resolve(pluginPath, 'src/plugin.json');
                    packageJson = JSON.parse((0, fs_1.readFileSync)(packageJsonPath, 'utf8'));
                    pluginJson = JSON.parse((0, fs_1.readFileSync)(pluginJsonPath, 'utf8'));
                    pluginId = (0, lodash_1.kebabCase)(pluginDetails.org) + "-" + (0, exports.getPluginIdFromName)(pluginDetails.name);
                    packageJson.name = pluginId;
                    packageJson.author = pluginDetails.author;
                    packageJson.description = pluginDetails.description;
                    pluginJson.name = pluginDetails.name;
                    pluginJson.id = pluginId;
                    if (type === 'backend-datasource-plugin') {
                        pluginJson.backend = true;
                        pluginJson.executable = 'gpx_' + pluginDetails.name;
                    }
                    pluginJson.info = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, pluginJson.info), { description: pluginDetails.description, author: {
                            name: pluginDetails.author,
                            url: pluginDetails.url,
                        }, keywords: (0, exports.getPluginKeywords)(pluginDetails) });
                    return [4 /*yield*/, Promise.all([packageJson, pluginJson].map(function (f, i) {
                            var filePath = i === 0 ? packageJsonPath : pluginJsonPath;
                            return fs_1.promises.writeFile(filePath, JSON.stringify(f, null, 2));
                        }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
};
exports.prepareJsonFiles = prepareJsonFiles;
var removeGitFiles = function (pluginPath) {
    return (0, useSpinner_1.useSpinner)('Cleaning', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/, (0, rmdir_1.rmdir)("" + path_1.default.resolve(pluginPath, '.git'))];
    }); }); });
};
exports.removeGitFiles = removeGitFiles;
/* eslint-disable no-console */
var formatPluginDetails = function (details) {
    console.group();
    console.log();
    console.log(chalk_1.default.bold.yellow('Your plugin details'));
    console.log('---');
    console.log(chalk_1.default.bold('Name: '), details.name);
    console.log(chalk_1.default.bold('ID: '), (0, exports.getPluginId)(details));
    console.log(chalk_1.default.bold('Description: '), details.description);
    console.log(chalk_1.default.bold('Keywords: '), (0, exports.getPluginKeywords)(details));
    console.log(chalk_1.default.bold('Author: '), details.author);
    console.log(chalk_1.default.bold('Organisation: '), details.org);
    console.log(chalk_1.default.bold('Website: '), details.url);
    console.log();
    console.groupEnd();
};
exports.formatPluginDetails = formatPluginDetails;
var printGrafanaTutorialsDetails = function (type) {
    console.group();
    console.log();
    console.log(chalk_1.default.bold.yellow("Congrats! You have just created " + PluginNames[type] + "."));
    console.log();
    if (type !== 'backend-datasource-plugin') {
        console.log(PluginNames[type] + " tutorial: " + TutorialPaths[type]);
    }
    console.log('Learn more about Grafana Plugins at https://grafana.com/docs/grafana/latest/plugins/developing/development/');
    console.log();
    console.groupEnd();
};
exports.printGrafanaTutorialsDetails = printGrafanaTutorialsDetails;
/* eslint-enable no-console */
//# sourceMappingURL=create.js.map