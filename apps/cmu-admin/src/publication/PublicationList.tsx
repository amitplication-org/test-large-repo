import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PublicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Publications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
