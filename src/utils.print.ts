import chalk from 'chalk';
import { ExportsInfo, ImportInfo } from './types';
import { debug } from './utils.log';

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
    console.log(JSON.stringify(imports, null, 4));
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
      console.log('');
      console.log(chalk.bold(packageName) + ' ' + chalk.gray(`(${importsByPackageName[packageName].length} imports)`));
      console.log('===============================');

      // Loop through all the imports from a certain package
      importsByPackageName[packageName]
        .sort((a, b) => b.count - a.count)
        .forEach((i) => {
          const name = i.isDefaultImport ? 'default' : i.propertyName;

          console.log(`\t ${chalk.green.bold(name)} ${chalk.gray(`(${i.count} occurances)`)}`);

          if (isVerbose) {
            i.occurances.forEach((ii) => {
              console.log(`\t\t ${chalk.bold.gray('Filename')}: ${chalk.gray(ii.fileName)}`);
              console.log(`\t\t ${chalk.gray.bold('Import statement')}: ${chalk.gray(ii.importStatementAsText)}`);
              console.log('');
            });
          }
        });
    });
  }
}

export function printExports(exports: ExportsInfo) {
  debug('Printing results...');

  console.log('');
  console.log('List of exported members:');
  console.log('===================================');
  console.log(Object.keys(exports.exports).forEach((name) => console.log(`\t - ${name}`)));
  console.log('===================================');
}

export function indentLines(str: string, tabsCount: number) {
  return str.split('\n').reduce((acc, line) => `${acc}${indentLine(line, tabsCount)}\n`, '');
}

export function indentLine(str: string, count: number) {
  let tabs = '';

  for (let i = 0; i < count; i++) {
    tabs += '\t';
  }

  return `${tabs}${str}`;
}
