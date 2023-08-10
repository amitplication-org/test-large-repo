export type MhciPrereqsCourse = {
  applicationId: number;
  course_type?:
    | "Design"
    | "Programming"
    | "Multi_way_ANOVA"
    | "Single_way_ANOVA"
    | "Multi_factor_regression"
    | "Single_factor_regression";
  id: number;
  periodId: number | null;
  programId: number | null;
  studentCourseGrade: string | null;
  studentCourseInstitution: string;
  studentCourseName: string;
  studentCourseTime: string;
  studentLuUsersUsertypesId: number;
  submittedToReviewer: number;
};
