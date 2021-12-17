const grafanaPackages = [
    '@grafana/ui', 
    '@grafana/data', 
    '@grafana/runtime'
];

module.exports = async ({ core, exec }) => {
    const plugins = JSON.parse(process.env.PLUGINS ?? '[]');
    const table = process.env.BQ_TABLE;
    const dataset = process.env.BQ_DATASET;

    for (const plugin of plugins) {
        try {
            core.startGroup(`Plugin: ${plugin.slug} (v${plugin.version})`);
            core.info(`running levitate commands`);

            await exec.exec(`
                ./node_modules/.bin/levitate gobble \
                    --repositories ${plugin.url} \
                    --filters ${grafanaPackages.join(' ')} \
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