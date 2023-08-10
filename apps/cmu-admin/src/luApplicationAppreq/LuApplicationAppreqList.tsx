import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const LuApplicationAppreqList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuApplicationAppreqs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <BooleanField label="Completed" source="completed" />
        <TextField label="Id" source="id" />
        <DateField source="lastModified" label="Last Modified" />
        <TextField label="Req Id" source="reqId" />
      </Datagrid>
    </List>
  );
};
