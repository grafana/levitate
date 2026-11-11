import ts from 'typescript';
import { compareExports } from '../commands/compare/compare.js';
import { getExportInfo } from '../compiler/exports.js';
import { generateTmpFileWithContent } from '../tests/test-utils.js';
import { getPackageUsage } from '../usage/usage.js';
import { createTsProgram } from '../utils/typescript.js';
import { getIncompatibilitiesFromComparison } from './source.js';

const previousAPI = `
  interface Config { stable: string; nested: { value: string }; unused: boolean; }
  export declare const config: Config;
`;

function incompatibilities(currentAPI: string, body: string) {
  const previousFile = generateTmpFileWithContent(previousAPI);
  const currentFile = generateTmpFileWithContent(currentAPI);
  const consumerFile = generateTmpFileWithContent(`import { config } from 'testing-module'; ${body}`);
  const program = createTsProgram(consumerFile, { paths: { 'testing-module': [previousFile] } });
  const sourceFile = program.getSourceFile(consumerFile) as ts.SourceFile;
  const usages = getPackageUsage(program, getExportInfo(previousFile), 'testing-module').get(sourceFile)!;
  return getIncompatibilitiesFromComparison({
    sourceFile,
    checker: program.getTypeChecker(),
    usages,
    comparison: compareExports(previousFile, currentFile, {}),
  }).map(({ name }) => name);
}

const withoutUnused = previousAPI.replace('unused: boolean;', '');

describe('Object property compatibility', () => {
  it.each(['config.stable', 'config.stable.toUpperCase()', 'config.nested.value'])(
    'ignores unrelated removals when reading %s',
    (expression) => {
      expect(incompatibilities(withoutUnused, `console.log(${expression});`)).toEqual([]);
    }
  );

  it.each([
    `import React from 'react';`,
    'const o = { config: 1 };',
    'declare const p: any; p.config;',
    'function f(config: any) { return config; }',
  ])('ignores unrelated code: %s', (body) => {
    expect(incompatibilities(withoutUnused, `config.stable; ${body}`)).toEqual([]);
  });

  it.each([
    ['removed property', withoutUnused.replace('stable: string;', ''), 'config.stable'],
    ['changed property', withoutUnused.replace('stable: string', 'stable: number'), 'config.stable'],
    ['changed nested property', withoutUnused.replace('value: string', 'value: number'), 'config.nested.value'],
    ['removed export', '', 'config.stable'],
    ['readonly write', withoutUnused.replace('stable: string', 'readonly stable: string'), `config.stable = 'x'`],
    ['optional property', withoutUnused.replace('stable: string', 'stable?: string'), 'config.stable'],
    ['nullable export', withoutUnused.replace('config: Config', 'config: Config | undefined'), 'config.stable'],
    ['nullable property', withoutUnused.replace('stable: string', 'stable: string | undefined'), 'config.stable'],
    [
      'nullable alias',
      `${withoutUnused.replace('stable: string', 'stable: Nullable')} type Nullable = string | undefined;`,
      'config.stable',
    ],
    ['unresolved type', withoutUnused.replace('nested: { value: string }', 'nested: Missing'), 'config.nested.value'],
    ['mapped readonly', withoutUnused.replace('config: Config', 'config: Readonly<Config>'), `config.stable = 'x'`],
  ])('retains findings for a %s', (_name, current, expression) => {
    expect(incompatibilities(current, `${expression};`)).toContain('config');
  });

  it.each([
    'consume(config)',
    'const copy = { ...config }',
    'const copy = config',
    'const copy = { config }',
    'const { stable } = config',
    'config[key]',
    'Object.values(config.nested)',
    'config?.stable',
    `import { config as other } from 'testing-module'; other.unused;`,
    `import * as runtime from 'testing-module'; runtime['config'].unused;`,
    `import runtime from 'testing-module'; runtime['config'].unused;`,
    `export * from 'testing-module';`,
    `void import('testing-module');`,
    `require('testing-module');`,
    `import runtime = require('testing-module');`,
  ])('retains findings for unsupported usage: %s', (body) => {
    expect(incompatibilities(withoutUnused, `config.stable; ${body};`)).toContain('config');
  });
});
