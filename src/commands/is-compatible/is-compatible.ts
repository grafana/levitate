import chalk from 'chalk';
import { printIncompatibilities } from '../../print/incompatibilities';
import { PackageWithVersion } from '../../types';
import { getIncompatibilitiesBetweenPackages } from '../../comparison/source';
import { getNpmPackageVersionFromProjectPath } from '../../utils/npm';
import { createTsProgram } from '../../utils/typescript';
import { logError, logInfo, logWarning } from '../../utils/log';

export async function isCompatible(
  projectPath: string,
  packagesToCheck: PackageWithVersion[],
  options: {
    printIncompatibilities: boolean;
    force: boolean;
    markdown: boolean;
  }
): Promise<boolean> {
  const projectProgram = createTsProgram(projectPath);

  let isPathCompatible = true;
  for (const pkg of packagesToCheck) {
    logInfo('\n');
    logInfo(
      `🔬 Checking compatibility between ${chalk.blue(projectPath)} and ${chalk.blue(pkg.name)}@${chalk.yellow(
        pkg.version
      )}...`
    );
    // check if this package is used in the project if not skip
    let installedPackageVersion = await getNpmPackageVersionFromProjectPath(projectPath, pkg.name);
    if (!installedPackageVersion && !options.force) {
      logWarning(
        chalk.grey(`   Skipping package ${pkg.name} because it is not used in the project or not installed locally.`)
      );
      logWarning(
        chalk.grey(
          '   did you forget to run ' + chalk.yellow('yarn install') + ' or ' + chalk.yellow('npm install') + '?\n'
        )
      );
      continue;
    }

    if (!installedPackageVersion && options.force) {
      installedPackageVersion = 'latest';
    }

    const pkgFrom = `${pkg.name}@${installedPackageVersion}`;
    const pkgTo = `${pkg.name}@${pkg.version}`;
    try {
      const incompatibilities = await getIncompatibilitiesBetweenPackages(projectProgram, pkgFrom, pkgTo);

      if (incompatibilities.length > 0 && options.printIncompatibilities) {
        isPathCompatible = false;
        logInfo(chalk.yellow(`\nComparing ${pkgFrom} to ${pkgTo}`));
        printIncompatibilities(incompatibilities, { markdown: options.markdown });
      }
    } catch (e) {
      logError('Could not process the package ' + pkg.name);
    }
  }
  return isPathCompatible;
}
