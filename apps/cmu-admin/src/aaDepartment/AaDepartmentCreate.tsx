import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const AaDepartmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Period Id" source="periodId" />
      </SimpleForm>
    </Create>
  );
};
