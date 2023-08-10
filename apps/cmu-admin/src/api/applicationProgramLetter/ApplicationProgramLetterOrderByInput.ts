import { SortOrder } from "../../util/SortOrder";

export type ApplicationProgramLetterOrderByInput = {
  admitSent?: SortOrder;
  admitSentDate?: SortOrder;
  luApplicationProgramsId?: SortOrder;
  rejectionSent?: SortOrder;
  rejectionSentDate?: SortOrder;
  waitlistSent?: SortOrder;
  waitlistSentDate?: SortOrder;
};
