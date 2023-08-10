import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PromotionHistoryModuleBase } from "./base/promotionHistory.module.base";
import { PromotionHistoryService } from "./promotionHistory.service";
import { PromotionHistoryController } from "./promotionHistory.controller";
import { PromotionHistoryResolver } from "./promotionHistory.resolver";

@Module({
  imports: [PromotionHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [PromotionHistoryController],
  providers: [PromotionHistoryService, PromotionHistoryResolver],
  exports: [PromotionHistoryService],
})
export class PromotionHistoryModule {}
