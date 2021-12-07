import * as yargs from "yargs";

yargs
  .scriptName("poc3-bq")
  .usage("$0 <cmd> [args]")
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
    },
    async function (args) {}
  )
  .help().argv;
