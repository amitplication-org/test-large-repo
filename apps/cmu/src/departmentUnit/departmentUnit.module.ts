import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DepartmentUnitModuleBase } from "./base/departmentUnit.module.base";
import { DepartmentUnitService } from "./departmentUnit.service";
import { DepartmentUnitController } from "./departmentUnit.controller";
import { DepartmentUnitResolver } from "./departmentUnit.resolver";

@Module({
  imports: [DepartmentUnitModuleBase, forwardRef(() => AuthModule)],
  controllers: [DepartmentUnitController],
  providers: [DepartmentUnitService, DepartmentUnitResolver],
  exports: [DepartmentUnitService],
})
export class DepartmentUnitModule {}
