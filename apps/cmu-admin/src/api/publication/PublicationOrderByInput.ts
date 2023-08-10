import { SortOrder } from "../../util/SortOrder";

export type PublicationOrderByInput = {
  applicationId?: SortOrder;
  author?: SortOrder;
  citation?: SortOrder;
  datafileId?: SortOrder;
  forum?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  typeField?: SortOrder;
  typeOther?: SortOrder;
  url?: SortOrder;
};
