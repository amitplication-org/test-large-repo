import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateRecommendModuleBase } from "./base/slateRecommend.module.base";
import { SlateRecommendService } from "./slateRecommend.service";
import { SlateRecommendController } from "./slateRecommend.controller";
import { SlateRecommendResolver } from "./slateRecommend.resolver";

@Module({
  imports: [SlateRecommendModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateRecommendController],
  providers: [SlateRecommendService, SlateRecommendResolver],
  exports: [SlateRecommendService],
})
export class SlateRecommendModule {}
