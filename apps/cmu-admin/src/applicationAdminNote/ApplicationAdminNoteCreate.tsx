import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ApplicationAdminNoteCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Insert User Id" source="insertUserId" />
        <TextInput label="Note" source="note" />
      </SimpleForm>
    </Create>
  );
};
