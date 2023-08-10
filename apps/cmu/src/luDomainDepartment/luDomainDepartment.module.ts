import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuDomainDepartmentModuleBase } from "./base/luDomainDepartment.module.base";
import { LuDomainDepartmentService } from "./luDomainDepartment.service";
import { LuDomainDepartmentController } from "./luDomainDepartment.controller";
import { LuDomainDepartmentResolver } from "./luDomainDepartment.resolver";

@Module({
  imports: [LuDomainDepartmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuDomainDepartmentController],
  providers: [LuDomainDepartmentService, LuDomainDepartmentResolver],
  exports: [LuDomainDepartmentService],
})
export class LuDomainDepartmentModule {}
