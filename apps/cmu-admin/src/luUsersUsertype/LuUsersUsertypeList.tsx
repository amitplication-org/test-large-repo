import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERMODEL_TITLE_FIELD } from "../userModel/UserModelTitle";

export const LuUsersUsertypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuUsersUsertypes"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
