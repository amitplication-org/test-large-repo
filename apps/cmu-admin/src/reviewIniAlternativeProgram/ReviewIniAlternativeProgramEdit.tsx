import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ReviewIniAlternativeProgramEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Review Ini Alternative Program Id"
          source="ReviewIniAlternativeProgramId"
        />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
