import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MitsSlateRecommendModuleBase } from "./base/mitsSlateRecommend.module.base";
import { MitsSlateRecommendService } from "./mitsSlateRecommend.service";
import { MitsSlateRecommendController } from "./mitsSlateRecommend.controller";
import { MitsSlateRecommendResolver } from "./mitsSlateRecommend.resolver";

@Module({
  imports: [MitsSlateRecommendModuleBase, forwardRef(() => AuthModule)],
  controllers: [MitsSlateRecommendController],
  providers: [MitsSlateRecommendService, MitsSlateRecommendResolver],
  exports: [MitsSlateRecommendService],
})
export class MitsSlateRecommendModule {}
