import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const RissFundingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RissFundings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <BooleanField label="Direct Funding" source="directFunding" />
        <TextField label="External Amount" source="externalAmount" />
        <BooleanField label="External Funding" source="externalFunding" />
        <TextField label="External Source" source="externalSource" />
        <TextField label="Id" source="id" />
        <BooleanField label="Reu Scholarship" source="reuScholarship" />
      </Datagrid>
    </List>
  );
};
