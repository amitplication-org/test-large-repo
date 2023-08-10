import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const MhciPrereqsCourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <SelectInput
          source="course_type"
          label="Course Type"
          choices={[
            { label: "Design", value: "Design" },
            { label: "Programming", value: "Programming" },
            { label: "Multi_way_ANOVA", value: "Multi_way_ANOVA" },
            { label: "Single_way_ANOVA", value: "Single_way_ANOVA" },
            {
              label: "Multi_factor_regression",
              value: "Multi_factor_regression",
            },
            {
              label: "Single_factor_regression",
              value: "Single_factor_regression",
            },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <TextInput label="Student Course Grade" source="studentCourseGrade" />
        <TextInput
          label="Student Course Institution"
          source="studentCourseInstitution"
        />
        <TextInput label="Student Course Name" source="studentCourseName" />
        <TextInput label="Student Course Time" source="studentCourseTime" />
        <NumberInput
          step={1}
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <NumberInput
          step={1}
          label="Submitted To Reviewer"
          source="submittedToReviewer"
        />
      </SimpleForm>
    </Edit>
  );
};
