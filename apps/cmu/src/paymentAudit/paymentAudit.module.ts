import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentAuditModuleBase } from "./base/paymentAudit.module.base";
import { PaymentAuditService } from "./paymentAudit.service";
import { PaymentAuditController } from "./paymentAudit.controller";
import { PaymentAuditResolver } from "./paymentAudit.resolver";

@Module({
  imports: [PaymentAuditModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentAuditController],
  providers: [PaymentAuditService, PaymentAuditResolver],
  exports: [PaymentAuditService],
})
export class PaymentAuditModule {}
