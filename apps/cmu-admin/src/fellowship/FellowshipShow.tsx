import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const FellowshipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Applied Date" source="appliedDate" />
        <TextField label="Award Date" source="awardDate" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Duration" source="duration" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Short" source="short" />
        <TextField label="Status" source="status" />
      </SimpleShowLayout>
    </Show>
  );
};
