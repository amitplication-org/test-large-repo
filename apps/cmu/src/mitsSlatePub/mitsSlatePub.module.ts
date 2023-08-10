import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MitsSlatePubModuleBase } from "./base/mitsSlatePub.module.base";
import { MitsSlatePubService } from "./mitsSlatePub.service";
import { MitsSlatePubController } from "./mitsSlatePub.controller";
import { MitsSlatePubResolver } from "./mitsSlatePub.resolver";

@Module({
  imports: [MitsSlatePubModuleBase, forwardRef(() => AuthModule)],
  controllers: [MitsSlatePubController],
  providers: [MitsSlatePubService, MitsSlatePubResolver],
  exports: [MitsSlatePubService],
})
export class MitsSlatePubModule {}
