import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ApplicationAdminNoteList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ApplicationAdminNotes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <DateField source="insertTime" label="Insert Time" />
        <TextField label="Insert User Id" source="insertUserId" />
        <TextField label="Note" source="note" />
      </Datagrid>
    </List>
  );
};
