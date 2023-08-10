import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CashnetPaymentModuleBase } from "./base/cashnetPayment.module.base";
import { CashnetPaymentService } from "./cashnetPayment.service";
import { CashnetPaymentController } from "./cashnetPayment.controller";
import { CashnetPaymentResolver } from "./cashnetPayment.resolver";

@Module({
  imports: [CashnetPaymentModuleBase, forwardRef(() => AuthModule)],
  controllers: [CashnetPaymentController],
  providers: [CashnetPaymentService, CashnetPaymentResolver],
  exports: [CashnetPaymentService],
})
export class CashnetPaymentModule {}
