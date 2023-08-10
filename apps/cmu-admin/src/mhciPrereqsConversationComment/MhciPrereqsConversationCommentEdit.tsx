import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MhciPrereqsConversationCommentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Comment" source="comment" />
        <NumberInput
          step={1}
          label="Lu Users Usertypes Id"
          source="luUsersUsertypesId"
        />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput step={1} label="Prereq Id" source="prereqId" />
        <NumberInput step={1} label="Program Id" source="programId" />
      </SimpleForm>
    </Edit>
  );
};
