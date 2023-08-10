import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateOrgModuleBase } from "./base/slateOrg.module.base";
import { SlateOrgService } from "./slateOrg.service";
import { SlateOrgController } from "./slateOrg.controller";
import { SlateOrgResolver } from "./slateOrg.resolver";

@Module({
  imports: [SlateOrgModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateOrgController],
  providers: [SlateOrgService, SlateOrgResolver],
  exports: [SlateOrgService],
})
export class SlateOrgModule {}
