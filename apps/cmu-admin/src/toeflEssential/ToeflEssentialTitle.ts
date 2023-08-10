import { ToeflEssential as TToeflEssential } from "../api/toeflEssential/ToeflEssential";

export const TOEFLESSENTIAL_TITLE_FIELD = "url";

export const ToeflEssentialTitle = (record: TToeflEssential): string => {
  return record.url || String(record.id);
};
