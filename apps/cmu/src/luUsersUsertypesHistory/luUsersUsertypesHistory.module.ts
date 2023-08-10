import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuUsersUsertypesHistoryModuleBase } from "./base/luUsersUsertypesHistory.module.base";
import { LuUsersUsertypesHistoryService } from "./luUsersUsertypesHistory.service";
import { LuUsersUsertypesHistoryController } from "./luUsersUsertypesHistory.controller";
import { LuUsersUsertypesHistoryResolver } from "./luUsersUsertypesHistory.resolver";

@Module({
  imports: [LuUsersUsertypesHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuUsersUsertypesHistoryController],
  providers: [LuUsersUsertypesHistoryService, LuUsersUsertypesHistoryResolver],
  exports: [LuUsersUsertypesHistoryService],
})
export class LuUsersUsertypesHistoryModule {}
