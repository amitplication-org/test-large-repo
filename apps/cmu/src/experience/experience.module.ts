import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExperienceModuleBase } from "./base/experience.module.base";
import { ExperienceService } from "./experience.service";
import { ExperienceController } from "./experience.controller";
import { ExperienceResolver } from "./experience.resolver";

@Module({
  imports: [ExperienceModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExperienceController],
  providers: [ExperienceService, ExperienceResolver],
  exports: [ExperienceService],
})
export class ExperienceModule {}
