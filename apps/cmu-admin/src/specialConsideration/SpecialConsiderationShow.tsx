import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SpecialConsiderationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <TextField label="Reviewer Id" source="reviewerId" />
        <TextField
          label="Special Consideration"
          source="specialConsideration"
        />
      </SimpleShowLayout>
    </Show>
  );
};
