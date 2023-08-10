export type MhciPrereq = {
  applicationId: number;
  id: number;
  periodId: number;
  prereq_type?: "design" | "programming" | "statistics";
  status?:
    | "Student_Saved"
    | "Not_Submitted"
    | "Student_Submitted"
    | "Student_Edited"
    | "Reviewer_Responded"
    | null;
  student_assessment?: "fulfilledTrue" | "fulfilledFalse" | null;
  studentLuUsersUsertypesId: number;
  timestamp: Date;
};
