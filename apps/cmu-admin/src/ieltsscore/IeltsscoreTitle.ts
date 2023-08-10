import { Ieltsscore as TIeltsscore } from "../api/ieltsscore/Ieltsscore";

export const IELTSSCORE_TITLE_FIELD = "id";

export const IeltsscoreTitle = (record: TIeltsscore): string => {
  return record.id || String(record.id);
};
