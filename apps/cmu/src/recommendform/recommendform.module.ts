import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RecommendformModuleBase } from "./base/recommendform.module.base";
import { RecommendformService } from "./recommendform.service";
import { RecommendformController } from "./recommendform.controller";
import { RecommendformResolver } from "./recommendform.resolver";

@Module({
  imports: [RecommendformModuleBase, forwardRef(() => AuthModule)],
  controllers: [RecommendformController],
  providers: [RecommendformService, RecommendformResolver],
  exports: [RecommendformService],
})
export class RecommendformModule {}
