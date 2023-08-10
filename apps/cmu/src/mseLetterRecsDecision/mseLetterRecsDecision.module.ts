import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MseLetterRecsDecisionModuleBase } from "./base/mseLetterRecsDecision.module.base";
import { MseLetterRecsDecisionService } from "./mseLetterRecsDecision.service";
import { MseLetterRecsDecisionController } from "./mseLetterRecsDecision.controller";
import { MseLetterRecsDecisionResolver } from "./mseLetterRecsDecision.resolver";

@Module({
  imports: [MseLetterRecsDecisionModuleBase, forwardRef(() => AuthModule)],
  controllers: [MseLetterRecsDecisionController],
  providers: [MseLetterRecsDecisionService, MseLetterRecsDecisionResolver],
  exports: [MseLetterRecsDecisionService],
})
export class MseLetterRecsDecisionModule {}
