const grafanaPackages = ["@grafana/ui", "@grafana/data", "@grafana/runtime"];

module.exports = async ({ core, exec }) => {
  const fs = require("fs");
  
  const pluginsPath = process.env.PLUGINS_FILE_PATH;
  const table = process.env.BQ_TABLE;
  const dataset = process.env.BQ_DATASET;

  const plugins = await readFile(fs, pluginsPath);

  for (const plugin of plugins) {
    try {
      core.startGroup(`Plugin: ${plugin.slug} (v${plugin.version})`);
      core.info(`running levitate commands`);

      await exec.exec(`
                ./node_modules/.bin/levitate gobble \
                    --repositories ${plugin.url} \
                    --filters ${grafanaPackages.join(" ")} \
                    --jsonlines \
                    | ./node_modules/.bin/levitate-bq \
                        --dataset ${dataset} \
                        --table ${table}
            `);
    } catch (error) {
      core.error(`levitate commands failed: ${error}`);
    } finally {
      core.endGroup();
    }
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
