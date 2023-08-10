import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IniYearsExperienceModuleBase } from "./base/iniYearsExperience.module.base";
import { IniYearsExperienceService } from "./iniYearsExperience.service";
import { IniYearsExperienceController } from "./iniYearsExperience.controller";
import { IniYearsExperienceResolver } from "./iniYearsExperience.resolver";

@Module({
  imports: [IniYearsExperienceModuleBase, forwardRef(() => AuthModule)],
  controllers: [IniYearsExperienceController],
  providers: [IniYearsExperienceService, IniYearsExperienceResolver],
  exports: [IniYearsExperienceService],
})
export class IniYearsExperienceModule {}
