module.exports = async ({ context, core }) => {
    const { BigQuery } = require('@google-cloud/bigquery');
    
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

    console.log('rows', rows);
};