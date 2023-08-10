import { LuApplicationAdvisor as TLuApplicationAdvisor } from "../api/luApplicationAdvisor/LuApplicationAdvisor";

export const LUAPPLICATIONADVISOR_TITLE_FIELD = "name";

export const LuApplicationAdvisorTitle = (
  record: TLuApplicationAdvisor
): string => {
  return record.name || String(record.id);
};
