import { ApplicationDecisionIni as TApplicationDecisionIni } from "../api/applicationDecisionIni/ApplicationDecisionIni";

export const APPLICATIONDECISIONINI_TITLE_FIELD = "comments";

export const ApplicationDecisionIniTitle = (
  record: TApplicationDecisionIni
): string => {
  return record.comments || String(record.id);
};
