import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MhciPrereqsConversationCommentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MhciPrereqsConversationComments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Comment" source="comment" />
        <TextField label="Id" source="id" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Prereq Id" source="prereqId" />
        <TextField label="Program Id" source="programId" />
        <DateField source="timestamp" label="Timestamp" />
      </Datagrid>
    </List>
  );
};
