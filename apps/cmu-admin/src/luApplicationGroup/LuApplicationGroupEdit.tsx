import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const LuApplicationGroupEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Group Id" source="groupId" />
        <NumberInput step={1} label="Round" source="round" />
      </SimpleForm>
    </Edit>
  );
};
