import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UnitRoleModuleBase } from "./base/unitRole.module.base";
import { UnitRoleService } from "./unitRole.service";
import { UnitRoleController } from "./unitRole.controller";
import { UnitRoleResolver } from "./unitRole.resolver";

@Module({
  imports: [UnitRoleModuleBase, forwardRef(() => AuthModule)],
  controllers: [UnitRoleController],
  providers: [UnitRoleService, UnitRoleResolver],
  exports: [UnitRoleService],
})
export class UnitRoleModule {}
