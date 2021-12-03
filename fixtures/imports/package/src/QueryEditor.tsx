import defaults from "lodash/defaults";
import React, { ChangeEvent, PureComponent } from "react";
import { Field, Input } from "@grafana/ui";
import { QueryEditorProps } from "@grafana/data";
import { DataSource } from "./datasource";
import { defaultQuery, MyDataSourceOptions, MyQuery } from "./types";

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export class QueryEditor extends PureComponent<Props> {
  onQueryTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, queryText: event.target.value });
  };

  onConstantChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, constant: parseFloat(event.target.value) });
    // executes the query
    onRunQuery();
  };

  render() {
    const query = defaults(this.props.query, defaultQuery);
    const { queryText, constant } = query;

    return (
      <div className="gf-form">
        <Field label="Constant">
          <Input value={constant} onChange={this.onConstantChange} type="number" step="0.1" />
        </Field>
        <Field label="Query Text">
          <Input value={queryText || ""} onChange={this.onQueryTextChange} />
        </Field>
      </div>
    );
  }
}
