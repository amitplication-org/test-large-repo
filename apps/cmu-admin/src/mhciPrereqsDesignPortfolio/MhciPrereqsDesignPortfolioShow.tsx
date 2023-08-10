import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MhciPrereqsDesignPortfolioShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Description" source="description" />
        <TextField label="Id" source="id" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Program Id" source="programId" />
        <TextField
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <TextField label="Url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
