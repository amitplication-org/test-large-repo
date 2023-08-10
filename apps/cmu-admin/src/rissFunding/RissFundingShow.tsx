import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const RissFundingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <BooleanField label="Direct Funding" source="directFunding" />
        <TextField label="External Amount" source="externalAmount" />
        <BooleanField label="External Funding" source="externalFunding" />
        <TextField label="External Source" source="externalSource" />
        <TextField label="Id" source="id" />
        <BooleanField label="Reu Scholarship" source="reuScholarship" />
      </SimpleShowLayout>
    </Show>
  );
};
