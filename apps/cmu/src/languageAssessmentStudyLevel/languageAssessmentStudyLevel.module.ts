import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LanguageAssessmentStudyLevelModuleBase } from "./base/languageAssessmentStudyLevel.module.base";
import { LanguageAssessmentStudyLevelService } from "./languageAssessmentStudyLevel.service";
import { LanguageAssessmentStudyLevelController } from "./languageAssessmentStudyLevel.controller";
import { LanguageAssessmentStudyLevelResolver } from "./languageAssessmentStudyLevel.resolver";

@Module({
  imports: [
    LanguageAssessmentStudyLevelModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [LanguageAssessmentStudyLevelController],
  providers: [
    LanguageAssessmentStudyLevelService,
    LanguageAssessmentStudyLevelResolver,
  ],
  exports: [LanguageAssessmentStudyLevelService],
})
export class LanguageAssessmentStudyLevelModule {}
