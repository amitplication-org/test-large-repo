import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const StudentDecisionHistoryShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Decision" source="decision" />
        <TextField label="Deferral Semester" source="deferralSemester" />
        <TextField label="Deferral Year" source="deferralYear" />
        <TextField label="Id" source="id" />
        <DateField source="insertDate" label="Insert Date" />
        <TextField label="Program Id" source="programId" />
      </SimpleShowLayout>
    </Show>
  );
};
