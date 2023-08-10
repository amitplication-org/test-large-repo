import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RecommenderInfoModuleBase } from "./base/recommenderInfo.module.base";
import { RecommenderInfoService } from "./recommenderInfo.service";
import { RecommenderInfoController } from "./recommenderInfo.controller";
import { RecommenderInfoResolver } from "./recommenderInfo.resolver";

@Module({
  imports: [RecommenderInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [RecommenderInfoController],
  providers: [RecommenderInfoService, RecommenderInfoResolver],
  exports: [RecommenderInfoService],
})
export class RecommenderInfoModule {}
