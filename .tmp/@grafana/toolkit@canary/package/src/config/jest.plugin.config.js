"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadJestPluginConfig = exports.jestConfig = exports.allowedJestConfigOverrides = void 0;
var tslib_1 = require("tslib");
var path = require("path");
var fs_1 = (0, tslib_1.__importDefault)(require("fs"));
exports.allowedJestConfigOverrides = [
    'snapshotSerializers',
    'moduleNameMapper',
    'globalSetup',
    'globalTeardown',
    'testEnvironment',
];
var getSetupFile = function (filePath) {
    if (fs_1.default.existsSync(filePath + ".js")) {
        return filePath + ".js";
    }
    if (fs_1.default.existsSync(filePath + ".ts")) {
        return filePath + ".ts";
    }
    return undefined;
};
var jestConfig = function (baseDir) {
    if (baseDir === void 0) { baseDir = process.cwd(); }
    var jestConfigOverrides = (require(path.resolve(baseDir, 'package.json')).jest || {});
    var deniedOverrides = jestConfigOverrides
        ? Object.keys(jestConfigOverrides).filter(function (override) { return exports.allowedJestConfigOverrides.indexOf(override) === -1; })
        : [];
    if (deniedOverrides.length > 0) {
        console.error("\ngrafana-toolkit doesn't support following Jest options: ", deniedOverrides);
        console.log('Supported Jest options are: ', JSON.stringify(exports.allowedJestConfigOverrides));
        throw new Error('Provided Jest config is not supported');
    }
    var shimsFilePath = path.resolve(baseDir, 'config/jest-shim');
    var setupFilePath = path.resolve(baseDir, 'config/jest-setup');
    // Mock css imports for tests. Otherwise Jest will have troubles understanding SASS/CSS imports
    var moduleNameMapper = jestConfigOverrides.moduleNameMapper, otherOverrides = (0, tslib_1.__rest)(jestConfigOverrides, ["moduleNameMapper"]);
    var moduleNameMapperConfig = (0, tslib_1.__assign)({ '\\.(css|sass|scss)$': __dirname + "/styles.mock.js", 'react-inlinesvg': __dirname + "/react-inlinesvg.tsx" }, moduleNameMapper);
    var setupFile = getSetupFile(setupFilePath);
    var shimsFile = getSetupFile(shimsFilePath);
    var setupFiles = [setupFile, shimsFile, __dirname + "/matchMedia.js", require.resolve('jest-canvas-mock')].filter(function (f) { return f; });
    var defaultJestConfig = {
        verbose: false,
        moduleDirectories: ['node_modules', 'src'],
        moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
        setupFiles: setupFiles,
        globals: {
            'ts-jest': {
                isolatedModules: true,
                tsconfig: path.resolve(baseDir, 'tsconfig.json'),
            },
        },
        coverageReporters: ['json-summary', 'text', 'lcov'],
        collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**', '!**/vendor/**'],
        reporters: [
            'default',
            [
                require.resolve('jest-junit'),
                {
                    outputDirectory: 'coverage',
                },
            ],
        ],
        testEnvironment: require.resolve('jest-environment-jsdom-fifteen'),
        testMatch: [
            '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
            '<rootDir>/src/**/*.{spec,test,jest}.{js,jsx,ts,tsx}',
            '<rootDir>/spec/**/*.{spec,test,jest}.{js,jsx,ts,tsx}',
        ],
        transform: {
            '^.+\\.js$': 'babel-jest',
            '^.+\\.tsx?$': require.resolve('ts-jest'),
        },
        transformIgnorePatterns: [
            '[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|jsx|ts|tsx)$',
            '^.+\\\\.module\\\\.(css|sass|scss)$',
        ],
        moduleNameMapper: moduleNameMapperConfig,
    };
    return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, defaultJestConfig), otherOverrides);
};
exports.jestConfig = jestConfig;
/**
 * This will load the existing just setup, or use the default if it exists
 */
var loadJestPluginConfig = function (baseDir) {
    if (baseDir === void 0) { baseDir = process.cwd(); }
    var cfgpath = path.resolve(baseDir, 'jest.config.js');
    if (!fs_1.default.existsSync(cfgpath)) {
        var src = path.resolve(baseDir, 'node_modules/@grafana/toolkit/src/config/jest.plugin.config.local.js');
        fs_1.default.copyFileSync(src, cfgpath);
        console.log('Using standard jest plugin config', src);
    }
    return require(cfgpath);
};
exports.loadJestPluginConfig = loadJestPluginConfig;
//# sourceMappingURL=jest.plugin.config.js.map