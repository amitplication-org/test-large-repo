import { SortOrder } from "../../util/SortOrder";

export type ApplicationAdminNoteOrderByInput = {
  applicationId?: SortOrder;
  id?: SortOrder;
  insertTime?: SortOrder;
  insertUserId?: SortOrder;
  note?: SortOrder;
};
