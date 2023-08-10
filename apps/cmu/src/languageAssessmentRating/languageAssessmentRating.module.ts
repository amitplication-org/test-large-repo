import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LanguageAssessmentRatingModuleBase } from "./base/languageAssessmentRating.module.base";
import { LanguageAssessmentRatingService } from "./languageAssessmentRating.service";
import { LanguageAssessmentRatingController } from "./languageAssessmentRating.controller";
import { LanguageAssessmentRatingResolver } from "./languageAssessmentRating.resolver";

@Module({
  imports: [LanguageAssessmentRatingModuleBase, forwardRef(() => AuthModule)],
  controllers: [LanguageAssessmentRatingController],
  providers: [
    LanguageAssessmentRatingService,
    LanguageAssessmentRatingResolver,
  ],
  exports: [LanguageAssessmentRatingService],
})
export class LanguageAssessmentRatingModule {}
