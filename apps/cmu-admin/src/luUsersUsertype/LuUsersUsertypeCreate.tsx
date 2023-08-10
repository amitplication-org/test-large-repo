import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserModelTitle } from "../userModel/UserModelTitle";

export const LuUsersUsertypeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Domain" source="domain" />
        <ReferenceInput source="users.id" reference="UserModel" label="Users">
          <SelectInput optionText={UserModelTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Usertype Id" source="usertypeId" />
      </SimpleForm>
    </Create>
  );
};
