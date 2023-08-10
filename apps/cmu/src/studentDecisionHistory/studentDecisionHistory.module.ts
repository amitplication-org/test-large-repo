import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StudentDecisionHistoryModuleBase } from "./base/studentDecisionHistory.module.base";
import { StudentDecisionHistoryService } from "./studentDecisionHistory.service";
import { StudentDecisionHistoryController } from "./studentDecisionHistory.controller";
import { StudentDecisionHistoryResolver } from "./studentDecisionHistory.resolver";

@Module({
  imports: [StudentDecisionHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [StudentDecisionHistoryController],
  providers: [StudentDecisionHistoryService, StudentDecisionHistoryResolver],
  exports: [StudentDecisionHistoryService],
})
export class StudentDecisionHistoryModule {}
