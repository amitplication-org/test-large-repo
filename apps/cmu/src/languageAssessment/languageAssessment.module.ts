import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LanguageAssessmentModuleBase } from "./base/languageAssessment.module.base";
import { LanguageAssessmentService } from "./languageAssessment.service";
import { LanguageAssessmentController } from "./languageAssessment.controller";
import { LanguageAssessmentResolver } from "./languageAssessment.resolver";

@Module({
  imports: [LanguageAssessmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [LanguageAssessmentController],
  providers: [LanguageAssessmentService, LanguageAssessmentResolver],
  exports: [LanguageAssessmentService],
})
export class LanguageAssessmentModule {}
