import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ContentBakCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <NumberInput step={1} label="Contenttype Id" source="contenttypeId" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Domain Id" source="domainId" />
        <NumberInput step={1} label="Modifiedby" source="modifiedby" />
        <DateTimeInput label="Modifieddate" source="modifieddate" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
