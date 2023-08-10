import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SearchTextList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SearchTexts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Text" source="applicationText" />
        <TextField label="Guid" source="guid" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
