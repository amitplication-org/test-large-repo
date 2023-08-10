import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ReviewIniOverallScaleShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Review Ini Overall Scale Id"
          source="ReviewIniOverallScaleId"
        />
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
