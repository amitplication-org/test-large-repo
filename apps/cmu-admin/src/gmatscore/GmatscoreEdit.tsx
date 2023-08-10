import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const GmatscoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Analyticalwritingpercentile"
          source="analyticalwritingpercentile"
        />
        <NumberInput
          label="Analyticalwritingscore"
          source="analyticalwritingscore"
        />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput
          step={1}
          label="Quantitativepercentile"
          source="quantitativepercentile"
        />
        <NumberInput
          step={1}
          label="Quantitativescore"
          source="quantitativescore"
        />
        <BooleanInput label="Scorereceived" source="scorereceived" />
        <DateTimeInput label="Testdate" source="testdate" />
        <NumberInput
          step={1}
          label="Totalpercentile"
          source="totalpercentile"
        />
        <NumberInput step={1} label="Totalscore" source="totalscore" />
        <NumberInput
          step={1}
          label="Verbalpercentile"
          source="verbalpercentile"
        />
        <NumberInput step={1} label="Verbalscore" source="verbalscore" />
      </SimpleForm>
    </Edit>
  );
};
