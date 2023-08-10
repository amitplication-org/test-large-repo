import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const MhciPrereqsCourseDatafileShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Datafileinfo Id" source="datafileinfoId" />
        <TextField label="Id" source="id" />
        <BooleanField label="New File Uploaded" source="newFileUploaded" />
        <TextField label="Note" source="note" />
        <TextField label="Prereq Courses Id" source="prereqCoursesId" />
        <BooleanField
          label="Submitted To Reviewer"
          source="submittedToReviewer"
        />
      </SimpleShowLayout>
    </Show>
  );
};
