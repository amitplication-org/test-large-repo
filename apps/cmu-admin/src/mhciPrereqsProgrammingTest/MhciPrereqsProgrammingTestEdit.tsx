import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const MhciPrereqsProgrammingTestEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <DateTimeInput label="Download Timestamp" source="downloadTimestamp" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput
          step={1}
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <NumberInput
          step={1}
          label="Upload Datafileinfo Id"
          source="uploadDatafileinfoId"
        />
      </SimpleForm>
    </Edit>
  );
};
