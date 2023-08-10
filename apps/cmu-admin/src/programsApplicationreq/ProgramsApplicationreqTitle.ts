import { ProgramsApplicationreq as TProgramsApplicationreq } from "../api/programsApplicationreq/ProgramsApplicationreq";

export const PROGRAMSAPPLICATIONREQ_TITLE_FIELD = "id";

export const ProgramsApplicationreqTitle = (
  record: TProgramsApplicationreq
): string => {
  return record.id || String(record.id);
};
