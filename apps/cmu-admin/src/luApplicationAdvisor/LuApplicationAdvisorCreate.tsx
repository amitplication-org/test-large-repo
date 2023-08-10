import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const LuApplicationAdvisorCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Advisor Type" source="advisorType" />
        <NumberInput step={1} label="Advisor User Id" source="advisorUserId" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Choice" source="choice" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Program Id" source="programId" />
      </SimpleForm>
    </Create>
  );
};
