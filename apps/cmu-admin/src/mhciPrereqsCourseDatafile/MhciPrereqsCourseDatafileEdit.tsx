import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const MhciPrereqsCourseDatafileEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Datafileinfo Id" source="datafileinfoId" />
        <BooleanInput label="New File Uploaded" source="newFileUploaded" />
        <TextInput label="Note" source="note" />
        <NumberInput
          step={1}
          label="Prereq Courses Id"
          source="prereqCoursesId"
        />
        <BooleanInput
          label="Submitted To Reviewer"
          source="submittedToReviewer"
        />
      </SimpleForm>
    </Edit>
  );
};
