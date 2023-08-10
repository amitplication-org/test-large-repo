import { Usersinst as TUsersinst } from "../api/usersinst/Usersinst";

export const USERSINST_TITLE_FIELD = "collegeName";

export const UsersinstTitle = (record: TUsersinst): string => {
  return record.collegeName || String(record.id);
};
