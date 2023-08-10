import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AaDepartmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Id" source="id" />
        <TextField label="Period Id" source="periodId" />
      </SimpleShowLayout>
    </Show>
  );
};
