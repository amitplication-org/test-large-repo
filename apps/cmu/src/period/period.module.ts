import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PeriodModuleBase } from "./base/period.module.base";
import { PeriodService } from "./period.service";
import { PeriodController } from "./period.controller";
import { PeriodResolver } from "./period.resolver";

@Module({
  imports: [PeriodModuleBase, forwardRef(() => AuthModule)],
  controllers: [PeriodController],
  providers: [PeriodService, PeriodResolver],
  exports: [PeriodService],
})
export class PeriodModule {}
