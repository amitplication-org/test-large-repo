import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UsersRemoteAuthStringModuleBase } from "./base/usersRemoteAuthString.module.base";
import { UsersRemoteAuthStringService } from "./usersRemoteAuthString.service";
import { UsersRemoteAuthStringController } from "./usersRemoteAuthString.controller";
import { UsersRemoteAuthStringResolver } from "./usersRemoteAuthString.resolver";

@Module({
  imports: [UsersRemoteAuthStringModuleBase, forwardRef(() => AuthModule)],
  controllers: [UsersRemoteAuthStringController],
  providers: [UsersRemoteAuthStringService, UsersRemoteAuthStringResolver],
  exports: [UsersRemoteAuthStringService],
})
export class UsersRemoteAuthStringModule {}
