import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LuApplicationAdvisorShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Advisor Type" source="advisorType" />
        <TextField label="Advisor User Id" source="advisorUserId" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Choice" source="choice" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Program Id" source="programId" />
      </SimpleShowLayout>
    </Show>
  );
};
