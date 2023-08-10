import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USERMODEL_TITLE_FIELD } from "./UserModelTitle";

export const UserModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Email" source="email" />
        <TextField label="Firstname" source="firstname" />
        <TextField label="Guid" source="guid" />
        <TextField label="Id" source="id" />
        <TextField label="Initials" source="initials" />
        <TextField label="Lastname" source="lastname" />
        <TextField label="Middlename" source="middlename" />
        <TextField label="Password" source="password" />
        <TextField label="Signup Date" source="signupDate" />
        <TextField label="Title" source="title" />
        <TextField label="Username" source="username" />
        <BooleanField label="Verified" source="verified" />
        <ReferenceManyField
          reference="LuUsersUsertype"
          target="user_id"
          label="LuUsersUsertypes"
        >
          <Datagrid rowClick="show">
            <TextField label="Domain" source="domain" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Users"
              source="usermodel.id"
              reference="UserModel"
            >
              <TextField source={USERMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Usertype Id" source="usertypeId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
