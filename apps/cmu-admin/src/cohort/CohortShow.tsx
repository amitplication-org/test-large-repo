import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const CohortShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Closed" source="closed" />
        <TextField label="Id" source="id" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Start Date" source="startDate" />
      </SimpleShowLayout>
    </Show>
  );
};
