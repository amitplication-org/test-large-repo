export type PaymentUpdateInput = {
  applicationId?: number;
  lastModUserId?: number;
  paymentAmount?: number;
  paymentIntentDate?: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  paymentType?: number;
};
