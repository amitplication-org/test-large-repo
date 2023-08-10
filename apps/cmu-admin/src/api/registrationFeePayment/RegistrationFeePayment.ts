export type RegistrationFeePayment = {
  applicationId: number;
  departmentId: number;
  id: number;
  lastModTime: Date;
  lastModUserId: number;
  paymentAmount: number;
  paymentIntentDate: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  paymentType: number;
};
