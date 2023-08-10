import { ProgramGroupType as TProgramGroupType } from "../api/programGroupType/ProgramGroupType";

export const PROGRAMGROUPTYPE_TITLE_FIELD = "programGroupTypeName";

export const ProgramGroupTypeTitle = (record: TProgramGroupType): string => {
  return record.programGroupTypeName || String(record.id);
};
