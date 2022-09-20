#!/usr/bin/env node

import * as yargs from 'yargs';
import chalk from 'chalk';
import { getImportsInfo, getGroupedImports } from './compiler/imports';
import { getListImportsCliArgs, CliError } from './utils/cli';
import { resolvePackage, resolveTargetPackages } from './utils/npm';
import { getExportInfo } from './compiler/exports';
import { exit } from 'process';
import { access } from 'fs/promises';
import { constants } from 'fs';
import { printImports } from './print/imports';
import { printExports } from './print/exports';
import { areChangesBreaking, compareExports } from './commands/compare/compare';
import { printComparison } from './print/comparison';
import { isCompatible } from './commands/is-compatible/is-compatible';
import { forceDebugExit } from './utils/debug';

// in DEBUG mode this allows the debugger to connect and disconnect more easily
if (process.env.DEBUG) {
  forceDebugExit();
}

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs
  .scriptName('levitate')
  .usage('$0 <cmd> [args]')

  // Compare exports
  // ----------------------------
  // Prints out a comparison between files / packages / etc.
  //
  // Example: (@grafana/data:8.2.5 is only installed in this project for testing purposes, will be removed later)
  // $> node ./dist/bin.js compare --current ./node_modules/@grafana/data/index.d.ts --prev @grafana/data@canary
  .command(
    'compare',
    'Compares the exports of packages.',
    (yargs) => {
      return yargs
        .option('prev', {
          type: 'string',
          default: null,
          demandOption: true,
          describe:
            'Previous package version - a name of an NPM package, a URL to a tar ball or a local path pointing to a package directory or a single file. (In case it is a directory make sure it contains an `index.d.ts` type definition file.)',
        })
        .option('current', {
          type: 'string',
          default: null,
          demandOption: true,
          describe:
            'Current package version - a name of an NPM package, a URL to a tar ball or a local path pointing to a package directory or a single file. (In case it is a directory make sure it contains an `index.d.ts` type definition file.)',
        });
    },
    async function ({ prev, current }: { prev: string; current: string }) {
      try {
        // Missing CLI arguments
        if (!prev || !current) {
          console.log('');
          console.error(chalk.bgRed.bold.white(' ERROR '));
          console.error('Missing arguments. Please make sure to provide both the --prev and --current options.\n');
          yargs.showHelp();
          exit(1);
        }

        const prevPathResolved = await resolvePackage(prev);
        const currentPathResolved = await resolvePackage(current);
        const comparison = compareExports(prevPathResolved, currentPathResolved);
        const isBreaking = areChangesBreaking(comparison);

        printComparison(comparison);

        if (isBreaking) {
          exit(1);
        }
      } catch (e) {
        console.log('');
        console.log(chalk.bgRed.bold.white(' ERROR '));
        console.log(e);

        exit(1);
      }
    }
  )

  .command(
    'is-compatible',
    'Checks for incompatibilities between the passed path and modules. It uses the modules versions extracted from npm list to compare.',
    (yargs) => {
      return yargs
        .option('target', {
          type: 'string',
          demandOption: true,
          describe:
            'The target packages with versions to check compatibility. Comma separated. e.g.: @grafana/data@latest,@grafana/ui@9.0.3',
        })
        .option('path', {
          type: 'string',
          demandOption: true,
          describe:
            'Path to your module file to check. If this module imports other modules, they\'ll be checked too.".',
        })
        .option('force', {
          type: 'boolean',
          default: false,
          describe: 'Force the check even if the target package is not installed.',
        });
    },
    async function ({ target, path, force }: { target: string; path: string; force: boolean }) {
      try {
        // validate the path is accesible and readable
        await access(path, constants.R_OK);

        const packages = await resolveTargetPackages(target);
        if (packages.length === 0) {
          throw new Error('Target list of packages is empty or invalid');
        }
        const isPathCompatible = await isCompatible(path, packages, { printIncompatibilities: true, force });
        if (isPathCompatible) {
          console.log('\n');
          console.log(chalk.green(`${path} appears to be compatible with ${target}`));
        } else {
          console.log(chalk.red(`${path} is not fully compatible with ${target}`));
          console.log('Please read over the compatibility report above and update possible issues.');
          console.log(
            '\nIf you think the compatibility issues are not a problem (e.g. only type changes), it is adviced to update the target list of packages to their latest version in your project.'
          );
          exit(1);
        }
      } catch (e) {
        console.error(chalk.bgRed.bold.white(' ERROR '));
        if (process.env.DEBUG) {
          console.error(e);
        } else if (e.code === 'ENOENT') {
          console.error('path:', path);
          console.error('File not found. Please make sure to provide a valid path to your module file.\n');
        } else {
          console.error(e.message);
        }
        exit(1);
      }
    }
  )

  // List imports
  // ----------------------------
  // Lists imports for a certain module / file / package.
  //
  // Example:
  //
  .command(
    'list-imports',
    'Lists imports used by a TypeScript module.',
    (yargs) => {
      return yargs
        .option('path', {
          type: 'string',
          default: null,
          demandOption: true,
          describe: 'Path to a root module file.',
        })
        .option('verbose', {
          type: 'boolean',
          default: false,
          demandOption: false,
          describe: 'Displays all occurances of an import if used.',
        })
        .option('json', {
          type: 'boolean',
          default: false,
          demandOption: false,
          describe: 'Prints a verbose list including occurances as a valid JSON string representation.',
        })
        .option('filters', {
          type: 'string',
          array: true,
          describe: 'A white-space separated list of package names to return import information for.',
        });
    },
    function (args) {
      try {
        const { path, isVerbose, isJson, filters } = getListImportsCliArgs(args);
        const importsInfo = getImportsInfo(path, filters);
        const groupedImports = getGroupedImports(importsInfo.imports);

        printImports({
          imports: groupedImports,
          isVerbose,
          isJson,
        });
      } catch (e) {
        if (e instanceof CliError) {
          console.log(`ERROR: ${e.message}\n\n`);
          yargs.showHelp();
        } else {
          throw e;
        }
      }
    }
  )

  // List exports
  // ----------------------------
  // Lists exports for a certain module / file / package.
  //
  // Example:
  //
  .command(
    'list-exports',
    'Lists exported members of a TypeScript module.',
    (yargs) => {
      return yargs.option('path', {
        type: 'string',
        default: null,
        demandOption: true,
        describe: 'Path to a root module file.',
      });
    },
    async function ({ path }: { path: string }) {
      const pathResolved = await resolvePackage(path);
      printExports(getExportInfo(pathResolved));
    }
  )
  .command('$0', 'default command', (argv) => {
    console.error(chalk.red('Unknown command:', chalk.blue(argv.argv['_'][0])));
    console.log('Try running levitate with --help to see available commands.');
    exit(1);
  })
  .help().argv;
