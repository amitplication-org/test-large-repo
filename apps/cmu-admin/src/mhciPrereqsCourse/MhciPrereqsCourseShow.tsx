import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MhciPrereqsCourseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Course Type" source="course_type" />
        <TextField label="Id" source="id" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Student Course Grade" source="studentCourseGrade" />
        <TextField
          label="Student Course Institution"
          source="studentCourseInstitution"
        />
        <TextField label="Student Course Name" source="studentCourseName" />
        <TextField label="Student Course Time" source="studentCourseTime" />
        <TextField
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <TextField label="Submitted To Reviewer" source="submittedToReviewer" />
      </SimpleShowLayout>
    </Show>
  );
};
