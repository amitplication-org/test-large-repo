import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CashnetPaymentCopyModuleBase } from "./base/cashnetPaymentCopy.module.base";
import { CashnetPaymentCopyService } from "./cashnetPaymentCopy.service";
import { CashnetPaymentCopyController } from "./cashnetPaymentCopy.controller";
import { CashnetPaymentCopyResolver } from "./cashnetPaymentCopy.resolver";

@Module({
  imports: [CashnetPaymentCopyModuleBase, forwardRef(() => AuthModule)],
  controllers: [CashnetPaymentCopyController],
  providers: [CashnetPaymentCopyService, CashnetPaymentCopyResolver],
  exports: [CashnetPaymentCopyService],
})
export class CashnetPaymentCopyModule {}
