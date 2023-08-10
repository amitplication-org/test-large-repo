import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciPrereqModuleBase } from "./base/mhciPrereq.module.base";
import { MhciPrereqService } from "./mhciPrereq.service";
import { MhciPrereqController } from "./mhciPrereq.controller";
import { MhciPrereqResolver } from "./mhciPrereq.resolver";

@Module({
  imports: [MhciPrereqModuleBase, forwardRef(() => AuthModule)],
  controllers: [MhciPrereqController],
  providers: [MhciPrereqService, MhciPrereqResolver],
  exports: [MhciPrereqService],
})
export class MhciPrereqModule {}
