import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MhciPrereqsCourseDatafileList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MhciPrereqsCourseDatafiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Datafileinfo Id" source="datafileinfoId" />
        <TextField label="Id" source="id" />
        <BooleanField label="New File Uploaded" source="newFileUploaded" />
        <TextField label="Note" source="note" />
        <TextField label="Prereq Courses Id" source="prereqCoursesId" />
        <BooleanField
          label="Submitted To Reviewer"
          source="submittedToReviewer"
        />
      </Datagrid>
    </List>
  );
};
