import { Transform } from "stream";
import { BigQueryRow } from "./types";

export function jsonLineBreak(): Transform {
  let isFirst = true;

  return new Transform({
    objectMode: true,
    transform(row: BigQueryRow, _, done) {
      const json = JSON.stringify(row);

      if (isFirst) {
        isFirst = false;
        return done(null, json);
      }

      done(null, `\n${json}`);
    },
  });
}
