import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const PaymentItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Payment Id" source="paymentId" />
        <TextField label="Payment Item Amount" source="paymentItemAmount" />
        <TextField label="Program Id" source="programId" />
      </SimpleShowLayout>
    </Show>
  );
};
