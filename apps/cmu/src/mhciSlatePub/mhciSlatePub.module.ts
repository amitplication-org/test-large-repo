import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciSlatePubModuleBase } from "./base/mhciSlatePub.module.base";
import { MhciSlatePubService } from "./mhciSlatePub.service";
import { MhciSlatePubController } from "./mhciSlatePub.controller";
import { MhciSlatePubResolver } from "./mhciSlatePub.resolver";

@Module({
  imports: [MhciSlatePubModuleBase, forwardRef(() => AuthModule)],
  controllers: [MhciSlatePubController],
  providers: [MhciSlatePubService, MhciSlatePubResolver],
  exports: [MhciSlatePubService],
})
export class MhciSlatePubModule {}
