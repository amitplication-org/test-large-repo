import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERMODEL_TITLE_FIELD } from "../userModel/UserModelTitle";

export const LuUsersUsertypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
