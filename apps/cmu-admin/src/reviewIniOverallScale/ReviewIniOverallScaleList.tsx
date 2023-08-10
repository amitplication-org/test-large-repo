import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReviewIniOverallScaleList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReviewIniOverallScales"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField
          label="Review Ini Overall Scale Id"
          source="ReviewIniOverallScaleId"
        />
        <TextField label="Value" source="value" />
      </Datagrid>
    </List>
  );
};
