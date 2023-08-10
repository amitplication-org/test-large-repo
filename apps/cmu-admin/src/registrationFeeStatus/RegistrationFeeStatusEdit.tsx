import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const RegistrationFeeStatusEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <BooleanInput label="Paid" source="paid" />
        <BooleanInput label="Waived" source="waived" />
      </SimpleForm>
    </Edit>
  );
};
