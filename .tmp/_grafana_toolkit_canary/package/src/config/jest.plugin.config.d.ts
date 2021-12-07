export declare const allowedJestConfigOverrides: string[];
export declare const jestConfig: (baseDir?: string) => {
    snapshotSerializers: string[];
    verbose: boolean;
    moduleDirectories: string[];
    moduleFileExtensions: string[];
    setupFiles: (string | undefined)[];
    globals: {
        'ts-jest': {
            isolatedModules: boolean;
            tsconfig: string;
        };
    };
    coverageReporters: string[];
    collectCoverageFrom: string[];
    reporters: (string | (string | {
        outputDirectory: string;
    })[])[];
    testEnvironment: string;
    testMatch: string[];
    transform: {
        '^.+\\.js$': string;
        '^.+\\.tsx?$': string;
    };
    transformIgnorePatterns: string[];
    moduleNameMapper: {
        '\\.(css|sass|scss)$': string;
        'react-inlinesvg': string;
    };
};
/**
 * This will load the existing just setup, or use the default if it exists
 */
export declare const loadJestPluginConfig: (baseDir?: string) => any;
