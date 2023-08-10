import { CashnetPayment as TCashnetPayment } from "../api/cashnetPayment/CashnetPayment";

export const CASHNETPAYMENT_TITLE_FIELD = "applicantName";

export const CashnetPaymentTitle = (record: TCashnetPayment): string => {
  return record.applicantName || String(record.id);
};
