import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ReviewIniOverallScaleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Review Ini Overall Scale Id"
          source="ReviewIniOverallScaleId"
        />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
