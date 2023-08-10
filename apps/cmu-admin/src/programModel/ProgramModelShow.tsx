import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { PROGRAMMODEL_TITLE_FIELD } from "./ProgramModelTitle";
import { APPLICATIONREQ_TITLE_FIELD } from "../applicationreq/ApplicationreqTitle";
import { DEGREE_TITLE_FIELD } from "../degree/DegreeTitle";
import { FIELDSOFSTUDY_TITLE_FIELD } from "../fieldsofstudy/FieldsofstudyTitle";

export const ProgramModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Baseprice" source="baseprice" />
        <TextField label="Baseprice Late" source="basepriceLate" />
        <ReferenceField label="Degree" source="degree.id" reference="Degree">
          <TextField source={DEGREE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Description" source="description" />
        <TextField label="Enabled" source="enabled" />
        <ReferenceField
          label="Fieldsofstudy"
          source="fieldsofstudy.id"
          reference="Fieldsofstudy"
        >
          <TextField source={FIELDSOFSTUDY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <TextField label="Linkword" source="linkword" />
        <TextField label="Oraclestring" source="oraclestring" />
        <TextField label="Prank" source="prank" />
        <TextField label="Programprice" source="programprice" />
        <TextField label="Programprice Late" source="programpriceLate" />
        <TextField
          label="Registrationoraclestring"
          source="registrationoraclestring"
        />
        <TextField label="Url" source="url" />
        <ReferenceManyField
          reference="LuApplicationProgram"
          target="program_id"
          label="LuApplicationPrograms"
        >
          <Datagrid rowClick="show">
            <TextField label="Admission Status" source="admissionStatus" />
            <TextField label="Admit" source="admit" />
            <TextField label="Admit Comments" source="admitComments" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Choice" source="choice" />
            <TextField label="Decision" source="decision" />
            <TextField label="Faccontact" source="faccontact" />
            <TextField label="Id" source="id" />
            <TextField label="Ltichoice" source="ltichoice" />
            <ReferenceField
              label="Programs"
              source="programmodel.id"
              reference="ProgramModel"
            >
              <TextField source={PROGRAMMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Round2" source="round2" />
            <TextField label="Scholarship Amt" source="scholarshipAmt" />
            <TextField
              label="Scholarship Comments"
              source="scholarshipComments"
            />
            <TextField label="Stucontact" source="stucontact" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProgramsApplicationreq"
          target="programs_id"
          label="ProgramsApplicationreqs"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Applicationreqs"
              source="applicationreq.id"
              reference="Applicationreq"
            >
              <TextField source={APPLICATIONREQ_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Programs"
              source="programmodel.id"
              reference="ProgramModel"
            >
              <TextField source={PROGRAMMODEL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
