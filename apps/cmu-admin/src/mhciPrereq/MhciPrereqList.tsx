import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MhciPrereqList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MhciPrereqs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Prereq Type" source="prereq_type" />
        <TextField label="Status" source="status" />
        <TextField label="Student Assessment" source="student_assessment" />
        <TextField
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <DateField source="timestamp" label="Timestamp" />
      </Datagrid>
    </List>
  );
};
