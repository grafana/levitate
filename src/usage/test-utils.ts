import { getExportInfo } from '../compiler/exports';
import { generateTmpFileWithContent } from '../tests/test-utils';
import { createTsProgram } from '../utils/typescript';

export function getProjectUsageSetupForTesting({
  projectSrc,
  testingPackageSrc,
  testingPackageName = 'testing-module',
}) {
  const testingModuleFile = generateTmpFileWithContent(testingPackageSrc);
  const testingModuleExports = getExportInfo(testingModuleFile);

  const projectFile = generateTmpFileWithContent(projectSrc);
  const projectProgram = createTsProgram(projectFile, {
    paths: {
      'testing-module': [testingModuleFile],
    },
  });

  return {
    projectFile,
    projectProgram,
    testingModuleExports,
    testingPackageName,
  };
}
