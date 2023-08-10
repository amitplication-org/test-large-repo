import { SortOrder } from "../../util/SortOrder";

export type RegistrationFeeStatusOrderByInput = {
  amount?: SortOrder;
  applicationId?: SortOrder;
  departmentId?: SortOrder;
  id?: SortOrder;
  paid?: SortOrder;
  waived?: SortOrder;
};
