import { BigQuery } from "@google-cloud/bigquery";
import type bigquery from "@google-cloud/bigquery/build/src/types";
import path from "path";

type Options = {
  dataset: string;
  table: string;
};

const client = new BigQuery({
  keyFilename: path.join(__dirname, process.env["BIGQUERY_KEY_FILENAME"] ?? ''),
});

export function writeToBigQueryTable(options: Options) {
  const { dataset, table } = options;
  return client.dataset(dataset).table(table).createWriteStream("json");
}

export async function applySchemaToBigQuery(options: Options): Promise<void> {
  const schema = createSchema();
  const dataset = client.dataset(options.dataset);
  const table = dataset.table(options.table);

  const [exists] = await table.exists();

  if (exists) {
    await table.setMetadata({ schema });
    return;
  }

  await dataset.createTable(options.table, {
    schema,
    timePartitioning: {
      type: "DAY",
      field: "created",
    },
  });
}

function createSchema(): bigquery.ITableSchema {
  return {
    fields: [
      {
        name: "created",
        type: "TIMESTAMP",
        mode: "REQUIRED",
      },
      {
        name: "plugin_id",
        type: "STRING",
        mode: "REQUIRED",
      },
      {
        name: "plugin_repository",
        type: "STRING",
        mode: "REQUIRED",
      },
      {
        name: "plugin_version",
        type: "STRING",
        mode: "NULLABLE",
      },
      {
        name: "plugin_type",
        type: "STRING",
        mode: "NULLABLE",
      },
      {
        name: "is_default_import",
        type: "BoOLEAN",
        mode: "NULLABLE",
      },
      {
        name: "is_named_import",
        type: "BoOLEAN",
        mode: "NULLABLE",
      },
      {
        name: "import_statement",
        type: "STRING",
        mode: "NULLABLE",
      },
      {
        name: "package_name",
        type: "STRING",
        mode: "NULLABLE",
      },
      {
        name: "file_name",
        type: "STRING",
        mode: "REQUIRED",
      },
      {
        name: "property_name",
        type: "STRING",
        mode: "NULLABLE",
      },
    ],
  };
}
