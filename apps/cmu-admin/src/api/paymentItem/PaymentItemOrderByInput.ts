import { SortOrder } from "../../util/SortOrder";

export type PaymentItemOrderByInput = {
  id?: SortOrder;
  paymentId?: SortOrder;
  paymentItemAmount?: SortOrder;
  programId?: SortOrder;
};
