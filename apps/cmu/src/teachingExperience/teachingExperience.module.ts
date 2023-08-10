import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TeachingExperienceModuleBase } from "./base/teachingExperience.module.base";
import { TeachingExperienceService } from "./teachingExperience.service";
import { TeachingExperienceController } from "./teachingExperience.controller";
import { TeachingExperienceResolver } from "./teachingExperience.resolver";

@Module({
  imports: [TeachingExperienceModuleBase, forwardRef(() => AuthModule)],
  controllers: [TeachingExperienceController],
  providers: [TeachingExperienceService, TeachingExperienceResolver],
  exports: [TeachingExperienceService],
})
export class TeachingExperienceModule {}
