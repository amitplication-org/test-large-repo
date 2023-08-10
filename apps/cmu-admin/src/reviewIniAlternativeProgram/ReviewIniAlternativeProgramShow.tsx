import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ReviewIniAlternativeProgramShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Review Ini Alternative Program Id"
          source="ReviewIniAlternativeProgramId"
        />
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
