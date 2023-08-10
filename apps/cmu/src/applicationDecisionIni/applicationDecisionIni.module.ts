import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationDecisionIniModuleBase } from "./base/applicationDecisionIni.module.base";
import { ApplicationDecisionIniService } from "./applicationDecisionIni.service";
import { ApplicationDecisionIniController } from "./applicationDecisionIni.controller";
import { ApplicationDecisionIniResolver } from "./applicationDecisionIni.resolver";

@Module({
  imports: [ApplicationDecisionIniModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationDecisionIniController],
  providers: [ApplicationDecisionIniService, ApplicationDecisionIniResolver],
  exports: [ApplicationDecisionIniService],
})
export class ApplicationDecisionIniModule {}
