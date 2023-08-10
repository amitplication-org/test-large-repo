import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
} from "react-admin";

export const DomainShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Active" source="active" />
        <TextField label="Banner" source="banner" />
        <TextField label="Description" source="description" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Path" source="path" />
      </SimpleShowLayout>
    </Show>
  );
};
