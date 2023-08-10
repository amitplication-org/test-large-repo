import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewerPreferenceModuleBase } from "./base/reviewerPreference.module.base";
import { ReviewerPreferenceService } from "./reviewerPreference.service";
import { ReviewerPreferenceController } from "./reviewerPreference.controller";
import { ReviewerPreferenceResolver } from "./reviewerPreference.resolver";

@Module({
  imports: [ReviewerPreferenceModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReviewerPreferenceController],
  providers: [ReviewerPreferenceService, ReviewerPreferenceResolver],
  exports: [ReviewerPreferenceService],
})
export class ReviewerPreferenceModule {}
