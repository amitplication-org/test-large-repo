import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const TagMemberShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="App Id" source="appId" />
        <TextField label="Id" source="id" />
        <TextField label="Tag Instance Id" source="tagInstanceId" />
      </SimpleShowLayout>
    </Show>
  );
};
