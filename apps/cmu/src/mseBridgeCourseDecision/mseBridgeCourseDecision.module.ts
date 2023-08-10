import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MseBridgeCourseDecisionModuleBase } from "./base/mseBridgeCourseDecision.module.base";
import { MseBridgeCourseDecisionService } from "./mseBridgeCourseDecision.service";
import { MseBridgeCourseDecisionController } from "./mseBridgeCourseDecision.controller";
import { MseBridgeCourseDecisionResolver } from "./mseBridgeCourseDecision.resolver";

@Module({
  imports: [MseBridgeCourseDecisionModuleBase, forwardRef(() => AuthModule)],
  controllers: [MseBridgeCourseDecisionController],
  providers: [MseBridgeCourseDecisionService, MseBridgeCourseDecisionResolver],
  exports: [MseBridgeCourseDecisionService],
})
export class MseBridgeCourseDecisionModule {}
