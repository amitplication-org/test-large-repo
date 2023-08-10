import { AcoPal as TAcoPal } from "../api/acoPal/AcoPal";

export const ACOPAL_TITLE_FIELD = "id";

export const AcoPalTitle = (record: TAcoPal): string => {
  return record.id || String(record.id);
};
