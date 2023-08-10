import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PeriodApplicationModuleBase } from "./base/periodApplication.module.base";
import { PeriodApplicationService } from "./periodApplication.service";
import { PeriodApplicationController } from "./periodApplication.controller";
import { PeriodApplicationResolver } from "./periodApplication.resolver";

@Module({
  imports: [PeriodApplicationModuleBase, forwardRef(() => AuthModule)],
  controllers: [PeriodApplicationController],
  providers: [PeriodApplicationService, PeriodApplicationResolver],
  exports: [PeriodApplicationService],
})
export class PeriodApplicationModule {}
