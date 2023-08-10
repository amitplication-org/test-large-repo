import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewIniOverallScaleModuleBase } from "./base/reviewIniOverallScale.module.base";
import { ReviewIniOverallScaleService } from "./reviewIniOverallScale.service";
import { ReviewIniOverallScaleController } from "./reviewIniOverallScale.controller";
import { ReviewIniOverallScaleResolver } from "./reviewIniOverallScale.resolver";

@Module({
  imports: [ReviewIniOverallScaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReviewIniOverallScaleController],
  providers: [ReviewIniOverallScaleService, ReviewIniOverallScaleResolver],
  exports: [ReviewIniOverallScaleService],
})
export class ReviewIniOverallScaleModule {}
