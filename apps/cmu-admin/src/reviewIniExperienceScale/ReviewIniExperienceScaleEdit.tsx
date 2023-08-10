import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ReviewIniExperienceScaleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Review Ini Experience Scale Id"
          source="ReviewIniExperienceScaleId"
        />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
