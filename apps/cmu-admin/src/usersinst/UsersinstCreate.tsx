import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const UsersinstCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Class Rank" source="classRank" />
        <TextInput label="College Name" source="collegeName" />
        <TextInput label="Converted Gpa" source="convertedGpa" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <DateTimeInput label="Date Entered" source="dateEntered" />
        <DateTimeInput label="Date Grad" source="dateGrad" />
        <DateTimeInput label="Date Left" source="dateLeft" />
        <TextInput label="Degree" source="degree" />
        <NumberInput step={1} label="Educationtype" source="educationtype" />
        <TextInput label="Gpa" source="gpa" />
        <TextInput label="Gpa Major" source="gpaMajor" />
        <NumberInput step={1} label="Gpa Scale" source="gpaScale" />
        <NumberInput step={1} label="Institute Id" source="instituteId" />
        <TextInput label="Major1" source="major1" />
        <TextInput label="Major2" source="major2" />
        <TextInput label="Major3" source="major3" />
        <TextInput label="Minor1" source="minor1" />
        <TextInput label="Minor2" source="minor2" />
        <BooleanInput
          label="Transscriptreceived"
          source="transscriptreceived"
        />
        <NumberInput step={1} label="User Id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
