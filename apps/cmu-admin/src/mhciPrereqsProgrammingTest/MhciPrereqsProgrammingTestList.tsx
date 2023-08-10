import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MhciPrereqsProgrammingTestList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MhciPrereqsProgrammingTests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Download Timestamp" source="downloadTimestamp" />
        <TextField label="Id" source="id" />
        <TextField label="Period Id" source="periodId" />
        <TextField
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <TextField
          label="Upload Datafileinfo Id"
          source="uploadDatafileinfoId"
        />
      </Datagrid>
    </List>
  );
};
