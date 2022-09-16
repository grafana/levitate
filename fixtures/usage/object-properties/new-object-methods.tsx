import { DataSourcePlugin, DataQuery, DataSourceJsonData, DataSourceApi } from '@grafana/data';

export interface MyQuery extends DataQuery {
  queryText?: string;
  constant: number;
}

export interface MyDataSourceOptions extends DataSourceJsonData {
  path?: string;
}

class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  testDatasource(): Promise<any> {
    return Promise.resolve();
  }

  query(_options: any): Promise<any> {
    return Promise.resolve();
  }
}

function NoopComponent() {}

export const test2 = new DataSourcePlugin<DataSource, MyQuery, MyDataSourceOptions>(DataSource);

const x = test2;

const y = x;

y.setConfigEditor(NoopComponent).setQueryEditor(NoopComponent);
