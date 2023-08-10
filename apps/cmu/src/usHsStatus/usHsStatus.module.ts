import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UsHSStatusModuleBase } from "./base/usHsStatus.module.base";
import { UsHSStatusService } from "./usHsStatus.service";
import { UsHSStatusController } from "./usHsStatus.controller";
import { UsHSStatusResolver } from "./usHsStatus.resolver";

@Module({
  imports: [UsHSStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [UsHSStatusController],
  providers: [UsHSStatusService, UsHSStatusResolver],
  exports: [UsHSStatusService],
})
export class UsHSStatusModule {}
