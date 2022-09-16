import { getExportInfo } from '../compiler/exports';
import { generateTmpFileWithContent } from '../tests/test-utils';
import { IdentifierWithCounter } from '../types';
import { createTsProgram } from '../utils/typescript';
import { getPackageUsage } from './usage';

export function getUsageForTesting({
  projectSrc,
  testingModuleSrc,
  testingModuleName = 'testing-module',
}): Record<string, IdentifierWithCounter> {
  const testingModuleFile = generateTmpFileWithContent(testingModuleSrc);
  const testingModuleExports = getExportInfo(testingModuleFile);

  const projectFile = generateTmpFileWithContent(projectSrc);
  const projectProgram = createTsProgram(projectFile, {
    paths: {
      'testing-module': [testingModuleFile],
    },
  });

  const usages = getPackageUsage(projectProgram, testingModuleExports, testingModuleName);
  const mainFile = Array.from(usages.keys()).find((f) => f.fileName === projectFile);
  return usages.get(mainFile);
}
