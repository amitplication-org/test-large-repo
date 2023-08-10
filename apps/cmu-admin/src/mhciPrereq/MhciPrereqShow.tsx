import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MhciPrereqShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Prereq Type" source="prereq_type" />
        <TextField label="Status" source="status" />
        <TextField label="Student Assessment" source="student_assessment" />
        <TextField
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <DateField source="timestamp" label="Timestamp" />
      </SimpleShowLayout>
    </Show>
  );
};
