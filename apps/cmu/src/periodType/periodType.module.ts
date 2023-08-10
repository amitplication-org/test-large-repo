import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PeriodTypeModuleBase } from "./base/periodType.module.base";
import { PeriodTypeService } from "./periodType.service";
import { PeriodTypeController } from "./periodType.controller";
import { PeriodTypeResolver } from "./periodType.resolver";

@Module({
  imports: [PeriodTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [PeriodTypeController],
  providers: [PeriodTypeService, PeriodTypeResolver],
  exports: [PeriodTypeService],
})
export class PeriodTypeModule {}
