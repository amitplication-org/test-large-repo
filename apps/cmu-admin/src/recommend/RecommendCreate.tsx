import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const RecommendCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput
          step={1}
          label="Buckleyatupload"
          source="buckleyatupload"
        />
        <NumberInput step={1} label="Cmu Affiliation" source="cmuAffiliation" />
        <TextInput label="Content" source="content" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <DateTimeInput label="Last Reminder Sent" source="lastReminderSent" />
        <NumberInput step={1} label="Recommendtype" source="recommendtype" />
        <NumberInput step={1} label="Rec User Id" source="recUserId" />
        <NumberInput
          step={1}
          label="Reminder Sent Count"
          source="reminderSentCount"
        />
        <BooleanInput label="Submitted" source="submitted" />
      </SimpleForm>
    </Create>
  );
};
