import { SortOrder } from "../../util/SortOrder";

export type MhciPrereqOrderByInput = {
  applicationId?: SortOrder;
  id?: SortOrder;
  periodId?: SortOrder;
  prereq_type?: SortOrder;
  status?: SortOrder;
  student_assessment?: SortOrder;
  studentLuUsersUsertypesId?: SortOrder;
  timestamp?: SortOrder;
};
