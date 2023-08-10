import { RecyclableSelection as TRecyclableSelection } from "../api/recyclableSelection/RecyclableSelection";

export const RECYCLABLESELECTION_TITLE_FIELD = "id";

export const RecyclableSelectionTitle = (
  record: TRecyclableSelection
): string => {
  return record.id || String(record.id);
};
