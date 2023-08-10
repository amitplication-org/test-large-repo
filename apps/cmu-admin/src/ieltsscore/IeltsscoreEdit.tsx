import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const IeltsscoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput label="Listeningscore" source="listeningscore" />
        <NumberInput label="Overallscore" source="overallscore" />
        <NumberInput label="Readingscore" source="readingscore" />
        <NumberInput step={1} label="Scorereceived" source="scorereceived" />
        <NumberInput label="Speakingscore" source="speakingscore" />
        <DateTimeInput label="Testdate" source="testdate" />
        <NumberInput label="Writingscore" source="writingscore" />
      </SimpleForm>
    </Edit>
  );
};
