import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UnitPeriodModuleBase } from "./base/unitPeriod.module.base";
import { UnitPeriodService } from "./unitPeriod.service";
import { UnitPeriodController } from "./unitPeriod.controller";
import { UnitPeriodResolver } from "./unitPeriod.resolver";

@Module({
  imports: [UnitPeriodModuleBase, forwardRef(() => AuthModule)],
  controllers: [UnitPeriodController],
  providers: [UnitPeriodService, UnitPeriodResolver],
  exports: [UnitPeriodService],
})
export class UnitPeriodModule {}
