import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuProgramsDepartmentModuleBase } from "./base/luProgramsDepartment.module.base";
import { LuProgramsDepartmentService } from "./luProgramsDepartment.service";
import { LuProgramsDepartmentController } from "./luProgramsDepartment.controller";
import { LuProgramsDepartmentResolver } from "./luProgramsDepartment.resolver";

@Module({
  imports: [LuProgramsDepartmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuProgramsDepartmentController],
  providers: [LuProgramsDepartmentService, LuProgramsDepartmentResolver],
  exports: [LuProgramsDepartmentService],
})
export class LuProgramsDepartmentModule {}
