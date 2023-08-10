import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProgramGroupRoleModuleBase } from "./base/programGroupRole.module.base";
import { ProgramGroupRoleService } from "./programGroupRole.service";
import { ProgramGroupRoleController } from "./programGroupRole.controller";
import { ProgramGroupRoleResolver } from "./programGroupRole.resolver";

@Module({
  imports: [ProgramGroupRoleModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProgramGroupRoleController],
  providers: [ProgramGroupRoleService, ProgramGroupRoleResolver],
  exports: [ProgramGroupRoleService],
})
export class ProgramGroupRoleModule {}
