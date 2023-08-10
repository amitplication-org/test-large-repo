import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuUserDepartmentModuleBase } from "./base/luUserDepartment.module.base";
import { LuUserDepartmentService } from "./luUserDepartment.service";
import { LuUserDepartmentController } from "./luUserDepartment.controller";
import { LuUserDepartmentResolver } from "./luUserDepartment.resolver";

@Module({
  imports: [LuUserDepartmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuUserDepartmentController],
  providers: [LuUserDepartmentService, LuUserDepartmentResolver],
  exports: [LuUserDepartmentService],
})
export class LuUserDepartmentModule {}
