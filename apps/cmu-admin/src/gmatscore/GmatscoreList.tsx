import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const GmatscoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Gmatscores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField
          label="Analyticalwritingpercentile"
          source="analyticalwritingpercentile"
        />
        <TextField
          label="Analyticalwritingscore"
          source="analyticalwritingscore"
        />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Id" source="id" />
        <TextField
          label="Quantitativepercentile"
          source="quantitativepercentile"
        />
        <TextField label="Quantitativescore" source="quantitativescore" />
        <BooleanField label="Scorereceived" source="scorereceived" />
        <TextField label="Testdate" source="testdate" />
        <TextField label="Totalpercentile" source="totalpercentile" />
        <TextField label="Totalscore" source="totalscore" />
        <TextField label="Verbalpercentile" source="verbalpercentile" />
        <TextField label="Verbalscore" source="verbalscore" />
      </Datagrid>
    </List>
  );
};
