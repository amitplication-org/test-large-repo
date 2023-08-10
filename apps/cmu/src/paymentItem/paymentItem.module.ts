import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentItemModuleBase } from "./base/paymentItem.module.base";
import { PaymentItemService } from "./paymentItem.service";
import { PaymentItemController } from "./paymentItem.controller";
import { PaymentItemResolver } from "./paymentItem.resolver";

@Module({
  imports: [PaymentItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentItemController],
  providers: [PaymentItemService, PaymentItemResolver],
  exports: [PaymentItemService],
})
export class PaymentItemModule {}
