import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ExperienceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
