import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const RecommendShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Buckleyatupload" source="buckleyatupload" />
        <TextField label="Cmu Affiliation" source="cmuAffiliation" />
        <TextField label="Content" source="content" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Id" source="id" />
        <TextField label="Last Reminder Sent" source="lastReminderSent" />
        <TextField label="Recommendtype" source="recommendtype" />
        <TextField label="Rec User Id" source="recUserId" />
        <TextField label="Reminder Sent Count" source="reminderSentCount" />
        <BooleanField label="Submitted" source="submitted" />
      </SimpleShowLayout>
    </Show>
  );
};
