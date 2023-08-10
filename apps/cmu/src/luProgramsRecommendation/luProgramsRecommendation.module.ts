import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuProgramsRecommendationModuleBase } from "./base/luProgramsRecommendation.module.base";
import { LuProgramsRecommendationService } from "./luProgramsRecommendation.service";
import { LuProgramsRecommendationController } from "./luProgramsRecommendation.controller";
import { LuProgramsRecommendationResolver } from "./luProgramsRecommendation.resolver";

@Module({
  imports: [LuProgramsRecommendationModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuProgramsRecommendationController],
  providers: [
    LuProgramsRecommendationService,
    LuProgramsRecommendationResolver,
  ],
  exports: [LuProgramsRecommendationService],
})
export class LuProgramsRecommendationModule {}
