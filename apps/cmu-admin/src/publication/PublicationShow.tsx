import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const PublicationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Author" source="author" />
        <TextField label="Citation" source="citation" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Forum" source="forum" />
        <TextField label="Id" source="id" />
        <TextField label="Status" source="status" />
        <TextField label="Title" source="title" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Type Other" source="typeOther" />
        <TextField label="Url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
