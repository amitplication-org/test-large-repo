import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PeSlateAppModuleBase } from "./base/peSlateApp.module.base";
import { PeSlateAppService } from "./peSlateApp.service";
import { PeSlateAppController } from "./peSlateApp.controller";
import { PeSlateAppResolver } from "./peSlateApp.resolver";

@Module({
  imports: [PeSlateAppModuleBase, forwardRef(() => AuthModule)],
  controllers: [PeSlateAppController],
  providers: [PeSlateAppService, PeSlateAppResolver],
  exports: [PeSlateAppService],
})
export class PeSlateAppModule {}
