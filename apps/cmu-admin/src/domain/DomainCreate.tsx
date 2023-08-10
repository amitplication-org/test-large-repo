import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const DomainCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <TextInput label="Banner" source="banner" />
        <TextInput label="Description" source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="Path" source="path" />
      </SimpleForm>
    </Create>
  );
};
