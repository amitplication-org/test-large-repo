import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DepartmentReplyperiodModuleBase } from "./base/departmentReplyperiod.module.base";
import { DepartmentReplyperiodService } from "./departmentReplyperiod.service";
import { DepartmentReplyperiodController } from "./departmentReplyperiod.controller";
import { DepartmentReplyperiodResolver } from "./departmentReplyperiod.resolver";

@Module({
  imports: [DepartmentReplyperiodModuleBase, forwardRef(() => AuthModule)],
  controllers: [DepartmentReplyperiodController],
  providers: [DepartmentReplyperiodService, DepartmentReplyperiodResolver],
  exports: [DepartmentReplyperiodService],
})
export class DepartmentReplyperiodModule {}
