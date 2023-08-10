import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WaiverOrgModuleBase } from "./base/waiverOrg.module.base";
import { WaiverOrgService } from "./waiverOrg.service";
import { WaiverOrgController } from "./waiverOrg.controller";
import { WaiverOrgResolver } from "./waiverOrg.resolver";

@Module({
  imports: [WaiverOrgModuleBase, forwardRef(() => AuthModule)],
  controllers: [WaiverOrgController],
  providers: [WaiverOrgService, WaiverOrgResolver],
  exports: [WaiverOrgService],
})
export class WaiverOrgModule {}
