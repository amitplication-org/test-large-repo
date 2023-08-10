import { UsHSStatus as TUsHSStatus } from "../api/usHsStatus/UsHSStatus";

export const USHSSTATUS_TITLE_FIELD = "id";

export const UsHSStatusTitle = (record: TUsHSStatus): string => {
  return record.id || String(record.id);
};
