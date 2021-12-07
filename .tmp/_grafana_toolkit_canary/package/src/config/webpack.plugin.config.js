"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadWebpackConfig = exports.findModuleFiles = void 0;
var tslib_1 = require("tslib");
var fs = require('fs');
var util = require('util');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
var TerserPlugin = require('terser-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
var readdirPromise = util.promisify(fs.readdir);
var accessPromise = util.promisify(fs.access);
var webpack = (0, tslib_1.__importStar)(require("webpack"));
var loaders_1 = require("./webpack/loaders");
var findModuleFiles = function (base, files, result) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var _a;
    return (0, tslib_1.__generator)(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = files;
                if (_a) return [3 /*break*/, 2];
                return [4 /*yield*/, readdirPromise(base)];
            case 1:
                _a = (_b.sent());
                _b.label = 2;
            case 2:
                files = _a;
                result = result || [];
                if (!files) return [3 /*break*/, 4];
                return [4 /*yield*/, Promise.all(files.map(function (file) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
                        var newbase, _a, _b, filename;
                        return (0, tslib_1.__generator)(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    newbase = path.join(base, file);
                                    if (!fs.statSync(newbase).isDirectory()) return [3 /*break*/, 3];
                                    _a = exports.findModuleFiles;
                                    _b = [newbase];
                                    return [4 /*yield*/, readdirPromise(newbase)];
                                case 1: return [4 /*yield*/, _a.apply(void 0, _b.concat([_c.sent(), result]))];
                                case 2:
                                    result = _c.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    filename = path.basename(file);
                                    if (/^module.(t|j)sx?$/.exec(filename)) {
                                        // @ts-ignore
                                        result.push(newbase);
                                    }
                                    _c.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4: return [2 /*return*/, result];
        }
    });
}); };
exports.findModuleFiles = findModuleFiles;
var getModuleFiles = function () {
    return (0, exports.findModuleFiles)(path.resolve(process.cwd(), 'src'));
};
var getManualChunk = function (id) {
    if (id.endsWith('module.ts') || id.endsWith('module.js') || id.endsWith('module.tsx')) {
        var idx = id.lastIndexOf(path.sep + 'src' + path.sep);
        if (idx > 0) {
            var name_1 = id.substring(idx + 5, id.lastIndexOf('.'));
            return {
                name: name_1,
                module: id,
            };
        }
    }
    return null;
};
var getEntries = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var entries, modules;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0:
                entries = {};
                return [4 /*yield*/, getModuleFiles()];
            case 1:
                modules = _a.sent();
                modules.forEach(function (modFile) {
                    var mod = getManualChunk(modFile);
                    // @ts-ignore
                    entries[mod.name] = mod.module;
                });
                return [2 /*return*/, (0, tslib_1.__assign)((0, tslib_1.__assign)({}, entries), (0, loaders_1.getStylesheetEntries)())];
        }
    });
}); };
var getCommonPlugins = function (options) {
    var hasREADME = fs.existsSync(path.resolve(process.cwd(), 'src', 'README.md'));
    var packageJson = require(path.resolve(process.cwd(), 'package.json'));
    return [
        new MiniCssExtractPlugin({
            // both options are optional
            filename: 'styles/[name].css',
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new CopyWebpackPlugin([
            // If src/README.md exists use it; otherwise the root README
            { from: hasREADME ? 'README.md' : '../README.md', to: '.', force: true },
            { from: 'plugin.json', to: '.' },
            { from: '../LICENSE', to: '.' },
            { from: '../CHANGELOG.md', to: '.', force: true },
            { from: '**/*.json', to: '.' },
            { from: '**/*.svg', to: '.' },
            { from: '**/*.png', to: '.' },
            { from: '**/*.html', to: '.' },
            { from: 'img/**/*', to: '.' },
            { from: 'libs/**/*', to: '.' },
            { from: 'static/**/*', to: '.' },
        ], { logLevel: options.watch ? 'silent' : 'warn' }),
        new ReplaceInFileWebpackPlugin([
            {
                dir: 'dist',
                files: ['plugin.json', 'README.md'],
                rules: [
                    {
                        search: '%VERSION%',
                        replace: packageJson.version,
                    },
                    {
                        search: '%TODAY%',
                        replace: new Date().toISOString().substring(0, 10),
                    },
                ],
            },
        ]),
        new ForkTsCheckerWebpackPlugin({
            typescript: { configFile: path.join(process.cwd(), 'tsconfig.json') },
            issue: {
                include: [{ file: '**/*.{ts,tsx}' }],
            },
        }),
    ];
};
var getBaseWebpackConfig = function (options) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var plugins, optimization, compressOptions;
    var _a;
    return (0, tslib_1.__generator)(this, function (_b) {
        switch (_b.label) {
            case 0:
                plugins = getCommonPlugins(options);
                optimization = {};
                if (options.production) {
                    compressOptions = { drop_console: !options.preserveConsole, drop_debugger: true };
                    optimization.minimizer = [
                        new TerserPlugin({ sourceMap: true, terserOptions: { compress: compressOptions } }),
                        new OptimizeCssAssetsPlugin(),
                    ];
                }
                else if (options.watch) {
                    plugins.push(new HtmlWebpackPlugin());
                }
                _a = {
                    mode: options.production ? 'production' : 'development',
                    target: 'web',
                    node: {
                        fs: 'empty',
                        net: 'empty',
                        tls: 'empty',
                    },
                    context: path.join(process.cwd(), 'src'),
                    devtool: 'source-map'
                };
                return [4 /*yield*/, getEntries()];
            case 1: return [2 /*return*/, (_a.entry = _b.sent(),
                    _a.output = {
                        filename: '[name].js',
                        path: path.join(process.cwd(), 'dist'),
                        libraryTarget: 'amd',
                        publicPath: '/',
                    },
                    _a.performance = { hints: false },
                    _a.externals = [
                        'tslib',
                        'lodash',
                        'jquery',
                        'moment',
                        'slate',
                        'emotion',
                        '@emotion/react',
                        '@emotion/css',
                        'prismjs',
                        'slate-plain-serializer',
                        '@grafana/slate-react',
                        'react',
                        'react-dom',
                        'react-redux',
                        'redux',
                        'rxjs',
                        'react-router-dom',
                        'd3',
                        'angular',
                        '@grafana/ui',
                        '@grafana/runtime',
                        '@grafana/data',
                        // @ts-ignore
                        function (context, request, callback) {
                            var prefix = 'grafana/';
                            if (request.indexOf(prefix) === 0) {
                                return callback(null, request.substr(prefix.length));
                            }
                            // @ts-ignore
                            callback();
                        },
                    ],
                    _a.plugins = plugins,
                    _a.resolve = {
                        extensions: ['.ts', '.tsx', '.js'],
                        modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
                    },
                    _a.module = {
                        rules: (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([
                            {
                                test: /\.tsx?$/,
                                loaders: [
                                    {
                                        loader: require.resolve('babel-loader'),
                                        options: {
                                            presets: [[require.resolve('@babel/preset-env'), { modules: false }]],
                                            plugins: [require.resolve('babel-plugin-angularjs-annotate')],
                                            sourceMaps: true,
                                        },
                                    },
                                    {
                                        loader: require.resolve('ts-loader'),
                                        options: {
                                            onlyCompileBundledFiles: true,
                                            transpileOnly: true,
                                        },
                                    },
                                ],
                                exclude: /(node_modules)/,
                            },
                            {
                                test: /\.jsx?$/,
                                loaders: [
                                    {
                                        loader: require.resolve('babel-loader'),
                                        options: {
                                            presets: [['@babel/preset-env', { modules: false }]],
                                            plugins: ['angularjs-annotate'],
                                            sourceMaps: true,
                                        },
                                    },
                                ],
                                exclude: /(node_modules)/,
                            }
                        ], (0, tslib_1.__read)((0, loaders_1.getStyleLoaders)()), false), [
                            {
                                test: /\.html$/,
                                exclude: [/node_modules/],
                                use: {
                                    loader: require.resolve('html-loader'),
                                },
                            }
                        ], false), (0, tslib_1.__read)((0, loaders_1.getFileLoaders)()), false),
                    },
                    _a.optimization = optimization,
                    _a)];
        }
    });
}); };
var loadWebpackConfig = function (options) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var baseConfig, customWebpackPath, customConfig, configGetter, err_1;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getBaseWebpackConfig(options)];
            case 1:
                baseConfig = _a.sent();
                customWebpackPath = path.resolve(process.cwd(), 'webpack.config.js');
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, accessPromise(customWebpackPath)];
            case 3:
                _a.sent();
                customConfig = require(customWebpackPath);
                configGetter = customConfig.getWebpackConfig || customConfig;
                if (typeof configGetter !== 'function') {
                    throw Error('Custom webpack config needs to export a function implementing CustomWebpackConfigurationGetter. Function needs to be ' +
                        'module export or named "getWebpackConfig"');
                }
                return [2 /*return*/, configGetter(baseConfig, options)];
            case 4:
                err_1 = _a.sent();
                if (err_1.code === 'ENOENT') {
                    return [2 /*return*/, baseConfig];
                }
                throw err_1;
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.loadWebpackConfig = loadWebpackConfig;
//# sourceMappingURL=webpack.plugin.config.js.map