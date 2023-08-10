import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LtiMastersAdmitModuleBase } from "./base/ltiMastersAdmit.module.base";
import { LtiMastersAdmitService } from "./ltiMastersAdmit.service";
import { LtiMastersAdmitController } from "./ltiMastersAdmit.controller";
import { LtiMastersAdmitResolver } from "./ltiMastersAdmit.resolver";

@Module({
  imports: [LtiMastersAdmitModuleBase, forwardRef(() => AuthModule)],
  controllers: [LtiMastersAdmitController],
  providers: [LtiMastersAdmitService, LtiMastersAdmitResolver],
  exports: [LtiMastersAdmitService],
})
export class LtiMastersAdmitModule {}
