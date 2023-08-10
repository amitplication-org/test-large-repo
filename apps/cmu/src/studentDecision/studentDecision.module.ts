import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StudentDecisionModuleBase } from "./base/studentDecision.module.base";
import { StudentDecisionService } from "./studentDecision.service";
import { StudentDecisionController } from "./studentDecision.controller";
import { StudentDecisionResolver } from "./studentDecision.resolver";

@Module({
  imports: [StudentDecisionModuleBase, forwardRef(() => AuthModule)],
  controllers: [StudentDecisionController],
  providers: [StudentDecisionService, StudentDecisionResolver],
  exports: [StudentDecisionService],
})
export class StudentDecisionModule {}
