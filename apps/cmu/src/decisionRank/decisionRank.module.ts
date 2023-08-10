import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DecisionRankModuleBase } from "./base/decisionRank.module.base";
import { DecisionRankService } from "./decisionRank.service";
import { DecisionRankController } from "./decisionRank.controller";
import { DecisionRankResolver } from "./decisionRank.resolver";

@Module({
  imports: [DecisionRankModuleBase, forwardRef(() => AuthModule)],
  controllers: [DecisionRankController],
  providers: [DecisionRankService, DecisionRankResolver],
  exports: [DecisionRankService],
})
export class DecisionRankModule {}
