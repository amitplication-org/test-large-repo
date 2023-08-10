import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MhciPrereqsProgrammingTestShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Download Timestamp" source="downloadTimestamp" />
        <TextField label="Id" source="id" />
        <TextField label="Period Id" source="periodId" />
        <TextField
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <TextField
          label="Upload Datafileinfo Id"
          source="uploadDatafileinfoId"
        />
      </SimpleShowLayout>
    </Show>
  );
};
