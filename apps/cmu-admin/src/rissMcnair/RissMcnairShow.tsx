import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const RissMcnairShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="App Id" source="appId" />
        <TextField label="Contact" source="contact" />
        <TextField label="Id" source="id" />
        <TextField label="Site" source="site" />
      </SimpleShowLayout>
    </Show>
  );
};
