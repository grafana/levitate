import chalk from 'chalk';
import { ImportInfo } from '../types.js';
import { logInfo } from '../utils/log.js';

export function printImports({
  imports,
  isVerbose = false,
  isJson = false,
}: {
  imports: ImportInfo[];
  // Will also print the occurances if set to true
  isVerbose?: boolean;
  // Will print it as a valid JSON string representation if set to true
  isJson?: boolean;
}) {
  if (isJson) {
    logInfo(JSON.stringify(imports, null, 4));
  } else {
    // Group the imports by packages
    const importsByPackageName: Record<string, ImportInfo[]> = {};
    imports.forEach((i) => {
      if (importsByPackageName[i.packageName]) {
        importsByPackageName[i.packageName] = [...importsByPackageName[i.packageName], i];
      } else {
        importsByPackageName[i.packageName] = [i];
      }
    });

    // Loop through all the packages
    Object.keys(importsByPackageName).forEach((packageName) => {
      logInfo('');
      logInfo(chalk.bold(packageName) + ' ' + chalk.gray(`(${importsByPackageName[packageName].length} imports)`));
      logInfo('===============================');

      // Loop through all the imports from a certain package
      importsByPackageName[packageName]
        .sort((a, b) => b.count - a.count)
        .forEach((i) => {
          const name = i.isDefaultImport ? 'default' : i.propertyName;

          logInfo(`\t ${chalk.green.bold(name)} ${chalk.gray(`(${i.count} occurances)`)}`);

          if (isVerbose) {
            i.occurances.forEach((ii) => {
              logInfo(`\t\t ${chalk.bold.gray('Filename')}: ${chalk.gray(ii.fileName)}`);
              logInfo(`\t\t ${chalk.gray.bold('Import statement')}: ${chalk.gray(ii.importStatementAsText)}`);
              logInfo('');
            });
          }
        });
    });
  }
}
