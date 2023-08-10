import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MhciPrereqsCourseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MhciPrereqsCourses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
