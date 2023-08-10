import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MhciPrereqsStatusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Mhci Prereqs Id" source="mhciPrereqsId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Reviewer Explanation" source="reviewerExplanation" />
        <TextField
          label="Reviewer Lu Users Usertypes Id"
          source="reviewerLuUsersUsertypesId"
        />
        <TextField label="Reviewer Status" source="reviewer_status" />
        <TextField label="Reviewer Timestamp" source="reviewerTimestamp" />
        <TextField label="Status" source="status" />
      </SimpleShowLayout>
    </Show>
  );
};
