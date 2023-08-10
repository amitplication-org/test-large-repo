import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const StudentDecisionHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Decision" source="decision" />
        <TextInput label="Deferral Semester" source="deferralSemester" />
        <TextInput label="Deferral Year" source="deferralYear" />
        <NumberInput step={1} label="Program Id" source="programId" />
      </SimpleForm>
    </Create>
  );
};
