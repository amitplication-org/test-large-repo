import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PromotionStatusModuleBase } from "./base/promotionStatus.module.base";
import { PromotionStatusService } from "./promotionStatus.service";
import { PromotionStatusController } from "./promotionStatus.controller";
import { PromotionStatusResolver } from "./promotionStatus.resolver";

@Module({
  imports: [PromotionStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [PromotionStatusController],
  providers: [PromotionStatusService, PromotionStatusResolver],
  exports: [PromotionStatusService],
})
export class PromotionStatusModule {}
