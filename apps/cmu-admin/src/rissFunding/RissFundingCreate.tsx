import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const RissFundingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <BooleanInput label="Direct Funding" source="directFunding" />
        <TextInput label="External Amount" source="externalAmount" />
        <BooleanInput label="External Funding" source="externalFunding" />
        <TextInput label="External Source" source="externalSource" />
        <BooleanInput label="Reu Scholarship" source="reuScholarship" />
      </SimpleForm>
    </Create>
  );
};
