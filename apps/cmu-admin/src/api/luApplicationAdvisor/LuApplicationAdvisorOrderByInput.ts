import { SortOrder } from "../../util/SortOrder";

export type LuApplicationAdvisorOrderByInput = {
  advisorType?: SortOrder;
  advisorUserId?: SortOrder;
  applicationId?: SortOrder;
  choice?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  programId?: SortOrder;
};
