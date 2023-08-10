import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
} from "react-admin";

export const AcoPalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Aco" source="aco" />
        <TextField label="Id" source="id" />
        <BooleanField label="Pal" source="pal" />
      </SimpleShowLayout>
    </Show>
  );
};
