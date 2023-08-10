import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const SpecialConsiderationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
        <NumberInput
          step={1}
          label="Special Consideration"
          source="specialConsideration"
        />
      </SimpleForm>
    </Edit>
  );
};
