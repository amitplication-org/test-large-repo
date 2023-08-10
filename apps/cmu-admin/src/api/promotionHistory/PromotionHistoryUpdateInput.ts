export type PromotionHistoryUpdateInput = {
  applicationId?: number;
  programId?: number;
  promotion_method?: "default" | "voting" | "promotion" | "demotion";
  round?: number;
  usersId?: number | null;
};
