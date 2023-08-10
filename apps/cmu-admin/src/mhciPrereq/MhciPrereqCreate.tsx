import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
} from "react-admin";

export const MhciPrereqCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <SelectInput
          source="prereq_type"
          label="Prereq Type"
          choices={[
            { label: "design", value: "design" },
            { label: "programming", value: "programming" },
            { label: "statistics", value: "statistics" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Student_Saved", value: "Student_Saved" },
            { label: "Not_Submitted", value: "Not_Submitted" },
            { label: "Student_Submitted", value: "Student_Submitted" },
            { label: "Student_Edited", value: "Student_Edited" },
            { label: "Reviewer_Responded", value: "Reviewer_Responded" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="student_assessment"
          label="Student Assessment"
          choices={[
            { label: "fulfilledTrue", value: "fulfilledTrue" },
            { label: "fulfilledFalse", value: "fulfilledFalse" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput
          step={1}
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
      </SimpleForm>
    </Create>
  );
};
