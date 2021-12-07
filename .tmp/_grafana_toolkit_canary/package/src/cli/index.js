"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var tslib_1 = require("tslib");
// @ts-ignore
var chalk_1 = (0, tslib_1.__importDefault)(require("chalk"));
var commander_1 = require("commander");
var fs_1 = require("fs");
var execTask_1 = require("./utils/execTask");
var core_start_1 = require("./tasks/core.start");
var changelog_1 = require("./tasks/changelog");
var cherrypick_1 = require("./tasks/cherrypick");
var template_1 = require("./tasks/template");
var plugin_build_1 = require("./tasks/plugin.build");
var toolkit_build_1 = require("./tasks/toolkit.build");
var plugin_tests_1 = require("./tasks/plugin.tests");
var searchTestDataSetup_1 = require("./tasks/searchTestDataSetup");
var closeMilestone_1 = require("./tasks/closeMilestone");
var plugin_dev_1 = require("./tasks/plugin.dev");
var plugin_utils_1 = require("./tasks/plugin.utils");
var plugin_update_1 = require("./tasks/plugin.update");
var plugin_ci_1 = require("./tasks/plugin.ci");
var package_build_1 = require("./tasks/package.build");
var plugin_create_1 = require("./tasks/plugin.create");
var plugin_sign_1 = require("./tasks/plugin.sign");
var bundle_managed_1 = require("./tasks/plugin/bundle.managed");
var component_create_1 = require("./tasks/component.create");
var nodeVersionChecker_1 = require("./tasks/nodeVersionChecker");
var run = function (includeInternalScripts) {
    if (includeInternalScripts === void 0) { includeInternalScripts = false; }
    if (includeInternalScripts) {
        commander_1.program.option('-d, --depreciate <scripts>', 'Inform about npm script deprecation', function (v) { return v.split(','); });
        commander_1.program
            .command('core:start')
            .option('-h, --hot', 'Run front-end with HRM enabled')
            .option('-T, --noTsCheck', 'Run bundler without TS type checking')
            .option('-t, --watchTheme', 'Watch for theme changes and regenerate variables.scss files')
            .description('Starts Grafana front-end in development mode with watch enabled')
            .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, execTask_1.execTask)(core_start_1.startTask)({
                            watchThemes: cmd.watchTheme,
                            noTsCheck: cmd.noTsCheck,
                            hot: cmd.hot,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('package:build')
            .option('-s, --scope <packages>', 'packages=[data|runtime|ui|toolkit|e2e|e2e-selectors]')
            .description('Builds @grafana/* package to packages/grafana-*/dist')
            .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, execTask_1.execTask)(package_build_1.buildPackageTask)({
                            scope: cmd.scope,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('changelog')
            .option('-m, --milestone <milestone>', 'Specify milestone')
            .description('Builds changelog markdown')
            .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!cmd.milestone) {
                            console.log('Please specify milestone, example: -m <milestone id from github milestone URL>');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, execTask_1.execTask)(changelog_1.changelogTask)({
                                milestone: cmd.milestone,
                                silent: true,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('cherrypick')
            .option('-e, --enterprise', 'Run task for grafana-enterprise')
            .description('Helps find commits to cherry pick')
            .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, execTask_1.execTask)(cherrypick_1.cherryPickTask)({ enterprise: !!cmd.enterprise })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('node-version-check')
            .description('Verify node version')
            .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, execTask_1.execTask)(nodeVersionChecker_1.nodeVersionCheckerTask)({})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('debug:template')
            .description('Just testing')
            .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, execTask_1.execTask)(template_1.templateTask)({})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('toolkit:build')
            .description('Prepares grafana/toolkit dist package')
            .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, execTask_1.execTask)(toolkit_build_1.toolkitBuildTask)({})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('searchTestData')
            .option('-c, --count <number_of_dashboards>', 'Specify number of dashboards')
            .description('Setup test data for search')
            .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, execTask_1.execTask)(searchTestDataSetup_1.searchTestDataSetupTask)({ count: cmd.count })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('close-milestone')
            .option('-m, --milestone <milestone>', 'Specify milestone')
            .option('--dryRun', 'Only simulate actions')
            .description('Helps ends a milestone by removing the cherry-pick label and closing it')
            .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!cmd.milestone) {
                            console.log('Please specify milestone, example: -m <milestone id from github milestone URL>');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, execTask_1.execTask)(closeMilestone_1.closeMilestoneTask)({
                                milestone: cmd.milestone,
                                dryRun: !!cmd.dryRun,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        // React generator
        commander_1.program
            .command('component:create')
            .description('Scaffold React components. Optionally add test, story and .mdx files. The components are created in the same dir the script is run from.')
            .action(function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, execTask_1.execTask)(component_create_1.componentCreateTask)({})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }
    commander_1.program.option('-v, --version', 'Toolkit version').action(function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var pkg, version;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_1.promises.readFile(__dirname + "/../../package.json", 'utf8')];
                case 1:
                    pkg = _a.sent();
                    version = JSON.parse(pkg).version;
                    console.log("v" + version);
                    return [2 /*return*/];
            }
        });
    }); });
    commander_1.program
        .command('plugin:create [name]')
        .description('Creates plugin from template')
        .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, execTask_1.execTask)(plugin_create_1.pluginCreateTask)({ name: cmd, silent: true })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    commander_1.program
        .command('plugin:build')
        .option('--maxJestWorkers <num>|<string>', 'Limit number of Jest workers spawned')
        .option('--coverage', 'Run code coverage', false)
        .option('--skipTest', 'Skip running tests (for pipelines that run it separate)', false)
        .option('--skipLint', 'Skip running lint (for pipelines that run it separate)', false)
        .option('--preserveConsole', 'Preserves console calls', false)
        .description('Prepares plugin dist package')
        .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, execTask_1.execTask)(plugin_build_1.pluginBuildTask)({
                        coverage: cmd.coverage,
                        silent: true,
                        maxJestWorkers: cmd.maxJestWorkers,
                        preserveConsole: cmd.preserveConsole,
                        skipLint: cmd.skipLint,
                        skipTest: cmd.skipTest,
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    commander_1.program
        .command('plugin:dev')
        .option('-w, --watch', 'Run plugin development mode with watch enabled')
        .option('--yarnlink', 'symlink this project to the local grafana/toolkit')
        .description('Starts plugin dev mode')
        .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, execTask_1.execTask)(plugin_dev_1.pluginDevTask)({
                        watch: !!cmd.watch,
                        yarnlink: !!cmd.yarnlink,
                        silent: true,
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    commander_1.program
        .command('plugin:test')
        .option('-u, --updateSnapshot', 'Run snapshots update')
        .option('--coverage', 'Run code coverage')
        .option('--watch', 'Run tests in interactive watch mode')
        .option('--testPathPattern <regex>', 'Run only tests with a path that matches the regex')
        .option('--testNamePattern <regex>', 'Run only tests with a name that matches the regex')
        .option('--maxWorkers <num>|<string>', 'Limit number of workers spawned')
        .description('Executes plugin tests')
        .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, execTask_1.execTask)(plugin_tests_1.pluginTestTask)({
                        updateSnapshot: !!cmd.updateSnapshot,
                        coverage: !!cmd.coverage,
                        watch: !!cmd.watch,
                        testPathPattern: cmd.testPathPattern,
                        testNamePattern: cmd.testNamePattern,
                        maxWorkers: cmd.maxWorkers,
                        silent: true,
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    commander_1.program
        .command('plugin:sign')
        .option('--signatureType <type>', 'Signature Type')
        .option('--rootUrls <urls...>', 'Root URLs')
        .description('Create a plugin signature')
        .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, execTask_1.execTask)(plugin_sign_1.pluginSignTask)({
                        signatureType: cmd.signatureType,
                        rootUrls: cmd.rootUrls,
                        silent: true,
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    commander_1.program
        .command('plugin:ci-build')
        .option('--finish', 'move all results to the jobs folder', false)
        .option('--maxJestWorkers <num>|<string>', 'Limit number of Jest workers spawned')
        .description('[deprecated] Build the plugin, leaving results in /dist and /coverage')
        .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, execTask_1.execTask)(plugin_ci_1.ciBuildPluginTask)({
                        finish: cmd.finish,
                        maxJestWorkers: cmd.maxJestWorkers,
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    commander_1.program
        .command('plugin:ci-package')
        .option('--signatureType <type>', 'Signature Type')
        .option('--rootUrls <urls...>', 'Root URLs')
        .option('--signing-admin', 'Use the admin API endpoint for signing the manifest. (deprecated)', false)
        .description('[deprecated] Create a zip packages for the plugin')
        .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, execTask_1.execTask)(plugin_ci_1.ciPackagePluginTask)({
                        signatureType: cmd.signatureType,
                        rootUrls: cmd.rootUrls,
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    commander_1.program
        .command('plugin:ci-report')
        .description('[deprecated] Build a report for this whole process')
        .option('--upload', 'upload packages also')
        .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, execTask_1.execTask)(plugin_ci_1.ciPluginReportTask)({
                        upload: cmd.upload,
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    commander_1.program
        .command('plugin:bundle-managed')
        .description('Builds managed plugins')
        .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, execTask_1.execTask)(bundle_managed_1.bundleManagedTask)({})];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    commander_1.program
        .command('plugin:github-publish')
        .option('--dryrun', 'Do a dry run only', false)
        .option('--verbose', 'Print verbose', false)
        .option('--commitHash <hashKey>', 'Specify the commit hash')
        .description('Publish to github')
        .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, execTask_1.execTask)(plugin_utils_1.githubPublishTask)({
                        dryrun: cmd.dryrun,
                        verbose: cmd.verbose,
                        commitHash: cmd.commitHash,
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    commander_1.program
        .command('plugin:update-circleci')
        .description('Update plugin')
        .action(function (cmd) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, execTask_1.execTask)(plugin_update_1.pluginUpdateTask)({})];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    commander_1.program.on('command:*', function () {
        console.error('Invalid command: %s\nSee --help for a list of available commands.', commander_1.program.args.join(' '));
        process.exit(1);
    });
    commander_1.program.parse(process.argv);
    var options = commander_1.program.opts();
    if (options.depreciate && options.depreciate.length === 2) {
        console.log(chalk_1.default.yellow.bold("[NPM script depreciation] " + options.depreciate[0] + " is deprecated! Use " + options.depreciate[1] + " instead!"));
    }
};
exports.run = run;
//# sourceMappingURL=index.js.map