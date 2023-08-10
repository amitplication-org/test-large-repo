import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PublicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Author" source="author" />
        <TextInput label="Citation" source="citation" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <TextInput label="Forum" source="forum" />
        <TextInput label="Status" source="status" />
        <TextInput label="Title" source="title" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Type Other" source="typeOther" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
