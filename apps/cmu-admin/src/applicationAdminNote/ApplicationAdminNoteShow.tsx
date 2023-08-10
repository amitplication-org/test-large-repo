import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ApplicationAdminNoteShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <DateField source="insertTime" label="Insert Time" />
        <TextField label="Insert User Id" source="insertUserId" />
        <TextField label="Note" source="note" />
      </SimpleShowLayout>
    </Show>
  );
};
