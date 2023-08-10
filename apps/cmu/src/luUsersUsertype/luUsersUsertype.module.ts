import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuUsersUsertypeModuleBase } from "./base/luUsersUsertype.module.base";
import { LuUsersUsertypeService } from "./luUsersUsertype.service";
import { LuUsersUsertypeController } from "./luUsersUsertype.controller";
import { LuUsersUsertypeResolver } from "./luUsersUsertype.resolver";

@Module({
  imports: [LuUsersUsertypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuUsersUsertypeController],
  providers: [LuUsersUsertypeService, LuUsersUsertypeResolver],
  exports: [LuUsersUsertypeService],
})
export class LuUsersUsertypeModule {}
