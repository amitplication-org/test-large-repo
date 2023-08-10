import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

export const LuApplicationAppreqShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <BooleanField label="Completed" source="completed" />
        <TextField label="Id" source="id" />
        <DateField source="lastModified" label="Last Modified" />
        <TextField label="Req Id" source="reqId" />
      </SimpleShowLayout>
    </Show>
  );
};
