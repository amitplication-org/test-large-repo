import { SearchText as TSearchText } from "../api/searchText/SearchText";

export const SEARCHTEXT_TITLE_FIELD = "applicationText";

export const SearchTextTitle = (record: TSearchText): string => {
  return record.applicationText || String(record.id);
};
