import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateAppModuleBase } from "./base/slateApp.module.base";
import { SlateAppService } from "./slateApp.service";
import { SlateAppController } from "./slateApp.controller";
import { SlateAppResolver } from "./slateApp.resolver";

@Module({
  imports: [SlateAppModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateAppController],
  providers: [SlateAppService, SlateAppResolver],
  exports: [SlateAppService],
})
export class SlateAppModule {}
