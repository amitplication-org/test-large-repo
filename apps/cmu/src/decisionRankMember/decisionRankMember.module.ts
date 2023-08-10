import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DecisionRankMemberModuleBase } from "./base/decisionRankMember.module.base";
import { DecisionRankMemberService } from "./decisionRankMember.service";
import { DecisionRankMemberController } from "./decisionRankMember.controller";
import { DecisionRankMemberResolver } from "./decisionRankMember.resolver";

@Module({
  imports: [DecisionRankMemberModuleBase, forwardRef(() => AuthModule)],
  controllers: [DecisionRankMemberController],
  providers: [DecisionRankMemberService, DecisionRankMemberResolver],
  exports: [DecisionRankMemberService],
})
export class DecisionRankMemberModule {}
