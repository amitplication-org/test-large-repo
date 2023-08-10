export type StudentDecisionHistory = {
  applicationId: number | null;
  decision: string | null;
  deferralSemester: string | null;
  deferralYear: string | null;
  id: number;
  insertDate: Date;
  programId: number | null;
};
