"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileLoaders = exports.getStyleLoaders = exports.hasThemeStylesheets = exports.getStylesheetEntries = void 0;
var tslib_1 = require("tslib");
var fs_1 = (0, tslib_1.__importDefault)(require("fs"));
var path_1 = (0, tslib_1.__importDefault)(require("path"));
var getPluginId_1 = require("../utils/getPluginId");
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var supportedExtensions = ['css', 'scss', 'less', 'sass'];
var getStylesheetPaths = function (root) {
    if (root === void 0) { root = process.cwd(); }
    return [root + "/src/styles/light", root + "/src/styles/dark"];
};
var getStylesheetEntries = function (root) {
    if (root === void 0) { root = process.cwd(); }
    var stylesheetsPaths = getStylesheetPaths(root);
    var entries = {};
    supportedExtensions.forEach(function (e) {
        stylesheetsPaths.forEach(function (p) {
            var entryName = p.split('/').slice(-1)[0];
            if (fs_1.default.existsSync(p + "." + e)) {
                if (entries[entryName]) {
                    console.log("\nSeems like you have multiple files for " + entryName + " theme:");
                    console.log(entries[entryName]);
                    console.log(p + "." + e);
                    throw new Error('Duplicated stylesheet');
                }
                else {
                    entries[entryName] = p + "." + e;
                }
            }
        });
    });
    return entries;
};
exports.getStylesheetEntries = getStylesheetEntries;
var hasThemeStylesheets = function (root) {
    if (root === void 0) { root = process.cwd(); }
    var stylesheetsPaths = getStylesheetPaths(root);
    var stylesheetsSummary = [];
    var result = stylesheetsPaths.reduce(function (acc, current) {
        if (fs_1.default.existsSync(current + ".css") || fs_1.default.existsSync(current + ".scss")) {
            stylesheetsSummary.push(true);
            return acc && true;
        }
        else {
            stylesheetsSummary.push(false);
            return false;
        }
    }, true);
    var hasMissingStylesheets = stylesheetsSummary.filter(function (s) { return s; }).length === 1;
    // seems like there is one theme file defined only
    if (result === false && hasMissingStylesheets) {
        console.error('\nWe think you want to specify theme stylesheet, but it seems like there is something missing...');
        stylesheetsSummary.forEach(function (s, i) {
            if (s) {
                console.log(stylesheetsPaths[i], 'discovered');
            }
            else {
                console.log(stylesheetsPaths[i], 'missing');
            }
        });
        throw new Error('Stylesheet missing!');
    }
    return result;
};
exports.hasThemeStylesheets = hasThemeStylesheets;
var getStyleLoaders = function () {
    var extractionLoader = {
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: '../',
        },
    };
    var cssLoaders = [
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                sourceMap: true,
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                plugins: function () { return [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: { flexbox: 'no-2009', grid: true },
                    }),
                ]; },
            },
        },
    ];
    var styleDir = path_1.default.resolve(process.cwd(), 'src', 'styles') + path_1.default.sep;
    var rules = [
        {
            test: /(dark|light)\.css$/,
            use: (0, tslib_1.__spreadArray)([extractionLoader], (0, tslib_1.__read)(cssLoaders), false),
        },
        {
            test: /(dark|light)\.scss$/,
            use: (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([extractionLoader], (0, tslib_1.__read)(cssLoaders), false), ['sass-loader'], false),
        },
        {
            test: /\.css$/,
            use: (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)(['style-loader'], (0, tslib_1.__read)(cssLoaders), false), ['sass-loader'], false),
            exclude: [styleDir + "light.css", styleDir + "dark.css"],
        },
        {
            test: /\.s[ac]ss$/,
            use: (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)(['style-loader'], (0, tslib_1.__read)(cssLoaders), false), ['sass-loader'], false),
            exclude: [styleDir + "light.scss", styleDir + "dark.scss"],
        },
        {
            test: /\.less$/,
            use: (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([
                {
                    loader: 'style-loader',
                }
            ], (0, tslib_1.__read)(cssLoaders), false), [
                {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true,
                    },
                },
            ], false),
            exclude: [styleDir + "light.less", styleDir + "dark.less"],
        },
    ];
    return rules;
};
exports.getStyleLoaders = getStyleLoaders;
var getFileLoaders = function () {
    var shouldExtractCss = (0, exports.hasThemeStylesheets)();
    return [
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
                shouldExtractCss
                    ? {
                        loader: require.resolve('file-loader'),
                        options: {
                            outputPath: '/',
                            name: '[path][name].[ext]',
                        },
                    }
                    : // When using single css import images are inlined as base64 URIs in the result bundle
                        {
                            loader: 'url-loader',
                        },
            ],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
            loader: require.resolve('file-loader'),
            options: {
                // Keep publicPath relative for host.com/grafana/ deployments
                publicPath: "public/plugins/" + (0, getPluginId_1.getPluginId)() + "/fonts",
                outputPath: 'fonts',
                name: '[name].[ext]',
            },
        },
    ];
};
exports.getFileLoaders = getFileLoaders;
//# sourceMappingURL=loaders.js.map