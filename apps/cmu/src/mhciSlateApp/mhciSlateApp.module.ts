import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciSlateAppModuleBase } from "./base/mhciSlateApp.module.base";
import { MhciSlateAppService } from "./mhciSlateApp.service";
import { MhciSlateAppController } from "./mhciSlateApp.controller";
import { MhciSlateAppResolver } from "./mhciSlateApp.resolver";

@Module({
  imports: [MhciSlateAppModuleBase, forwardRef(() => AuthModule)],
  controllers: [MhciSlateAppController],
  providers: [MhciSlateAppService, MhciSlateAppResolver],
  exports: [MhciSlateAppService],
})
export class MhciSlateAppModule {}
