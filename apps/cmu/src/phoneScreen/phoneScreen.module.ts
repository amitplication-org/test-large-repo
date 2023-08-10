import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PhoneScreenModuleBase } from "./base/phoneScreen.module.base";
import { PhoneScreenService } from "./phoneScreen.service";
import { PhoneScreenController } from "./phoneScreen.controller";
import { PhoneScreenResolver } from "./phoneScreen.resolver";

@Module({
  imports: [PhoneScreenModuleBase, forwardRef(() => AuthModule)],
  controllers: [PhoneScreenController],
  providers: [PhoneScreenService, PhoneScreenResolver],
  exports: [PhoneScreenService],
})
export class PhoneScreenModule {}
