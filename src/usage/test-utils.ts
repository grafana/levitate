import { getExportInfo } from '../compiler/exports';
import { generateTmpFileWithContent } from '../tests/test-utils';
import { IdentifierWithCounter } from '../types';
import { createTsProgram } from '../utils/typescript';
import { getPackageUsage } from './usage';

export function getPackageUsageForTesting({
  projectSrc,
  testingPackageSrc,
  testingPackageName = 'testing-module',
}): Record<string, IdentifierWithCounter> {
  const testingModuleFile = generateTmpFileWithContent(testingPackageSrc);
  const testingModuleExports = getExportInfo(testingModuleFile);

  const projectFile = generateTmpFileWithContent(projectSrc);
  const projectProgram = createTsProgram(projectFile, {
    paths: {
      'testing-module': [testingModuleFile],
    },
  });

  const usages = getPackageUsage(projectProgram, testingModuleExports, testingPackageName);
  const mainFile = Array.from(usages.keys()).find((f) => f.fileName === projectFile);
  return usages.get(mainFile);
}
