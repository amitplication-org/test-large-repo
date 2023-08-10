import { ReviewRiskFactorOther as TReviewRiskFactorOther } from "../api/reviewRiskFactorOther/ReviewRiskFactorOther";

export const REVIEWRISKFACTOROTHER_TITLE_FIELD = "riskFactorOther";

export const ReviewRiskFactorOtherTitle = (
  record: TReviewRiskFactorOther
): string => {
  return record.riskFactorOther || String(record.id);
};
