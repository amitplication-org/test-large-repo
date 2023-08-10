import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const GresubjectscoreCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <TextInput label="Name" source="name" />
        <TextInput label="Percentile" source="percentile" />
        <TextInput label="Score" source="score" />
        <BooleanInput label="Scorereceived" source="scorereceived" />
        <DateTimeInput label="Testdate" source="testdate" />
      </SimpleForm>
    </Create>
  );
};
