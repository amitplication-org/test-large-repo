import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MhciPrereqsStatusList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MhciPrereqsStatuses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Mhci Prereqs Id" source="mhciPrereqsId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Reviewer Explanation" source="reviewerExplanation" />
        <TextField
          label="Reviewer Lu Users Usertypes Id"
          source="reviewerLuUsersUsertypesId"
        />
        <TextField label="Reviewer Status" source="reviewer_status" />
        <TextField label="Reviewer Timestamp" source="reviewerTimestamp" />
        <TextField label="Status" source="status" />
      </Datagrid>
    </List>
  );
};
