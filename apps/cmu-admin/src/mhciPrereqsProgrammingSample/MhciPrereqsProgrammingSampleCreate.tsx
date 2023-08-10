import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const MhciPrereqsProgrammingSampleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Datafileinfo Id" source="datafileinfoId" />
        <BooleanInput label="New File Uploaded" source="newFileUploaded" />
        <TextInput label="Note" source="note" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <NumberInput
          step={1}
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <BooleanInput
          label="Submitted To Reviewer"
          source="submittedToReviewer"
        />
      </SimpleForm>
    </Create>
  );
};
