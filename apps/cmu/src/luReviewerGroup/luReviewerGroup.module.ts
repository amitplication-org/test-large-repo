import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuReviewerGroupModuleBase } from "./base/luReviewerGroup.module.base";
import { LuReviewerGroupService } from "./luReviewerGroup.service";
import { LuReviewerGroupController } from "./luReviewerGroup.controller";
import { LuReviewerGroupResolver } from "./luReviewerGroup.resolver";

@Module({
  imports: [LuReviewerGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuReviewerGroupController],
  providers: [LuReviewerGroupService, LuReviewerGroupResolver],
  exports: [LuReviewerGroupService],
})
export class LuReviewerGroupModule {}
