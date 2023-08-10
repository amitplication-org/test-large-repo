import { ApplicationAdminNote as TApplicationAdminNote } from "../api/applicationAdminNote/ApplicationAdminNote";

export const APPLICATIONADMINNOTE_TITLE_FIELD = "note";

export const ApplicationAdminNoteTitle = (
  record: TApplicationAdminNote
): string => {
  return record.note || String(record.id);
};
