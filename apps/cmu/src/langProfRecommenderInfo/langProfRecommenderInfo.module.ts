import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LangProfRecommenderInfoModuleBase } from "./base/langProfRecommenderInfo.module.base";
import { LangProfRecommenderInfoService } from "./langProfRecommenderInfo.service";
import { LangProfRecommenderInfoController } from "./langProfRecommenderInfo.controller";
import { LangProfRecommenderInfoResolver } from "./langProfRecommenderInfo.resolver";

@Module({
  imports: [LangProfRecommenderInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [LangProfRecommenderInfoController],
  providers: [LangProfRecommenderInfoService, LangProfRecommenderInfoResolver],
  exports: [LangProfRecommenderInfoService],
})
export class LangProfRecommenderInfoModule {}
