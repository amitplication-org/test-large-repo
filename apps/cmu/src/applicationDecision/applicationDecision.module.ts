import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationDecisionModuleBase } from "./base/applicationDecision.module.base";
import { ApplicationDecisionService } from "./applicationDecision.service";
import { ApplicationDecisionController } from "./applicationDecision.controller";
import { ApplicationDecisionResolver } from "./applicationDecision.resolver";

@Module({
  imports: [ApplicationDecisionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationDecisionController],
  providers: [ApplicationDecisionService, ApplicationDecisionResolver],
  exports: [ApplicationDecisionService],
})
export class ApplicationDecisionModule {}
