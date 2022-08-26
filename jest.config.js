/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  modulePathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/node_modules', '<rootDir>/.tmp'],
};
