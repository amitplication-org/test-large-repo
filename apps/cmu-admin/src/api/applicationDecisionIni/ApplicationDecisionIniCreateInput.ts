export type ApplicationDecisionIniCreateInput = {
  admissionProgramId: number;
  admissionStatus?: number | null;
  applicationId: number;
  choice?: number | null;
  comments?: string | null;
  scholarshipAmt?: number | null;
  scholarshipComments?: string | null;
};
