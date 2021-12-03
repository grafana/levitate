import React, { ChangeEvent, PureComponent } from "react";
import { Input, Field, Form, Button } from "@grafana/ui";
import { DataSourcePluginOptionsEditorProps } from "@grafana/data";

interface UserDTO {
  name: string;
  email: string;
}

export function ConfigEditor(): React.ReactElement {
  const defaultUser: UserDTO = {
    name: "Roger Waters",
    email: "roger@waters.com",
  };

  return (
    <Form defaultValues={defaultUser} onSubmit={(user) => console.log(user)}>
      {({ register, errors }) => {
        return (
          <Field>
            <>
              <Input {...register("name")} />
              <Input {...register("email", { required: true })} type="email" />
              <Button type="submit">Create User</Button>
            </>
          </Field>
        );
      }}
    </Form>
  );
}
