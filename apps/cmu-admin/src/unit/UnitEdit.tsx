import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const UnitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          label="Application Base Price"
          source="applicationBasePrice"
        />
        <NumberInput
          label="Application Program Price"
          source="applicationProgramPrice"
        />
        <NumberInput step={1} label="Parent Unit Id" source="parentUnitId" />
        <TextInput label="Unit Cc Email" source="unitCcEmail" />
        <TextInput label="Unit Description" source="unitDescription" />
        <TextInput label="Unit Name" source="unitName" />
        <TextInput label="Unit Name Short" source="unitNameShort" />
        <TextInput label="Unit Oracle String" source="unitOracleString" />
        <TextInput label="Unit System Email" source="unitSystemEmail" />
        <TextInput label="Unit Url" source="unitUrl" />
      </SimpleForm>
    </Edit>
  );
};
