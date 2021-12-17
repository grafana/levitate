module.exports = async ({ context, core }) => {
    const { BigQuery } = require('@google-cloud/bigquery');
    const axios = require('axios');
    
    const credentials = process.env.BQ_SA_KEY;
    const projectId = process.env.BQ_PROJECT;
    const table = process.env.BQ_TABLE;
    const dataset = process.env.BQ_DATASET;

    const client = new BigQuery({ 
      credentials: JSON.parse(credentials), 
      projectId 
    });

    const [rows] = await client.dataset(dataset).table(table).query(`
      SELECT plugin_id, plugin_version
      FROM \`${projectId}.${dataset}.${table}\`
      GROUP BY plugin_id, plugin_version
    `);

    const pluginsToSkip = rows.reduce((toSkip, row) => {
      toSkip[createKey(row.plugin_id, row.plugin_version)];
      return toSkip;
    }, {});

    const { data } = await axios({
      method: 'GET',
      url: 'https://grafana.com/api/plugins'
    });

    const pluginsToLevitate = data.items.reduce((toLevitate, item) => {
      const { slug, version, url } = item;

      if (!toSkip[createKey(slug, version)] && existsOnGithub(url)) {
        toLevitate.push({ slug, version, url });
      }

      return toLevitate;
    }, []);

    const output = JSON.stringify(pluginsToLevitate);
    core.setOutput('plugins_to_levitate', output);
};

function createKey(slug, version) {
  return `${slug}|${version}`;
}

function existsOnGithub(url) {
  return typeof url === 'string' &&
    url.startsWith('https://github.com');
}