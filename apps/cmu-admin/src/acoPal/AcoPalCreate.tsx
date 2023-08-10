import * as React from "react";
import { Create, SimpleForm, CreateProps, BooleanInput } from "react-admin";

export const AcoPalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Aco" source="aco" />
        <BooleanInput label="Pal" source="pal" />
      </SimpleForm>
    </Create>
  );
};
