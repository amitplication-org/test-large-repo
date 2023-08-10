import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LuApplicationStartSemesterShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <TextField label="Semester" source="semester" />
        <TextField label="Year" source="year" />
      </SimpleShowLayout>
    </Show>
  );
};
