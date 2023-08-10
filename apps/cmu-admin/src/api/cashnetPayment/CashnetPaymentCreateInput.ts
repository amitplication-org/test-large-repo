export type CashnetPaymentCreateInput = {
  amount?: number | null;
  appId: number;
  applicantEmail: string;
  applicantName: string;
  merchant: number;
  status: string;
  transactionId: number;
  transactionType: string;
};
