const grafanaPackages = ["@grafana/ui", "@grafana/data", "@grafana/runtime"];

module.exports = async ({ core, exec }) => {
  const fs = require("fs");

  const pluginsPath = process.env.PLUGINS_FILE_PATH;
  const table = process.env.BQ_TABLE;
  const dataset = process.env.BQ_DATASET;

  const plugins = await readFile(fs, pluginsPath);
  const failed = [];

  for (const plugin of plugins) {
    try {
      core.startGroup(`Plugin: ${plugin.slug} (v${plugin.version})`);

      await exec.exec(
        [
          "/bin/bash -c 'node node_modules/.bin/levitate gobble",
          `--repositories ${plugin.url}`,
          `--filters ${grafanaPackages.join(" ")}`,
          "--jsonlines |",
          "node node_modules/.bin/levitate-bq",
          `--dataset ${dataset}`,
          `--table ${table}'`,
        ].join(" ")
      );
    } catch (error) {
      failed.push(plugin);
      core.error(`FAILED: ${plugin.slug} (${plugin.version}) - ${error}`);
    } finally {
      core.endGroup();
    }
  }

  if (failed.length > 0) {
    core.setFailed(`ERROR: ${failed.length} plugins failed to be levitated`);
  }
};

function readFile(fs, path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) return reject(err);
      return resolve(JSON.parse(data));
    });
  });
}
