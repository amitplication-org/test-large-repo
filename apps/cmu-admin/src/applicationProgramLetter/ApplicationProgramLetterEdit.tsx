import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const ApplicationProgramLetterEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Admit Sent" source="admitSent" />
        <DateTimeInput label="Admit Sent Date" source="admitSentDate" />
        <NumberInput
          step={1}
          label="Lu Application Programs Id"
          source="luApplicationProgramsId"
        />
        <BooleanInput label="Rejection Sent" source="rejectionSent" />
        <DateTimeInput label="Rejection Sent Date" source="rejectionSentDate" />
        <BooleanInput label="Waitlist Sent" source="waitlistSent" />
        <DateTimeInput label="Waitlist Sent Date" source="waitlistSentDate" />
      </SimpleForm>
    </Edit>
  );
};
