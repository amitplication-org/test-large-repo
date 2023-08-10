import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const FellowshipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Amount" source="amount" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <DateTimeInput label="Applied Date" source="appliedDate" />
        <DateTimeInput label="Award Date" source="awardDate" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Short" source="short" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
