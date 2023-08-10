import { VoucherApplicationError as TVoucherApplicationError } from "../api/voucherApplicationError/VoucherApplicationError";

export const VOUCHERAPPLICATIONERROR_TITLE_FIELD = "code";

export const VoucherApplicationErrorTitle = (
  record: TVoucherApplicationError
): string => {
  return record.code || String(record.id);
};
