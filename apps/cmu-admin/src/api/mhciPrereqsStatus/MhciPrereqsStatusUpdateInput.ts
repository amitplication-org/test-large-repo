export type MhciPrereqsStatusUpdateInput = {
  mhciPrereqsId?: number;
  programId?: number | null;
  reviewerExplanation?: string | null;
  reviewerLuUsersUsertypesId?: number | null;
  reviewer_status?:
    | "Not_Submitted"
    | "Submitted"
    | "In_progress"
    | "Approved_plan"
    | "Fulfilled__undergraduate_degree"
    | "Fulfilled_6";
  reviewerTimestamp?: Date | null;
  status?:
    | "Saved_Not_Submitted"
    | "Student_Submitted"
    | "Student_Edited"
    | "Reviewer_Responded"
    | null;
};
