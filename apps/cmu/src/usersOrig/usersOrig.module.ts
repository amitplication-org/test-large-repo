import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UsersOrigModuleBase } from "./base/usersOrig.module.base";
import { UsersOrigService } from "./usersOrig.service";
import { UsersOrigController } from "./usersOrig.controller";
import { UsersOrigResolver } from "./usersOrig.resolver";

@Module({
  imports: [UsersOrigModuleBase, forwardRef(() => AuthModule)],
  controllers: [UsersOrigController],
  providers: [UsersOrigService, UsersOrigResolver],
  exports: [UsersOrigService],
})
export class UsersOrigModule {}
