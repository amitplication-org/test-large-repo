import { RissMcnair as TRissMcnair } from "../api/rissMcnair/RissMcnair";

export const RISSMCNAIR_TITLE_FIELD = "contact";

export const RissMcnairTitle = (record: TRissMcnair): string => {
  return record.contact || String(record.id);
};
