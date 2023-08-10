import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DegreeTitle } from "../degree/DegreeTitle";
import { FieldsofstudyTitle } from "../fieldsofstudy/FieldsofstudyTitle";
import { LuApplicationProgramTitle } from "../luApplicationProgram/LuApplicationProgramTitle";
import { ProgramsApplicationreqTitle } from "../programsApplicationreq/ProgramsApplicationreqTitle";

export const ProgramModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Baseprice" source="baseprice" />
        <NumberInput label="Baseprice Late" source="basepriceLate" />
        <ReferenceInput source="degree.id" reference="Degree" label="Degree">
          <SelectInput optionText={DegreeTitle} />
        </ReferenceInput>
        <TextInput label="Description" source="description" />
        <TextInput label="Enabled" source="enabled" />
        <ReferenceInput
          source="fieldsofstudy.id"
          reference="Fieldsofstudy"
          label="Fieldsofstudy"
        >
          <SelectInput optionText={FieldsofstudyTitle} />
        </ReferenceInput>
        <TextInput label="Linkword" source="linkword" />
        <ReferenceArrayInput
          source="luApplicationPrograms"
          reference="LuApplicationProgram"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LuApplicationProgramTitle} />
        </ReferenceArrayInput>
        <TextInput label="Oraclestring" source="oraclestring" />
        <NumberInput step={1} label="Prank" source="prank" />
        <NumberInput label="Programprice" source="programprice" />
        <NumberInput label="Programprice Late" source="programpriceLate" />
        <ReferenceArrayInput
          source="programsApplicationreqs"
          reference="ProgramsApplicationreq"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProgramsApplicationreqTitle} />
        </ReferenceArrayInput>
        <TextInput
          label="Registrationoraclestring"
          source="registrationoraclestring"
        />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
