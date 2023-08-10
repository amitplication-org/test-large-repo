import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UsHSStatusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Any Us Hs" source="anyUsHs" />
        <TextField label="App Id" source="appId" />
        <TextField label="Id" source="id" />
        <TextField label="Pell" source="pell" />
        <TextField label="Perm Zip Grad" source="permZipGrad" />
        <TextField label="Ug Fed Work Study" source="ugFedWorkStudy" />
        <TextField label="Us Hs Grad" source="usHSGrad" />
      </SimpleShowLayout>
    </Show>
  );
};
