"use strict";
exports.__esModule = true;
var yargs = require("yargs");
var utils_compare_1 = require("./utils.compare");
var utils_compiler_imports_1 = require("./utils.compiler.imports");
var utils_print_1 = require("./utils.print");
var utils_cli_1 = require("./utils.cli");
var utils_compiler_exports_1 = require("./utils.compiler.exports");
yargs
    .scriptName("poc3")
    .usage("$0 <cmd> [args]")
    // Compare exports
    // ----------------------------
    // Prints out a comparison between files / packages / etc.
    //
    // Example: (@grafana/data:8.2.5 is only installed in this project for testing purposes, will be removed later)
    // $> node ./bin/bin.js compare --current-package ./node_modules/@grafana/data/index.d.ts --prev-package ../grafana/packages/grafana-data/dist/index.d.ts
    .command("compare", "Compares the exports of packages.", function (yargs) {
    yargs.option("prev-package", {
        type: "string",
        "default": null,
        describe: "A path to the previous version of the package directory which contains an `index.d.ts` type definition file."
    });
    yargs.option("current-package", {
        type: "string",
        "default": null,
        describe: "A path to the current version of the package directory which contains an `index.d.ts` type definition file."
    });
    yargs.option("prev-path", {
        type: "string",
        "default": null,
        describe: "A path to the previous version of a module. (Overrides --prev-package)"
    });
    yargs.option("current-path", {
        type: "string",
        "default": null,
        describe: "A path to the current version of a module. (Overrides --current-package)"
    });
}, function (args) {
    try {
        var _a = (0, utils_cli_1.getCompareCliArgs)(args), prevPath = _a.prevPath, currentPath = _a.currentPath;
        var comparison = (0, utils_compare_1.compareExports)(prevPath, currentPath);
        (0, utils_print_1.printComparison)(comparison);
    }
    catch (e) {
        if (e instanceof utils_cli_1.CliError) {
            console.log("ERROR: ".concat(e.message, "\n\n"));
            yargs.showHelp();
        }
        else {
            throw e;
        }
    }
})
    // List imports
    // ----------------------------
    // Lists imports for a certain module / file / package.
    //
    // Example:
    //
    .command("list-imports", "Lists imports used by a TypeScript module.", function (yargs) {
    yargs.option("path", {
        type: "string",
        "default": null,
        demandOption: true,
        describe: "Path to a root module file."
    });
    yargs.option("verbose", {
        type: "boolean",
        "default": false,
        demandOption: false,
        describe: "Displays all occurances of an import if used."
    });
    yargs.option("json", {
        type: "boolean",
        "default": false,
        demandOption: false,
        describe: "Prints a verbose list including occurances as a valid JSON string representation."
    });
    yargs.option("filters", {
        type: "string",
        array: true,
        describe: "A white-space separated list of package names to return import information for."
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
}, function (args) {
    try {
        var _a = (0, utils_cli_1.getListImportsCliArgs)(args), path = _a.path, isVerbose = _a.isVerbose, isJson = _a.isJson, filters = _a.filters;
        var importsInfo = (0, utils_compiler_imports_1.getImportsInfo)(path, filters);
        var groupedImports = (0, utils_compiler_imports_1.getGroupedImports)(importsInfo.imports);
        (0, utils_print_1.printImports)({
            imports: groupedImports,
            isVerbose: isVerbose,
            isJson: isJson
        });
    }
    catch (e) {
        if (e instanceof utils_cli_1.CliError) {
            console.log("ERROR: ".concat(e.message, "\n\n"));
            yargs.showHelp();
        }
        else {
            throw e;
        }
    }
})
    // List exports
    // ----------------------------
    // Lists exports for a certain module / file / package.
    //
    // Example:
    //
    .command("list-exports", "Lists exported members of a TypeScript module.", function (yargs) {
    yargs.option("path", {
        type: "string",
        "default": null,
        demandOption: true,
        describe: "Path to a root module file."
    });
}, function (_a) {
    var path = _a.path;
    (0, utils_print_1.printExports)((0, utils_compiler_exports_1.getExportInfo)(path));
})
    .help().argv;
