import * as React from "react";
import { Edit, SimpleForm, EditProps, BooleanInput } from "react-admin";

export const AcoPalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Aco" source="aco" />
        <BooleanInput label="Pal" source="pal" />
      </SimpleForm>
    </Edit>
  );
};
