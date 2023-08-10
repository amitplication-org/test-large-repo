import { Unit as TUnit } from "../api/unit/Unit";

export const UNIT_TITLE_FIELD = "unitName";

export const UnitTitle = (record: TUnit): string => {
  return record.unitName || String(record.id);
};
