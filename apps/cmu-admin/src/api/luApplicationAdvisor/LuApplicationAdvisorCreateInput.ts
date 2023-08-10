export type LuApplicationAdvisorCreateInput = {
  advisorType: number;
  advisorUserId?: number | null;
  applicationId: number;
  choice?: number | null;
  name?: string | null;
  programId?: number | null;
};
