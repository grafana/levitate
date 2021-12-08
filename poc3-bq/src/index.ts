import yargs from "yargs";
import { pipeline } from "stream/promises";
import { parser } from "stream-json/jsonl/Parser";
import { stringer } from "stream-json/jsonl/Stringer";
import { bigQueryTable } from "./bigQuery";
import { mapper } from "./mapper";
import { printProgress } from "./printProgress";

(async function () {
  try {
    const argv = await yargs
      .scriptName("poc3-bq")
      .usage("$0 -d [dataset] -t [table]")
      .alias("d", "dataset")
      .alias("t", "table")
      .demandOption(["d", "t"])
      .string(["d", "t"])
      .help("h")
      .alias("h", "help").argv;

    const { d: dataset, t: table } = argv;

    await pipeline(
      process.stdin,
      parser(),
      mapper(),
      printProgress(),
      stringer(),
      bigQueryTable({
        dataset,
        table,
      })
    );
  } catch (error) {
    console.error("failed to run poc3-bq due too: ", error);
  }
})();
