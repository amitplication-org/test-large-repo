import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MseAqaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="English Comments" source="englishComments" />
        <NumberInput step={1} label="English Rating" source="englishRating" />
        <TextInput label="Experience Comments" source="experienceComments" />
        <NumberInput
          step={1}
          label="Experience Rating"
          source="experienceRating"
        />
        <TextInput
          label="Foundational Comments"
          source="foundationalComments"
        />
        <NumberInput
          step={1}
          label="Foundational Rating"
          source="foundationalRating"
        />
        <TextInput label="Maturity Comments" source="maturityComments" />
        <NumberInput step={1} label="Maturity Rating" source="maturityRating" />
        <TextInput label="Programming Comments" source="programmingComments" />
        <NumberInput
          step={1}
          label="Programming Rating"
          source="programmingRating"
        />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
        <TextInput
          label="Understanding Comments"
          source="understandingComments"
        />
        <NumberInput
          step={1}
          label="Understanding Rating"
          source="understandingRating"
        />
      </SimpleForm>
    </Create>
  );
};
