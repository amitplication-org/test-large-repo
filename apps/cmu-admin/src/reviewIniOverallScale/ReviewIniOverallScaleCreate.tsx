import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ReviewIniOverallScaleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Review Ini Overall Scale Id"
          source="ReviewIniOverallScaleId"
        />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
