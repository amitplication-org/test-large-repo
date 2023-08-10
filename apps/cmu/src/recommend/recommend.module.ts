import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RecommendModuleBase } from "./base/recommend.module.base";
import { RecommendService } from "./recommend.service";
import { RecommendController } from "./recommend.controller";
import { RecommendResolver } from "./recommend.resolver";

@Module({
  imports: [RecommendModuleBase, forwardRef(() => AuthModule)],
  controllers: [RecommendController],
  providers: [RecommendService, RecommendResolver],
  exports: [RecommendService],
})
export class RecommendModule {}
