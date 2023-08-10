import { LtiMastersAdmit as TLtiMastersAdmit } from "../api/ltiMastersAdmit/LtiMastersAdmit";

export const LTIMASTERSADMIT_TITLE_FIELD = "id";

export const LtiMastersAdmitTitle = (record: TLtiMastersAdmit): string => {
  return record.id || String(record.id);
};
