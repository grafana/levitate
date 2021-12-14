import yargs from "yargs";
import { pipeline } from "stream/promises";
import { parser } from "stream-json/jsonl/Parser";
import { stringer } from "stream-json/jsonl/Stringer";
import { applySchemaToBigQuery, writeToBigQueryTable } from "./bigQuery";
import { mapper } from "./mapper";
import { printProgress } from "./printProgress";

(async function () {
  try {
    const argv = await yargs
      .scriptName("levitate-bq")
      .usage("$0 -d [dataset] -t [table]")
      .alias("d", "dataset")
      .alias("t", "table")
      .demandOption(["d", "t"])
      .string(["d", "t"])
      .demandOption(['dataset', 'table'], 'Please provide both dataset and table arguments to work with this tool')
      .help("h")
      .alias("h", "help").argv;

    const { d: dataset, t: table } = argv;
    const options = { dataset, table };

    await applySchemaToBigQuery(options);

    await pipeline(
      process.stdin,
      parser(),
      mapper(),
      printProgress(),
      stringer(),
      writeToBigQueryTable(options)
    );
  } catch (error: unknown) {
    console.error("Failed due too: ", error);
  }
})();
