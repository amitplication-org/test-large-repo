import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WaiverApplicationModuleBase } from "./base/waiverApplication.module.base";
import { WaiverApplicationService } from "./waiverApplication.service";
import { WaiverApplicationController } from "./waiverApplication.controller";
import { WaiverApplicationResolver } from "./waiverApplication.resolver";

@Module({
  imports: [WaiverApplicationModuleBase, forwardRef(() => AuthModule)],
  controllers: [WaiverApplicationController],
  providers: [WaiverApplicationService, WaiverApplicationResolver],
  exports: [WaiverApplicationService],
})
export class WaiverApplicationModule {}
