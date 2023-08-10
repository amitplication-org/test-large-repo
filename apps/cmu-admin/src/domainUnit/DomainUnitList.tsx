import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DomainUnitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DomainUnits"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Domain Id" source="domainId" />
        <TextField label="Id" source="id" />
        <TextField label="Unit Id" source="unitId" />
      </Datagrid>
    </List>
  );
};
