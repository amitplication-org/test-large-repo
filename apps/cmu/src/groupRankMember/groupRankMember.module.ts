import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GroupRankMemberModuleBase } from "./base/groupRankMember.module.base";
import { GroupRankMemberService } from "./groupRankMember.service";
import { GroupRankMemberController } from "./groupRankMember.controller";
import { GroupRankMemberResolver } from "./groupRankMember.resolver";

@Module({
  imports: [GroupRankMemberModuleBase, forwardRef(() => AuthModule)],
  controllers: [GroupRankMemberController],
  providers: [GroupRankMemberService, GroupRankMemberResolver],
  exports: [GroupRankMemberService],
})
export class GroupRankMemberModule {}
