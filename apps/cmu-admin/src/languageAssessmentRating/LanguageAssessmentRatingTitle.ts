import { LanguageAssessmentRating as TLanguageAssessmentRating } from "../api/languageAssessmentRating/LanguageAssessmentRating";

export const LANGUAGEASSESSMENTRATING_TITLE_FIELD = "value";

export const LanguageAssessmentRatingTitle = (
  record: TLanguageAssessmentRating
): string => {
  return record.value || String(record.id);
};
