import { ReviewIniOverallScale as TReviewIniOverallScale } from "../api/reviewIniOverallScale/ReviewIniOverallScale";

export const REVIEWINIOVERALLSCALE_TITLE_FIELD = "value";

export const ReviewIniOverallScaleTitle = (
  record: TReviewIniOverallScale
): string => {
  return record.value || String(record.id);
};
