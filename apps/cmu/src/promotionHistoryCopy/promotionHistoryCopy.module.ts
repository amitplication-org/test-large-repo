import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PromotionHistoryCopyModuleBase } from "./base/promotionHistoryCopy.module.base";
import { PromotionHistoryCopyService } from "./promotionHistoryCopy.service";
import { PromotionHistoryCopyController } from "./promotionHistoryCopy.controller";
import { PromotionHistoryCopyResolver } from "./promotionHistoryCopy.resolver";

@Module({
  imports: [PromotionHistoryCopyModuleBase, forwardRef(() => AuthModule)],
  controllers: [PromotionHistoryCopyController],
  providers: [PromotionHistoryCopyService, PromotionHistoryCopyResolver],
  exports: [PromotionHistoryCopyService],
})
export class PromotionHistoryCopyModule {}
