import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MhciPrereqsConversationCommentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Comment" source="comment" />
        <TextField label="Id" source="id" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Prereq Id" source="prereqId" />
        <TextField label="Program Id" source="programId" />
        <DateField source="timestamp" label="Timestamp" />
      </SimpleShowLayout>
    </Show>
  );
};
