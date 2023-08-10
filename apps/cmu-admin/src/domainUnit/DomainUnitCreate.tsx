import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const DomainUnitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Domain Id" source="domainId" />
        <NumberInput step={1} label="Unit Id" source="unitId" />
      </SimpleForm>
    </Create>
  );
};
