import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const DomainEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <TextInput label="Banner" source="banner" />
        <TextInput label="Description" source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="Path" source="path" />
      </SimpleForm>
    </Edit>
  );
};
