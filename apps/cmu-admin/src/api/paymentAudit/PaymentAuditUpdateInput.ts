export type PaymentAuditUpdateInput = {
  applicationId?: number;
  lastModUserId?: number;
  paymentAmount?: number;
  paymentId?: number;
  paymentIntentDate?: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  paymentType?: number;
};
