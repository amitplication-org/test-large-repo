import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LuApplicationGroupShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Group Id" source="groupId" />
        <TextField label="Id" source="id" />
        <TextField label="Round" source="round" />
      </SimpleShowLayout>
    </Show>
  );
};
