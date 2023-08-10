import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LegacyEthnicityModuleBase } from "./base/legacyEthnicity.module.base";
import { LegacyEthnicityService } from "./legacyEthnicity.service";
import { LegacyEthnicityController } from "./legacyEthnicity.controller";
import { LegacyEthnicityResolver } from "./legacyEthnicity.resolver";

@Module({
  imports: [LegacyEthnicityModuleBase, forwardRef(() => AuthModule)],
  controllers: [LegacyEthnicityController],
  providers: [LegacyEthnicityService, LegacyEthnicityResolver],
  exports: [LegacyEthnicityService],
})
export class LegacyEthnicityModule {}
