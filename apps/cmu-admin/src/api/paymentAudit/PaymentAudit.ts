export type PaymentAudit = {
  applicationId: number;
  id: number;
  lastModTime: Date;
  lastModUserId: number;
  paymentAmount: number;
  paymentId: number;
  paymentIntentDate: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  paymentType: number;
  timeDeleted: Date;
};
