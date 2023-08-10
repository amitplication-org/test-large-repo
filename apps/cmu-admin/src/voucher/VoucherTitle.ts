import { Voucher as TVoucher } from "../api/voucher/Voucher";

export const VOUCHER_TITLE_FIELD = "code";

export const VoucherTitle = (record: TVoucher): string => {
  return record.code || String(record.id);
};
