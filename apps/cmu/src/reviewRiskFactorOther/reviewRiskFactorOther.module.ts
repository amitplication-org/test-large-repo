import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewRiskFactorOtherModuleBase } from "./base/reviewRiskFactorOther.module.base";
import { ReviewRiskFactorOtherService } from "./reviewRiskFactorOther.service";
import { ReviewRiskFactorOtherController } from "./reviewRiskFactorOther.controller";
import { ReviewRiskFactorOtherResolver } from "./reviewRiskFactorOther.resolver";

@Module({
  imports: [ReviewRiskFactorOtherModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReviewRiskFactorOtherController],
  providers: [ReviewRiskFactorOtherService, ReviewRiskFactorOtherResolver],
  exports: [ReviewRiskFactorOtherService],
})
export class ReviewRiskFactorOtherModule {}
