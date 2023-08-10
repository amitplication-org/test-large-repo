import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const TagMemberEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="App Id" source="appId" />
        <NumberInput step={1} label="Tag Instance Id" source="tagInstanceId" />
      </SimpleForm>
    </Edit>
  );
};
