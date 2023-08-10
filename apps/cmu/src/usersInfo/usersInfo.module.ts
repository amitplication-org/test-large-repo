import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UsersInfoModuleBase } from "./base/usersInfo.module.base";
import { UsersInfoService } from "./usersInfo.service";
import { UsersInfoController } from "./usersInfo.controller";
import { UsersInfoResolver } from "./usersInfo.resolver";

@Module({
  imports: [UsersInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [UsersInfoController],
  providers: [UsersInfoService, UsersInfoResolver],
  exports: [UsersInfoService],
})
export class UsersInfoModule {}
