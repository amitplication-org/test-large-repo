import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ReviewIniExperienceScaleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Review Ini Experience Scale Id"
          source="ReviewIniExperienceScaleId"
        />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
