import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const GresubjectscoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Gresubjectscores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Percentile" source="percentile" />
        <TextField label="Score" source="score" />
        <BooleanField label="Scorereceived" source="scorereceived" />
        <TextField label="Testdate" source="testdate" />
      </Datagrid>
    </List>
  );
};
