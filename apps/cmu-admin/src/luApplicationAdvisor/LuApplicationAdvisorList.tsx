import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LuApplicationAdvisorList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuApplicationAdvisors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Advisor Type" source="advisorType" />
        <TextField label="Advisor User Id" source="advisorUserId" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Choice" source="choice" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Program Id" source="programId" />
      </Datagrid>
    </List>
  );
};
