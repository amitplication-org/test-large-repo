import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const PaymentItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Payment Id" source="paymentId" />
        <NumberInput label="Payment Item Amount" source="paymentItemAmount" />
        <NumberInput step={1} label="Program Id" source="programId" />
      </SimpleForm>
    </Edit>
  );
};
