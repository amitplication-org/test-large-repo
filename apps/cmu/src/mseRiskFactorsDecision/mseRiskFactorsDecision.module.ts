import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MseRiskFactorsDecisionModuleBase } from "./base/mseRiskFactorsDecision.module.base";
import { MseRiskFactorsDecisionService } from "./mseRiskFactorsDecision.service";
import { MseRiskFactorsDecisionController } from "./mseRiskFactorsDecision.controller";
import { MseRiskFactorsDecisionResolver } from "./mseRiskFactorsDecision.resolver";

@Module({
  imports: [MseRiskFactorsDecisionModuleBase, forwardRef(() => AuthModule)],
  controllers: [MseRiskFactorsDecisionController],
  providers: [MseRiskFactorsDecisionService, MseRiskFactorsDecisionResolver],
  exports: [MseRiskFactorsDecisionService],
})
export class MseRiskFactorsDecisionModule {}
