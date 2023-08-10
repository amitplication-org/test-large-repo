import { SlateEmail2awUser as TSlateEmail2awUser } from "../api/slateEmail2awUser/SlateEmail2awUser";

export const SLATEEMAIL2AWUSER_TITLE_FIELD = "slateEmail";

export const SlateEmail2awUserTitle = (record: TSlateEmail2awUser): string => {
  return record.slateEmail || String(record.id);
};
