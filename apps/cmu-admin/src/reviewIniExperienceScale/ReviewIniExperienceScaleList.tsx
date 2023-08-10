import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReviewIniExperienceScaleList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReviewIniExperienceScales"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField
          label="Review Ini Experience Scale Id"
          source="ReviewIniExperienceScaleId"
        />
        <TextField label="Value" source="value" />
      </Datagrid>
    </List>
  );
};
