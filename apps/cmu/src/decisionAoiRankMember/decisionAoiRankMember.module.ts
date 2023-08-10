import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DecisionAoiRankMemberModuleBase } from "./base/decisionAoiRankMember.module.base";
import { DecisionAoiRankMemberService } from "./decisionAoiRankMember.service";
import { DecisionAoiRankMemberController } from "./decisionAoiRankMember.controller";
import { DecisionAoiRankMemberResolver } from "./decisionAoiRankMember.resolver";

@Module({
  imports: [DecisionAoiRankMemberModuleBase, forwardRef(() => AuthModule)],
  controllers: [DecisionAoiRankMemberController],
  providers: [DecisionAoiRankMemberService, DecisionAoiRankMemberResolver],
  exports: [DecisionAoiRankMemberService],
})
export class DecisionAoiRankMemberModule {}
