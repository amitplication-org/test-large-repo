import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UnitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Application Base Price"
          source="applicationBasePrice"
        />
        <TextField
          label="Application Program Price"
          source="applicationProgramPrice"
        />
        <TextField label="Id" source="id" />
        <TextField label="Parent Unit Id" source="parentUnitId" />
        <TextField label="Unit Cc Email" source="unitCcEmail" />
        <TextField label="Unit Description" source="unitDescription" />
        <TextField label="Unit Name" source="unitName" />
        <TextField label="Unit Name Short" source="unitNameShort" />
        <TextField label="Unit Oracle String" source="unitOracleString" />
        <TextField label="Unit System Email" source="unitSystemEmail" />
        <TextField label="Unit Url" source="unitUrl" />
      </SimpleShowLayout>
    </Show>
  );
};
