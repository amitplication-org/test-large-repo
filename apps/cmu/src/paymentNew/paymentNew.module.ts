import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentNewModuleBase } from "./base/paymentNew.module.base";
import { PaymentNewService } from "./paymentNew.service";
import { PaymentNewController } from "./paymentNew.controller";
import { PaymentNewResolver } from "./paymentNew.resolver";

@Module({
  imports: [PaymentNewModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentNewController],
  providers: [PaymentNewService, PaymentNewResolver],
  exports: [PaymentNewService],
})
export class PaymentNewModule {}
