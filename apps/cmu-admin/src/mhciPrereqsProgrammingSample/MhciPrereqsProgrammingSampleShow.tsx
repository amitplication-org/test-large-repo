import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const MhciPrereqsProgrammingSampleShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Datafileinfo Id" source="datafileinfoId" />
        <TextField label="Id" source="id" />
        <BooleanField label="New File Uploaded" source="newFileUploaded" />
        <TextField label="Note" source="note" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Program Id" source="programId" />
        <TextField
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <BooleanField
          label="Submitted To Reviewer"
          source="submittedToReviewer"
        />
      </SimpleShowLayout>
    </Show>
  );
};
