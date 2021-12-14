import { Transform } from "stream";
import { BigQueryRow } from "./types";

export function printProgress(): Transform {
  return new Transform({
    objectMode: true,
    transform: (row: BigQueryRow, encoding, done) => {
      console.log(`Sending stats for: ${row.plugin_id} / ${row.package_name}`);
      done(null, row);
    },
  });
}
