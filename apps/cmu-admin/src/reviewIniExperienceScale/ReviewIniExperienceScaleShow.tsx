import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ReviewIniExperienceScaleShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Review Ini Experience Scale Id"
          source="ReviewIniExperienceScaleId"
        />
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
