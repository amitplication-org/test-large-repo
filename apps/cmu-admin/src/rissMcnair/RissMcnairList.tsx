import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RissMcnairList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RissMcnairs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="App Id" source="appId" />
        <TextField label="Contact" source="contact" />
        <TextField label="Id" source="id" />
        <TextField label="Site" source="site" />
      </Datagrid>
    </List>
  );
};
