module.exports = async ({ context, core, options }) => {
    console.log('options', options);
    const { BigQuery } = require('@google-cloud/bigquery');
    const { credentials, projectId } = options;
    const table = 'grafana_imports';
    const dataset = 'plugins_data';

    const client = new BigQuery({ credentials, projectId });
    const [rows] = await client.dataset(dataset).table(table).query(`
      SELECT plugin_id, plugin_version
      FROM \`${projectId}.${dataset}.${table}\`
      GROUP BY plugin_id, plugin_version
    `);

    console.log('rows', rows);
};