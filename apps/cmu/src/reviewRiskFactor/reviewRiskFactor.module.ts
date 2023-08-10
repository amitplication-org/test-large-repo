import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewRiskFactorModuleBase } from "./base/reviewRiskFactor.module.base";
import { ReviewRiskFactorService } from "./reviewRiskFactor.service";
import { ReviewRiskFactorController } from "./reviewRiskFactor.controller";
import { ReviewRiskFactorResolver } from "./reviewRiskFactor.resolver";

@Module({
  imports: [ReviewRiskFactorModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReviewRiskFactorController],
  providers: [ReviewRiskFactorService, ReviewRiskFactorResolver],
  exports: [ReviewRiskFactorService],
})
export class ReviewRiskFactorModule {}
