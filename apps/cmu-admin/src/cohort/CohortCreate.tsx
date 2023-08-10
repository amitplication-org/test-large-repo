import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CohortCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Closed" source="closed" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
