import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciPrereqsStatusModuleBase } from "./base/mhciPrereqsStatus.module.base";
import { MhciPrereqsStatusService } from "./mhciPrereqsStatus.service";
import { MhciPrereqsStatusController } from "./mhciPrereqsStatus.controller";
import { MhciPrereqsStatusResolver } from "./mhciPrereqsStatus.resolver";

@Module({
  imports: [MhciPrereqsStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [MhciPrereqsStatusController],
  providers: [MhciPrereqsStatusService, MhciPrereqsStatusResolver],
  exports: [MhciPrereqsStatusService],
})
export class MhciPrereqsStatusModule {}
