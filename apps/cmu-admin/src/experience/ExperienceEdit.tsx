import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ExperienceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Company" source="company" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <TextInput label="End Date" source="endDate" />
        <NumberInput step={1} label="Experiencetype" source="experiencetype" />
        <TextInput label="Job Description" source="jobDescription" />
        <TextInput label="Job Title" source="jobTitle" />
        <NumberInput step={1} label="Order Entered" source="orderEntered" />
        <DateTimeInput label="Start Date" source="startDate" />
        <TextInput label="Years Exp" source="yearsExp" />
      </SimpleForm>
    </Edit>
  );
};
