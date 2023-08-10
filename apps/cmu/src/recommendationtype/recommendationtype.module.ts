import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RecommendationtypeModuleBase } from "./base/recommendationtype.module.base";
import { RecommendationtypeService } from "./recommendationtype.service";
import { RecommendationtypeController } from "./recommendationtype.controller";
import { RecommendationtypeResolver } from "./recommendationtype.resolver";

@Module({
  imports: [RecommendationtypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [RecommendationtypeController],
  providers: [RecommendationtypeService, RecommendationtypeResolver],
  exports: [RecommendationtypeService],
})
export class RecommendationtypeModule {}
