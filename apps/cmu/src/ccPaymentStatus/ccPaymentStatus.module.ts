import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CcPaymentStatusModuleBase } from "./base/ccPaymentStatus.module.base";
import { CcPaymentStatusService } from "./ccPaymentStatus.service";
import { CcPaymentStatusController } from "./ccPaymentStatus.controller";
import { CcPaymentStatusResolver } from "./ccPaymentStatus.resolver";

@Module({
  imports: [CcPaymentStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [CcPaymentStatusController],
  providers: [CcPaymentStatusService, CcPaymentStatusResolver],
  exports: [CcPaymentStatusService],
})
export class CcPaymentStatusModule {}
