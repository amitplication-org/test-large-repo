import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AcoPalList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AcoPals"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Aco" source="aco" />
        <TextField label="Id" source="id" />
        <BooleanField label="Pal" source="pal" />
      </Datagrid>
    </List>
  );
};
