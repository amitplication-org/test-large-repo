import { SlateProgramsMseReviewed as TSlateProgramsMseReviewed } from "../api/slateProgramsMseReviewed/SlateProgramsMseReviewed";

export const SLATEPROGRAMSMSEREVIEWED_TITLE_FIELD = "first";

export const SlateProgramsMseReviewedTitle = (
  record: TSlateProgramsMseReviewed
): string => {
  return record.first || String(record.id);
};
