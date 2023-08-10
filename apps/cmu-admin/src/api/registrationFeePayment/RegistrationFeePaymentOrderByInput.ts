import { SortOrder } from "../../util/SortOrder";

export type RegistrationFeePaymentOrderByInput = {
  applicationId?: SortOrder;
  departmentId?: SortOrder;
  id?: SortOrder;
  lastModTime?: SortOrder;
  lastModUserId?: SortOrder;
  paymentAmount?: SortOrder;
  paymentIntentDate?: SortOrder;
  payment_status?: SortOrder;
  paymentType?: SortOrder;
};
