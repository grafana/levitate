import { BigQuery } from "@google-cloud/bigquery";

type Options = {
  dataset: string;
  table: string;
};

const client = new BigQuery();

export function bigQueryTable(options: Options) {
  const { dataset, table } = options;
  return client.dataset(dataset).table(table).createWriteStream("json");
}
