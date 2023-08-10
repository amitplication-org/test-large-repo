import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MlAreaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Area" source="area" />
        <NumberInput step={1} label="Program Id" source="programId" />
      </SimpleForm>
    </Create>
  );
};
