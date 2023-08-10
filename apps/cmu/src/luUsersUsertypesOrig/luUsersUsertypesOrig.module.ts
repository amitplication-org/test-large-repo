import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuUsersUsertypesOrigModuleBase } from "./base/luUsersUsertypesOrig.module.base";
import { LuUsersUsertypesOrigService } from "./luUsersUsertypesOrig.service";
import { LuUsersUsertypesOrigController } from "./luUsersUsertypesOrig.controller";
import { LuUsersUsertypesOrigResolver } from "./luUsersUsertypesOrig.resolver";

@Module({
  imports: [LuUsersUsertypesOrigModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuUsersUsertypesOrigController],
  providers: [LuUsersUsertypesOrigService, LuUsersUsertypesOrigResolver],
  exports: [LuUsersUsertypesOrigService],
})
export class LuUsersUsertypesOrigModule {}
