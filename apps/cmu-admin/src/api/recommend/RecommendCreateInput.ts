export type RecommendCreateInput = {
  applicationId: number;
  buckleyatupload?: number | null;
  cmuAffiliation?: number | null;
  content?: string | null;
  datafileId?: number | null;
  lastReminderSent?: Date | null;
  recommendtype: number;
  recUserId: number;
  reminderSentCount: number;
  submitted: boolean;
};
