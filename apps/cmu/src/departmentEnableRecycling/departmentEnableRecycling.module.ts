import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DepartmentEnableRecyclingModuleBase } from "./base/departmentEnableRecycling.module.base";
import { DepartmentEnableRecyclingService } from "./departmentEnableRecycling.service";
import { DepartmentEnableRecyclingController } from "./departmentEnableRecycling.controller";
import { DepartmentEnableRecyclingResolver } from "./departmentEnableRecycling.resolver";

@Module({
  imports: [DepartmentEnableRecyclingModuleBase, forwardRef(() => AuthModule)],
  controllers: [DepartmentEnableRecyclingController],
  providers: [
    DepartmentEnableRecyclingService,
    DepartmentEnableRecyclingResolver,
  ],
  exports: [DepartmentEnableRecyclingService],
})
export class DepartmentEnableRecyclingModule {}
