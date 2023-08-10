import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const RegistrationFeeStatusCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <BooleanInput label="Paid" source="paid" />
        <BooleanInput label="Waived" source="waived" />
      </SimpleForm>
    </Create>
  );
};
