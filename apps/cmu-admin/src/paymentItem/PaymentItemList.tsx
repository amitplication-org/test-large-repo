import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PaymentItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PaymentItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Payment Id" source="paymentId" />
        <TextField label="Payment Item Amount" source="paymentItemAmount" />
        <TextField label="Program Id" source="programId" />
      </Datagrid>
    </List>
  );
};
