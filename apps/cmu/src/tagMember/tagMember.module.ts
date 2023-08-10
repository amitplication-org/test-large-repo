import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TagMemberModuleBase } from "./base/tagMember.module.base";
import { TagMemberService } from "./tagMember.service";
import { TagMemberController } from "./tagMember.controller";
import { TagMemberResolver } from "./tagMember.resolver";

@Module({
  imports: [TagMemberModuleBase, forwardRef(() => AuthModule)],
  controllers: [TagMemberController],
  providers: [TagMemberService, TagMemberResolver],
  exports: [TagMemberService],
})
export class TagMemberModule {}
