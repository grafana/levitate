import * as yargs from "yargs";
import * as path from "path";
import { compareExports } from "./utils.compare";
import { getImportsInfo, getGroupedImports } from "./utils.compiler.imports";
import {
  printComparison,
  printImports as printListOfImports,
  printExports,
} from "./utils.print";
import {
  getCompareCliArgs,
  getListImportsCliArgs,
  CliError,
} from "./utils.cli";
import { getExportInfo } from "./utils.compiler.exports";

yargs
  .scriptName("poc3")
  .usage("$0 <cmd> [args]")

  // Compare exports
  // ----------------------------
  // Prints out a comparison between files / packages / etc.
  //
  // Example: (@grafana/data:8.2.5 is only installed in this project for testing purposes, will be removed later)
  // $> node ./dist/bin.js compare --current-package ./node_modules/@grafana/data/index.d.ts --prev-package ../grafana/packages/grafana-data/dist/index.d.ts
  .command(
    "compare",
    "Compares the exports of packages.",
    (yargs) => {
      yargs.option("prev-package", {
        type: "string",
        default: null,
        describe:
          "A path to the previous version of the package directory which contains an `index.d.ts` type definition file.",
      });

      yargs.option("current-package", {
        type: "string",
        default: null,
        describe:
          "A path to the current version of the package directory which contains an `index.d.ts` type definition file.",
      });

      yargs.option("prev-path", {
        type: "string",
        default: null,
        describe:
          "A path to the previous version of a module. (Overrides --prev-package)",
      });

      yargs.option("current-path", {
        type: "string",
        default: null,
        describe:
          "A path to the current version of a module. (Overrides --current-package)",
      });
    },
    function (args) {
      try {
        const { prevPath, currentPath } = getCompareCliArgs(args);
        const prevPathResolved = path.resolve(process.cwd(), prevPath);
        const currentPathResolved = path.resolve(process.cwd(), currentPath);
        const comparison = compareExports(
          prevPathResolved,
          currentPathResolved
        );

        printComparison(comparison);
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
        describe:
          "Prints a verbose list including occurances as a valid JSON string representation.",
      });

      yargs.option("filters", {
        type: "string",
        array: true,
        describe:
          "A white-space separated list of package names to return import information for.",
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
        const { path, isVerbose, isJson, filters } =
          getListImportsCliArgs(args);
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
    function ({ path }) {
      printExports(getExportInfo(path));
    }
  )

  .help().argv;
