import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationPeriodModuleBase } from "./base/applicationPeriod.module.base";
import { ApplicationPeriodService } from "./applicationPeriod.service";
import { ApplicationPeriodController } from "./applicationPeriod.controller";
import { ApplicationPeriodResolver } from "./applicationPeriod.resolver";

@Module({
  imports: [ApplicationPeriodModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationPeriodController],
  providers: [ApplicationPeriodService, ApplicationPeriodResolver],
  exports: [ApplicationPeriodService],
})
export class ApplicationPeriodModule {}
