import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlatePubModuleBase } from "./base/slatePub.module.base";
import { SlatePubService } from "./slatePub.service";
import { SlatePubController } from "./slatePub.controller";
import { SlatePubResolver } from "./slatePub.resolver";

@Module({
  imports: [SlatePubModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlatePubController],
  providers: [SlatePubService, SlatePubResolver],
  exports: [SlatePubService],
})
export class SlatePubModule {}
