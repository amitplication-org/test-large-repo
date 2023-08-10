import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DepartmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Allow Request Advisors"
          source="allowRequestAdvisors"
        />
        <TextField label="Cc Email" source="ccEmail" />
        <TextField label="Drank" source="drank" />
        <TextField label="Enable Final" source="enableFinal" />
        <TextField label="Enable Round1" source="enableRound1" />
        <TextField label="Enable Round2" source="enableRound2" />
        <TextField label="Enable Round3" source="enableRound3" />
        <TextField label="Enable Round4" source="enableRound4" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Oraclestring" source="oraclestring" />
        <TextField label="Parent School Id" source="parentSchoolId" />
        <TextField
          label="Registrationoraclestring"
          source="registrationoraclestring"
        />
        <TextField label="Semiblind Review" source="semiblindReview" />
      </SimpleShowLayout>
    </Show>
  );
};
