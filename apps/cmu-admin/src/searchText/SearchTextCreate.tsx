import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SearchTextCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Application Text" source="applicationText" />
        <TextInput label="Guid" source="guid" />
      </SimpleForm>
    </Create>
  );
};
