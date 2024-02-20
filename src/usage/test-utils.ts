import { getExportInfo } from '../compiler/exports.js';
import { generateTmpFileWithContent } from '../tests/test-utils.js';
import { createTsProgram } from '../utils/typescript.js';

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
