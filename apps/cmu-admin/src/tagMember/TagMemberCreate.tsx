import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const TagMemberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="App Id" source="appId" />
        <NumberInput step={1} label="Tag Instance Id" source="tagInstanceId" />
      </SimpleForm>
    </Create>
  );
};
