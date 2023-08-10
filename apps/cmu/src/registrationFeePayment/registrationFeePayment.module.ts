import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RegistrationFeePaymentModuleBase } from "./base/registrationFeePayment.module.base";
import { RegistrationFeePaymentService } from "./registrationFeePayment.service";
import { RegistrationFeePaymentController } from "./registrationFeePayment.controller";
import { RegistrationFeePaymentResolver } from "./registrationFeePayment.resolver";

@Module({
  imports: [RegistrationFeePaymentModuleBase, forwardRef(() => AuthModule)],
  controllers: [RegistrationFeePaymentController],
  providers: [RegistrationFeePaymentService, RegistrationFeePaymentResolver],
  exports: [RegistrationFeePaymentService],
})
export class RegistrationFeePaymentModule {}
