import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentVoucherModuleBase } from "./base/paymentVoucher.module.base";
import { PaymentVoucherService } from "./paymentVoucher.service";
import { PaymentVoucherController } from "./paymentVoucher.controller";
import { PaymentVoucherResolver } from "./paymentVoucher.resolver";

@Module({
  imports: [PaymentVoucherModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentVoucherController],
  providers: [PaymentVoucherService, PaymentVoucherResolver],
  exports: [PaymentVoucherService],
})
export class PaymentVoucherModule {}
