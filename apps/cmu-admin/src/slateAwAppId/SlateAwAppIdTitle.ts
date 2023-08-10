import { SlateAwAppId as TSlateAwAppId } from "../api/slateAwAppId/SlateAwAppId";

export const SLATEAWAPPID_TITLE_FIELD = "awAppId";

export const SlateAwAppIdTitle = (record: TSlateAwAppId): string => {
  return record.awAppId || String(record.id);
};
