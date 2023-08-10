import { SlateReview as TSlateReview } from "../api/slateReview/SlateReview";

export const SLATEREVIEW_TITLE_FIELD = "mseReviewFormNum1UserName";

export const SlateReviewTitle = (record: TSlateReview): string => {
  return record.mseReviewFormNum1UserName || String(record.id);
};
