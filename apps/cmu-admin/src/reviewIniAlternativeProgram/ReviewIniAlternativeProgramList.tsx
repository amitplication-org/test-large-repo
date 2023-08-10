import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReviewIniAlternativeProgramList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReviewIniAlternativePrograms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField
          label="Review Ini Alternative Program Id"
          source="ReviewIniAlternativeProgramId"
        />
        <TextField label="Value" source="value" />
      </Datagrid>
    </List>
  );
};
