"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bundlePlugin = void 0;
var tslib_1 = require("tslib");
var webpack = require("webpack");
var formatWebpackMessages = require("react-dev-utils/formatWebpackMessages");
var clearConsole = require("react-dev-utils/clearConsole");
var webpack_plugin_config_1 = require("../../../config/webpack.plugin.config");
// export const bundlePlugin = ({ watch, production }: PluginBundleOptions) => useSpinner('Bundle plugin', async () => {
var bundlePlugin = function (_a) {
    var watch = _a.watch, production = _a.production, preserveConsole = _a.preserveConsole;
    return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var compiler, _b, webpackPromise;
        return (0, tslib_1.__generator)(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = webpack;
                    return [4 /*yield*/, (0, webpack_plugin_config_1.loadWebpackConfig)({
                            watch: watch,
                            production: production,
                            preserveConsole: preserveConsole,
                        })];
                case 1:
                    compiler = _b.apply(void 0, [_c.sent()]);
                    webpackPromise = new Promise(function (resolve, reject) {
                        if (watch) {
                            console.log('Started watching plugin for changes...');
                            compiler.watch({}, function (err, stats) { });
                            // @ts-ignore
                            compiler.hooks.invalid.tap('invalid', function () {
                                clearConsole();
                                console.log('Compiling...');
                            });
                            compiler.hooks.done.tap('done', function (stats) {
                                clearConsole();
                                var json = stats.toJson(); // different @types/webpack between react-dev-utils and grafana-toolkit
                                var output = formatWebpackMessages(json);
                                if (!output.errors.length && !output.warnings.length) {
                                    console.log('Compiled successfully!\n');
                                    console.log(stats.toString({ colors: true }));
                                }
                                if (output.errors.length) {
                                    console.log('Compilation failed!');
                                    output.errors.forEach(function (e) { return console.log(e); });
                                    if (output.warnings.length) {
                                        console.log('Warnings:');
                                        output.warnings.forEach(function (w) { return console.log(w); });
                                    }
                                }
                                if (output.errors.length === 0 && output.warnings.length) {
                                    console.log('Compiled with warnings!');
                                    output.warnings.forEach(function (w) { return console.log(w); });
                                }
                            });
                        }
                        else {
                            compiler.run(function (err, stats) {
                                if (err) {
                                    reject(err);
                                    return;
                                }
                                if (stats.hasErrors()) {
                                    stats.compilation.errors.forEach(function (e) {
                                        console.log(e.message);
                                    });
                                    reject('Build failed');
                                    return;
                                }
                                console.log('\n', stats.toString({ colors: true }), '\n');
                                resolve();
                            });
                        }
                    });
                    return [2 /*return*/, webpackPromise];
            }
        });
    });
};
exports.bundlePlugin = bundlePlugin;
//# sourceMappingURL=bundle.js.map