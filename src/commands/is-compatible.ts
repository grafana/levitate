import chalk from 'chalk';
import { createProgram, getNpmPackageVersionFromProjectPath, PackageWithVersion } from '..';
import { printIncompatibilities } from '../utils.print.comparison';
import { compareUsageWithPackage } from '../utils/compare.source';

export async function isCompatible(projectPath: string, packagesToCheck: PackageWithVersion[]): Promise<void> {
  const projectProgram = createProgram(projectPath);
  for (const pkg of packagesToCheck) {
    console.log(
      `◎ Checking compatibility between ${chalk.blue(projectPath)} and ${chalk.blue(pkg.name)}@${chalk.yellow(
        pkg.version
      )}...`
    );
    // check if this package is used in the project if not skip
    const installedPackageVersion = await getNpmPackageVersionFromProjectPath(projectPath, pkg.name);
    if (!installedPackageVersion) {
      console.log(
        chalk.grey(`> Skipping package ${pkg.name}  because it is not used in the project or not installed locally.`)
      );
      console.log(
        chalk.grey(
          '  did you forget to run ' + chalk.yellow('yarn install') + ' or ' + chalk.yellow('npm install') + '?'
        )
      );
      continue;
    }

    const pkgFrom = `${pkg.name}@${installedPackageVersion}`;
    const pkgTo = `${pkg.name}@${pkg.version}`;
    const incompatibilities = await compareUsageWithPackage(projectProgram, pkgFrom, pkgTo);

    console.log(chalk.yellow(`\nComparing ${pkgFrom} to ${pkgTo}`));
    printIncompatibilities(incompatibilities);
    console.log('---\n');
  }
  return;
}
