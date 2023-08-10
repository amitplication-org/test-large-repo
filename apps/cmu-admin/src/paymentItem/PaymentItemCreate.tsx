import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const PaymentItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Payment Id" source="paymentId" />
        <NumberInput label="Payment Item Amount" source="paymentItemAmount" />
        <NumberInput step={1} label="Program Id" source="programId" />
      </SimpleForm>
    </Create>
  );
};
