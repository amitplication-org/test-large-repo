import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MlAreaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Area" source="area" />
        <TextField label="Id" source="id" />
        <TextField label="Program Id" source="programId" />
      </SimpleShowLayout>
    </Show>
  );
};
