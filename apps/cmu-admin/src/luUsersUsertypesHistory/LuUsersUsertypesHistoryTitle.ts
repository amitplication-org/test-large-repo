import { LuUsersUsertypesHistory as TLuUsersUsertypesHistory } from "../api/luUsersUsertypesHistory/LuUsersUsertypesHistory";

export const LUUSERSUSERTYPESHISTORY_TITLE_FIELD = "id";

export const LuUsersUsertypesHistoryTitle = (
  record: TLuUsersUsertypesHistory
): string => {
  return record.id || String(record.id);
};
