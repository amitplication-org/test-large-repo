import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  applicationId?: SortOrder;
  id?: SortOrder;
  lastModTime?: SortOrder;
  lastModUserId?: SortOrder;
  paymentAmount?: SortOrder;
  paymentIntentDate?: SortOrder;
  payment_status?: SortOrder;
  paymentType?: SortOrder;
};
