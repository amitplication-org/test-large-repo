import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SearchTextEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Application Text" source="applicationText" />
        <TextInput label="Guid" source="guid" />
      </SimpleForm>
    </Edit>
  );
};
