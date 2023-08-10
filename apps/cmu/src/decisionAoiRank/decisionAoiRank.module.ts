import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DecisionAoiRankModuleBase } from "./base/decisionAoiRank.module.base";
import { DecisionAoiRankService } from "./decisionAoiRank.service";
import { DecisionAoiRankController } from "./decisionAoiRank.controller";
import { DecisionAoiRankResolver } from "./decisionAoiRank.resolver";

@Module({
  imports: [DecisionAoiRankModuleBase, forwardRef(() => AuthModule)],
  controllers: [DecisionAoiRankController],
  providers: [DecisionAoiRankService, DecisionAoiRankResolver],
  exports: [DecisionAoiRankService],
})
export class DecisionAoiRankModule {}
