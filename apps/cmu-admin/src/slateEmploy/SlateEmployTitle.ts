import { SlateEmploy as TSlateEmploy } from "../api/slateEmploy/SlateEmploy";

export const SLATEEMPLOY_TITLE_FIELD = "first";

export const SlateEmployTitle = (record: TSlateEmploy): string => {
  return record.first || String(record.id);
};
