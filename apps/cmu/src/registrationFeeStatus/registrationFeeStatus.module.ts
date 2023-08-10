import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RegistrationFeeStatusModuleBase } from "./base/registrationFeeStatus.module.base";
import { RegistrationFeeStatusService } from "./registrationFeeStatus.service";
import { RegistrationFeeStatusController } from "./registrationFeeStatus.controller";
import { RegistrationFeeStatusResolver } from "./registrationFeeStatus.resolver";

@Module({
  imports: [RegistrationFeeStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [RegistrationFeeStatusController],
  providers: [RegistrationFeeStatusService, RegistrationFeeStatusResolver],
  exports: [RegistrationFeeStatusService],
})
export class RegistrationFeeStatusModule {}
