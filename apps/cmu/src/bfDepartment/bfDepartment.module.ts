import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BfDepartmentModuleBase } from "./base/bfDepartment.module.base";
import { BfDepartmentService } from "./bfDepartment.service";
import { BfDepartmentController } from "./bfDepartment.controller";
import { BfDepartmentResolver } from "./bfDepartment.resolver";

@Module({
  imports: [BfDepartmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [BfDepartmentController],
  providers: [BfDepartmentService, BfDepartmentResolver],
  exports: [BfDepartmentService],
})
export class BfDepartmentModule {}
