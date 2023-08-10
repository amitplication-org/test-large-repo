import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GroupRankModuleBase } from "./base/groupRank.module.base";
import { GroupRankService } from "./groupRank.service";
import { GroupRankController } from "./groupRank.controller";
import { GroupRankResolver } from "./groupRank.resolver";

@Module({
  imports: [GroupRankModuleBase, forwardRef(() => AuthModule)],
  controllers: [GroupRankController],
  providers: [GroupRankService, GroupRankResolver],
  exports: [GroupRankService],
})
export class GroupRankModule {}
