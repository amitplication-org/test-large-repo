import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const LuApplicationAppreqEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <BooleanInput label="Completed" source="completed" />
        <NumberInput step={1} label="Req Id" source="reqId" />
      </SimpleForm>
    </Edit>
  );
};
