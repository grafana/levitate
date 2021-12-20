#!/usr/bin/env node

import * as yargs from "yargs";
import chalk from "chalk";
import { compareExports, areChangesBreaking } from "./utils.compare";
import { getImportsInfo, getGroupedImports } from "./utils.compiler.imports";
import { printImports as printListOfImports, printExports } from "./utils.print";
import { printComparison } from "./utils.print.comparison";
import { getGobbleCliArgs, getListImportsCliArgs, CliError } from "./utils.cli";
import { resolvePackage } from "./utils.npm";
import { getExportInfo } from "./utils.compiler.exports";
import { gobble } from "./gobble";
import { exit } from "process";

yargs
  .scriptName("poc3")
  .usage("$0 <cmd> [args]")

  // Compare exports
  // ----------------------------
  // Prints out a comparison between files / packages / etc.
  //
  // Example: (@grafana/data:8.2.5 is only installed in this project for testing purposes, will be removed later)
  // $> node ./dist/bin.js compare --current ./node_modules/@grafana/data/index.d.ts --prev @grafana/data@canary
  .command(
    "compare",
    "Compares the exports of packages.",
    (yargs) => {
      yargs.option("prev", {
        type: "string",
        default: null,
        demandOption: true,
        describe:
          "Previous package version - a name of an NPM package, a URL to a tar ball or a local path pointing to a package directory (Make sure it contains an `index.d.ts` type definition file.)",
      });

      yargs.option("current", {
        type: "string",
        default: null,
        demandOption: true,
        describe:
          "Current package version - a name of an NPM package, a URL to a tar ball or a local path pointing to a package directory (Make sure it contains an `index.d.ts` type definition file.)",
      });
    },
    async function ({ prev, current }: { prev: string; current: string }) {
      try {
        const prevPathResolved = await resolvePackage(prev);
        const currentPathResolved = await resolvePackage(current);
        const comparison = compareExports(prevPathResolved, currentPathResolved);
        const isBreaking = areChangesBreaking(comparison);

        printComparison(comparison);

        if (isBreaking) {
          exit(1);
        }
      } catch (e) {
        console.log("");
        console.log(chalk.bgRed.bold.white(" ERROR "));

        if (e instanceof CliError) {
          console.log(`ERROR: ${e.message}\n\n`);
          yargs.showHelp();
        } else {
          console.log(e);
          exit(1);
        }
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
    "list-imports",
    "Lists imports used by a TypeScript module.",
    (yargs) => {
      yargs.option("path", {
        type: "string",
        default: null,
        demandOption: true,
        describe: "Path to a root module file.",
      });

      yargs.option("verbose", {
        type: "boolean",
        default: false,
        demandOption: false,
        describe: "Displays all occurances of an import if used.",
      });

      yargs.option("json", {
        type: "boolean",
        default: false,
        demandOption: false,
        describe: "Prints a verbose list including occurances as a valid JSON string representation.",
      });

      yargs.option("filters", {
        type: "string",
        array: true,
        describe: "A white-space separated list of package names to return import information for.",
      });

      //   yargs.option("repo-urls", {
      //     type: "string",
      //     default: null,
      //     array: true,
      //     describe: "A white-space separated list of git repository urls.",
      //   });

      //   yargs.option("cache-dir", {
      //     type: "string",
      //     default: `${__dirname}/../.cache`,
      //     describe: "A directory to use for persisting cloned git repositories.",
      //   });
    },
    function (args) {
      try {
        // @ts-ignore
        const { path, isVerbose, isJson, filters } = getListImportsCliArgs(args);
        const importsInfo = getImportsInfo(path, filters);
        const groupedImports = getGroupedImports(importsInfo.imports);

        printListOfImports({
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
    "list-exports",
    "Lists exported members of a TypeScript module.",
    (yargs) => {
      yargs.option("path", {
        type: "string",
        default: null,
        demandOption: true,
        describe: "Path to a root module file.",
      });
    },
    function ({ path }: { path: string }) {
      printExports(getExportInfo(path));
    }
  )

  // Gobble imports
  // ----------------------------
  // Lists imports for given github repos
  //
  // Example:
  //
  .command(
    "gobble",
    "Lists imports used from a github repo",
    (yargs) => {
      yargs.option("repositories", {
        type: "string",
        array: true,
        demandOption: true,
        describe: "Git repos to gobble",
      });
      yargs.option("filters", {
        type: "string",
        array: true,
        describe: "A white-space separated list of package names to return import information for.",
      });
      yargs.option("cacheDir", {
        type: "string",
        default: null,
        describe: "A directory to cache cloned repos",
      });
      yargs.option("jsonlines", {
        type: "boolean",
        default: false,
        describe: "Specify this flag to output JSON Lines",
      });
    },
    async function (args) {
      // @ts-ignore
      const { repositories, cacheDir, filters, jsonlines } = getGobbleCliArgs(args);
      repositories.forEach(async (repository) => {
        const gobbleImports = await gobble({ repository, cacheDir, filters, jsonlines });

        if (jsonlines) {
          for (const gi of gobbleImports) {
            console.log(JSON.stringify(gi));
          }
        }

        if (!jsonlines) {
          console.log(gobbleImports);
        }
      });
    }
  )
  .help().argv;
