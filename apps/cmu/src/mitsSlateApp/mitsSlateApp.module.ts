import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MitsSlateAppModuleBase } from "./base/mitsSlateApp.module.base";
import { MitsSlateAppService } from "./mitsSlateApp.service";
import { MitsSlateAppController } from "./mitsSlateApp.controller";
import { MitsSlateAppResolver } from "./mitsSlateApp.resolver";

@Module({
  imports: [MitsSlateAppModuleBase, forwardRef(() => AuthModule)],
  controllers: [MitsSlateAppController],
  providers: [MitsSlateAppService, MitsSlateAppResolver],
  exports: [MitsSlateAppService],
})
export class MitsSlateAppModule {}
