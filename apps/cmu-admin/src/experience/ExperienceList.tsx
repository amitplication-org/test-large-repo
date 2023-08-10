import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ExperienceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Experiences"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address" source="address" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Company" source="company" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Experiencetype" source="experiencetype" />
        <TextField label="Id" source="id" />
        <TextField label="Job Description" source="jobDescription" />
        <TextField label="Job Title" source="jobTitle" />
        <TextField label="Order Entered" source="orderEntered" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="Years Exp" source="yearsExp" />
      </Datagrid>
    </List>
  );
};
