import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewIniExperienceScaleModuleBase } from "./base/reviewIniExperienceScale.module.base";
import { ReviewIniExperienceScaleService } from "./reviewIniExperienceScale.service";
import { ReviewIniExperienceScaleController } from "./reviewIniExperienceScale.controller";
import { ReviewIniExperienceScaleResolver } from "./reviewIniExperienceScale.resolver";

@Module({
  imports: [ReviewIniExperienceScaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReviewIniExperienceScaleController],
  providers: [
    ReviewIniExperienceScaleService,
    ReviewIniExperienceScaleResolver,
  ],
  exports: [ReviewIniExperienceScaleService],
})
export class ReviewIniExperienceScaleModule {}
