import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LangProfRecommendModuleBase } from "./base/langProfRecommend.module.base";
import { LangProfRecommendService } from "./langProfRecommend.service";
import { LangProfRecommendController } from "./langProfRecommend.controller";
import { LangProfRecommendResolver } from "./langProfRecommend.resolver";

@Module({
  imports: [LangProfRecommendModuleBase, forwardRef(() => AuthModule)],
  controllers: [LangProfRecommendController],
  providers: [LangProfRecommendService, LangProfRecommendResolver],
  exports: [LangProfRecommendService],
})
export class LangProfRecommendModule {}
