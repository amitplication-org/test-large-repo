import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MhciPrereqsDesignPortfolioEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Description" source="description" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <NumberInput
          step={1}
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
