"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var webpack_plugin_config_1 = require("./webpack.plugin.config");
var fs_1 = (0, tslib_1.__importDefault)(require("fs"));
// eslint-disable-next-line no-duplicate-imports
var webpackConfig = (0, tslib_1.__importStar)(require("./webpack.plugin.config"));
jest.mock('./webpack/loaders', function () { return ({
    getFileLoaders: function () { return []; },
    getStylesheetEntries: function () { return ({}); },
    getStyleLoaders: function () { return []; },
}); });
var modulePathsMock = [
    'some/path/module.ts',
    'some/path/module.ts.whatever',
    'some/path/module.tsx',
    'some/path/module.tsx.whatever',
    'some/path/anotherFile.ts',
    'some/path/anotherFile.tsx',
];
describe('Plugin webpack config', function () {
    describe('findModuleTs', function () {
        beforeAll(function () {
            jest.spyOn(fs_1.default, 'statSync').mockReturnValue({
                isDirectory: function () { return false; },
            });
        });
        afterAll(function () {
            jest.restoreAllMocks();
        });
        it('finds module.ts and module.tsx files', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            var moduleFiles;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, webpack_plugin_config_1.findModuleFiles)('/', modulePathsMock)];
                    case 1:
                        moduleFiles = _a.sent();
                        expect(moduleFiles.length).toBe(2);
                        // normalize windows path - \\ -> /
                        expect(moduleFiles.map(function (p) { return p.replace(/\\/g, '/'); })).toEqual(['/some/path/module.ts', '/some/path/module.tsx']);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('loadWebpackConfig', function () {
        beforeAll(function () {
            jest.spyOn(webpackConfig, 'findModuleFiles').mockReturnValue(new Promise(function (res, _) { return res([]); }));
        });
        afterAll(function () {
            jest.restoreAllMocks();
        });
        it('uses default config if no override exists', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            var spy;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        spy = jest.spyOn(process, 'cwd');
                        spy.mockReturnValue(__dirname + "/mocks/webpack/noOverride/");
                        return [4 /*yield*/, (0, webpack_plugin_config_1.loadWebpackConfig)({})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('calls customConfig if it exists', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            var spy, config;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        spy = jest.spyOn(process, 'cwd');
                        spy.mockReturnValue(__dirname + "/mocks/webpack/overrides/");
                        return [4 /*yield*/, (0, webpack_plugin_config_1.loadWebpackConfig)({})];
                    case 1:
                        config = _a.sent();
                        expect(config.name).toBe('customConfig');
                        return [2 /*return*/];
                }
            });
        }); });
        it('loads export named getWebpackConfiguration', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            var spy, config;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        spy = jest.spyOn(process, 'cwd');
                        spy.mockReturnValue(__dirname + "/mocks/webpack/overridesNamedExport/");
                        return [4 /*yield*/, (0, webpack_plugin_config_1.loadWebpackConfig)({})];
                    case 1:
                        config = _a.sent();
                        expect(config.name).toBe('customConfig');
                        return [2 /*return*/];
                }
            });
        }); });
        it('throws an error if module does not export function', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            var spy;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        spy = jest.spyOn(process, 'cwd');
                        spy.mockReturnValue(__dirname + "/mocks/webpack/unsupportedOverride/");
                        return [4 /*yield*/, expect((0, webpack_plugin_config_1.loadWebpackConfig)({})).rejects.toThrowError()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=webpack.plugin.config.test.js.map