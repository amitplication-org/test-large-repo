import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateAwAppIdModuleBase } from "./base/slateAwAppId.module.base";
import { SlateAwAppIdService } from "./slateAwAppId.service";
import { SlateAwAppIdController } from "./slateAwAppId.controller";
import { SlateAwAppIdResolver } from "./slateAwAppId.resolver";

@Module({
  imports: [SlateAwAppIdModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateAwAppIdController],
  providers: [SlateAwAppIdService, SlateAwAppIdResolver],
  exports: [SlateAwAppIdService],
})
export class SlateAwAppIdModule {}
