import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GroupRankCommentModuleBase } from "./base/groupRankComment.module.base";
import { GroupRankCommentService } from "./groupRankComment.service";
import { GroupRankCommentController } from "./groupRankComment.controller";
import { GroupRankCommentResolver } from "./groupRankComment.resolver";

@Module({
  imports: [GroupRankCommentModuleBase, forwardRef(() => AuthModule)],
  controllers: [GroupRankCommentController],
  providers: [GroupRankCommentService, GroupRankCommentResolver],
  exports: [GroupRankCommentService],
})
export class GroupRankCommentModule {}
