import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PaymentVoucherList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PaymentVouchers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Datafileinfo Id" source="datafileinfoId" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
