import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RissMcnairEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="App Id" source="appId" />
        <TextInput label="Contact" source="contact" />
        <TextInput label="Site" source="site" />
      </SimpleForm>
    </Edit>
  );
};
