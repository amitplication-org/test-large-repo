import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PeriodApplicationTitle } from "../periodApplication/PeriodApplicationTitle";

export const PeriodEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <DateTimeInput label="End Date" source="endDate" />
        <NumberInput
          step={1}
          label="Parent Period Id"
          source="parentPeriodId"
        />
        <ReferenceArrayInput
          source="periodApplication"
          reference="PeriodApplication"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PeriodApplicationTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Period Type Id" source="periodTypeId" />
        <DateTimeInput label="Start Date" source="startDate" />
        <NumberInput step={1} label="Unit Id" source="unitId" />
      </SimpleForm>
    </Edit>
  );
};
