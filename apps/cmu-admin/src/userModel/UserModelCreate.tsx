import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { LuUsersUsertypeTitle } from "../luUsersUsertype/LuUsersUsertypeTitle";

export const UserModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" />
        <TextInput label="Firstname" source="firstname" />
        <TextInput label="Guid" source="guid" />
        <TextInput label="Initials" source="initials" />
        <TextInput label="Lastname" source="lastname" />
        <ReferenceArrayInput
          source="luUsersUsertypes"
          reference="LuUsersUsertype"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LuUsersUsertypeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Middlename" source="middlename" />
        <TextInput label="Password" source="password" />
        <DateTimeInput label="Signup Date" source="signupDate" />
        <TextInput label="Title" source="title" />
        <TextInput label="Username" source="username" />
        <BooleanInput label="Verified" source="verified" />
      </SimpleForm>
    </Create>
  );
};
