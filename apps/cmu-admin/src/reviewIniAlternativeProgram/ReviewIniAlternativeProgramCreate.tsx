import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ReviewIniAlternativeProgramCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Review Ini Alternative Program Id"
          source="ReviewIniAlternativeProgramId"
        />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
